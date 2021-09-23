import { existsSync, readdirSync, readFileSync, writeFileSync } from 'fs';
import { resolve } from 'path';

import { C, CC } from './lib/config.js';
// const CC = await init();

import { parseFile } from 'music-metadata';

const L = (console ?? {}).log;


const parseConfig = function(str) {
	return str.replace(/\$\{.+?\}/g, function(text) {
		try {
			C;
			CC;
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
		'初遇', '遇见', '攻击', '击杀', '治疗', '阵亡', '重生', '助攻', '占据',
		'普攻', '暴击', '使用', '触发',
		'接近', '抵达', '购买', '附近', '变身',
		'玩笑', '嘲讽', '跳舞', '大笑', '静置', '回城',
		'自己', '友方', '敌方',
	].includes(type)) {
		result += type;
	}
	// 行为+是
	else if(['目标'].includes(type)) {
		result += `${type}是`;
	}
	// 内容可选+大括号
	else if(['英雄', '非英雄', '皮肤', '生物', '野怪', '建筑', '武器', '道具', '女性', '男性', '多杀', '首杀', '连杀', '控制'].includes(type)) {
		if(main) {
			result += `【${main}】`;
		}
		else {
			result += `【${type}】`;
		}

		use(main);
	}
	// 内容必要
	else if(['系列', '地区', '种族', '野怪营地', '特征', '动作', '被', '血量', '注释', '信号'].includes(type)) {
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
		// 时2
		else if(['野怪营地'].includes(type)) {
			result += `【野怪营地】${main}`;
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

	const arrAudioFile = readdirSync(pathAudios);
	const arrLineText = readFileSync(C.path.dictation, 'UTF8').split('\n').filter(text => text.trim() && !text.trim().startsWith('<!--'));

	const extrasEvent = {};
	const linesBefore = {};
	const linesAfter = {};
	const linesExtra = {};

	try {
		for(const [key, extraEvent] of Object.entries(CC.events || {})) {
			extrasEvent[key] = extraEvent;
		}

		for(const [key, extra] of Object.entries(CC.lines || {})) {
			if(extra.befores instanceof Array) {
				extra.befores.forEach(before => (linesBefore[key] || (linesBefore[key] = [])).push(before));
				delete extra.befores;
			}
			if(extra.afters instanceof Array) {
				extra.afters.forEach(after => (linesAfter[key] || (linesAfter[key] = [])).push(after));
				delete extra.afters;
			}

			(linesExtra[key] || (linesExtra[key] = [])).push(extra);
		}
	}
	catch(error) { L(error); }


	let isLineStart = false;

	let events = [];
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

			events.push(eventInfo);
		}
		else {
			const [idLineRaw, line] = lineText.replace(/^- `/, '').split('` ');
			const [idLine] = idLineRaw.split('|');

			if(line.startsWith('-')) { continue; }

			let duration = 0;
			let audio = null;

			if(eventNow == '[选用]' || eventNow == '[禁用]' || eventNow == '[选用]、[禁用]') {
				const eventTrans = { '[选用]': 'pick', '[禁用]': 'ban' }[eventNow] || 'pick';

				const file = `${C.path.project.autogen}reso/voice/${CC.champion.id}/${eventTrans}.wav`;

				if(existsSync(file)) {
					const meta = await parseFile(file);

					duration = meta.format.duration;
					audio = '${C.path.project.autogen}reso/voice/${CC.champion.id}/' + eventTrans + '.wav';
				}
			}
			else {
				const file = arrAudioFile.find(fileName => fileName.includes(idLine));

				if(file) {
					const meta = await parseFile(resolve(pathAudios, file));

					duration = meta.format.duration;
					audio = '${C.path.audios}' + file;
				}
			}

			for(const line of linesBefore[idLine] || []) {
				line.side = line.side ? line.side : 'left';
				line.duration = line.duration || 0.4;

				if(line.event) {
					line.event = line.event.split('、').map(event => formatEvent(event)).join('、');
				}

				if(line.hash && line.folder) {
					const audios = readdirSync(resolve(C.path.project.extract, '_final', line.folder));

					const nameAudio = audios.find(fileName => fileName.includes(`[${line.hash}]`));

					if(nameAudio) {
						const meta = await parseFile(resolve(C.path.project.extract, '_final', line.folder, nameAudio));

						line.duration = meta.format.duration;
						line.audio = '${C.path.project.extract}/_final/' + line.folder + '/' + nameAudio;
					}
				}

				arrLine.push(line);
			}

			const lineInfo = {
				line: line.replace(/\\n|\\，|\\。/g, '\n').replace(/^\+/g, ''),
				crc32: idLine,
				duration,
				side: 'right',
				head: C.path.file.head,
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

			arrLine.push(lineInfo);

			for(const line of linesAfter[idLine] || []) {
				line.side = line.side ? line.side : 'left';
				line.duration = line.duration || 0.4;

				if(line.event) {
					line.event = line.event.split('、').map(event => formatEvent(event)).join('、');
				}

				if(line.hash && line.folder) {
					const audios = readdirSync(resolve(C.path.project.extract, '_final', line.folder));

					const nameAudio = audios.find(fileName => fileName.includes(`[${line.hash}]`));

					if(nameAudio) {
						const meta = await parseFile(resolve(C.path.project.extract, '_final', line.folder, nameAudio));

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

	writeFileSync(C.path.info, JSON.stringify({
		title: CC.title,
		champion: CC.champion,
		skin: CC.skin,
		emote: CC.emote,
		head: CC.head,
		splash: CC.splash,
		audios: CC.audios,
		events,
	}, null, '\t'));
};

const makeLineSpecial = async function makeLineSpecial() {
	let allExtras = {};
	try {
		allExtras = require(C.path.linesExtra);
	}
	catch(error) { void 0; }

	const extrasEvent = {};
	for(const [key, extraEvent] of Object.entries(allExtras.events || {})) {
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
				const audios = readdirSync(resolve(C.path.project.extract, '_final', line.audioFolder));

				const nameAudio = audios.find(fileName => fileName.includes(`[${line.crc32}]`));

				pathAudio = nameAudio ? resolve(C.path.project.extract, '_final', line.audioFolder, nameAudio) : null;

				line.audio = '${C.path.project.extract}/_final/' + line.audioFolder + '/' + nameAudio;
			}

			if(pathAudio) {
				try {
					const meta = await parseFile(pathAudio);

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

	writeFileSync(C.path.info, JSON.stringify(allExtras.events, null, '\t'));
};

if(C.specialLines) {
	makeLineSpecial().then(() => L(`Finished: ${C.specialLines}`));
}
else {
	makeLineNormal().then(() => L(`Finished: [${C.slot}] ${CC.skin.name} ${CC.champion.name}`));
}