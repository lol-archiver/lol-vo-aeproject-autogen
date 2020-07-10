P.addTitle = function addTitle() {
	var layerSplashStart = T.compMain.layers.add(F(C.path.splash), D.full);
	layerSplashStart.transform.scale.setValueAtTime(0, [200, 200]);
	layerSplashStart.transform.scale.setValueAtTime(D.title - 5, [160, 160]);

	var effectBlurSplash = layerSplashStart.effect.addProperty('ADBE Box Blur2');
	effectBlurSplash.iterations.setValue(D.title);
	effectBlurSplash.blurRadius.setValueAtTime(0, 0);
	effectBlurSplash.blurRadius.setValueAtTime(D.title - 1, 0);
	effectBlurSplash.blurRadius.setValueAtTime(D.title, 7);

	var layerTitle = T.compMain.layers.addText(C.champion.title);
	layerTitle.outPoint = D.title + 0.4;
	layerTitle.transform.position.setValue([40, 150]);
	layerTitle.transform.opacity.setValueAtTime(0, 100);
	layerTitle.transform.opacity.setValueAtTime(D.title - 5, 100);
	layerTitle.transform.opacity.setValueAtTime(D.title - 4, 0);

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