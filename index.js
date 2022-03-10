import { readdirSync, readFileSync, writeFileSync } from 'fs';
import { resolve, } from 'path';

import { C, CR } from './config.js';

import { dirReso, dirSrcExtend } from './lib/global.js';
import parseLine from './lib/parseLine.js';


C.slot = C.slots[0];

const fileInfo = resolve(dirReso, 'info', `${C.slot}.json`);

writeFileSync(resolve(dirSrcExtend, 'lib', 'config.json'), JSON.stringify(C, null, '\t'));
writeFileSync(resolve(dirSrcExtend, 'lib', 'config.path.js'),
	[
		`this.PATH_CONFIG = '${resolve(dirSrcExtend, 'lib', 'config.json').replace(/\\/g, '\\\\')}';`,
		`this.PATH_INFO = '${fileInfo.replace(/\\/g, '\\\\')}';`,
	].join('\n')
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

const eventsRaw = [];

let isLineStart = false;
let linesNow;
for(const textLine of textsLine) {
	if(!isLineStart) {
		if(textLine == '## Lines:台词') { isLineStart = true; }

		continue;
	}

	if(textLine.startsWith('### ')) {
		const event = {
			event: textLine.replace('### **', '').replace('**', '').replace(/^\d+ /, ''),
			lines: [],
		};

		linesNow = event.lines;

		eventsRaw.push(Object.assign(event, eventsExtra[event.event] ?? {}));
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
const events = includes ? [] : eventsRaw;

const findLine = (id) => {
	for(const event of eventsRaw) {
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


const linesFinal = [];

const namesAudio = readdirSync(C.dirAudio);
for(const event of events) {
	for(const line of event.lines) {
		const eventSlice = Object.assign({}, event);
		delete eventSlice.lines;

		linesFinal.push(...(await parseLine(line, eventSlice, namesAudio, (CR.lines ?? {})[line.id])));
	}
}

const titleComp = `${C.video.width > C.video.height ? '' : '[竖屏] '}${C.slot} ${CR.skin.id > 0 ? '皮肤' : '英雄'} ${CR.title1} ${CR.title2}`;


writeFileSync(fileInfo, JSON.stringify({
	titleComp,
	title1: CR.title1,
	title2: CR.title2,
	champion: CR.champion,
	skin: CR.skin,
	emote: CR.emote,
	color: CR.color,
	shade: CR.shade,
	head: CR.head,
	splash: CR.splash,
	audios: CR.audios,
	lines: linesFinal,
}, null, '\t'));


(console ?? {}).log(`已生成 [${C.slot}] ${CR.skin.name} ${CR.champion.name}`);