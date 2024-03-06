import { copyFileSync, readdirSync, writeFileSync } from 'fs';
import { resolve, } from 'path';

import { C, CR } from './config.js';

import { dirReso, dirSrcExtend } from './lib/global.js';
import parseLine from './lib/parse-line.js';
import readRawLines from './lib/read-raw-lines.js';

import { eventsPublic } from './reso/conf/public.js';



const parseConfig = string => string.replace(/\$\{.+?\}/g, text => {
	try {
		C; CR;
		return eval(text.replace(/(^\$\{)|(\}$)/g, ''));
	}
	catch(error) { return text; }
});


const fileInfo = resolve(dirReso, 'info', `${C.slot}.json`);
const fileInfoExtend = resolve(dirSrcExtend, 'lib', 'info.json');

writeFileSync(resolve(dirSrcExtend, 'lib', 'config.json'), JSON.stringify(C, null, '\t'));
writeFileSync(resolve(dirSrcExtend, 'lib', 'config.path.js'),
	[
		`this.PATH_CONFIG = '${resolve(dirSrcExtend, 'lib', 'config.json').replace(/\\/g, '\\\\')}';`,
		`this.PATH_INFO = '${fileInfoExtend.replace(/\\/g, '\\\\')}';`,
	].join('\n')
);


const [eventsRaw, linesDict] = C.fileDictation ? readRawLines(C.fileDictation, Object.assign({}, eventsPublic, CR.events)) : [[], []];

if(C.slotsExtra.length) {
	for(const slotExtra of C.slotsExtra) {
		const extra = CR.extras[slotExtra];
		if(!extra) { continue; }

		linesDict.push(...readRawLines(parseConfig(extra.fileDictation))[1]
			.map(lineRaw => {
				lineRaw.from = slotExtra;

				Object.assign(lineRaw, extra.append);

				return lineRaw;
			})
		);
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


// 对话处理
const dialogists = Object.keys(CR.dialogist ?? {});

const assignDialog$rev = {};
for(let indexDialog = 1; indexDialog <= CR.dialogs?.length ?? 0; indexDialog++) {
	const dialog = CR.dialogs[indexDialog - 1];
	const textIndexDialog = String(indexDialog).padStart(2, '0');

	const [rawRevs, rawPlayers, rawTargets] = dialog.trim().split('-');
	const revs = rawRevs.split('>');
	const players = (rawPlayers || 'A').split('');
	const targets = (rawTargets || 'B').split('');


	const indexPlayerRawLast = dialogists.indexOf(players[players.length - 1]);
	const lengthPlayerRaw = players.length;
	while(players.length < revs.length) {
		players.push(dialogists[
			(players.length + 1 - lengthPlayerRaw + indexPlayerRawLast) % dialogists.length
		]);
	}

	const indexTargetRawLast = dialogists.indexOf(targets[targets.length - 1]);
	const lengthTargetRaw = targets.length;
	while(dialogists.length == 2 && targets.length < revs.length) {
		targets.push(dialogists[
			(targets.length + 1 - lengthTargetRaw + indexTargetRawLast) % dialogists.length
		]);
	}


	for(let indexRev = 1; indexRev <= revs.length; indexRev++) {
		const rev = revs[indexRev - 1];
		let player = players[indexRev - 1];
		let target = targets[indexRev - 1];

		const assign = assignDialog$rev[rev] = {};


		if(indexRev == 1) { assign.mark = `对话${textIndexDialog} 开始`; }
		else if(indexRev == revs.length) { assign.mark = `对话${textIndexDialog} 结束`; }

		if(indexRev > 1) { assign.event = `标题:对话${textIndexDialog}-${indexRev}`; }

		if(player && CR.dialogist[player] != 'self') { assign.head = CR.dialogist[player]; }
		if(target) { assign.target = CR.dialogist[target] == 'self' ? C.fileHead : CR.dialogist[target]; }
	}
}


const linesFinal = [];

const namesAudio = readdirSync(C.dirAudio);

for(const event of events) {
	for(const line of event.lines) {
		const eventSlice = Object.assign({}, event);
		delete eventSlice.lines;

		linesFinal.push(...(await parseLine(
			line,
			eventSlice,
			namesAudio,
			CR.lines,
			linesDict,
		)));
	}
}

const linesSpecial = CR.linesSpecial ?? [];
for(const lineSpecial of linesSpecial) {
	linesFinal.push(...(await parseLine(lineSpecial)));
}


const titleComp = `${C.video.width > C.video.height ? '' : '[竖屏] '}${C.slotMain} ${C.special ? '特别' : (CR.idSkin > 0 ? '皮肤' : '英雄')} ${CR.title1} ${CR.title2}${CR.title2Suffix || ''}`;


writeFileSync(fileInfo, JSON.stringify({
	titleComp,
	title1: CR.title1,
	title2: CR.title2,
	title2Suffix: CR.title2Suffix,
	textInfo: CR.textInfo,
	slotChampion: CR.slotChampion,
	idChampion: CR.idChampion,
	idSkin: CR.idSkin,
	emote: CR.emote,
	color: CR.color,
	shade: CR.shade,
	head: CR.head,
	splash: CR.splash,
	splashMiddle: CR.splashMiddle ?? `${C.dirAutogen}/reso/splash-left/${C.slotFull}.png`,
	audios: CR.audios,
	lines: linesFinal,
}, null, '\t'));
copyFileSync(fileInfo, fileInfoExtend);


globalThis.console.log(`已生成 [${C.slot}] ${CR.title1} ${CR.title2} ${CR.title2Suffix || ''}`);
