/// <reference path="index.d.ts" />



$.writeln('-------date-------'.replace('date', new Date()));


const events = CalcDuration();


CompMain.duration = D.full;
CompMain.openInViewer();


if(!C.video.simple) {
	AddBackGround();
	AddTitle();
}


// 开头
const compOpener = AddOpener();

const layerOpener = CompMain.layers.add(compOpener, D.opener);
layerOpener.startTime = D.opener;
layerOpener.stretch = -100;


// 台词
let accumDuration = D.opener + D.title - 0.5;
EnumLine(events, (line, lid, index) => {
	const yCenter = 540;

	let yLine = yCenter + line.boxHeight;
	let indexLine = index;

	let durationLine = line.durationLine;

	while(yLine >= -yCenter) {
		const lineInfoExtra = D.list[++indexLine];

		if(lineInfoExtra) {
			const nextDuration = lineInfoExtra[0];
			const nextBoxHeight = lineInfoExtra[1];

			yLine -= nextBoxHeight;

			durationLine += nextDuration + D.interval;
		}
		else {
			break;
		}
	}

	const compLine = AddLine(line, lid, DirLine, durationLine);

	AddLineScroll(line, compLine, index, accumDuration, durationLine);

	accumDuration += line.duration + D.interval;

	$.writeln(`${index}: ${line.line}`);
});


if(!C.video.simple) {
	AddBGM();
	AddCounter();
	AddEnding();
}

CompMain.openInViewer();