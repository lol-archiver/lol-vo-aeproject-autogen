var dirSplash = 'D:/Desktop/splash/';

var splashesOpener = [
	[dirSplash + '888000.jpg', -70],
	[dirSplash + '81025.jpg', -40],
	[dirSplash + '238031.jpg', -120],
	[dirSplash + '51000.jpg', -380],
	[dirSplash + '157055.jpg', -210],
	[dirSplash + '157054.jpg', -140],
	[dirSplash + '777019.jpg', -60],

	[dirSplash + '221000.jpg', -70],
	[dirSplash + '221000.jpg', 0],
	[dirSplash + '221001.jpg', 0],
	[dirSplash + '166000.jpg', 0],
	[dirSplash + '166001.jpg', 0],
	[dirSplash + '67025.jpg', 0],
	[dirSplash + '104035.jpg', 0],
	[dirSplash + '711000.jpg', 0],
	[dirSplash + '711001.jpg', 0],
	[dirSplash + '36000.jpg', 0],
	[dirSplash + '36003.jpg', 0],
	[dirSplash + '28024.jpg', 0]
];

P.addOpener2 = function addOpener2() {
	D.opener = 10;

	var compOpener = T.ensureComp('comp-opener', D.opener, T.dirComp);
	var layerOpener = compOpener.layers;


	var widthGrid = C.widthVideo / 3;
	var heightGrid2 = C.heightVideo / 2;
	var heightGrid3 = C.heightVideo / 3;
	var wGrid = function(grid, offset) { return widthGrid * (grid - 1 + (offset || 0)); };
	var hGrid2 = function(grid, offset) { return heightGrid2 * (grid - 1 + (offset || 0)); };
	var hGrid3 = function(grid, offset) { return heightGrid3 * (grid - 1 + (offset || 0)); };


	var widthSplash = 1215;
	var heightSplash = 717;

	var scaleSplash2 = (heightGrid2 / heightSplash) * 100;
	var scaleSplash3 = (C.isLandscape ? widthGrid / widthSplash : heightGrid3 / heightSplash) * 100;


	// splash-opener-tl
	var compTL = T.ensureComp('subcomp-splash-opener-tl', D.opener, T.dirComp, widthGrid, heightGrid2);
	layerOpener.add(compTL, D.opener).position.setValue([wGrid(1, 0.5), hGrid2(1, 0.5)]);

	var splashTL = compTL.layers.add(F(splashesOpener[1][0], T.dirImage), D.opener); splashTL.name = 'splash-opener-tl';
	splashTL.scale.setValue([scaleSplash2, scaleSplash2]);

	splashTL.position.setValueAtTime(0, [wGrid(1, 0.5), hGrid2(2, 0.5)]);
	splashTL.position.setValueAtTime(1, [wGrid(1, 0.5), hGrid2(1, 0.5)]);
	SetEase(splashTL.position, 1, 2, Ease1);

	// splash-opener-bl
	var compBL = T.ensureComp('subcomp-splash-opener-bl', D.opener, T.dirComp, widthGrid, heightGrid2);
	layerOpener.add(compBL, D.opener).position.setValue([wGrid(1, 0.5), hGrid2(2, 0.5)]);

	var infoBL = splashesOpener[2];
	var splashBL = compBL.layers.add(F(infoBL[0], T.dirImage), D.opener); splashBL.name = 'splash-opener-bl';
	splashBL.scale.setValue([scaleSplash2, scaleSplash2]);

	var xBL = splashBL.position.value[0] + (C.isLandscape ? 0 : infoBL[1]);
	splashBL.position.setValueAtTime(0, [xBL, hGrid2(0, 0.5)]);
	splashBL.position.setValueAtTime(1, [xBL, hGrid2(1, 0.5)]);
	SetEase(splashBL.position, 1, 2, Ease1);


	// splash-opener-tr
	var compTR = T.ensureComp('subcomp-splash-opener-tr', D.opener, T.dirComp, widthGrid, heightGrid2);
	layerOpener.add(compTR, D.opener).position.setValue([wGrid(3, 0.5), hGrid2(1, 0.5)]);

	var infoTR = splashesOpener[3];
	var splashTR = compTR.layers.add(F(infoTR[0], T.dirImage), D.opener); splashTR.name = 'splash-opener-tr';
	splashTR.scale.setValue([scaleSplash2, scaleSplash2]);

	var xTR = splashTR.position.value[0] + (C.isLandscape ? 0 : infoTR[1]);
	splashTR.position.setValueAtTime(0, [xTR, hGrid2(2, 0.5)]);
	splashTR.position.setValueAtTime(1, [xTR, hGrid2(1, 0.5)]);
	SetEase(splashTR.position, 1, 2, Ease1);

	// splash-opener-br
	var compBR = T.ensureComp('subcomp-splash-opener-br', D.opener, T.dirComp, widthGrid, heightGrid2);
	layerOpener.add(compBR, D.opener).position.setValue([wGrid(3, 0.5), hGrid2(2, 0.5)]);

	var infoBR = splashesOpener[4];
	var splashBR = compBR.layers.add(F(infoBR[0], T.dirImage), D.opener); splashBR.name = 'splash-opener-br';
	splashBR.scale.setValue([scaleSplash2, scaleSplash2]);

	var xBR = splashBR.position.value[0] + (C.isLandscape ? 0 : infoBR[1]);
	splashBR.position.setValueAtTime(0, [xBR, hGrid2(0, 0.5)]);
	splashBR.position.setValueAtTime(1, [xBR, hGrid2(1, 0.5)]);
	SetEase(splashBR.position, 1, 2, Ease1);


	// splash-opener-tc
	var compTC = T.ensureComp('subcomp-splash-opener-tc', D.opener, T.dirComp, widthGrid, heightGrid3);
	var avCompTC = layerOpener.add(compTC, D.opener);
	avCompTC.position.setValueAtTime(0, [wGrid(2, 0.5), hGrid3(1.5, 0.5)]);
	avCompTC.position.setValueAtTime(1, [wGrid(2, 0.5), hGrid3(1, 0.5)]);
	SetEase(avCompTC.position, 1, 2, Ease1);

	var infoTC = splashesOpener[5];
	var splashTC = compTC.layers.add(F(infoTC[0], T.dirImage), D.opener); splashTC.name = 'splash-opener-tc';
	splashTC.scale.setValue([scaleSplash3, scaleSplash3]);

	var xTC = splashTC.position.value[0] + (C.isLandscape ? 0 : infoTC[1]);
	splashTC.position.setValueAtTime(0, [xTC, hGrid3(2, 0.5)]);
	splashTC.position.setValueAtTime(1, [xTC, hGrid3(1, 0.5)]);
	SetEase(splashTC.position, 1, 2, Ease1);


	// splash-opener-bc
	var compBC = T.ensureComp('subcomp-splash-opener-bc', D.opener, T.dirComp, widthGrid, heightGrid3);
	var avCompBC = layerOpener.add(compBC, D.opener);
	avCompBC.position.setValueAtTime(0, [wGrid(2, 0.5), hGrid3(2.5, 0.5)]);
	avCompBC.position.setValueAtTime(1, [wGrid(2, 0.5), hGrid3(3, 0.5)]);
	SetEase(avCompBC.position, 1, 2, Ease1);

	var infoBC = splashesOpener[6];
	var splashBC = compBC.layers.add(F(infoBC[0], T.dirImage), D.opener); splashBC.name = 'splash-opener-bc';
	splashBC.scale.setValue([scaleSplash3, scaleSplash3]);

	var xBC = splashBC.position.value[0] + (C.isLandscape ? 0 : infoBC[1]);
	splashBC.position.setValueAtTime(0, [xBC, hGrid3(0, 0.5)]);
	splashBC.position.setValueAtTime(1, [xBC, hGrid3(1, 0.5)]);
	SetEase(splashBC.position, 1, 2, Ease1);


	// splash-opener-mc
	var compMC = T.ensureComp('subcomp-splash-opener-mc', D.opener, T.dirComp, widthGrid, heightGrid3);
	var avCompMC = layerOpener.add(compMC, D.opener);
	avCompMC.position.setValue([wGrid(2, 0.5), hGrid3(2, 0.5)]);

	avCompMC.scale.setValueAtTime(0, [100, 0]);
	avCompMC.scale.setValueAtTime(1, [100, 100]);
	SetEase(avCompMC.scale, 1, 2, Ease1);

	var infoMC = splashesOpener[0];
	var splashMC = compMC.layers.add(F(infoMC[0], T.dirImage), D.opener); splashMC.name = 'splash-opener-mc';
	splashMC.scale.setValue([scaleSplash3, scaleSplash3]);

	var xMC = splashMC.position.value[0] + (C.isLandscape ? 0 : infoMC[1]);
	splashMC.position.setValue([xMC, hGrid3(1, 0.5)]);


	// mask-opener
	var maskMC = layerOpener.addSolid(T.rgb(45, 45, 45), 'mask-opener', C.widthVideo, C.heightVideo, 1);
	maskMC.startTime = 1;
	maskMC.outPoint = 5;
	maskMC.adjustmentLayer = true;

	maskMC.opacity.setValueAtTime(1, 0);
	maskMC.opacity.setValueAtTime(2, 100);
	SetEase(maskMC.opacity, 1, 2, Ease1);
	maskMC.opacity.setValueAtTime(4, 100);
	maskMC.opacity.setValueAtTime(5, 0);
	SetEase(maskMC.opacity, 3, 4, Ease1);

	var blurLogoMask = maskMC.effect.addProperty('ADBE Box Blur2');
	blurLogoMask[LL.blurRadius].setValue(14);


	// logo-font
	var logoFont = layerOpener.add(F(dirSplash + 'logo.png', T.dirImage), 6); logoFont.name = 'logo-font';
	logoFont.startTime = 1;
	logoFont.outPoint = 5;
	logoFont.scale.setValue([50, 50]);

	logoFont.opacity.setValueAtTime(1, 0);
	logoFont.opacity.setValueAtTime(2, 100);
	SetEase(logoFont.opacity, 1, 2, Ease2);
	logoFont.opacity.setValueAtTime(4, 100);
	logoFont.opacity.setValueAtTime(5, 0);
	SetEase(logoFont.opacity, 3, 4, Ease1);


	// logo-image
	var logoImage = layerOpener.add(F(dirSplash + 'jugong480-500.mp4', T.dirImage), 6); logoImage.name = 'logo-image';
	logoImage.startTime = 1;
	logoImage.outPoint = 5;
	logoImage.scale.setValue([40, 40]);
	logoImage.position.setValue([C.widthVideo / 2 - 240, C.heightVideo / 2]);

	logoImage.opacity.setValueAtTime(1, 0);
	logoImage.opacity.setValueAtTime(2, 100);
	SetEase(logoImage.opacity, 1, 2, Ease2);
	logoImage.opacity.setValueAtTime(4, 100);
	logoImage.opacity.setValueAtTime(5, 0);
	SetEase(logoImage.opacity, 3, 4, Ease1);

	var colorKeyLogoImage = logoImage.effect.addProperty('ADBE Color Key');
	colorKeyLogoImage[LL.keyColor].setValue(T.rgb(255, 255, 255));
	colorKeyLogoImage[LL.colorTolerance].setValue(64);


	return [compOpener, (C.isLandscape ? 0 : infoMC[1])];
};