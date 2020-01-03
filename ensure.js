var ensureMainComp = function(name, width, height, pixelAspect, duration, frameRate) {
	var compMain;

	T.each(app.project, function(item) {
		if(item instanceof CompItem && item.name == 'Main') {
			compMain = item;
		}
	});

	if(!compMain) {
		L('ensure Comp Main');

		compMain = app.project.items.addComp(name, width, height, pixelAspect, duration, frameRate);
		compMain.bgColor = T.rgb(45, 45, 45);
	}

	return compMain;
};

// var ensureBoxComp = function(name, width, height, pixelAspect, duration, frameRate) {
// 	var hasMainComp = false;
// 	var folderComps;

// 	T.each(app.project, function(item) {
// 		if(item instanceof FolderItem && item.name == '3Comps') {
// 			folderComps = item;
// 		}
// 	});

// 	T.each(folderComps, function(item) {
// 		if(item instanceof CompItem && item.name == 'Box') {
// 			hasMainComp = true;
// 		}
// 	});

// 	if(!hasMainComp) {
// 		L('ensure Comp Box');

// 		var comp = folderComps.items.addComp(name, width, height, pixelAspect, duration, frameRate);
// 		comp.bgColor = T.rgb(14, 14, 14);

// 		// var layer = comp.layers.addShape();
// 		// var rect = layer.content.addProperty('ADBE Vector Group');

// 		// var border = rect.content.addProperty('ADBE Vector Shape - Rect');
// 		// border.size.setValue([800, 200]);
// 		// border.roundness.setValue(41);
// 		// border.position.setValue([0, 0]);

// 		// var fill = rect.content.addProperty('ADBE Vector Graphic - Fill');
// 		// fill.color.setValue(T.rgb(200, 200, 200));

// 		return comp;
// 	}
// };

T.each(app.project, function(item) {
	try {
		item.remove();
	}
	catch(error) { true; }
});

T.folderLines = T.ensureFolder('01Lines', app.project);
T.folderVoices = T.ensureFolder('02Voices', app.project);
T.folderImages = T.ensureFolder('03Images', app.project);
T.compMain = ensureMainComp('Main', 1920, 1080, 1, 10, 60);