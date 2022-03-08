/// <reference path="index.d.ts" />



$.writeln('-------date-------'.replace('date', new Date()));


const events = CalcDuration();

CompMain.duration = D.full;
CompMain.openInViewer();


// 原图
const scaleSplashBackground = C.isLandscape ? 158 : 268;

const splashBackground = CompMain.layers.add(GetFootage(C.fileSplash, DirFootage), D.full);
splashBackground.startTime = D.opener - 1;
splashBackground.scale.setValueAtTime(D.opener - 1, [scaleSplashBackground * 1.5, scaleSplashBackground * 1.5]);
splashBackground.scale.setValueAtTime(D.opener + 2, [scaleSplashBackground, scaleSplashBackground]);
const positionSplashBackground = splashBackground.position.value; positionSplashBackground[0] += offsetSplashBackground;
splashBackground.position.setValue(positionSplashBackground);
// const positionSplashBackground = splashBackground.position.value; positionSplashBackground[0] += offsetSplashBackground * (scaleOpenerFinal / 100);


const blurSplashBackground = splashBackground.effect.addProperty('ADBE Box Blur2');
blurSplashBackground[L.blurRadius].setValueAtTime(5, 0);
blurSplashBackground[L.blurRadius].setValueAtTime(9, 14);


// 开头
const resultOpener = AddOpener();
const compOpener = resultOpener[0];
const offsetSplashBackground = resultOpener[1];

const avLayerOpener = CompMain.layers.add(compOpener, D.opener);
// avLayerOpener.stretch = -C.video.duration.opener / compOpener.duration * 100;
avLayerOpener.startTime = D.opener;
avLayerOpener.stretch = -100;

// const scaleOpenerFinal = 100;
// avLayerOpener.scale.setValueAtTime(2, [100, 100]);
// avLayerOpener.scale.setValueAtTime(4, [scaleOpenerFinal, scaleOpenerFinal]);
// SetEase(avLayerOpener.scale, 1, 2, Ease1);

compOpener.openInViewer();


// 标题
const resultTitle = AddTitle();
const compTitle = resultTitle[0];
const widthTextMaxHalf = resultTitle[1];
const fontSize = resultTitle[2];
const offsetBar = resultTitle[3];
const scaleTitle = 70;
const offsetTitleTop = Math.max(offsetBar, C.widthVideo * 0.05);
const offsetTitleLeft = Math.max(offsetBar, C.heightVideo * 0.05);

compTitle.addGuide(0, C.heightVideo / 2);
compTitle.addGuide(1, C.widthVideo / 2);
compTitle.openInViewer().views[0].options.guidesVisibility = true;

const avLayerTitleO = CompMain.layers.add(compTitle, D.title);
avLayerTitleO.startTime = 4;
avLayerTitleO.scale.setValue([scaleTitle, scaleTitle]);
avLayerTitleO.position.setValue([widthTextMaxHalf * (scaleTitle / 100) + offsetTitleTop, fontSize * (scaleTitle / 100) + offsetTitleLeft]);


avLayerTitleO.copyToComp(CompMain);
const avLayerTitleR = CompMain.layer(1);
avLayerTitleR.stretch = -100;
avLayerTitleR.startTime = 4 + D.title * 2;


CompMain.openInViewer();


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
});