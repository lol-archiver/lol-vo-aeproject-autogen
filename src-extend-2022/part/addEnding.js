this.AddEnding = () => {
	const textThankyou = '感谢观看！\n';
	const textInfo = '解包/听写/整理/制作\n    by DanoR(Nuogz)\n\n' + I.emote + '\n\n如有错漏，敬请留言\n\n所有素材依赖于最新测试服进度\n视频内容可能多次变动，请勿见怪';

	// const splashEnd = GetFootage(C.fileSplash);
	// const layerSplashEnd = CompMain.layers.add(splashEnd, D.full);
	// layerSplashEnd.startTime = D.linesEnd + 2;

	// layerSplashEnd.transform.scale.setValue([160, 160]);
	// layerSplashEnd.transform.opacity.setValueAtTime(D.linesEnd + 2, 0);
	// layerSplashEnd.transform.opacity.setValueAtTime(D.linesEnd + 3.4, 100);

	const layerThankyou1 = CompMain.layers.addText(textThankyou);
	const layerThankyou2 = CompMain.layers.addText(textThankyou);

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

	const textDocThankyou1 = layerThankyou1.sourceText.value;
	const textDocThankyou2 = layerThankyou2.sourceText.value;
	textDocThankyou1.resetCharStyle();
	textDocThankyou2.resetCharStyle();
	textDocThankyou1.fontSize = 100;
	textDocThankyou2.fontSize = 100;
	textDocThankyou1.font = 'Source Han Mono SC';
	textDocThankyou2.font = 'Source Han Mono SC';
	textDocThankyou1.applyStroke = true;
	textDocThankyou2.applyStroke = true;
	textDocThankyou1.fillColor = RGBH('040404');
	textDocThankyou2.fillColor = RGBH('FFFAFA');
	textDocThankyou1.strokeColor = RGBH('040404');
	textDocThankyou2.strokeColor = RGBH('FFFAFA');
	textDocThankyou1.strokeWidth = 4;
	textDocThankyou2.strokeWidth = 4;

	layerThankyou1.sourceText.setValue(textDocThankyou1);
	layerThankyou2.sourceText.setValue(textDocThankyou2);

	const layerInfo1 = CompMain.layers.addText(textInfo);
	const layerInfo2 = CompMain.layers.addText(textInfo);

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

	const textDocInfo1 = layerInfo1.sourceText.value;
	const textDocInfo2 = layerInfo2.sourceText.value;
	textDocInfo1.resetCharStyle();
	textDocInfo2.resetCharStyle();
	textDocInfo1.fontSize = C.video.size.fontLine;
	textDocInfo2.fontSize = C.video.size.fontLine;
	textDocInfo1.font = 'Source Han Mono SC';
	textDocInfo2.font = 'Source Han Mono SC';
	textDocInfo1.applyStroke = true;
	textDocInfo2.applyStroke = true;
	textDocInfo1.fillColor = RGBH('040404');
	textDocInfo2.fillColor = RGBH('FFFAFA');
	textDocInfo1.strokeColor = RGBH('040404');
	textDocInfo2.strokeColor = RGBH('FFFAFA');
	textDocInfo1.strokeWidth = 1;
	textDocInfo2.strokeWidth = 1;

	layerInfo1.sourceText.setValue(textDocInfo1);
	layerInfo2.sourceText.setValue(textDocInfo2);
};