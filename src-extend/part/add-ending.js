this.AddEnding = () => {
	const textEnding = I.textEnding;
	const textThankyou = '感谢观看！';


	const footageBackground = GetFootage(I.fileBackgroundEnding);

	const scaleBackground = I.heightVideo / footageBackground.height * 100;


	const layerBackground = CompMain.layers.add(footageBackground, D.full);
	layerBackground.startTime = D.linesDead;

	layerBackground.transform.scale.setValue([scaleBackground, scaleBackground]);

	const positionSplashBackground = layerBackground.position.value;
	positionSplashBackground[0] += OffsetSplashBackground;
	layerBackground.position.setValue(positionSplashBackground);

	layerBackground.transform.opacity.setValueAtTime(D.linesDead, 0);
	layerBackground.transform.opacity.setValueAtTime(D.linesDead + 1.5, 100);


	const layerThankyou = CompMain.layers.addText(textThankyou);

	layerThankyou.startTime = D.linesDead + 1.5;

	layerThankyou.transform.position.setValue([40 * I.scaleVideo, 150 * I.scaleVideo]);
	layerThankyou.transform.opacity.setValueAtTime(D.linesDead + 1.5, 0);
	layerThankyou.transform.opacity.setValueAtTime(D.linesDead + 2.5, 100);

	const textDocThankyou = layerThankyou.sourceText.value;
	textDocThankyou.resetCharStyle();
	textDocThankyou.fontSize = I.sizeFontLine * 2;
	textDocThankyou.font = 'SourceHanMonoSC-Regular';
	textDocThankyou.applyStroke = true;
	textDocThankyou.fillColor = RGBH('FFFAFA');
	textDocThankyou.strokeColor = RGBH('FFFAFA');
	textDocThankyou.strokeWidth = 4 * I.scaleVideo;
	layerThankyou.sourceText.setValue(textDocThankyou);

	const effectDropShadowThankyou = layerThankyou.effect.addProperty('ADBE Drop Shadow');
	effectDropShadowThankyou[L.shadowColor].setValue(RGBH('040404'));
	effectDropShadowThankyou[L.direction].setValue(135);
	effectDropShadowThankyou[L.opacity].setValue(255);
	effectDropShadowThankyou[L.distance].setValue(7 * I.scaleVideo);
	effectDropShadowThankyou[L.softness].setValue(4);
	effectDropShadowThankyou[L.shadowOnly].setValue(0);


	const layerCredit = CompMain.layers.addText(textEnding);

	layerCredit.startTime = D.linesDead + 1.5;

	layerCredit.transform.position.setValue([40 * I.scaleVideo, 300 * I.scaleVideo]);
	layerCredit.transform.opacity.setValueAtTime(D.linesDead + 1.5, 0);
	layerCredit.transform.opacity.setValueAtTime(D.linesDead + 2.5, 100);

	const textDocCredit = layerCredit.sourceText.value;
	textDocCredit.resetCharStyle();
	textDocCredit.fontSize = I.sizeFontLine;
	textDocCredit.font = 'SourceHanMonoSC-Regular';
	textDocCredit.applyStroke = true;
	textDocCredit.fillColor = RGBH('FFFAFA');
	textDocCredit.strokeColor = RGBH('FFFAFA');
	textDocCredit.strokeWidth = 1 * I.scaleVideo;
	layerCredit.sourceText.setValue(textDocCredit);

	const effectDropShadowCredit = layerCredit.effect.addProperty('ADBE Drop Shadow');
	effectDropShadowCredit[L.shadowColor].setValue(RGBH('040404'));
	effectDropShadowCredit[L.direction].setValue(135);
	effectDropShadowCredit[L.opacity].setValue(255);
	effectDropShadowCredit[L.distance].setValue(7 * I.scaleVideo);
	effectDropShadowCredit[L.softness].setValue(4);
	effectDropShadowCredit[L.shadowOnly].setValue(0);
};
