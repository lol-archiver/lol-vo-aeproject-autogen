import { readdirSync, readFileSync, writeFileSync } from 'fs';
import { resolve, } from 'path';

import { C, CR as CR } from './config.js';

import { dirReso, dirSrcExtend } from './lib/global.js';
import formatEvent from './lib/formatEvent.js';
import parseLine from './lib/parseLine.js';


const fileInfo = resolve(dirReso, 'info', `${C.slot}.json`);

writeFileSync(resolve(dirSrcExtend, 'config.json'), JSON.stringify(C, null, '\t'));
writeFileSync(resolve(dirSrcExtend, 'config.js'),
	`var pathConfig = '${resolve(dirSrcExtend, 'config.json').replace(/\\/g, '\\\\')}';` +
	`var pathInfo = '${fileInfo.replace(/\\/g, '\\\\')}';`
);


// const parseConfig = function(str) {
// 	return str.replace(/\$\{.+?\}/g, function(text) {
// 		try {
// 			C;
// 			return eval(text.replace(/(^\$\{)|(\}$)/g, ''));
// 		}
// 		catch(error) {
// 			return text;
// 		}
// 	});
// };

const textsLine = readFileSync(C.fileDictation, 'UTF8').split('\n').filter((text) => text.trim() && !text.trim().startsWith('<!--'));

const eventsExtra = CR.events ?? {};

const linesBefore = {};
const linesAfter = {};
const linesExtra = {};

for(const [key, extra] of Object.entries(CR.lines || {})) {
	if(extra.befores instanceof Array) {
		extra.befores.forEach((before) => (linesBefore[key] || (linesBefore[key] = [])).push(before));
		delete extra.befores;
	}
	if(extra.afters instanceof Array) {
		extra.afters.forEach((after) => (linesAfter[key] || (linesAfter[key] = [])).push(after));
		delete extra.afters;
	}

	(linesExtra[key] || (linesExtra[key] = [])).push(extra);
}



const eventsAll = CR.events instanceof Array ? CR.events : [];

let isLineStart = false;
let eventNow;
let linesNow;
for(const textLine of textsLine) {
	if(!isLineStart) {
		if(textLine == '## Lines:台词') { isLineStart = true; }

		continue;
	}

	if(textLine.startsWith('### ')) {
		const event = {
			event: textLine.replace('### **', '').replace('**', '').replace(/^\d+ /, '')
				.split('、').map((eventRaw) => formatEvent(eventRaw)).join('、'),
			lines: [],
		};

		linesNow = event.lines;

		eventsAll.push(Object.assign(event, eventsExtra[eventNow] ?? {}));
	}
	else {
		if(textLine.startsWith('<!-- ')) { continue; }

		const [idLineRaw, line] = textLine.replace(/^- `/, '').split('` ');
		const [id, hash] = idLineRaw.split('|');

		linesNow.push({ id, hash, line, });
	}
}


const includes = CR.includes instanceof Array && CR.includes.length ? CR.includes : null;
const excludes = CR.excludes instanceof Array && CR.excludes.length ? CR.excludes : null;
const events = includes ? [] : eventsAll;

const findLine = (id) => {
	for(const event of eventsAll) {
		for(const line of event.lines) {
			if(line.id === id) {
				return [event, line];
			}
		}
	}

	return [];
};
const matchLine = (id) => {
	const [event, line] = findLine(id);

	const eventNew = Object.assign({}, event);

	eventNew.lines = [line];

	events.push(eventNew);
};
const hideLine = (id) => {
	const [line] = findLine(id);

	line ? line.hide = true : null;
};

excludes?.forEach((id) => hideLine(id));
includes?.forEach((id) => matchLine(id));

const namesAudio = readdirSync(C.dirAudio);
for(const event of events) {
	await Promise.all(event.lines.map((line, index) => parseLine(line, event, index, namesAudio)));
}


writeFileSync(fileInfo, JSON.stringify({
	title: CR.title,
	champion: CR.champion,
	skin: CR.skin,
	emote: CR.emote,
	head: CR.head,
	splash: CR.splash,
	audios: CR.audios,
	events,
}, null, '\t'));


(console ?? {}).log(`已经生成 [${C.slot}] ${CR.skin.name} ${CR.champion.name}`);