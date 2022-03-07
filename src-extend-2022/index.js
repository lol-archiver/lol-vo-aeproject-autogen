/// <reference path="index.d.ts" />


$.writeln('-------date-------'.replace('date', new Date()));


D.full = 60;


CompMain.duration = D.full;
CompMain.openInViewer();

// Opener
const resultOpener = AddOpener();
const compOpener = resultOpener[0];
const offsetSplashBackground = resultOpener[1];

const avLayerOpener = CompMain.layers.add(compOpener, D.opener);
avLayerOpener.stretch = C.video.duration.title / compOpener.duration * 100;

const scaleOpenerFinal = 300;
avLayerOpener.scale.setValueAtTime(2, [100, 100]);
avLayerOpener.scale.setValueAtTime(4, [scaleOpenerFinal, scaleOpenerFinal]);
SetEase(avLayerOpener.scale, 1, 2, Ease1);

compOpener.openInViewer();


// // Splash Background
// const scaleSplashBackground = C.isLandscape ? 158 : 268;

// const splashBackground = CompMain.layers.add(GetFootage(C.fileSplash, T.dirFootage), D.full);
// splashBackground.startTime = 4;
// splashBackground.scale.setValue([scaleSplashBackground, scaleSplashBackground]);
// const positionSplashBackground = splashBackground.position.value; positionSplashBackground[0] += offsetSplashBackground * (scaleOpenerFinal / 100);
// splashBackground.position.setValue(positionSplashBackground);


// // Title
// const resultTitle = P.addTitle2();
// const compTitle = resultTitle[0];
// const widthTextMaxHalf = resultTitle[1];
// const fontSize = resultTitle[2];
// const offsetBar = resultTitle[3];
// const scaleTitle = 70;
// const offsetTitleTop = Math.max(offsetBar, C.widthVideo * 0.05);
// const offsetTitleLeft = Math.max(offsetBar, C.heightVideo * 0.05);

// compTitle.addGuide(0, C.heightVideo / 2);
// compTitle.addGuide(1, C.widthVideo / 2);
// compTitle.openInViewer().views[0].options.guidesVisibility = true;

// const avLayerTitleO = CompMain.layers.add(compTitle, D.title);
// avLayerTitleO.startTime = 4;
// avLayerTitleO.scale.setValue([scaleTitle, scaleTitle]);
// avLayerTitleO.position.setValue([widthTextMaxHalf * (scaleTitle / 100) + offsetTitleTop, fontSize * (scaleTitle / 100) + offsetTitleLeft]);


// avLayerTitleO.copyToComp(CompMain);
// const avLayerTitleR = CompMain.layer(1);
// avLayerTitleR.stretch = -100;
// avLayerTitleR.startTime = 4 + D.title * 2;


// // CompMain.openInViewer();

