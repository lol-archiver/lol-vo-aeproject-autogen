import { existsSync, readdirSync, } from 'fs';
import { resolve } from 'path';
import { parseFile } from 'music-metadata';
import { dirReso } from './global.js';
import { C, CR } from '../config.js';
import formatEvent from './format-event.js';

const eventsTrans = { '选用': 'pick', '禁用': 'ban' };

const parseConfig = string => string.replace(/\$\{.+?\}/g, text => {
	try {
		C; CR;
		return eval(text.replace(/(^\$\{)|(\}$)/g, ''));
	}
	catch(error) { return text; }
});

const formatLine = (line) => line
	.replace(/\\[n.,，。…、\\]/g, '\n')
	.replace(/\\([!?:“”[\]()！？：【】])/g, '$1\n');

const filesAudio$dirAudio = {};

const parseLine = async (lineRaw, event = {}, namesAudio = [], extrasLine = {}, linesRaw = []) => {
	const result = [];


	const lineExtra = extrasLine[Object.keys(extrasLine).find(e => lineRaw.idsSound.includes(e) || lineRaw.idAudio == e || lineRaw.hash == e)] ?? {};


	const linesBefore = [
		...(lineExtra.befores ?? []),
		...lineRaw.extras.filter(e => e.type == 'before').map(extra => linesRaw
			.find(line =>
				line.idsSound.includes(extra.params[0]) && line.from &&
				(extra.params[1] ? line.from == extra.params[1] : true)
			)).filter(l => l)
	];
	const linesAfter = [
		...(lineExtra.afters ?? []),
		...lineRaw.extras.filter(e => e.type == 'after').map(extra => linesRaw
			.find(line =>
				line.idsSound.includes(extra.params[0]) && line.from &&
				(extra.params[1] ? line.from == extra.params[1] : true)
			)).filter(l => l)
	];



	// 前置台词
	for(const lineRaw of linesBefore) {
		result.push(...(await parseLine(lineRaw, {}, namesAudio, extrasLine, linesRaw)).map((line) => {
			if(!line.duration) { line.duration = C.video.duration.extendLine; }

			return line;
		}));
	}


	const extraTarget = lineRaw.extras.find(e => e.type == 'target');
	let targetExtra;
	if(extraTarget) {
		const [type, param1, param2] = extraTarget.params;

		if(type == 'champion') {
			targetExtra = '${C.dirAutogen}' + `/reso/icon/${param1}/${param2}.png`;
		}
		if(type == 'region') {
			targetExtra = '${C.dirAutogen}' + `/reso/region/${param1}.png`;
		}
	}

	const extraSkill = lineRaw.extras.find(e => e.type == 'skill');
	let skillExtra;
	if(extraSkill) {
		const [file] = extraSkill.params;

		skillExtra = '${C.dirAutogen}' + `/reso/icon/${CR.champion.name}/${file}.png`;
	}


	const line = Object.assign({
		idAudio: lineRaw.idAudio,
		idsSound: lineRaw.idsSound,
		hash: lineRaw.hash,
		duration: 0,
		audio: null,
		head: lineRaw.head ?? C.fileHead,
		target: targetExtra ?? lineRaw.target,
		skill: skillExtra ?? lineRaw.skill,
		event: lineRaw.event,
		line: formatLine(lineRaw.line).replace(/^\+/g, ''),
		mark: lineRaw.mark,
		cond: lineRaw.extras.find(e => e.type == 'cond')?.params[0],
		side: 'right',
		colorBoxLine: lineRaw.colorBoxLine,
	}, event);

	result.push(Object.assign(line, lineExtra));
	delete line.befores;
	delete line.afters;


	if(line.cond) { line.cond = `子条件：${line.cond}`; line.cond = formatLine(line.cond); }
	if(line.mark) { line.mark = formatLine(line.mark); }
	if(line.event) { line.event = line.event.split('、').map((eventRaw) => formatEvent(eventRaw)).join('、'); }


	let file = lineExtra.file;
	if(!file && lineExtra.folder) {
		if(lineRaw.file) {
			file = resolve(C.dirExtract, '@final', lineExtra.folder, lineRaw.file);
		}
		else {
			const dirAudio = resolve(C.dirExtract, '@final', parseConfig(lineExtra.folder));

			const nameFileMatch = (filesAudio$dirAudio[dirAudio] || (filesAudio$dirAudio[dirAudio] = readdirSync(dirAudio)))
				.find(name =>
					Boolean(line.idsSound.reduce((acc, idSound) => acc + name.includes(idSound), 0)) ||
					name.includes(line.idAudio) ||
					name.includes(line.hash)
				);

			if(nameFileMatch) { file = resolve(dirAudio, nameFileMatch); }
		}
	}


	const eventNow = line.event;

	// 读取音频
	const fileAudio = parseConfig(file ?? '') ||
		(
			(eventNow == '选用' || eventNow == '禁用' || eventNow == '选用、禁用')
				? resolve(dirReso, 'voice', String(CR.champion.id) + (C.slotSub ? `.${C.slotSub}` : ''), `${eventsTrans[eventNow] ?? 'pick'}.wav`)
				: resolve(C.dirAudio, namesAudio.find(name =>
					Boolean(line.idsSound.reduce((acc, idSound) => acc + name.includes(idSound), 0)) ||
					name.includes(line.idAudio) ||
					name.includes(line.hash)
				) ?? 'null')
		);

	if(existsSync(fileAudio)) {
		line.duration = (await parseFile(fileAudio)).format.duration;
		line.audio = fileAudio;
	}



	// 后置台词
	for(const lineRaw of linesAfter) {

		result.push(...await parseLine(lineRaw, {}, namesAudio, extrasLine, linesRaw));
	}



	return result.filter(line => C.video.onlyMark ? line.mark : true);
};


export default parseLine;
