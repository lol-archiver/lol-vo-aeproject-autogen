import { readFileSync } from 'fs';



const readRawLines = (file, eventsExtra = {}) => {
	const textsLine = readFileSync(file, 'UTF8').split('\n')
		.map(text => text.trim())
		.filter(text => text && !text.startsWith('<!--'));


	const events = [];
	const linesRaw = [];


	let lineStarted = false;
	let eventNow;
	for(const textLine of textsLine) {
		if(!lineStarted) {
			if(textLine == '## Lines:台词') { lineStarted = true; }

			continue;
		}


		if(textLine.startsWith('### ')) {
			const event = eventNow = {
				event: textLine.replace('### **', '').replace('**', '').replace(/^\d+ /, ''),
				lines: [],
			};

			events.push(Object.assign(event, eventsExtra[event.event] ?? {}));
		}
		else {
			const [, rawMeta, line] = textLine.match(/^- `(.*?)(?<!\\)` (.*)$/) ?? [];
			if(!rawMeta || !line) { continue; }


			const [rawIDSound, idAudio, hash, ...rawExtras] = rawMeta.trim().split(/(?<!\\)\|/);

			const lineRaw = {
				idAudio: idAudio,
				hash,
				idsSound: rawIDSound.split(/(?<!\\)\./),
				extras: rawExtras.map(raw => {
					const [type, rawParams = ''] = raw.split(/(?<!\\):/);

					return { type, params: rawParams.split(/(?<!\\),/) };
				}),

				event: eventNow.event,
				line: line.trim(),
			};

			eventNow.lines.push(lineRaw);
			linesRaw.push(lineRaw);
		}
	}


	return [events, linesRaw];
};



export default readRawLines;
