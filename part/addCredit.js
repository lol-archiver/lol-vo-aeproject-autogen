P.addCredit = function addCredit() {
	var splashEnd = F(C.path.splash);
	var layerSplashEnd = T.compMain.layers.add(splashEnd, D.full);
	layerSplashEnd.startTime = D.linesEnd + 2;

	layerSplashEnd.transform.scale.setValue([160, 160]);
	layerSplashEnd.transform.opacity.setValueAtTime(D.linesEnd + 2, 0);
	layerSplashEnd.transform.opacity.setValueAtTime(D.linesEnd + 3.4, 100);

	var layerThankyou = T.compMain.layers.addText('感谢观看！\n');

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

	var layerInfo = T.compMain.layers.addText('解包/听写/整理/制作\n    by DanoR(Nuogz)\n感谢道哥的协力校对\n\n' + C.emote + '\n\n如有错漏，敬请留言');

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
};