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

P.addOpener2 = function addOpener2() {
	var compOpener = T.ensureComp('Opener', 10, app.project);
	var layerOpener = compOpener.layers;
	var avLayerOpenerMain = T.compMain.layers.add(compOpener, 10);
	avLayerOpenerMain.startTime = 1;
	avLayerOpenerMain.stretch = 50;


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


	// var splashOpener07 = layerOpener.add(F(splashesOpener[7], T.dirImage), D.full); splashOpener07.name = 'splash-opener-7';
	// var splashOpener08 = layerOpener.add(F(splashesOpener[8], T.dirImage), D.full); splashOpener08.name = 'splash-opener-8';
	// var splashOpener09 = layerOpener.add(F(splashesOpener[9], T.dirImage), D.full); splashOpener09.name = 'splash-opener-9';
	// var splashOpener10 = layerOpener.add(F(splashesOpener[10], T.dirImage), D.full); splashOpener10.name = 'splash-opener-10';
	// var splashOpener11 = layerOpener.add(F(splashesOpener[11], T.dirImage), D.full); splashOpener11.name = 'splash-opener-11';
	// var splashOpener12 = layerOpener.add(F(splashesOpener[12], T.dirImage), D.full); splashOpener12.name = 'splash-opener-12';
	// var splashOpener13 = layerOpener.add(F(splashesOpener[13], T.dirImage), D.full); splashOpener13.name = 'splash-opener-13';
	// var splashOpener14 = layerOpener.add(F(splashesOpener[14], T.dirImage), D.full); splashOpener14.name = 'splash-opener-14';
	// var splashOpener15 = layerOpener.add(F(splashesOpener[15], T.dirImage), D.full); splashOpener15.name = 'splash-opener-15';
	// var splashOpener16 = layerOpener.add(F(splashesOpener[16], T.dirImage), D.full); splashOpener16.name = 'splash-opener-16';

	// var splashOpener06 = layerOpener.add(F(splashesOpener[6], T.dirImage), D.full); splashOpener06.name = 'splash-opener-6';
	// var splashOpener05 = layerOpener.add(F(splashesOpener[5], T.dirImage), D.full); splashOpener05.name = 'splash-opener-5';

	// var splashOpener03 = layerOpener.add(F(splashesOpener[3], T.dirImage), D.full); splashOpener03.name = 'splash-opener-3';
	// var splashOpener04 = layerOpener.add(F(splashesOpener[4], T.dirImage), D.full); splashOpener04.name = 'splash-opener-4';


	// var splashOpener02 = layerOpener.add(F(splashesOpener[2], T.dirImage), D.full); splashOpener02.name = 'splash-opener-2';


	var ease1 = new KeyframeEase(0, 75);
	var ease2 = new KeyframeEase(0, 100);
	var setEase = function(propertySpec, key1, key2, ease) {
		var length = propertySpec.keyInTemporalEase(key1).length;
		var eases = length == 2 ? [ease, ease] : (length == 3 ? [ease, ease, ease] : [ease]);

		propertySpec.setTemporalEaseAtKey(key1, propertySpec.keyInTemporalEase(key1), eases);
		propertySpec.setTemporalEaseAtKey(key2, eases, propertySpec.keyOutTemporalEase(key2));
	};


	// splash-opener-top-left
	var compTL = T.ensureComp('comp-splash-opener-top-left', 10, T.dirComp, widthGrid, heightGrid2);
	layerOpener.add(compTL, D.full).position.setValue([wGrid(1, 0.5), hGrid2(1, 0.5)]);

	var splashTL = compTL.layers.add(F(splashesOpener[1], T.dirImage), D.full); splashTL.name = 'splash-opener-top-left';
	splashTL.scale.setValue([hScaleGrid2, hScaleGrid2]);

	splashTL.position.setValueAtTime(0, [wGrid(1, 0.5), hGrid2(2, 0.5)]);
	splashTL.position.setValueAtTime(1, [wGrid(1, 0.5), hGrid2(1, 0.5)]);
	setEase(splashTL.position, 1, 2, ease1);

	// splash-opener-bottom-left
	var compBL = T.ensureComp('comp-splash-opener-bottom-left', 10, T.dirComp, widthGrid, heightGrid2);
	layerOpener.add(compBL, D.full).position.setValue([wGrid(1, 0.5), hGrid2(2, 0.5)]);

	var splashBL = compBL.layers.add(F(splashesOpener[2], T.dirImage), D.full); splashBL.name = 'splash-opener-bottom-left';
	splashBL.scale.setValue([hScaleGrid2, hScaleGrid2]);

	splashBL.position.setValueAtTime(0, [wGrid(1, 0.5), hGrid2(0, 0.5)]);
	splashBL.position.setValueAtTime(1, [wGrid(1, 0.5), hGrid2(1, 0.5)]);
	setEase(splashBL.position, 1, 2, ease1);


	// splash-opener-top-right
	var compTR = T.ensureComp('comp-splash-opener-top-right', 10, T.dirComp, widthGrid, heightGrid2);
	layerOpener.add(compTR, D.full).position.setValue([wGrid(3, 0.5), hGrid2(1, 0.5)]);

	var splashTR = compTR.layers.add(F(splashesOpener[3], T.dirImage), D.full); splashTR.name = 'splash-opener-top-right';
	splashTR.scale.setValue([hScaleGrid2, hScaleGrid2]);

	splashTR.position.setValueAtTime(0, [wGrid(1, 0.5), hGrid2(2, 0.5)]);
	splashTR.position.setValueAtTime(1, [wGrid(1, 0.5), hGrid2(1, 0.5)]);
	setEase(splashTR.position, 1, 2, ease1);

	// splash-opener-bottom-right
	var compBR = T.ensureComp('comp-splash-opener-bottom-right', 10, T.dirComp, widthGrid, heightGrid2);
	layerOpener.add(compBR, D.full).position.setValue([wGrid(3, 0.5), hGrid2(2, 0.5)]);

	var splashBR = compBR.layers.add(F(splashesOpener[4], T.dirImage), D.full); splashBR.name = 'splash-opener-bottom-right';
	splashBR.scale.setValue([hScaleGrid2, hScaleGrid2]);

	splashBR.position.setValueAtTime(0, [wGrid(1, 0.5), hGrid2(0, 0.5)]);
	splashBR.position.setValueAtTime(1, [wGrid(1, 0.5), hGrid2(1, 0.5)]);
	setEase(splashBR.position, 1, 2, ease1);


	// splash-opener-top-center
	var compTC = T.ensureComp('comp-splash-opener-top-center', 10, T.dirComp, widthGrid, heightGrid3);
	var avCompTC = layerOpener.add(compTC, D.full);
	avCompTC.position.setValueAtTime(0, [wGrid(2, 0.5), hGrid3(1.5, 0.5)]);
	avCompTC.position.setValueAtTime(1, [wGrid(2, 0.5), hGrid3(1, 0.5)]);
	setEase(avCompTC.position, 1, 2, ease1);

	var splashTC = compTC.layers.add(F(splashesOpener[5], T.dirImage), D.full); splashTC.name = 'splash-opener-top-center';
	splashTC.scale.setValue([wScaleGrid, hScaleGrid3]);

	splashTC.position.setValueAtTime(0, [wGrid(1, 0.5), hGrid3(2, 0.5)]);
	splashTC.position.setValueAtTime(1, [wGrid(1, 0.5), hGrid3(1, 0.5)]);
	setEase(splashTC.position, 1, 2, ease1);


	// splash-opener-bottom-center
	var compBC = T.ensureComp('comp-splash-opener-bottom-center', 10, T.dirComp, widthGrid, heightGrid3);
	var avCompBC = layerOpener.add(compBC, D.full);
	avCompBC.position.setValueAtTime(0, [wGrid(2, 0.5), hGrid3(2.5, 0.5)]);
	avCompBC.position.setValueAtTime(1, [wGrid(2, 0.5), hGrid3(3, 0.5)]);
	setEase(avCompBC.position, 1, 2, ease1);

	var splashBC = compBC.layers.add(F(splashesOpener[6], T.dirImage), D.full); splashBC.name = 'splash-opener-bottom-center';
	splashBC.scale.setValue([wScaleGrid, hScaleGrid3]);

	splashBC.position.setValueAtTime(0, [wGrid(1, 0.5), hGrid3(0, 0.5)]);
	splashBC.position.setValueAtTime(1, [wGrid(1, 0.5), hGrid3(1, 0.5)]);
	setEase(splashBC.position, 1, 2, ease1);


	// splash-opener-middle-center
	var compMC = T.ensureComp('comp-splash-opener-middle-center', 10, T.dirComp, widthGrid, heightGrid3);
	var avCompMC = layerOpener.add(compMC, D.full);
	avCompMC.position.setValue([wGrid(2, 0.5), hGrid3(2, 0.5)]);

	avCompMC.scale.setValueAtTime(0, [100, 0]);
	avCompMC.scale.setValueAtTime(1, [100, 100]);
	avCompMC.scale.setValueAtTime(3.5, [300, 300]);
	setEase(avCompMC.scale, 1, 2, ease1);
	setEase(avCompMC.scale, 2, 3, ease2);

	var splashMC = compMC.layers.add(F(splashesOpener[0], T.dirImage), D.full); splashMC.name = 'splash-opener-middle-center';
	splashMC.scale.setValue([wScaleGrid, hScaleGrid3]);

	// Logo Mask
	var maskMC = compMC.layers.addSolid(T.rgb(45, 45, 45), 'mask-opener-middle-center', widthGrid, heightGrid3, 1);
	maskMC.adjustmentLayer = true;

	maskMC.opacity.setValueAtTime(3.5, 100);
	maskMC.opacity.setValueAtTime(4, 0);
	setEase(maskMC.opacity, 1, 2, ease1);

	var blurLogoMask = maskMC.effect.addProperty('ADBE Box Blur2');
	blurLogoMask.blurRadius.setValue(14);


	// Logo
	var logo = layerOpener.add(F(dirSplash + 'logo.png', T.dirImage), 6); logo.name = 'logo';
	logo.startTime = 1;
	logo.scale.setValue([50, 50]);

	logo.opacity.setValueAtTime(1, 0);
	logo.opacity.setValueAtTime(2, 100);
	setEase(logo.opacity, 1, 2, ease2);
	logo.opacity.setValueAtTime(4, 0);
	setEase(logo.opacity, 2, 3, ease1);


	// Me
	var meStatic = layerOpener.add(F(dirSplash + '4n.png', T.dirImage), 6); meStatic.name = 'me-static';
	meStatic.startTime = 1;
	meStatic.scale.setValue([40, 40]);
	meStatic.position.setValue([720, 540]);

	meStatic.opacity.setValueAtTime(1, 0);
	meStatic.opacity.setValueAtTime(2, 100);
	meStatic.opacity.setValueAtTime(2 + 0.0001, 0);
	meStatic.opacity.setValueAtTime(3.5 - 0.0001, 0);
	meStatic.opacity.setValueAtTime(3.5, 100);
	setEase(meStatic.opacity, 1, 2, ease2);
	meStatic.opacity.setValueAtTime(3.6, 0);
	setEase(meStatic.opacity, 5, 6, ease1);


	var meJugong = layerOpener.add(F(dirSplash + 'jugong480.gif', T.dirImage), 6); meJugong.name = 'me-jugong';
	meJugong.startTime = 2;
	meJugong.scale.setValue([40, 40]);
	meJugong.position.setValue([720, 540]);





	compOpener.openInViewer();


	return compOpener;
};