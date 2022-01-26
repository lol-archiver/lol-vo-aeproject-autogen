var dirSplash = 'D:/Desktop/splash/';

var splashesOpener = [
	dirSplash + '221000.jpg',
	dirSplash + '81025.jpg',
	dirSplash + '238031.jpg',
	dirSplash + '51000.jpg',
	dirSplash + '157055.jpg',
	dirSplash + '157054.jpg',
	dirSplash + '777019.jpg',

	dirSplash + '221000.jpg',
	dirSplash + '221001.jpg',
	dirSplash + '166000.jpg',
	dirSplash + '166001.jpg',
	dirSplash + '67025.jpg',
	dirSplash + '104035.jpg',
	dirSplash + '711000.jpg',
	dirSplash + '711001.jpg',
	dirSplash + '36000.jpg',
	dirSplash + '36003.jpg',
	dirSplash + '28024.jpg'
];

var ease1 = new KeyframeEase(0, 75);
var ease2 = new KeyframeEase(0, 100);
var setEase = function(propertySpec, key1, key2, ease) {
	var length = propertySpec.keyInTemporalEase(key1).length;
	var eases = length == 2 ? [ease, ease] : (length == 3 ? [ease, ease, ease] : [ease]);

	propertySpec.setTemporalEaseAtKey(key1, propertySpec.keyInTemporalEase(key1), eases);
	propertySpec.setTemporalEaseAtKey(key2, eases, propertySpec.keyOutTemporalEase(key2));
};

P.addOpener2 = function addOpener2() {
	D.opener = 10;

	var compOpener = T.ensureComp('comp-opener', D.opener, T.dirComp);
	var layerOpener = compOpener.layers;

	var avLayerOpenerMain = T.compMain.layers.add(compOpener, D.opener);
	avLayerOpenerMain.stretch = 80;

	avLayerOpenerMain.scale.setValueAtTime(5, [100, 100]);
	avLayerOpenerMain.scale.setValueAtTime(7, [300, 300]);
	setEase(avLayerOpenerMain.scale, 1, 2, ease1);


	var widthGrid = C.widthVideo / 3;
	var heightGrid2 = C.heightVideo / 2;
	var heightGrid3 = C.heightVideo / 3;
	var wGrid = function(grid, offset) { return widthGrid * (grid - 1 + (offset || 0)); };
	var hGrid2 = function(grid, offset) { return heightGrid2 * (grid - 1 + (offset || 0)); };
	var hGrid3 = function(grid, offset) { return heightGrid3 * (grid - 1 + (offset || 0)); };


	var widthSplash = 1215;
	var heightSplash = 717;
	var wScaleGrid = widthGrid / widthSplash * 100;
	var hScaleGrid2 = heightGrid2 / heightSplash * 100;
	var hScaleGrid3 = heightGrid3 / heightSplash * 100;


	// splash-opener-top-left
	var compTL = T.ensureComp('subcomp-splash-opener-top-left', D.opener, T.dirComp, widthGrid, heightGrid2);
	layerOpener.add(compTL, D.opener).position.setValue([wGrid(1, 0.5), hGrid2(1, 0.5)]);

	var splashTL = compTL.layers.add(F(splashesOpener[1], T.dirImage), D.opener); splashTL.name = 'splash-opener-top-left';
	splashTL.scale.setValue([hScaleGrid2, hScaleGrid2]);

	splashTL.position.setValueAtTime(0, [wGrid(1, 0.5), hGrid2(2, 0.5)]);
	splashTL.position.setValueAtTime(1, [wGrid(1, 0.5), hGrid2(1, 0.5)]);
	setEase(splashTL.position, 1, 2, ease1);

	// splash-opener-bottom-left
	var compBL = T.ensureComp('subcomp-splash-opener-bottom-left', D.opener, T.dirComp, widthGrid, heightGrid2);
	layerOpener.add(compBL, D.opener).position.setValue([wGrid(1, 0.5), hGrid2(2, 0.5)]);

	var splashBL = compBL.layers.add(F(splashesOpener[2], T.dirImage), D.opener); splashBL.name = 'splash-opener-bottom-left';
	splashBL.scale.setValue([hScaleGrid2, hScaleGrid2]);

	splashBL.position.setValueAtTime(0, [wGrid(1, 0.5), hGrid2(0, 0.5)]);
	splashBL.position.setValueAtTime(1, [wGrid(1, 0.5), hGrid2(1, 0.5)]);
	setEase(splashBL.position, 1, 2, ease1);


	// splash-opener-top-right
	var compTR = T.ensureComp('subcomp-splash-opener-top-right', D.opener, T.dirComp, widthGrid, heightGrid2);
	layerOpener.add(compTR, D.opener).position.setValue([wGrid(3, 0.5), hGrid2(1, 0.5)]);

	var splashTR = compTR.layers.add(F(splashesOpener[3], T.dirImage), D.opener); splashTR.name = 'splash-opener-top-right';
	splashTR.scale.setValue([hScaleGrid2, hScaleGrid2]);

	splashTR.position.setValueAtTime(0, [wGrid(1, 0.5), hGrid2(2, 0.5)]);
	splashTR.position.setValueAtTime(1, [wGrid(1, 0.5), hGrid2(1, 0.5)]);
	setEase(splashTR.position, 1, 2, ease1);

	// splash-opener-bottom-right
	var compBR = T.ensureComp('subcomp-splash-opener-bottom-right', D.opener, T.dirComp, widthGrid, heightGrid2);
	layerOpener.add(compBR, D.opener).position.setValue([wGrid(3, 0.5), hGrid2(2, 0.5)]);

	var splashBR = compBR.layers.add(F(splashesOpener[4], T.dirImage), D.opener); splashBR.name = 'splash-opener-bottom-right';
	splashBR.scale.setValue([hScaleGrid2, hScaleGrid2]);

	splashBR.position.setValueAtTime(0, [wGrid(1, 0.5), hGrid2(0, 0.5)]);
	splashBR.position.setValueAtTime(1, [wGrid(1, 0.5), hGrid2(1, 0.5)]);
	setEase(splashBR.position, 1, 2, ease1);


	// splash-opener-top-center
	var compTC = T.ensureComp('subcomp-splash-opener-top-center', D.opener, T.dirComp, widthGrid, heightGrid3);
	var avCompTC = layerOpener.add(compTC, D.opener);
	avCompTC.position.setValueAtTime(0, [wGrid(2, 0.5), hGrid3(1.5, 0.5)]);
	avCompTC.position.setValueAtTime(1, [wGrid(2, 0.5), hGrid3(1, 0.5)]);
	setEase(avCompTC.position, 1, 2, ease1);

	var splashTC = compTC.layers.add(F(splashesOpener[5], T.dirImage), D.opener); splashTC.name = 'splash-opener-top-center';
	splashTC.scale.setValue([wScaleGrid, hScaleGrid3]);

	splashTC.position.setValueAtTime(0, [wGrid(1, 0.5), hGrid3(2, 0.5)]);
	splashTC.position.setValueAtTime(1, [wGrid(1, 0.5), hGrid3(1, 0.5)]);
	setEase(splashTC.position, 1, 2, ease1);


	// splash-opener-bottom-center
	var compBC = T.ensureComp('subcomp-splash-opener-bottom-center', D.opener, T.dirComp, widthGrid, heightGrid3);
	var avCompBC = layerOpener.add(compBC, D.opener);
	avCompBC.position.setValueAtTime(0, [wGrid(2, 0.5), hGrid3(2.5, 0.5)]);
	avCompBC.position.setValueAtTime(1, [wGrid(2, 0.5), hGrid3(3, 0.5)]);
	setEase(avCompBC.position, 1, 2, ease1);

	var splashBC = compBC.layers.add(F(splashesOpener[6], T.dirImage), D.opener); splashBC.name = 'splash-opener-bottom-center';
	splashBC.scale.setValue([wScaleGrid, hScaleGrid3]);

	splashBC.position.setValueAtTime(0, [wGrid(1, 0.5), hGrid3(0, 0.5)]);
	splashBC.position.setValueAtTime(1, [wGrid(1, 0.5), hGrid3(1, 0.5)]);
	setEase(splashBC.position, 1, 2, ease1);


	// splash-opener-middle-center
	var compMC = T.ensureComp('subcomp-splash-opener-middle-center', D.opener, T.dirComp, widthGrid, heightGrid3);
	var avCompMC = layerOpener.add(compMC, D.opener);
	avCompMC.position.setValue([wGrid(2, 0.5), hGrid3(2, 0.5)]);

	avCompMC.scale.setValueAtTime(0, [100, 0]);
	avCompMC.scale.setValueAtTime(1, [100, 100]);
	setEase(avCompMC.scale, 1, 2, ease1);

	var splashMC = compMC.layers.add(F(splashesOpener[0], T.dirImage), D.opener); splashMC.name = 'splash-opener-middle-center';
	splashMC.scale.setValue([wScaleGrid, hScaleGrid3]);


	// mask-opener
	var maskMC = layerOpener.addSolid(T.rgb(45, 45, 45), 'mask-opener', C.widthVideo, C.heightVideo, 1);
	maskMC.startTime = 1;
	maskMC.outPoint = 5;
	maskMC.adjustmentLayer = true;

	maskMC.opacity.setValueAtTime(1, 0);
	maskMC.opacity.setValueAtTime(2, 100);
	setEase(maskMC.opacity, 1, 2, ease1);
	maskMC.opacity.setValueAtTime(4, 100);
	maskMC.opacity.setValueAtTime(5, 0);
	setEase(maskMC.opacity, 3, 4, ease1);

	var blurLogoMask = maskMC.effect.addProperty('ADBE Box Blur2');
	blurLogoMask.blurRadius.setValue(14);


	// logo-font
	var logoFont = layerOpener.add(F(dirSplash + 'logo.png', T.dirImage), 6); logoFont.name = 'logo-font';
	logoFont.startTime = 1;
	logoFont.outPoint = 5;
	logoFont.scale.setValue([50, 50]);

	logoFont.opacity.setValueAtTime(1, 0);
	logoFont.opacity.setValueAtTime(2, 100);
	setEase(logoFont.opacity, 1, 2, ease2);
	logoFont.opacity.setValueAtTime(4, 100);
	logoFont.opacity.setValueAtTime(5, 0);
	setEase(logoFont.opacity, 3, 4, ease1);


	// logo-image
	var logoImage = layerOpener.add(F(dirSplash + 'jugong480-500.mp4', T.dirImage), 6); logoImage.name = 'logo-image';
	logoImage.startTime = 1;
	logoImage.outPoint = 5;
	logoImage.scale.setValue([40, 40]);
	logoImage.position.setValue([720, 540]);

	logoImage.opacity.setValueAtTime(1, 0);
	logoImage.opacity.setValueAtTime(2, 100);
	setEase(logoImage.opacity, 1, 2, ease2);
	logoImage.opacity.setValueAtTime(4, 100);
	logoImage.opacity.setValueAtTime(5, 0);
	setEase(logoImage.opacity, 3, 4, ease1);

	var colorKeyLogoImage = logoImage.effect.addProperty('ADBE Color Key');
	colorKeyLogoImage.keyColor.setValue(T.rgb(255, 255, 255));
	colorKeyLogoImage.colorTolerance.setValue(64);


	return compOpener;
};