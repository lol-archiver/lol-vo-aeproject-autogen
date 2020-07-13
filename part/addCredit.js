P.addCredit = function addCredit() {
	var textThankyou = '感谢观看！\n';
	var textInfo = '解包/听写/整理/制作\n    by DanoR(Nuogz)\n\n' + C.emote + '\n\n如有错漏，敬请留言';

	var splashEnd = F(C.path.splash);
	var layerSplashEnd = T.compMain.layers.add(splashEnd, D.full);
	layerSplashEnd.startTime = D.linesEnd + 2;

	layerSplashEnd.transform.scale.setValue([160, 160]);
	layerSplashEnd.transform.opacity.setValueAtTime(D.linesEnd + 2, 0);
	layerSplashEnd.transform.opacity.setValueAtTime(D.linesEnd + 3.4, 100);

	var layerThankyou = T.compMain.layers.addText(textThankyou);

	layerThankyou.startTime = D.linesEnd + 3.4;
	layerThankyou.duration = D.credit;

	layerThankyou.transform.position.setValue([40, 150]);
	layerThankyou.transform.opacity.setValueAtTime(D.linesEnd + 3.4, 0);
	layerThankyou.transform.opacity.setValueAtTime(D.linesEnd + 4.5, 100);

	var textDocThankyou = layerThankyou.sourceText.value;
	textDocThankyou.resetCharStyle();
	textDocThankyou.fontSize = 100;
	textDocThankyou.fillColor = T.rgb(224, 224, 224);
	textDocThankyou.font = 'Source Han Mono';
	textDocThankyou.applyStroke = true;
	textDocThankyou.strokeColor = T.rgb(224, 224, 224);
	textDocThankyou.strokeWidth = 4;

	layerThankyou.sourceText.setValue(textDocThankyou);

	var layerThankyou2 = T.compMain.layers.addText(textThankyou);

	layerThankyou2.startTime = D.linesEnd + 3.4;
	layerThankyou2.duration = D.credit;

	layerThankyou2.transform.position.setValue([44, 154]);
	layerThankyou2.transform.opacity.setValueAtTime(D.linesEnd + 3.4, 0);
	layerThankyou2.transform.opacity.setValueAtTime(D.linesEnd + 4.5, 100);

	var textDocThankyou2 = layerThankyou2.sourceText.value;
	textDocThankyou2.resetCharStyle();
	textDocThankyou2.fontSize = 100;
	textDocThankyou2.fillColor = T.rgb(4, 4, 4);
	textDocThankyou2.font = 'Source Han Mono';
	textDocThankyou2.applyStroke = true;
	textDocThankyou2.strokeColor = T.rgb(4, 4, 4);
	textDocThankyou2.strokeWidth = 4;

	layerThankyou2.sourceText.setValue(textDocThankyou2);

	var layerInfo = T.compMain.layers.addText(textInfo);

	layerInfo.startTime = D.linesEnd + 3.4;
	layerInfo.duration = D.credit;

	layerInfo.transform.position.setValue([40, 300]);
	layerInfo.transform.opacity.setValueAtTime(D.linesEnd + 3.4, 0);
	layerInfo.transform.opacity.setValueAtTime(D.linesEnd + 4.5, 100);

	var textDocInfo = layerInfo.sourceText.value;
	textDocInfo.resetCharStyle();
	textDocInfo.fontSize = 50;
	textDocInfo.fillColor = T.rgb(224, 224, 224);
	textDocInfo.font = 'Source Han Mono';
	textDocInfo.applyStroke = true;
	textDocInfo.strokeColor = T.rgb(224, 224, 224);
	textDocInfo.strokeWidth = 1;

	layerInfo.sourceText.setValue(textDocInfo);

	var layerInfo2 = T.compMain.layers.addText(textInfo);

	layerInfo2.startTime = D.linesEnd + 3.4;
	layerInfo2.duration = D.credit;

	layerInfo2.transform.position.setValue([44, 304]);
	layerInfo2.transform.opacity.setValueAtTime(D.linesEnd + 3.4, 0);
	layerInfo2.transform.opacity.setValueAtTime(D.linesEnd + 4.5, 100);

	var textDocInfo2 = layerInfo2.sourceText.value;
	textDocInfo2.resetCharStyle();
	textDocInfo2.fontSize = 50;
	textDocInfo2.fillColor = T.rgb(0, 0, 0);
	textDocInfo2.font = 'Source Han Mono';
	textDocInfo2.applyStroke = true;
	textDocInfo2.strokeColor = T.rgb(0, 0, 0);
	textDocInfo2.strokeWidth = 1;

	layerInfo2.sourceText.setValue(textDocInfo2);
};