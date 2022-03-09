this.AddEnding = () => {
	const textThankyou = '感谢观看！\n';
	const textInfo = '解包/听写/整理/制作\n    by DanoR (Nuogz)\n\n如有错漏，敬请留言\n\n所有素材依赖于最新测试服进度\n视频内容可能多次变动，请勿见怪';

	const splashEnd = GetFootage(C.fileSplash);
	const layerSplashEnd = CompMain.layers.add(splashEnd, D.full);
	layerSplashEnd.startTime = D.linesEnd + 2;

	layerSplashEnd.transform.scale.setValue([160, 160]);
	layerSplashEnd.transform.opacity.setValueAtTime(D.linesEnd + 2, 0);
	layerSplashEnd.transform.opacity.setValueAtTime(D.linesEnd + 3.4, 100);


	const layerThankyou = CompMain.layers.addText(textThankyou);

	layerThankyou.startTime = D.linesEnd + 3.4;
	layerThankyou.duration = D.credit;

	layerThankyou.transform.position.setValue([40, 150]);
	layerThankyou.transform.opacity.setValueAtTime(D.linesEnd + 3.4, 0);
	layerThankyou.transform.opacity.setValueAtTime(D.linesEnd + 4.5, 100);

	const textDocThankyou = layerThankyou.sourceText.value;
	textDocThankyou.resetCharStyle();
	textDocThankyou.fontSize = 100;
	textDocThankyou.font = 'Source Han Mono SC';
	textDocThankyou.applyStroke = true;
	textDocThankyou.fillColor = RGBH('FFFAFA');
	textDocThankyou.strokeColor = RGBH('FFFAFA');
	textDocThankyou.strokeWidth = 4;
	layerThankyou.sourceText.setValue(textDocThankyou);

	const effectDropShadowThankyou = layerThankyou.effect.addProperty('ADBE Drop Shadow');
	effectDropShadowThankyou[L.shadowColor].setValue(RGBH('040404'));
	effectDropShadowThankyou[L.direction].setValue(135);
	effectDropShadowThankyou[L.opacity].setValue(255);
	effectDropShadowThankyou[L.distance].setValue(7);
	effectDropShadowThankyou[L.softness].setValue(4);
	effectDropShadowThankyou[L.shadowOnly].setValue(0);


	const layerCredit = CompMain.layers.addText(textInfo);

	layerCredit.startTime = D.linesEnd + 3.4;
	layerCredit.duration = D.credit;

	layerCredit.transform.position.setValue([40, 300]);
	layerCredit.transform.opacity.setValueAtTime(D.linesEnd + 3.4, 0);
	layerCredit.transform.opacity.setValueAtTime(D.linesEnd + 4.5, 100);

	const textDocCredit = layerCredit.sourceText.value;
	textDocCredit.resetCharStyle();
	textDocCredit.fontSize = C.video.size.fontLine;
	textDocCredit.font = 'Source Han Mono SC';
	textDocCredit.applyStroke = true;
	textDocCredit.fillColor = RGBH('FFFAFA');
	textDocCredit.strokeColor = RGBH('FFFAFA');
	textDocCredit.strokeWidth = 1;
	layerCredit.sourceText.setValue(textDocCredit);

	const effectDropShadowCredit = layerCredit.effect.addProperty('ADBE Drop Shadow');
	effectDropShadowCredit[L.shadowColor].setValue(RGBH('040404'));
	effectDropShadowCredit[L.direction].setValue(135);
	effectDropShadowCredit[L.opacity].setValue(255);
	effectDropShadowCredit[L.distance].setValue(7);
	effectDropShadowCredit[L.softness].setValue(4);
	effectDropShadowCredit[L.shadowOnly].setValue(0);
};