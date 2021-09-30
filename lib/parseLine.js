import { existsSync, readdirSync, } from 'fs';
import { resolve } from 'path';
import { parseFile } from 'music-metadata';
import { dirReso } from './global.js';
import { C, CR } from '../config.js';
import formatEvent from './formatEvent.js';

const eventsTrans = { '[选用]': 'pick', '[禁用]': 'ban' };

const parseLine = async (line, event, index, namesAudio) => {
	let duration = 0;
	let audio = null;

	const eventNow = event.event;
	const idLine = line.id;


	// 读取音频
	const fileAudio =
		(eventNow == '[选用]' || eventNow == '[禁用]' || eventNow == '[选用]、[禁用]') ?
			resolve(dirReso, 'voice', String(CR.champion.id), `${eventsTrans[eventNow] ?? 'pick'}.wav`) :
			resolve(C.dirAudio, namesAudio.find((name) => name.includes(idLine)) ?? 'null');

	if(existsSync(fileAudio)) {
		duration = await parseFile(fileAudio).format.duration;
		audio = fileAudio;
	}

	// 前置台词
	for(const line of linesBefore[idLine] || []) {
		line.side = line.side ? line.side : 'left';
		line.duration = line.duration || 0.4;

		if(line.event) {
			line.event = line.event.split('、').map((event) => formatEvent(event)).join('、');
		}

		if(line.hash && line.folder) {
			const audios = readdirSync(resolve(C.dirExtract, '_final', line.folder));

			const nameAudio = audios.find((fileName) => fileName.includes(`[${line.hash}]`));

			if(nameAudio) {
				const fileAudio = resolve(C.dirExtract, '_final', line.folder, nameAudio);
				const meta = await parseFile(fileAudio);

				line.duration = meta.format.duration;
				line.audio = fileAudio;
			}
		}

		linesNow.push(line);
	}

	const lineInfo = {
		line: line.replace(/\\n|\\，|\\。/g, '\n').replace(/^\+/g, ''),
		crc32: idLine,
		duration,
		side: 'right',
		head: C.fileHead,
		audio,
	};

	for(const extraInfo of linesExtra[idLine] || []) {
		for(const key in extraInfo) {
			if(key == 'mark') {
				lineInfo[key] = extraInfo[key].replace(/\\n/g, '\n');
			}
			else if(key == 'event') {
				lineInfo[key] = formatEvent(extraInfo[key]);
			}
			else {
				lineInfo[key] = extraInfo[key];
			}
		}
	}

	linesNow.push(lineInfo);

	for(const line of linesAfter[idLine] || []) {
		line.side = line.side ? line.side : 'left';
		line.duration = line.duration || 0.4;

		if(line.event) {
			line.event = line.event.split('、').map((event) => formatEvent(event)).join('、');
		}

		if(line.hash && line.folder) {
			const audios = readdirSync(resolve(C.dirExtract, '_final', line.folder));

			const nameAudio = audios.find((fileName) => fileName.includes(`[${line.hash}]`));

			if(nameAudio) {
				const fileAudio = resolve(C.dirExtract, '_final', line.folder, nameAudio);
				const meta = await parseFile(resolve(C.dirExtract, '_final', line.folder, nameAudio));

				line.duration = meta.format.duration;
				line.audio = fileAudio;
			}
			else {
				line.duration = null;
				line.audio = null;
			}
		}

		linesNow.push(line);
	}
};


export default parseLine;