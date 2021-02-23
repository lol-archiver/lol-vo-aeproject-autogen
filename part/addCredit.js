P.addCredit = function addCredit() {
	var textThankyou = '感谢观看！\n';
	var textInfo = '解包/听写/整理/制作\n    by DanoR(Nuogz)\n\n' + C.emote + '\n\n如有错漏，敬请留言';

	var splashEnd = F(C.path.splash);
	var layerSplashEnd = T.compMain.layers.add(splashEnd, D.full);
	layerSplashEnd.startTime = D.linesEnd + 2;

	layerSplashEnd.transform.scale.setValue([160, 160]);
	layerSplashEnd.transform.opacity.setValueAtTime(D.linesEnd + 2, 0);
	layerSplashEnd.transform.opacity.setValueAtTime(D.linesEnd + 3.4, 100);

	var layerThankyou1 = T.compMain.layers.addText(textThankyou);
	var layerThankyou2 = T.compMain.layers.addText(textThankyou);

	layerThankyou1.startTime = D.linesEnd + 3.4;
	layerThankyou2.startTime = D.linesEnd + 3.4;
	layerThankyou1.duration = D.credit;
	layerThankyou2.duration = D.credit;

	layerThankyou1.transform.position.setValue([40 + 2, 150 + 2]);
	layerThankyou2.transform.position.setValue([40, 150]);
	layerThankyou1.transform.opacity.setValueAtTime(D.linesEnd + 3.4, 0);
	layerThankyou2.transform.opacity.setValueAtTime(D.linesEnd + 3.4, 0);
	layerThankyou1.transform.opacity.setValueAtTime(D.linesEnd + 4.5, 100);
	layerThankyou2.transform.opacity.setValueAtTime(D.linesEnd + 4.5, 100);

	var textDocThankyou1 = layerThankyou1.sourceText.value;
	var textDocThankyou2 = layerThankyou2.sourceText.value;
	textDocThankyou1.resetCharStyle();
	textDocThankyou2.resetCharStyle();
	textDocThankyou1.fontSize = 100;
	textDocThankyou2.fontSize = 100;
	textDocThankyou1.font = 'Source Han Mono SC';
	textDocThankyou2.font = 'Source Han Mono SC';
	textDocThankyou1.applyStroke = true;
	textDocThankyou2.applyStroke = true;
	textDocThankyou1.fillColor = T.rgb(4, 4, 4);
	textDocThankyou2.fillColor = T.rgb(255, 250, 250);
	textDocThankyou1.strokeColor = T.rgb(4, 4, 4);
	textDocThankyou2.strokeColor = T.rgb(255, 250, 250);
	textDocThankyou1.strokeWidth = 4;
	textDocThankyou2.strokeWidth = 4;

	layerThankyou1.sourceText.setValue(textDocThankyou1);
	layerThankyou2.sourceText.setValue(textDocThankyou2);

	var layerInfo1 = T.compMain.layers.addText(textInfo);
	var layerInfo2 = T.compMain.layers.addText(textInfo);

	layerInfo1.startTime = D.linesEnd + 3.4;
	layerInfo2.startTime = D.linesEnd + 3.4;
	layerInfo1.duration = D.credit;
	layerInfo2.duration = D.credit;

	layerInfo1.transform.position.setValue([40 + 2, 300 + 2]);
	layerInfo2.transform.position.setValue([40, 300]);
	layerInfo1.transform.opacity.setValueAtTime(D.linesEnd + 3.4, 0);
	layerInfo2.transform.opacity.setValueAtTime(D.linesEnd + 3.4, 0);
	layerInfo1.transform.opacity.setValueAtTime(D.linesEnd + 4.5, 100);
	layerInfo2.transform.opacity.setValueAtTime(D.linesEnd + 4.5, 100);

	var textDocInfo1 = layerInfo1.sourceText.value;
	var textDocInfo2 = layerInfo2.sourceText.value;
	textDocInfo1.resetCharStyle();
	textDocInfo2.resetCharStyle();
	textDocInfo1.fontSize = C.size.fontLine;
	textDocInfo2.fontSize = C.size.fontLine;
	textDocInfo1.font = 'Source Han Mono SC';
	textDocInfo2.font = 'Source Han Mono SC';
	textDocInfo1.applyStroke = true;
	textDocInfo2.applyStroke = true;
	textDocInfo1.fillColor = T.rgb(4, 4, 4);
	textDocInfo2.fillColor = T.rgb(255, 250, 250);
	textDocInfo1.strokeColor = T.rgb(4, 4, 4);
	textDocInfo2.strokeColor = T.rgb(255, 250, 250);
	textDocInfo1.strokeWidth = 1;
	textDocInfo2.strokeWidth = 1;

	layerInfo1.sourceText.setValue(textDocInfo1);
	layerInfo2.sourceText.setValue(textDocInfo2);
};