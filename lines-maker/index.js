require('../config');

const _fs = require('fs');
const _pa = require('path').posix;

const Meta = require('music-metadata');

const L = (console || {}).log;

const parseConfig = function parseConfig(str) {
	return str.replace(/\$\{.+?\}/g, function(text) {
		C;
		try {
			return eval(text.replace(/(^\$\{)|(\}$)/g, ''));
		}
		catch(error) {
			return text;
		}
	});
};

const makeLineNormal = async function makeLineNormal() {
	const pathAudios = C.path.audios;

	const arrAudioFile = _fs.readdirSync(pathAudios);
	const arrLineText = _fs.readFileSync(C.path.dictation, 'UTF8').split('\n').filter(text => text.trim());

	const mapEventExtra = {};
	const mapLineBefore = {};
	const mapLineAfter = {};
	const mapLineExtra = {};

	try {
		const allInfosExtra = require(C.path.linesExtra);

		for(const [key, extraEvent] of Object.entries(allInfosExtra.event)) {
			mapEventExtra[key] = extraEvent;
		}

		for(const [key, extraLines] of Object.entries(allInfosExtra.lines)) {
			for(const extraLine of extraLines) {
				if(extraLine.oper == 'before') {
					(mapLineBefore[key] || (mapLineBefore[key] = [])).push(extraLine);
				}
				else if(extraLine.oper == 'after') {
					(mapLineAfter[key] || (mapLineAfter[key] = [])).push(extraLine);
				}
				else if(extraLine.oper == 'extra') {
					(mapLineExtra[key] || (mapLineExtra[key] = [])).push(extraLine);
				}

				delete extraLine.oper;
			}
		}
	}
	catch(error) { error; }


	let isLineStart = false;

	let arrEvent = [];
	let arrLine;

	let curEventRaw;

	for(const lineText of arrLineText) {
		if(!isLineStart) {
			if(lineText == '## Lines:台词') {
				isLineStart = true;
			}

			continue;
		}

		if(lineText.startsWith('#### ')) {
			const [event, eventRaw] = lineText.replace('#### ', '').split(' | ');

			arrLine = [];
			curEventRaw = eventRaw.toLowerCase();

			const eventInfo = {
				event: event.replace(/\[.*?:/, '[').replace('[', '【').replace(']', '】'),
				eventRaw,
				arrLine
			};

			for(const key in mapEventExtra[eventRaw] || {}) {
				eventInfo[key] = mapEventExtra[eventRaw][key];
			}

			arrEvent.push(eventInfo);
		}
		else {
			const [crc32, line] = lineText.replace('- - `', '').replace('  - `', '').split('`: ');

			let duration = 0;
			let audio = null;

			if(curEventRaw == 'pick' || curEventRaw == 'ban') {
				const file = `${C.path.project.autogen}reso/voices/${C.champion.id}/${curEventRaw}.wav`;

				const meta = await Meta.parseFile(file);

				duration = meta.format.duration;

				audio = '${C.path.project.autogen}reso/voices/${C.champion.id}/' + curEventRaw + '.wav';
			}
			else {
				const file = arrAudioFile.find(fileName => fileName.includes(`[${crc32}]`));

				if(file) {
					const meta = await Meta.parseFile(_pa.join(pathAudios, file));

					duration = meta.format.duration;

					audio = '${C.path.audios}' + file;
				}
			}

			for(const lineBefore of mapLineBefore[crc32] || []) {
				lineBefore.side = lineBefore.side ? lineBefore.side : 'left';

				arrLine.push(lineBefore);
			}

			const lineInfo = {
				line: line.replace(/\*/g, ''),
				crc32,
				duration,
				side: 'right',
				head: '${C.path.project.autogen}reso/icons/${C.champion.name}/${C.skin.id}.png',
				audio
			};

			for(const extraInfo of mapLineExtra[crc32] || []) {
				for(const key in extraInfo) {
					lineInfo[key] = extraInfo[key];
				}
			}

			arrLine.push(lineInfo);

			for(const lineAfter of mapLineAfter[crc32] || []) {
				lineAfter.side = lineAfter.side ? lineAfter.side : 'left';

				arrLine.push(lineAfter);
			}
		}
	}

	_fs.writeFileSync(C.path.lines, JSON.stringify(arrEvent, null, '\t'));
};

const makeLineSpecial = async function makeLineSpecial() {
	const arrEvent = require(C.path.linesExtra).events;

	for(const event of arrEvent) {
		for(const line of event.arrLine) {
			let audio;

			if(line.aduio) {
				audio = parseConfig(line.audio);
			}
			else if(line.crc32 && line.audioFolder) {
				const arrAudioFile = _fs.readdirSync(_pa.join(C.path.project.extract, '_final', line.audioFolder));

				const audioFile = arrAudioFile.find(fileName => fileName.includes(`[${line.crc32}]`));

				audio = audioFile ? _pa.join(C.path.project.extract, '_final', line.audioFolder, audioFile) : null;

				line.aduio = '${C.path.project.extract}/_final/' + line.audioFolder + '/' + audioFile;
			}

			if(audio) {
				const meta = await Meta.parseFile(audio);

				line.duration = meta.format.duration;
			}
		}
	}


	_fs.writeFileSync(C.path.lines, JSON.stringify(arrEvent, null, '\t'));
};

if(C.specialLines.name) {
	makeLineSpecial().then(() => L('end'));
}
else {
	makeLineNormal().then(() => L('end'));
}
