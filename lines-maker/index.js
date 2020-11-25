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
		'初遇', '攻击', '击杀', '治疗', '阵亡', '重生', '助攻',
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
	else if(['英雄', '皮肤', '生物', '建筑', '武器', '道具', '女性', '男性', '多杀', '首杀', '连杀', '控制'].includes(type)) {
		if(main) {
			result += `【${main}】`;
		}
		else {
			result += `【${type}】`;
		}

		use(main);
	}
	// 内容必要
	else if(['系列', '地区', '种族', '特征', '动作', '被', '血量', '注释', '信号'].includes(type)) {
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
		// 信号
		else if(['信号'].includes(type)) {
			result += `发出【${main}】信号时`;
		}
		// 的
		else if(['特征'].includes(type)) {
			result += `【${main}】的英雄`;
		}
		// 时
		else if(['动作'].includes(type)) {
			result += `在${main}时`;
		}
		// 被
		else if(['被'].includes(type)) {
			result += `被${main}时`;
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

	const extrasEvent = {};
	const linesBefore = {};
	const linesAfter = {};
	const linesExtra = {};

	let allExtras = {};
	try {
		allExtras = require(C.path.linesExtra);
	}
	catch(error) { true; }

	try {
		for(const [key, extraEvent] of Object.entries(allExtras.event || {})) {
			extrasEvent[key] = extraEvent;
		}

		for(const [key, extraLines] of Object.entries(allExtras.lines || {})) {
			for(const extraLine of extraLines) {
				if(extraLine.oper == 'before') {
					(linesBefore[key] || (linesBefore[key] = [])).push(extraLine);
				}
				else if(extraLine.oper == 'after') {
					(linesAfter[key] || (linesAfter[key] = [])).push(extraLine);
				}
				else if(extraLine.oper == 'extra') {
					(linesExtra[key] || (linesExtra[key] = [])).push(extraLine);
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

			for(const key in extrasEvent[eventNow] || {}) {
				eventInfo[key] = extrasEvent[eventNow][key];
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

				if(_fs.existsSync(file)) {
					const meta = await Meta.parseFile(file);

					duration = meta.format.duration;
					audio = '${C.path.project.autogen}reso/voices/${C.champion.id}/' + eventTrans + '.wav';
				}
			}
			else {
				const file = arrAudioFile.find(fileName => fileName.includes(`[${crc32}]`));

				if(file) {
					const meta = await Meta.parseFile(_pa.join(pathAudios, file));

					duration = meta.format.duration;
					audio = '${C.path.audios}' + file;
				}
			}

			for(const line of linesBefore[crc32] || []) {
				line.side = line.side ? line.side : 'left';

				if(line.event) {
					line.event = line.event.split('、').map(event => formatEvent(event)).join('、');
				}

				if(line.hash && line.folder) {
					const audios = _fs.readdirSync(_pa.join(C.path.project.extract, '_final', line.folder));

					const nameAudio = audios.find(fileName => fileName.includes(`[${line.hash}]`));

					if(nameAudio) {
						const meta = await Meta.parseFile(_pa.join(C.path.project.extract, '_final', line.folder, nameAudio));

						line.duration = meta.format.duration;
						line.audio = '${C.path.project.extract}/_final/' + line.folder + '/' + nameAudio;
					}
				}

				arrLine.push(line);
			}

			const lineInfo = {
				line: line.replace(/\\n/g, '\n'),
				crc32,
				duration,
				side: 'right',
				head: C.path.head || '${C.path.project.autogen}reso/icons/${C.champion.name}/${C.skin.id}.png',
				audio,
			};

			for(const extraInfo of linesExtra[crc32] || []) {
				for(const key in extraInfo) {
					if(key == 'mark') {
						lineInfo[key] = extraInfo[key].replace(/\\n/g, '\n');
					}
					else {
						lineInfo[key] = extraInfo[key];
					}
				}
			}

			arrLine.push(lineInfo);

			for(const line of linesAfter[crc32] || []) {
				line.side = line.side ? line.side : 'left';

				if(line.event) {
					line.event = line.event.split('、').map(event => formatEvent(event)).join('、');
				}

				if(line.hash && line.folder) {
					const audios = _fs.readdirSync(_pa.join(C.path.project.extract, '_final', line.folder));

					const nameAudio = audios.find(fileName => fileName.includes(`[${line.hash}]`));

					if(nameAudio) {
						const meta = await Meta.parseFile(_pa.join(C.path.project.extract, '_final', line.folder, nameAudio));

						line.duration = meta.format.duration;
						line.audio = '${C.path.project.extract}/_final/' + line.folder + '/' + nameAudio;
					}
					else {
						line.duration = null;
						line.audio = null;
					}
				}

				arrLine.push(line);
			}
		}
	}

	_fs.writeFileSync(C.path.lines, JSON.stringify(arrEvent, null, '\t'));
};

const makeLineSpecial = async function makeLineSpecial() {
	let allExtras = {};
	try {
		allExtras = require(C.path.linesExtra);
	}
	catch(error) { true; }

	const extrasEvent = {};
	for(const [key, extraEvent] of Object.entries(allExtras.event || {})) {
		extrasEvent[key] = extraEvent;
	}

	for(const event of allExtras.events) {
		const eventNow = event.event;
		event.event = eventNow.split('、').map(event => formatEvent(event)).join('、');

		for(const key in extrasEvent[eventNow] || {}) {
			event[key] = extrasEvent[eventNow][key];
		}

		for(const line of event.arrLine) {
			let pathAudio = null;

			if(line.audio) {
				pathAudio = parseConfig(line.audio);
			}
			else if(line.crc32 && line.audioFolder) {
				const audios = _fs.readdirSync(_pa.join(C.path.project.extract, '_final', line.audioFolder));

				const nameAudio = audios.find(fileName => fileName.includes(`[${line.crc32}]`));

				pathAudio = nameAudio ? _pa.join(C.path.project.extract, '_final', line.audioFolder, nameAudio) : null;

				line.audio = '${C.path.project.extract}/_final/' + line.audioFolder + '/' + nameAudio;
			}

			if(pathAudio) {
				try {
					const meta = await Meta.parseFile(pathAudio);

					line.duration = meta.format.duration;
				}
				catch(error) {
					line.audio = null;
				}
			}
			else {
				line.audio = null;
			}
		}
	}

	_fs.writeFileSync(C.path.lines, JSON.stringify(allExtras.events, null, '\t'));
};

if(C.specialLines) {
	makeLineSpecial().then(() => L(`Finished: ${C.specialLines}`));
}
else {
	makeLineNormal().then(() => L(`Finished: [${C.idFull}] ${C.skin.name} ${C.champion.name}`));
}