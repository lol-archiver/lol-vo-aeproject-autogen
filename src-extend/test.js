// @include 'json2.js';
// @include 'init.js';
// @include 'ensure.js';
// @include 'lang.js';

// @include 'part/addOpener2.js';
// @include 'part/addTitle2.js';


// var events = P.calcDuration();

D.full = 60;

var compMain = T.compMain;

compMain.duration = D.full;
compMain.openInViewer();

// Opener
var resultOpner = P.addOpener2();
var compOpener = resultOpner[0];
var offsetSplashBackground = resultOpner[1];

var layerOpener = T.compMain.layers.add(compOpener, D.opener);
layerOpener.stretch = 50;

var scaleOpenerFinal = 300;
layerOpener.scale.setValueAtTime(2, [100, 100]);
layerOpener.scale.setValueAtTime(4, [scaleOpenerFinal, scaleOpenerFinal]);
SetEase(layerOpener.scale, 1, 2, Ease1);

compOpener.openInViewer();


// Splash Background
var scaleSplashBackground = C.isLandscape ? 158 : 268;

var splashBackground = compMain.layers.add(Footage(C.fileSplash, T.dirFootage), D.full);
splashBackground.startTime = 4;
splashBackground.scale.setValue([scaleSplashBackground, scaleSplashBackground]);
var positionSplashBackground = splashBackground.position.value; positionSplashBackground[0] += offsetSplashBackground * (scaleOpenerFinal / 100);
splashBackground.position.setValue(positionSplashBackground);


// Title
var resultTitle = P.addTitle2();
var compTitle = resultTitle[0];
var widthTextMaxHalf = resultTitle[1];
var fontSize = resultTitle[2];
var offsetBar = resultTitle[3];
var scaleTitle = 70;
var offsetTitleTop = Math.max(offsetBar, C.widthVideo * 0.05);
var offsetTitleLeft = Math.max(offsetBar, C.heightVideo * 0.05);

compTitle.addGuide(0, C.heightVideo / 2);
compTitle.addGuide(1, C.widthVideo / 2);
compTitle.openInViewer().views[0].options.guidesVisibility = true;

var layerTitle = compMain.layers.add(compTitle, D.title);
layerTitle.startTime = 4;
layerTitle.scale.setValue([scaleTitle, scaleTitle]);
layerTitle.position.setValue([widthTextMaxHalf * (scaleTitle / 100) + offsetTitleTop, fontSize * (scaleTitle / 100) + offsetTitleLeft]);


layerTitle.copyToComp(compMain);
var layerTitleR = compMain.layer(1);
layerTitleR.stretch = -100;
layerTitleR.startTime = 4 + D.title * 2;


// compMain.openInViewer();