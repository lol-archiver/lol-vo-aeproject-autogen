require('../config');

const _fs = require('fs');
const _pa = require('path').posix;

const Meta = require('music-metadata');

const L = (console || {}).log;

const parseConfig = function(str) {
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

const formatEvent = function(event) {
	const [main, ...conds] = event.replace(']', '').split('[');

	let resultEvent = main;

	resultEvent += conds.map(cond => {
		const [type, info] = cond.split(':');

		let result;

		if(/(Q|W|E|R)技能/.test(main)) {

			if(info) {
				result = `【${type}】：${info}时`;
			}
			else {
				result = `【${type}】`;
			}
		}
		else if('P被动' == main) {
			if(info) {
				result = `【${type}】：${info}时`;
			}
			else {
				result = `【${type}】`;
			}
		}
		else if('英雄' == type || '生物' == type || '建筑' == type || '道具' == type) {
			if(info) {
				result = `${type}【${info}】`;
			}
			else {
				result = type;
			}
		}
		else if('特效' == type) {
			if(info) {
				result = `：触发【${info}】时`;
			}
			else {
				L('全皮肤？');
			}
		}
		else if('皮肤' == type) {
			if(info) {
				result = `【${info}】`;
			}
			else {
				L('全皮肤？', event);
			}
		}
		else if('系列' == type) {
			if(info) {
				result = `【${info}】系列的英雄`;
			}
			else {
				L('全系列？', event);
			}
		}
		else if('地区' == type) {
			if(info) {
				result = `【${info}】地区的英雄`;
			}
			else {
				L('全世界？', event);
			}
		}
		else if('种族' == type) {
			if(info) {
				result = `【${info}】种族的英雄`;
			}
			else {
				L('全生物？', event);
			}
		}
		else if('多杀' == type || '连杀' == type) {
			if(info) {
				result = `【${info}】`;
			}
			else {
				L('杀三小？', event);
			}
		}
		else if('阵营' == type) {
			if(info) {
				result = `【${info}】阵营`;
			}
			else {
				L('八卦阵？', event);
			}
		}
		else {
			L('哈啰？', event);
		}

		return result;
	}).join('');

	return resultEvent;
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
	catch(error) { L(error); }


	let isLineStart = false;

	let arrEvent = [];
	let arrLine;

	let eventNow;

	for(const lineText of arrLineText) {
		if(!isLineStart) {
			if(lineText == '## Lines:台词') {
				isLineStart = true;
			}

			continue;
		}

		if(lineText.startsWith('### ')) {
			eventNow = lineText.replace('### **', '').replace('**', '').replace(/^\d+ /, '');

			arrLine = [];

			const eventInfo = {
				event: formatEvent(eventNow),
				arrLine
			};

			for(const key in mapEventExtra[eventNow] || {}) {
				eventInfo[key] = mapEventExtra[eventNow][key];
			}

			arrEvent.push(eventInfo);
		}
		else {
			const [crc32, line] = lineText.replace(/^- `/, '').split('` ');

			let duration = 0;
			let audio = null;

			if(eventNow == '选用' || eventNow == '禁用') {
				const eventTrans = { 选用: 'pick', 禁用: 'ban' }[eventNow];

				const file = `${C.path.project.autogen}reso/voices/${C.champion.id}/${eventTrans}.wav`;

				const meta = await Meta.parseFile(file);

				duration = meta.format.duration;

				audio = '${C.path.project.autogen}reso/voices/${C.champion.id}/' + eventTrans + '.wav';
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
				line: line.replace(/\\n/g, '\n'),
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

			if(line.audio) {
				audio = parseConfig(line.audio);
			}
			else if(line.crc32 && line.audioFolder) {
				const arrAudioFile = _fs.readdirSync(_pa.join(C.path.project.extract, '_final', line.audioFolder));

				const audioFile = arrAudioFile.find(fileName => fileName.includes(`[${line.crc32}]`));

				audio = audioFile ? _pa.join(C.path.project.extract, '_final', line.audioFolder, audioFile) : null;

				line.audio = '${C.path.project.extract}/_final/' + line.audioFolder + '/' + audioFile;
			}

			if(audio) {
				const meta = await Meta.parseFile(audio);

				line.duration = meta.format.duration;
			}
		}
	}

	_fs.writeFileSync(C.path.lines, JSON.stringify(arrEvent, null, '\t'));
};

if(C.specialLines) {
	makeLineSpecial().then(() => L(`Finished: ${C.specialLines}`));
}
else {
	makeLineNormal().then(() => L(`Finished: [${C.idFull}] ${C.skin.name} ${C.champion.name}`));
}