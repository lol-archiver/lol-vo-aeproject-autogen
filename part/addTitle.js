P.addTitle = function addTitle() {
	var layerSplashStart = T.compMain.layers.add(F(C.path.splash), D.full);
	layerSplashStart.transform.scale.setValueAtTime(0, [200, 200]);
	layerSplashStart.transform.scale.setValueAtTime(2, [160, 160]);

	var effectBlurSplash = layerSplashStart.effect.addProperty('ADBE Box Blur2');
	effectBlurSplash.iterations.setValue(D.title);
	effectBlurSplash.blurRadius.setValueAtTime(0, 0);
	effectBlurSplash.blurRadius.setValueAtTime(2, 0);
	effectBlurSplash.blurRadius.setValueAtTime(4, 7);

	var layerTitle = T.compMain.layers.addText(C.champion.nameShow);
	layerTitle.transform.position.setValue([40, 150]);
	layerTitle.transform.opacity.setValueAtTime(0, 100);
	layerTitle.transform.opacity.setValueAtTime(2, 40);
	layerTitle.transform.opacity.setValueAtTime(4, 0);

	var textDocTitle = layerTitle.sourceText.value;
	textDocTitle.resetCharStyle();
	textDocTitle.fontSize = 100;
	textDocTitle.fillColor = T.rgb(255, 250, 250);
	textDocTitle.font = 'Source Han Mono';
	textDocTitle.applyStroke = true;
	textDocTitle.strokeColor = T.rgb(255, 250, 250);
	textDocTitle.strokeWidth = 4;

	layerTitle.sourceText.setValue(textDocTitle);
};