
var ease1 = new KeyframeEase(0, 75);
var ease2 = new KeyframeEase(0, 100);
var setEase = function(propertySpec, key1, key2, ease) {
	var length = propertySpec.keyInTemporalEase(key1).length;
	var eases = length == 2 ? [ease, ease] : (length == 3 ? [ease, ease, ease] : [ease]);

	propertySpec.setTemporalEaseAtKey(key1, propertySpec.keyInTemporalEase(key1), eases);
	propertySpec.setTemporalEaseAtKey(key2, eases, propertySpec.keyOutTemporalEase(key2));
};

P.addTitle2 = function addOpener2() {
	D.opener = 10;

	var isLandscape = C.widthVideo > C.heightVideo;

	var compTitler = T.ensureComp('comp-titler', D.opener, T.dirComp);

	var avLayerOpenerMain = T.compMain.layers.add(compTitler, D.opener);
	avLayerOpenerMain.startTime = 6;


	var textTop = compTitler.layers.addText('\u70bc\u91d1\u7537\u7235');
	textTop.trackMatteType = TrackMatteType.ALPHA;
	textTop.name = 'text-top';

	var textSourceTop = textTop.sourceText.value;
	textSourceTop.resetCharStyle();
	textSourceTop.fontSize = 100;
	textSourceTop.fillColor = T.rgb(255, 250, 250);
	textSourceTop.font = 'Source Han Mono SC';
	textSourceTop.applyStroke = true;
	textSourceTop.strokeColor = T.rgb(255, 250, 250);
	textSourceTop.strokeWidth = 4;
	textTop.sourceText.setValue(textSourceTop);

	var rectSourceTop = textTop.sourceRectAtTime(0, false);
	var widthTextTop = rectSourceTop.width;
	var heightTextTop = 100;

	textTop.transform.anchorPoint.setValue([widthTextTop, (4 + 4) * 2]);

	textTop.transform.position.setValueAtTime(1.7, [C.widthVideo / 2, C.heightVideo / 2]);
	textTop.transform.position.setValueAtTime(3, [C.widthVideo / 2 + widthTextTop / 2, C.heightVideo / 2]);
	setEase(textTop.transform.position, 1, 2, ease1);


	var maskTextTop = compTitler.layers.addShape();
	maskTextTop.name = 'mask-text-top';
	maskTextTop.content.addProperty('ADBE Vector Shape - Rect').size.setValue([C.widthVideo / 2, C.heightVideo]);
	maskTextTop.content.addProperty('ADBE Vector Graphic - Fill').color.setValue(T.rgb(255, 250, 250));
	maskTextTop.enabled = false;
	maskTextTop.transform.anchorPoint.setValue([-C.widthVideo / 4, 0]);

	maskTextTop.transform.position.setValueAtTime(1.7, [C.widthVideo / 2, C.heightVideo / 2]);
	maskTextTop.transform.position.setValueAtTime(3, [C.widthVideo / 2 - widthTextTop / 2, C.heightVideo / 2]);
	setEase(maskTextTop.transform.position, 1, 2, ease1);




	var shapeLinear = compTitler.layers.addShape();
	shapeLinear.name = 'shape-linear';

	var linearT = shapeLinear.content.addProperty('ADBE Vector Group');
	linearT.content.addProperty('ADBE Vector Shape - Rect').size.setValue([10, heightTextTop]);
	linearT.content.addProperty('ADBE Vector Graphic - Fill').color.setValue(T.rgb(255, 255, 255));

	linearT.name = 'linear-top';

	linearT.transform.anchorPoint.setValue([0, -heightTextTop / 2]);
	linearT.transform.scale.setValueAtTime(0, [100, 0]);
	linearT.transform.scale.setValueAtTime(2, [100, 100]);
	setEase(linearT.transform.scale, 1, 2, ease1);
	linearT.transform.rotation.setValueAtTime(0, -270);
	linearT.transform.rotation.setValueAtTime(2, 0);
	setEase(linearT.transform.rotation, 1, 2, ease1);
	linearT.transform.position.setValueAtTime(1.7, [0, 0]);
	linearT.transform.position.setValueAtTime(3, [0 + 300, 0]);
	setEase(linearT.transform.position, 1, 2, ease1);


	var linearB = shapeLinear.content.addProperty('ADBE Vector Group');
	linearB.content.addProperty('ADBE Vector Shape - Rect').size.setValue([10, heightTextTop]);
	linearB.content.addProperty('ADBE Vector Graphic - Fill').color.setValue(T.rgb(255, 250, 250));

	linearB.name = 'linear-bottom';

	linearB.transform.anchorPoint.setValue([0, heightTextTop / 2]);
	linearB.transform.scale.setValueAtTime(0, [100, 0]);
	linearB.transform.scale.setValueAtTime(2, [100, 100]);
	setEase(linearB.transform.scale, 1, 2, ease1);
	linearB.transform.rotation.setValueAtTime(0, -270);
	linearB.transform.rotation.setValueAtTime(2, 0);
	setEase(linearB.transform.rotation, 1, 2, ease1);
	linearB.transform.position.setValueAtTime(1.7, [0, 0]);
	linearB.transform.position.setValueAtTime(3, [0 - 300, 0]);
	setEase(linearB.transform.position, 1, 2, ease1);





	compTitler.openInViewer();

	return compTitler;
};