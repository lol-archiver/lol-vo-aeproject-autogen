this.AddTitle = () => {
	D.title = 3;

	const offsetBar = 80;
	const offsetText = 12;
	const offsetTrim = 10;
	const fontSize = 100;

	const fontSizeHalf = fontSize / 2;
	const widthVideoHalf = C.widthVideo / 2;
	const heightVideoHalf = C.heightVideo / 2;

	const colorBar = RGBH(I.color || '1FAAF1');
	const colorText = RGBH('FFFAFA');
	const colorShadow = RGBH('000000');


	const compTitle = EnsureComp('comp-title', D.title, DirComp);


	const textT = AddText(compTitle.layers, I.title1, 'text-top');
	const maskTextT = AddShape(compTitle.layers, 'mask-text-top');
	const textB = AddText(compTitle.layers, I.title2, 'text-bottom');
	const maskTextB = AddShape(compTitle.layers, 'mask-text-bottom');

	// Text Top
	textT.trackMatteType = TrackMatteType.ALPHA;

	const textSourceT = textT.sourceText.value;
	textSourceT.resetCharStyle();
	textSourceT.fontSize = fontSize;
	textSourceT.fillColor = colorText;
	textSourceT.font = 'Source Han Mono SC';
	textSourceT.applyStroke = true;
	textSourceT.strokeColor = colorText;
	textSourceT.strokeWidth = 4;
	textT.sourceText.setValue(textSourceT);

	const rectSourceT = textT.sourceRectAtTime(0, false);
	const widthTextT = rectSourceT.width;

	textT.transform.anchorPoint.setValue([widthTextT, -(fontSizeHalf - offsetText)]);

	textT.transform.position.setValueAtTime(0.7, [widthVideoHalf - offsetTrim, heightVideoHalf - fontSizeHalf]);
	textT.transform.position.setValueAtTime(2, [widthVideoHalf + (widthTextT / 2), heightVideoHalf - fontSizeHalf]);
	SetEase(textT.transform.position, 1, 2, Ease1);

	const dropShadowTextT = AddProperty(textT.effect, 'ADBE Drop Shadow');
	dropShadowTextT[L.shadowColor].setValue(colorShadow);
	dropShadowTextT[L.direction].setValue(135);
	dropShadowTextT[L.opacity].setValue((70 / 100) * 255);
	dropShadowTextT[L.distance].setValue(offsetTrim);
	dropShadowTextT[L.softness].setValue(7);

	// Text Bottom
	textB.trackMatteType = TrackMatteType.ALPHA;

	const textSourceB = textB.sourceText.value;
	textSourceB.resetCharStyle();
	textSourceB.fontSize = fontSize;
	textSourceB.fillColor = colorText;
	textSourceB.font = 'Source Han Mono SC';
	textSourceB.applyStroke = true;
	textSourceB.strokeColor = colorText;
	textSourceB.strokeWidth = 4;
	textB.sourceText.setValue(textSourceB);

	const rectSourceB = textB.sourceRectAtTime(0, false);
	const widthTextB = rectSourceB.width;

	textB.transform.anchorPoint.setValue([0, -(fontSizeHalf - offsetText)]);

	textB.transform.position.setValueAtTime(0.7, [widthVideoHalf + offsetTrim, heightVideoHalf + fontSizeHalf]);
	textB.transform.position.setValueAtTime(2, [widthVideoHalf - (widthTextB / 2), heightVideoHalf + fontSizeHalf]);
	SetEase(textB.transform.position, 1, 2, Ease1);

	const dropShadowTextB = AddProperty(textB.effect, 'ADBE Drop Shadow');
	dropShadowTextB[L.shadowColor].setValue(colorShadow);
	dropShadowTextB[L.direction].setValue(135);
	dropShadowTextB[L.opacity].setValue((70 / 100) * 255);
	dropShadowTextB[L.distance].setValue(offsetTrim);
	dropShadowTextB[L.softness].setValue(7);


	// Mask Text Top
	maskTextT.content.addProperty('ADBE Vector Shape - Rect').size.setValue([C.widthVideo, C.heightVideo]);
	maskTextT.content.addProperty('ADBE Vector Graphic - Fill').color.setValue(colorBar);
	maskTextT.enabled = false;
	maskTextT.transform.anchorPoint.setValue([-widthVideoHalf, 0]);

	maskTextT.transform.position.setValueAtTime(0.7, [widthVideoHalf, heightVideoHalf]);
	maskTextT.transform.position.setValueAtTime(2, [widthVideoHalf - (widthTextT / 2 + offsetTrim), heightVideoHalf]);
	SetEase(maskTextT.transform.position, 1, 2, Ease1);

	// Mask Text Bottom
	maskTextB.content.addProperty('ADBE Vector Shape - Rect').size.setValue([C.widthVideo, C.heightVideo]);
	maskTextB.content.addProperty('ADBE Vector Graphic - Fill').color.setValue(colorBar);
	maskTextB.enabled = false;
	maskTextB.transform.anchorPoint.setValue([+widthVideoHalf, 0]);

	maskTextB.transform.position.setValueAtTime(0.7, [widthVideoHalf, heightVideoHalf]);
	maskTextB.transform.position.setValueAtTime(2, [widthVideoHalf + (widthTextB / 2 + offsetTrim), heightVideoHalf]);
	SetEase(maskTextB.transform.position, 1, 2, Ease1);


	const widthTextMax = Math.max(widthTextT, widthTextB);


	const shapeBar = AddShape(compTitle.layers, 'shape-bars');

	const barT = AddProperty(shapeBar.content, 'ADBE Vector Group', 'bar-top');
	AddProperty(barT.content, 'ADBE Vector Shape - Rect').size.setValue([10, fontSize]);
	AddProperty(barT.content, 'ADBE Vector Graphic - Fill').color.setValue(colorBar);

	barT.transform.anchorPoint.setValue([0, fontSizeHalf]);
	barT.transform.scale.setValueAtTime(0, [100, 0]);
	barT.transform.scale.setValueAtTime(1, [100, 100]);
	SetEase(barT.transform.scale, 1, 2, Ease1);
	barT.transform.rotation.setValueAtTime(0, -270);
	barT.transform.rotation.setValueAtTime(1, 0);
	SetEase(barT.transform.rotation, 1, 2, Ease1);
	barT.transform.position.setValueAtTime(0.7, [0, 0]);
	barT.transform.position.setValueAtTime(2, [-(widthTextMax / 2 + offsetBar), 0]);
	SetEase(barT.transform.position, 1, 2, Ease1);


	const barB = AddProperty(shapeBar.content, 'ADBE Vector Group', 'bar-bottom');
	barB.content.addProperty('ADBE Vector Shape - Rect').size.setValue([10, fontSize]);
	barB.content.addProperty('ADBE Vector Graphic - Fill').color.setValue(colorBar);

	barB.transform.anchorPoint.setValue([0, -fontSizeHalf]);
	barB.transform.scale.setValueAtTime(0, [100, 0]);
	barB.transform.scale.setValueAtTime(1, [100, 100]);
	SetEase(barB.transform.scale, 1, 2, Ease1);
	barB.transform.rotation.setValueAtTime(0, -270);
	barB.transform.rotation.setValueAtTime(1, 0);
	SetEase(barB.transform.rotation, 1, 2, Ease1);
	barB.transform.position.setValueAtTime(0.7, [0, 0]);
	barB.transform.position.setValueAtTime(2, [+(widthTextMax / 2 + offsetBar), 0]);
	SetEase(barB.transform.position, 1, 2, Ease1);


	return [compTitle, widthTextMax / 2, fontSize, offsetBar];
};