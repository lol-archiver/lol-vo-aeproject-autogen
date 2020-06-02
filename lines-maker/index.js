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

const parseCond = function(type, ...arrParam) {
	let result = '';

	if(!type || type == '') {
		return result;
	}

	// 技能
	if(/^([QWER]技能|P被动)$/.test(type)) {
		const [nameSkill, timing] = arrParam;

		result += `${type}【${nameSkill}】`;

		if(timing) {
			result += `且${timing}时`;
		}
	}
	// 攻击特效
	else if('特效' == type) {
		const [cond] = arrParam;

		if(cond) {
			result = `附带【${cond}】`;
		}
		else {
			L('啥特效？');
		}
	}
	// 条件前置
	else if(['移动'].includes(type)) {
		const [cond = ''] = arrParam;

		result = `${cond}移动`;
	}
	// 原封不动
	else if(['选用', '禁用'].includes(type)) {
		result = `${type}`;
	}
	// 行为+目标
	else if(['初遇', '攻击', '击杀', '普攻', '暴击', '使用', '触发', '接近', '抵达', '嘲讽', '购买', '附近', '友方', '敌方'].includes(type)) {
		result = `${type}${parseCond(...arrParam)}`;
	}
	// 行为+是+目标
	else if(['目标'].includes(type)) {
		result = `${type}是${parseCond(...arrParam)}`;
	}

	// 大括号
	else if(['英雄', '皮肤', '生物', '建筑', '道具', '女性', '男性', '多杀', '连杀'].includes(type)) {
		if(arrParam[0]) {
			result = `【${arrParam[0]}】`;
		}
		else {
			result = `【${type}】`;
		}
	}
	// 系列皮肤
	else if('系列' == type) {
		if(arrParam[0]) {
			result = `【${arrParam[0]}】系列皮肤`;
		}
		else {
			L('全系列？');
		}
	}
	// 地区
	else if('地区' == type) {
		if(arrParam[0]) {
			result = `【${arrParam[0]}】地区的英雄`;
		}
		else {
			L('全大陆？');
		}
	}
	// 种族
	else if('种族' == type) {
		if(arrParam[0]) {
			result = `【${arrParam[0]}】英雄`;
		}
		else {
			L('全生物？');
		}
	}

	// 回应
	else if('回应' == type) {
		const [behavior, ...arrParamSub] = arrParam;

		if(arrParamSub.length) {
			result = `回应${parseCond(...arrParamSub)}的【${behavior}】`;
		}
		else {
			result = `回应【${behavior}】`;
		}
	}
	// 控制
	else if('控制' == type) {
		const [stat, ...arrParamSub] = arrParam;

		if(arrParamSub.length) {
			result = `${stat}${parseCond(...arrParamSub)}`;
		}
		else {
			result = stat;
		}
	}
	// 简单动作
	else if(['阵亡', '重生', '静置', '回城', '玩笑', '大笑'].includes(type)) {
		result = type;

		if(arrParam[0]) {
			L('新花样？');
		}
	}
	else {
		L('哈啰？', type, ...arrParam);
	}

	return result;
};

const formatEvent = function(event) {
	return event.replace(/(^\[|\]$)/g, '').split('][').map(cond => {
		const [type, ...arrParam] = cond.split(':');

		return parseCond(type, ...arrParam);
	}).join(' 且 ');
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
				event: eventNow.split('、').map(event => formatEvent(event)).join('、'),
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