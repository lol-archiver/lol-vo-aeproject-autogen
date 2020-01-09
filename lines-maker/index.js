require('../config');

const _fs = require('fs');
const _pa = require('path');

const Meta = require('music-metadata');

const L = (console || {}).log;

const pathAudios = C.path.audios;

const arrAudioFile = _fs.readdirSync(pathAudios);
const arrLineText = _fs.readFileSync(C.path.dictation, 'UTF8').split('\n').filter(text => text.trim());

const mapLineReply = {};
require(C.path.reply).forEach((reply => (mapLineReply[reply.reply]||(mapLineReply[reply.reply]=[])).push(reply)));

(async function() {
	let isLineStart = false;

	let arrEvent = [];
	let arrLine;

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

			const eventInfo = {
				event,
				eventRaw,
				arrLine
			};

			arrEvent.push(eventInfo);
		}
		else {
			const [crc32, line] = lineText.replace('- - `', '').replace('  - `', '').split('`: ');

			let duration = 0;
			const file = arrAudioFile.find(fileName => fileName.includes(crc32));

			if(file) {
				const meta = await Meta.parseFile(_pa.join(pathAudios, file));

				duration = meta.format.duration;
			}

			arrLine.push({
				line: line.replace(/\*/g, ''),
				crc32,
				duration,
				head: C.path.head,
				audio: file ? _pa.join(pathAudios, file) : null
			});

			const replies = mapLineReply[crc32] || [];

			for(const reply of replies) {
				arrLine.push(reply);
			}
		}
	}

	_fs.writeFileSync(C.path.lines, JSON.stringify(arrEvent, null, '\t'));

	L('end');
})();