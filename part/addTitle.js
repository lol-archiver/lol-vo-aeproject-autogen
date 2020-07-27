P.addTitle = function addTitle() {
	var layerSplashStart1 = T.compMain.layers.add(F(C.path.splash), D.full);
	var layerSplashStart2 = T.compMain.layers.add(F(C.path.splash), D.full);
	layerSplashStart1.transform.scale.setValueAtTime(0, [200, 200]);
	layerSplashStart2.transform.scale.setValueAtTime(0, [200, 200]);
	layerSplashStart1.transform.scale.setValueAtTime(D.title - 5, [160, 160]);
	layerSplashStart2.transform.scale.setValueAtTime(D.title - 5, [160, 160]);

	var effectBlurSplash1 = layerSplashStart1.effect.addProperty('ADBE Box Blur2');
	var effectBlurSplash2 = layerSplashStart2.effect.addProperty('ADBE Box Blur2');
	effectBlurSplash1.iterations.setValue(D.title);
	effectBlurSplash2.iterations.setValue(D.title);
	effectBlurSplash1.blurRadius.setValueAtTime(0, 0);
	effectBlurSplash2.blurRadius.setValueAtTime(0, 0);
	effectBlurSplash1.blurRadius.setValueAtTime(D.title - 1, 0);
	effectBlurSplash2.blurRadius.setValueAtTime(D.title - 1, 0);
	effectBlurSplash1.blurRadius.setValueAtTime(D.title, 7);
	effectBlurSplash2.blurRadius.setValueAtTime(D.title, 7);

	var layerTitle1 = T.compMain.layers.addText(C.champion.title);
	var layerTitle2 = T.compMain.layers.addText(C.champion.title);
	layerTitle1.outPoint = D.title + 0.4;
	layerTitle2.outPoint = D.title + 0.4;
	layerTitle1.transform.position.setValue([40 + 2, 150 + 2]);
	layerTitle2.transform.position.setValue([40, 150]);
	layerTitle1.transform.opacity.setValueAtTime(0, 100);
	layerTitle2.transform.opacity.setValueAtTime(0, 100);
	layerTitle1.transform.opacity.setValueAtTime(D.title - 5, 100);
	layerTitle2.transform.opacity.setValueAtTime(D.title - 5, 100);
	layerTitle1.transform.opacity.setValueAtTime(D.title - 4, 0);
	layerTitle2.transform.opacity.setValueAtTime(D.title - 4, 0);

	var textDocTitle1 = layerTitle1.sourceText.value;
	var textDocTitle2 = layerTitle2.sourceText.value;
	textDocTitle1.resetCharStyle();
	textDocTitle2.resetCharStyle();
	textDocTitle1.fontSize = 100;
	textDocTitle2.fontSize = 100;
	textDocTitle1.fillColor = T.rgb(4, 4, 4);
	textDocTitle2.fillColor = T.rgb(255, 250, 250);
	textDocTitle1.font = 'Source Han Mono';
	textDocTitle2.font = 'Source Han Mono';
	textDocTitle1.applyStroke = true;
	textDocTitle2.applyStroke = true;
	textDocTitle1.strokeColor = T.rgb(4, 4, 4);
	textDocTitle2.strokeColor = T.rgb(255, 250, 250);
	textDocTitle1.strokeWidth = 4;
	textDocTitle2.strokeWidth = 4;

	layerTitle1.sourceText.setValue(textDocTitle1);
	layerTitle2.sourceText.setValue(textDocTitle2);
};