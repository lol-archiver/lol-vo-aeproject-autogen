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


const parseCond = function(arrParam) {
	let result = '';
	let used = 0;

	const use = value => 'string' == typeof value ? used++ : null;

	const type = arrParam.shift();

	if(!type || type == '') { return result; }

	const [main] = arrParam;

	// 技能
	if(/^([QWER]技能|P被动)$/.test(type)) {
		const [name, timing] = arrParam;

		result += type;

		if(name) {
			result += `【${name}】`;

			if(timing) {
				result += `且${timing}时`;
			}
		}

		use(name);
		use(timing);
	}
	// 攻击特效
	else if('特效' == type) {
		if(main) {
			result += `附带【${main}】`;
		}
		else {
			throw new Error('缺少特效内容');
		}

		use(main);
	}
	// 条件前置
	else if(['移动'].includes(type)) {
		if(main) {
			result += main;
		}

		use(main);

		result += type;
	}
	// 回应
	else if('回应' == type) {
		const [, ...arrParamSub] = arrParam;

		if(arrParamSub.length) {
			result += `回应${parseCond(arrParamSub)}的【${main}】`;

			used += arrParam.length;
		}
		else {
			result += `回应【${main}】`;

			used++;
		}

		use(main);
	}
	// 行为Only
	else if([
		'选用', '禁用',
		'初遇', '攻击', '击杀', '阵亡', '重生',
		'普攻', '暴击', '使用', '触发',
		'接近', '抵达', '购买', '附近', '变身',
		'玩笑', '嘲讽', '跳舞', '大笑', '静置', '回城',
		'友方', '敌方',
	].includes(type)) {
		result += type;
	}
	// 行为+是
	else if(['目标'].includes(type)) {
		result += `${type}是`;
	}
	// 内容可选+大括号
	else if(['英雄', '皮肤', '生物', '建筑', '武器', '道具', '女性', '男性', '多杀', '连杀', '控制'].includes(type)) {
		if(main) {
			result += `【${main}】`;
		}
		else {
			result += `【${type}】`;
		}

		use(main);
	}
	// 内容必要
	else if(['系列', '地区', '种族', '特征', '动作', '血量', '注释'].includes(type)) {
		if(!main) { throw new Error('缺少内容'); }

		use(main);

		// 系列皮肤
		if(['系列'].includes(type)) {
			result += `【${main}】系列皮肤`;
		}
		// 地区
		else if(['地区'].includes(type)) {
			result += `【${main}】地区英雄`;
		}
		// 种族
		else if(['种族'].includes(type)) {
			result += `【${main}】英雄`;
		}
		// 的
		else if(['特征'].includes(type)) {
			result += `【${main}】的英雄`;
		}
		// 时
		else if(['动作'].includes(type)) {
			result += `在${main}时`;
		}
		// 行为+内容+时
		else if(['血量'].includes(type)) {
			result += `${type}${main}时`;
		}
		// 内容+大括号
		else if(['注释'].includes(type)) {
			result += `（${main}）`;
		}
	}
	else {
		L('新类型', type, ...arrParam);
	}

	arrParam.splice(0, used);

	return arrParam.length ? `${result}${parseCond(arrParam)}` : result;
};

const formatEvent = function(event) {
	return event.replace(/(^\[|\]$)/g, '').split('][').map(cond => parseCond(cond.split(':'))).join(' 且 ');
};

const makeLineNormal = async function makeLineNormal() {
	const pathAudios = C.path.audios;

	const arrAudioFile = _fs.readdirSync(pathAudios);
	const arrLineText = _fs.readFileSync(C.path.dictation, 'UTF8').split('\n').filter(text => text.trim());

	const mapEventExtra = {};
	const mapLineBefore = {};
	const mapLineAfter = {};
	const mapLineExtra = {};

	let allInfosExtra = {};
	try {
		allInfosExtra = require(C.path.linesExtra);
	}
	catch(error) { true; }

	try {
		for(const [key, extraEvent] of Object.entries(allInfosExtra.event || {})) {
			mapEventExtra[key] = extraEvent;
		}

		for(const [key, extraLines] of Object.entries(allInfosExtra.lines || {})) {
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

			if(eventNow == '[选用]' || eventNow == '[禁用]') {
				const eventTrans = { '[选用]': 'pick', '[禁用]': 'ban' }[eventNow];

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