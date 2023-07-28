import { existsSync, } from 'fs';
import { resolve } from 'path';
import { parseFile } from 'music-metadata';
import { dirReso } from './global.js';
import { C, CR } from '../config.js';
import formatEvent from './format-event.js';

const eventsTrans = { '选用': 'pick', '禁用': 'ban' };

const parseConfig = function(str) {
	return str.replace(/\$\{.+?\}/g, function(text) {
		try {
			C;
			return eval(text.replace(/(^\$\{)|(\}$)/g, ''));
		}
		catch(error) {
			return text;
		}
	});
};

const formatLine = (line) => line
	.replace(/\\[n.,，。…、\\]/g, '\n')
	.replace(/\\([!?:“”[\]()！？：【】])/g, '$1\n');

const parseLine = async (lineRaw, event = {}, namesAudio = [], lineExtra = {}) => {
	const result = [];

	const linesBefore = lineExtra.befores ?? []; delete lineExtra.befores;
	const linesAfter = lineExtra.afters ?? []; delete lineExtra.afters;

	// 前置台词
	for(const lineRaw of linesBefore) {
		const line = lineRaw.line;
		const id = lineRaw.id;

		delete lineRaw.line;
		delete lineRaw.id;

		result.push(...(await parseLine({ line, id }, {}, namesAudio, lineRaw)).map((line) => {
			if(!line.duration) { line.duration = C.video.duration.extendLine; }

			return line;
		}));
	}

	const line = Object.assign({
		id: lineRaw.id,
		line: formatLine(lineRaw.line).replace(/^\+/g, ''),
		duration: 0,
		audio: null,
		side: 'right',
		head: C.fileHead,
		event: lineRaw.event,
		mark: lineRaw.mark,
		target: lineRaw.target,
	}, event);

	result.push(Object.assign(line, lineExtra));


	if(line.mark) { line.mark = formatLine(line.mark); }
	if(line.event) { line.event = line.event.split('、').map((eventRaw) => formatEvent(eventRaw)).join('、'); }


	const eventNow = line.event;
	// 读取音频
	const fileAudio = parseConfig(lineRaw.file ?? '') ||
		(
			(eventNow == '选用' || eventNow == '禁用' || eventNow == '选用、禁用')
				? resolve(dirReso, 'voice', String(CR.champion.id) + (C.slotSub ? `.${C.slotSub}` : ''), `${eventsTrans[eventNow] ?? 'pick'}.wav`)
				: resolve(C.dirAudio, namesAudio.find((name) => name.includes(lineRaw.id)) ?? 'null')
		);

	if(existsSync(fileAudio)) {
		line.duration = (await parseFile(fileAudio)).format.duration;
		line.audio = fileAudio;
	}


	// 后置台词
	for(const lineRaw of linesAfter) {
		const line = lineRaw.line;
		const id = lineRaw.id;

		delete lineRaw.line;
		delete lineRaw.id;

		result.push(...await parseLine({ line, id }, {}, namesAudio, lineRaw));
	}


	return result.filter(line => C.video.onlyMark ? line.mark : true);
};


export default parseLine;
