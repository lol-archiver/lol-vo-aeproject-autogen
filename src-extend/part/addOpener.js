var dirSplash = 'D:/Desktop/splash/';

var splashesOpener = [
	'',
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

P.addOpener = function addOpener() {
	var compOpener = T.ensureComp('Opener', 10, app.project);
	var layerOpener = compOpener.layers;
	var avLayerOpenerMain = T.compMain.layers.add(compOpener, 10);
	avLayerOpenerMain.startTime = 1;
	avLayerOpenerMain.stretch = 50;


	var widthMainGrid = C.widthVideo / 4;
	var heightMainGrid = C.heightVideo / 4;
	var wGrid = function(grid, offset) { return widthMainGrid * (grid - 1 + (offset || 0)); };
	var hGrid = function(grid, offset) { return heightMainGrid * (grid - 1 + (offset || 0)); };


	var widthSplash = 1215;
	var heightSplash = 717;
	var wScaleGrid = widthMainGrid / widthSplash * 100;
	var hScaleGrid = heightMainGrid / heightSplash * 100;


	var splashOpener07 = layerOpener.add(F(splashesOpener[7], T.dirImage), D.full); splashOpener07.name = 'splash-opener-7';
	var splashOpener08 = layerOpener.add(F(splashesOpener[8], T.dirImage), D.full); splashOpener08.name = 'splash-opener-8';
	var splashOpener09 = layerOpener.add(F(splashesOpener[9], T.dirImage), D.full); splashOpener09.name = 'splash-opener-9';
	var splashOpener10 = layerOpener.add(F(splashesOpener[10], T.dirImage), D.full); splashOpener10.name = 'splash-opener-10';
	var splashOpener11 = layerOpener.add(F(splashesOpener[11], T.dirImage), D.full); splashOpener11.name = 'splash-opener-11';
	var splashOpener12 = layerOpener.add(F(splashesOpener[12], T.dirImage), D.full); splashOpener12.name = 'splash-opener-12';
	var splashOpener13 = layerOpener.add(F(splashesOpener[13], T.dirImage), D.full); splashOpener13.name = 'splash-opener-13';
	var splashOpener14 = layerOpener.add(F(splashesOpener[14], T.dirImage), D.full); splashOpener14.name = 'splash-opener-14';
	var splashOpener15 = layerOpener.add(F(splashesOpener[15], T.dirImage), D.full); splashOpener15.name = 'splash-opener-15';
	var splashOpener16 = layerOpener.add(F(splashesOpener[16], T.dirImage), D.full); splashOpener16.name = 'splash-opener-16';

	var splashOpener06 = layerOpener.add(F(splashesOpener[6], T.dirImage), D.full); splashOpener06.name = 'splash-opener-6';
	var splashOpener05 = layerOpener.add(F(splashesOpener[5], T.dirImage), D.full); splashOpener05.name = 'splash-opener-5';

	var splashOpener03 = layerOpener.add(F(splashesOpener[3], T.dirImage), D.full); splashOpener03.name = 'splash-opener-3';
	var splashOpener04 = layerOpener.add(F(splashesOpener[4], T.dirImage), D.full); splashOpener04.name = 'splash-opener-4';

	var splashOpener01 = layerOpener.add(F(splashesOpener[1], T.dirImage), D.full); splashOpener01.name = 'splash-opener-1';
	var splashOpener02 = layerOpener.add(F(splashesOpener[2], T.dirImage), D.full); splashOpener02.name = 'splash-opener-2';


	var Ease1 = new KeyframeEase(0, 75);
	var Ease2 = new KeyframeEase(0, 100);
	var SetEase = function(propertySpec, key1, key2, ease) {
		var length = propertySpec.keyInTemporalEase(key1).length;
		var eases = length == 2 ? [ease, ease] : (length == 3 ? [ease, ease, ease] : [ease]);

		propertySpec.setTemporalEaseAtKey(key1, propertySpec.keyInTemporalEase(key1), eases);
		propertySpec.setTemporalEaseAtKey(key2, eases, propertySpec.keyOutTemporalEase(key2));
	};


	// splashOpener1
	splashOpener01.anchorPoint.setValue([0, heightSplash]);

	splashOpener01.scale.setValueAtTime(0, [0, 0]);
	splashOpener01.scale.setValueAtTime(1, [wScaleGrid, hScaleGrid]);
	SetEase(splashOpener01.scale, 1, 2, Ease1);

	splashOpener01.position.setValueAtTime(1, [wGrid(3), hGrid(2, 1)]);
	splashOpener01.position.setValueAtTime(2, [wGrid(2), hGrid(2, 1)]);
	SetEase(splashOpener01.position, 1, 2, Ease1);


	// splashOpener2
	splashOpener02.anchorPoint.setValue([widthSplash, 0]);

	splashOpener02.scale.setValueAtTime(0, [0, 0]);
	splashOpener02.scale.setValueAtTime(1, [wScaleGrid, hScaleGrid]);
	SetEase(splashOpener02.scale, 1, 2, Ease1);

	splashOpener02.position.setValueAtTime(1, [wGrid(2, 1), hGrid(3)]);
	splashOpener02.position.setValueAtTime(2, [wGrid(3, 1), hGrid(3)]);
	SetEase(splashOpener02.position, 1, 2, Ease1);


	// splashOpener3
	splashOpener03.startTime = 1;
	splashOpener03.anchorPoint.setValue([0, 0]);

	splashOpener03.scale.setValue([wScaleGrid, hScaleGrid]);
	splashOpener03.position.setValue([wGrid(3), hGrid(2)]);


	// splashOpener4
	splashOpener04.startTime = 1;
	splashOpener04.anchorPoint.setValue([0, 0]);

	splashOpener04.scale.setValue([wScaleGrid, hScaleGrid]);
	splashOpener04.position.setValue([wGrid(2), hGrid(3)]);


	// splashOpener5
	splashOpener05.startTime = 1;
	splashOpener05.anchorPoint.setValue([widthSplash, 0]);

	splashOpener05.scale.setValue([wScaleGrid, hScaleGrid]);

	splashOpener05.position.setValueAtTime(1, [wGrid(2, 1), hGrid(1)]);
	splashOpener05.position.setValueAtTime(2, [wGrid(1, 1), hGrid(1)]);
	SetEase(splashOpener05.position, 1, 2, Ease1);
	splashOpener05.position.setValueAtTime(2 + 0.1, [wGrid(1, 1), hGrid(1)]);
	splashOpener05.position.setValueAtTime(3, [wGrid(4, 1), hGrid(1)]);
	SetEase(splashOpener05.position, 3, 4, Ease2);
	splashOpener05.position.setValueAtTime(3 + 0.1, [wGrid(4, 1), hGrid(1)]);
	splashOpener05.position.setValueAtTime(4, [wGrid(4, 1), hGrid(4)]);
	SetEase(splashOpener05.position, 5, 6, Ease2);

	splashOpener05.opacity.setValueAtTime(1, 0);
	splashOpener05.opacity.setValueAtTime(2, 100);
	SetEase(splashOpener05.opacity, 1, 2, Ease2);


	// splashOpener6
	splashOpener06.startTime = 1;
	splashOpener06.anchorPoint.setValue([0, 0]);

	splashOpener06.scale.setValue([wScaleGrid, hScaleGrid]);

	splashOpener06.position.setValueAtTime(1, [wGrid(3), hGrid(4)]);
	splashOpener06.position.setValueAtTime(2, [wGrid(4), hGrid(4)]);
	SetEase(splashOpener06.position, 1, 2, Ease1);
	splashOpener06.position.setValueAtTime(2 + 0.1, [wGrid(4), hGrid(4)]);
	splashOpener06.position.setValueAtTime(3, [wGrid(1), hGrid(4)]);
	SetEase(splashOpener06.position, 3, 4, Ease2);
	splashOpener06.position.setValueAtTime(3 + 0.1, [wGrid(1), hGrid(4)]);
	splashOpener06.position.setValueAtTime(4, [wGrid(1), hGrid(1)]);
	SetEase(splashOpener06.position, 5, 6, Ease2);


	splashOpener06.opacity.setValueAtTime(1, 0);
	splashOpener06.opacity.setValueAtTime(2, 100);
	SetEase(splashOpener06.opacity, 1, 2, Ease2);


	//
	splashOpener07.startTime = 2.4;
	splashOpener07.anchorPoint.setValue([0, 0]);
	splashOpener07.scale.setValue([wScaleGrid, hScaleGrid]);
	splashOpener07.position.setValue([wGrid(2), hGrid(1)]);

	splashOpener07.opacity.setValueAtTime(2.4, 0);
	splashOpener07.opacity.setValueAtTime(3.1, 100);
	SetEase(splashOpener07.opacity, 1, 2, Ease1);


	splashOpener08.startTime = 2.7;
	splashOpener08.anchorPoint.setValue([0, 0]);
	splashOpener08.scale.setValue([wScaleGrid, hScaleGrid]);
	splashOpener08.position.setValue([wGrid(3), hGrid(1)]);

	splashOpener08.opacity.setValueAtTime(2.7, 0);
	splashOpener08.opacity.setValueAtTime(3.1, 100);
	SetEase(splashOpener08.opacity, 1, 2, Ease1);


	splashOpener09.startTime = 3.3;
	splashOpener09.anchorPoint.setValue([0, 0]);
	splashOpener09.scale.setValue([wScaleGrid, hScaleGrid]);
	splashOpener09.position.setValue([wGrid(4), hGrid(1)]);

	splashOpener09.opacity.setValueAtTime(3.3, 0);
	splashOpener09.opacity.setValueAtTime(4.1, 100);
	SetEase(splashOpener09.opacity, 1, 2, Ease1);


	splashOpener10.startTime = 3.4;
	splashOpener10.anchorPoint.setValue([0, 0]);
	splashOpener10.scale.setValue([wScaleGrid, hScaleGrid]);
	splashOpener10.position.setValue([wGrid(4), hGrid(2)]);

	splashOpener10.opacity.setValueAtTime(3.4, 0);
	splashOpener10.opacity.setValueAtTime(4.1, 100);
	SetEase(splashOpener10.opacity, 1, 2, Ease1);


	splashOpener11.startTime = 3.6;
	splashOpener11.anchorPoint.setValue([0, 0]);
	splashOpener11.scale.setValue([wScaleGrid, hScaleGrid]);
	splashOpener11.position.setValue([wGrid(4), hGrid(3)]);

	splashOpener11.opacity.setValueAtTime(3.6, 0);
	splashOpener11.opacity.setValueAtTime(4.1, 100);
	SetEase(splashOpener11.opacity, 1, 2, Ease1);


	splashOpener12.startTime = 2.4;
	splashOpener12.anchorPoint.setValue([0, 0]);
	splashOpener12.scale.setValue([wScaleGrid, hScaleGrid]);
	splashOpener12.position.setValue([wGrid(3), hGrid(4)]);

	splashOpener12.opacity.setValueAtTime(2.4, 0);
	splashOpener12.opacity.setValueAtTime(3.1, 100);
	SetEase(splashOpener12.opacity, 1, 2, Ease1);


	splashOpener13.startTime = 2.7;
	splashOpener13.anchorPoint.setValue([0, 0]);
	splashOpener13.scale.setValue([wScaleGrid, hScaleGrid]);
	splashOpener13.position.setValue([wGrid(2), hGrid(4)]);

	splashOpener13.opacity.setValueAtTime(2.7, 0);
	splashOpener13.opacity.setValueAtTime(3.1, 100);
	SetEase(splashOpener13.opacity, 1, 2, Ease1);


	splashOpener14.startTime = 3.3;
	splashOpener14.anchorPoint.setValue([0, 0]);
	splashOpener14.scale.setValue([wScaleGrid, hScaleGrid]);
	splashOpener14.position.setValue([wGrid(1), hGrid(4)]);

	splashOpener14.opacity.setValueAtTime(3.3, 0);
	splashOpener14.opacity.setValueAtTime(4.1, 100);
	SetEase(splashOpener14.opacity, 1, 2, Ease1);


	splashOpener15.startTime = 3.4;
	splashOpener15.anchorPoint.setValue([0, 0]);
	splashOpener15.scale.setValue([wScaleGrid, hScaleGrid]);
	splashOpener15.position.setValue([wGrid(1), hGrid(3)]);

	splashOpener15.opacity.setValueAtTime(3.4, 0);
	splashOpener15.opacity.setValueAtTime(4.1, 100);
	SetEase(splashOpener15.opacity, 1, 2, Ease1);


	splashOpener16.startTime = 3.6;
	splashOpener16.anchorPoint.setValue([0, 0]);
	splashOpener16.scale.setValue([wScaleGrid, hScaleGrid]);
	splashOpener16.position.setValue([wGrid(1), hGrid(2)]);

	splashOpener16.opacity.setValueAtTime(3.6, 0);
	splashOpener16.opacity.setValueAtTime(4.1, 100);
	SetEase(splashOpener16.opacity, 1, 2, Ease1);


	// Logo Mask
	var shapeLogoMask = layerOpener.addShape(); shapeLogoMask.name = 'logo-mask';
	shapeLogoMask.startTime = 3.8;
	shapeLogoMask.adjustmentLayer = true;
	shapeLogoMask.adjustmentLayer = true;

	shapeLogoMask.opacity.setValueAtTime(3.8, 0);
	shapeLogoMask.opacity.setValueAtTime(4.5, 100);
	SetEase(shapeLogoMask.opacity, 1, 2, Ease1);

	var groupLogoMask = shapeLogoMask.content.addProperty('ADBE Vector Group');
	var rectLogoMask = groupLogoMask.content.addProperty('ADBE Vector Shape - Rect');
	rectLogoMask.size.setValue([C.widthVideo, C.heightVideo]);
	var fillLogoMask = groupLogoMask.content.addProperty('ADBE Vector Graphic - Fill');
	fillLogoMask.color.setValue(T.rgb(31, 170, 241));
	var blurLogoMask = shapeLogoMask.effect.addProperty('ADBE Box Blur2');
	blurLogoMask.blurRadius.setValue(14);


	// Logo
	var logo = layerOpener.add(F(dirSplash + 'logo.png', T.dirImage), 6); logo.name = 'logo';
	logo.startTime = 4;
	logo.scale.setValue([50, 50]);

	logo.opacity.setValueAtTime(4, 0);
	logo.opacity.setValueAtTime(5, 100);
	SetEase(logo.opacity, 1, 2, Ease2);


	// Me
	var meStatic = layerOpener.add(F(dirSplash + '4n.png', T.dirImage), 6); meStatic.name = 'me-static';
	meStatic.startTime = 4;
	meStatic.scale.setValue([40, 40]);
	meStatic.position.setValue([720, 540]);

	meStatic.opacity.setValueAtTime(4, 0);
	meStatic.opacity.setValueAtTime(5, 100);
	meStatic.opacity.setValueAtTime(5 + 0.0001, 0);
	meStatic.opacity.setValueAtTime(6.5 - 0.0001, 0);
	meStatic.opacity.setValueAtTime(6.5, 100);
	SetEase(meStatic.opacity, 1, 2, Ease2);


	var meJugong = layerOpener.add(F(dirSplash + 'jugong480.gif', T.dirImage), 6); meJugong.name = 'me-jugong';
	meJugong.startTime = 5;
	meJugong.scale.setValue([40, 40]);
	meJugong.position.setValue([720, 540]);





	compOpener.openInViewer();


	return compOpener;
};