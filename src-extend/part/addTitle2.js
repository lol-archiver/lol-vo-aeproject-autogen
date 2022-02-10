P.addTitle2 = function addTitle2() {
	D.title = 3;

	var offsetBar = 80;
	var offsetText = 12;
	var offsetTrim = 10;
	var fontSize = 100;

	var fontSizeHalf = fontSize / 2;
	var widthVideoHalf = C.widthVideo / 2;
	var heightVideoHalf = C.heightVideo / 2;

	var colorBar = T.rgb(31, 170, 241);
	var colorText = T.rgb(255, 250, 250);
	var colorShadow = T.rgb(0, 0, 0);


	var compTitle = T.ensureComp('comp-title', D.title, T.dirComp);


	var textT = AddText(compTitle.layers, I.title1, 'text-top');
	var maskTextT = AddShape(compTitle.layers, 'mask-text-top');
	var textB = AddText(compTitle.layers, I.title2, 'text-bottom');
	var maskTextB = AddShape(compTitle.layers, 'mask-text-bottom');

	// Text Top
	textT.trackMatteType = TrackMatteType.ALPHA;

	var textSourceT = textT.sourceText.value;
	textSourceT.resetCharStyle();
	textSourceT.fontSize = fontSize;
	textSourceT.fillColor = colorText;
	textSourceT.font = 'Source Han Mono SC';
	textSourceT.applyStroke = true;
	textSourceT.strokeColor = colorText;
	textSourceT.strokeWidth = 4;
	textT.sourceText.setValue(textSourceT);

	var rectSourceT = textT.sourceRectAtTime(0, false);
	var widthTextT = rectSourceT.width;

	textT.transform.anchorPoint.setValue([widthTextT, -(fontSizeHalf - offsetText)]);

	textT.transform.position.setValueAtTime(0.7, [widthVideoHalf - offsetTrim, heightVideoHalf - fontSizeHalf]);
	textT.transform.position.setValueAtTime(2, [widthVideoHalf + (widthTextT / 2), heightVideoHalf - fontSizeHalf]);
	SetEase(textT.transform.position, 1, 2, Ease1);

	var dropShadowTextT = AddProperty(textT.effect, 'ADBE Drop Shadow');
	dropShadowTextT[LL.shadowColor].setValue(colorShadow);
	dropShadowTextT[LL.direction].setValue(135);
	dropShadowTextT[LL.opacity].setValue((70 / 100) * 255);
	dropShadowTextT[LL.distance].setValue(offsetTrim);
	dropShadowTextT[LL.softness].setValue(7);

	// Text Bottom
	textB.trackMatteType = TrackMatteType.ALPHA;

	var textSourceB = textB.sourceText.value;
	textSourceB.resetCharStyle();
	textSourceB.fontSize = fontSize;
	textSourceB.fillColor = colorText;
	textSourceB.font = 'Source Han Mono SC';
	textSourceB.applyStroke = true;
	textSourceB.strokeColor = colorText;
	textSourceB.strokeWidth = 4;
	textB.sourceText.setValue(textSourceB);

	var rectSourceB = textB.sourceRectAtTime(0, false);
	var widthTextB = rectSourceB.width;

	textB.transform.anchorPoint.setValue([0, -(fontSizeHalf - offsetText)]);

	textB.transform.position.setValueAtTime(0.7, [widthVideoHalf + offsetTrim, heightVideoHalf + fontSizeHalf]);
	textB.transform.position.setValueAtTime(2, [widthVideoHalf - (widthTextB / 2), heightVideoHalf + fontSizeHalf]);
	SetEase(textB.transform.position, 1, 2, Ease1);

	var dropShadowTextB = AddProperty(textB.effect, 'ADBE Drop Shadow');
	dropShadowTextB[LL.shadowColor].setValue(colorShadow);
	dropShadowTextB[LL.direction].setValue(135);
	dropShadowTextB[LL.opacity].setValue((70 / 100) * 255);
	dropShadowTextB[LL.distance].setValue(offsetTrim);
	dropShadowTextB[LL.softness].setValue(7);


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


	var widthTextMax = Math.max(widthTextT, widthTextB);


	var shapeBar = AddShape(compTitle.layers, 'shape-bars');

	var barT = AddProperty(shapeBar.content, 'ADBE Vector Group', 'bar-top');
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


	var barB = AddProperty(shapeBar.content, 'ADBE Vector Group', 'bar-bottom');
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