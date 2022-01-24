var dirSplash = 'D:/Desktop/splash/';

var splashesOld = [
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
	var widthMain = 1920;
	var heightMain = 1080;
	var widthMainGrid = widthMain / 4;
	var heightMainGrid = heightMain / 4;
	var wGrid = function(grid, offset) { return widthMainGrid * (grid - 1 + (offset || 0)); };
	var hGrid = function(grid, offset) { return heightMainGrid * (grid - 1 + (offset || 0)); };


	var widthSplash = 1215;
	var heightSplash = 717;
	var wScaleGrid = widthMain / 4 / widthSplash * 100;
	var hScaleGrid = heightMain / 4 / heightSplash * 100;


	var splashOld7 = T.compMain.layers.add(F(splashesOld[7]), D.full); splashOld7.name = 'splash-old-7';
	var splashOld8 = T.compMain.layers.add(F(splashesOld[8]), D.full); splashOld8.name = 'splash-old-8';
	var splashOld9 = T.compMain.layers.add(F(splashesOld[9]), D.full); splashOld9.name = 'splash-old-9';
	var splashOld10 = T.compMain.layers.add(F(splashesOld[10]), D.full); splashOld10.name = 'splash-old-10';
	var splashOld11 = T.compMain.layers.add(F(splashesOld[11]), D.full); splashOld11.name = 'splash-old-11';
	var splashOld12 = T.compMain.layers.add(F(splashesOld[12]), D.full); splashOld12.name = 'splash-old-12';
	var splashOld13 = T.compMain.layers.add(F(splashesOld[13]), D.full); splashOld13.name = 'splash-old-13';
	var splashOld14 = T.compMain.layers.add(F(splashesOld[14]), D.full); splashOld14.name = 'splash-old-14';
	var splashOld15 = T.compMain.layers.add(F(splashesOld[15]), D.full); splashOld15.name = 'splash-old-15';
	var splashOld16 = T.compMain.layers.add(F(splashesOld[16]), D.full); splashOld16.name = 'splash-old-16';

	var splashOld6 = T.compMain.layers.add(F(splashesOld[6]), D.full); splashOld6.name = 'splash-old-6';
	var splashOld5 = T.compMain.layers.add(F(splashesOld[5]), D.full); splashOld5.name = 'splash-old-5';

	var splashOld3 = T.compMain.layers.add(F(splashesOld[3]), D.full); splashOld3.name = 'splash-old-3';
	var splashOld4 = T.compMain.layers.add(F(splashesOld[4]), D.full); splashOld4.name = 'splash-old-4';

	var splashOld1 = T.compMain.layers.add(F(splashesOld[1]), D.full); splashOld1.name = 'splash-old-1';
	var splashOld2 = T.compMain.layers.add(F(splashesOld[2]), D.full); splashOld2.name = 'splash-old-2';


	var ease1 = new KeyframeEase(0, 75);
	var ease2 = new KeyframeEase(0, 100);
	var setEase = function(propertySpec, key1, key2, ease) {
		var length = propertySpec.keyInTemporalEase(key1).length;
		var eases = length == 2 ? [ease, ease] : (length == 3 ? [ease, ease, ease] : [ease]);

		propertySpec.setTemporalEaseAtKey(key1, propertySpec.keyInTemporalEase(key1), eases);
		propertySpec.setTemporalEaseAtKey(key2, eases, propertySpec.keyOutTemporalEase(key2));
	};


	// splashOld1
	splashOld1.anchorPoint.setValue([0, heightSplash]);

	splashOld1.scale.setValueAtTime(0, [0, 0]);
	splashOld1.scale.setValueAtTime(1, [wScaleGrid, hScaleGrid]);
	setEase(splashOld1.scale, 1, 2, ease1);

	splashOld1.position.setValueAtTime(1, [wGrid(3), hGrid(2, 1)]);
	splashOld1.position.setValueAtTime(2, [wGrid(2), hGrid(2, 1)]);
	setEase(splashOld1.position, 1, 2, ease1);


	// splashOld2
	splashOld2.anchorPoint.setValue([widthSplash, 0]);

	splashOld2.scale.setValueAtTime(0, [0, 0]);
	splashOld2.scale.setValueAtTime(1, [wScaleGrid, hScaleGrid]);
	setEase(splashOld2.scale, 1, 2, ease1);

	splashOld2.position.setValueAtTime(1, [wGrid(2, 1), hGrid(3)]);
	splashOld2.position.setValueAtTime(2, [wGrid(3, 1), hGrid(3)]);
	setEase(splashOld2.position, 1, 2, ease1);


	// splashOld3
	splashOld3.startTime = 1;
	splashOld3.anchorPoint.setValue([0, 0]);

	splashOld3.scale.setValue([wScaleGrid, hScaleGrid]);
	splashOld3.position.setValue([wGrid(3), hGrid(2)]);


	// splashOld4
	splashOld4.startTime = 1;
	splashOld4.anchorPoint.setValue([0, 0]);

	splashOld4.scale.setValue([wScaleGrid, hScaleGrid]);
	splashOld4.position.setValue([wGrid(2), hGrid(3)]);


	// splashOld5
	splashOld5.startTime = 1;
	splashOld5.anchorPoint.setValue([widthSplash, 0]);

	splashOld5.scale.setValue([wScaleGrid, hScaleGrid]);

	splashOld5.position.setValueAtTime(1, [wGrid(2, 1), hGrid(1)]);
	splashOld5.position.setValueAtTime(2, [wGrid(1, 1), hGrid(1)]);
	setEase(splashOld5.position, 1, 2, ease1);
	splashOld5.position.setValueAtTime(2 + 0.1, [wGrid(1, 1), hGrid(1)]);
	splashOld5.position.setValueAtTime(3, [wGrid(4, 1), hGrid(1)]);
	setEase(splashOld5.position, 3, 4, ease2);
	splashOld5.position.setValueAtTime(3 + 0.1, [wGrid(4, 1), hGrid(1)]);
	splashOld5.position.setValueAtTime(4, [wGrid(4, 1), hGrid(4)]);
	setEase(splashOld5.position, 5, 6, ease2);

	splashOld5.opacity.setValueAtTime(1, 0);
	splashOld5.opacity.setValueAtTime(2, 100);
	setEase(splashOld5.opacity, 1, 2, ease2);


	// splashOld6
	splashOld6.startTime = 1;
	splashOld6.anchorPoint.setValue([0, 0]);

	splashOld6.scale.setValue([wScaleGrid, hScaleGrid]);

	splashOld6.position.setValueAtTime(1, [wGrid(3), hGrid(4)]);
	splashOld6.position.setValueAtTime(2, [wGrid(4), hGrid(4)]);
	setEase(splashOld6.position, 1, 2, ease1);
	splashOld6.position.setValueAtTime(2 + 0.1, [wGrid(4), hGrid(4)]);
	splashOld6.position.setValueAtTime(3, [wGrid(1), hGrid(4)]);
	setEase(splashOld6.position, 3, 4, ease2);
	splashOld6.position.setValueAtTime(3 + 0.1, [wGrid(1), hGrid(4)]);
	splashOld6.position.setValueAtTime(4, [wGrid(1), hGrid(1)]);
	setEase(splashOld6.position, 5, 6, ease2);


	splashOld6.opacity.setValueAtTime(1, 0);
	splashOld6.opacity.setValueAtTime(2, 100);
	setEase(splashOld6.opacity, 1, 2, ease2);


	//
	splashOld7.startTime = 2.4;
	splashOld7.anchorPoint.setValue([0, 0]);
	splashOld7.scale.setValue([wScaleGrid, hScaleGrid]);
	splashOld7.position.setValue([wGrid(2), hGrid(1)]);

	splashOld7.opacity.setValueAtTime(2.4, 0);
	splashOld7.opacity.setValueAtTime(3.1, 100);
	setEase(splashOld7.opacity, 1, 2, ease1);


	splashOld8.startTime = 2.7;
	splashOld8.anchorPoint.setValue([0, 0]);
	splashOld8.scale.setValue([wScaleGrid, hScaleGrid]);
	splashOld8.position.setValue([wGrid(3), hGrid(1)]);

	splashOld8.opacity.setValueAtTime(2.7, 0);
	splashOld8.opacity.setValueAtTime(3.1, 100);
	setEase(splashOld8.opacity, 1, 2, ease1);


	splashOld9.startTime = 3.3;
	splashOld9.anchorPoint.setValue([0, 0]);
	splashOld9.scale.setValue([wScaleGrid, hScaleGrid]);
	splashOld9.position.setValue([wGrid(4), hGrid(1)]);

	splashOld9.opacity.setValueAtTime(3.3, 0);
	splashOld9.opacity.setValueAtTime(4.1, 100);
	setEase(splashOld9.opacity, 1, 2, ease1);


	splashOld10.startTime = 3.4;
	splashOld10.anchorPoint.setValue([0, 0]);
	splashOld10.scale.setValue([wScaleGrid, hScaleGrid]);
	splashOld10.position.setValue([wGrid(4), hGrid(2)]);

	splashOld10.opacity.setValueAtTime(3.4, 0);
	splashOld10.opacity.setValueAtTime(4.1, 100);
	setEase(splashOld10.opacity, 1, 2, ease1);


	splashOld11.startTime = 3.6;
	splashOld11.anchorPoint.setValue([0, 0]);
	splashOld11.scale.setValue([wScaleGrid, hScaleGrid]);
	splashOld11.position.setValue([wGrid(4), hGrid(3)]);

	splashOld11.opacity.setValueAtTime(3.6, 0);
	splashOld11.opacity.setValueAtTime(4.1, 100);
	setEase(splashOld11.opacity, 1, 2, ease1);


	splashOld12.startTime = 2.4;
	splashOld12.anchorPoint.setValue([0, 0]);
	splashOld12.scale.setValue([wScaleGrid, hScaleGrid]);
	splashOld12.position.setValue([wGrid(3), hGrid(4)]);

	splashOld12.opacity.setValueAtTime(2.4, 0);
	splashOld12.opacity.setValueAtTime(3.1, 100);
	setEase(splashOld12.opacity, 1, 2, ease1);


	splashOld13.startTime = 2.7;
	splashOld13.anchorPoint.setValue([0, 0]);
	splashOld13.scale.setValue([wScaleGrid, hScaleGrid]);
	splashOld13.position.setValue([wGrid(2), hGrid(4)]);

	splashOld13.opacity.setValueAtTime(2.7, 0);
	splashOld13.opacity.setValueAtTime(3.1, 100);
	setEase(splashOld13.opacity, 1, 2, ease1);


	splashOld14.startTime = 3.3;
	splashOld14.anchorPoint.setValue([0, 0]);
	splashOld14.scale.setValue([wScaleGrid, hScaleGrid]);
	splashOld14.position.setValue([wGrid(1), hGrid(4)]);

	splashOld14.opacity.setValueAtTime(3.3, 0);
	splashOld14.opacity.setValueAtTime(4.1, 100);
	setEase(splashOld14.opacity, 1, 2, ease1);


	splashOld15.startTime = 3.4;
	splashOld15.anchorPoint.setValue([0, 0]);
	splashOld15.scale.setValue([wScaleGrid, hScaleGrid]);
	splashOld15.position.setValue([wGrid(1), hGrid(3)]);

	splashOld15.opacity.setValueAtTime(3.4, 0);
	splashOld15.opacity.setValueAtTime(4.1, 100);
	setEase(splashOld15.opacity, 1, 2, ease1);


	splashOld16.startTime = 3.6;
	splashOld16.anchorPoint.setValue([0, 0]);
	splashOld16.scale.setValue([wScaleGrid, hScaleGrid]);
	splashOld16.position.setValue([wGrid(1), hGrid(2)]);

	splashOld16.opacity.setValueAtTime(3.6, 0);
	splashOld16.opacity.setValueAtTime(4.1, 100);
	setEase(splashOld16.opacity, 1, 2, ease1);
};