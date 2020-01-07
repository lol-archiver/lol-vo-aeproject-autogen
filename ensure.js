var ensureMainComp = function(name, width, height, pixelAspect, duration, frameRate) {
	var compMain;

	T.each(app.project, function(item) {
		if(item instanceof CompItem && item.name == 'Main') {
			compMain = item;
		}
	});

	if(!compMain) {
		compMain = app.project.items.addComp(name, width, height, pixelAspect, duration, frameRate);
		compMain.bgColor = T.rgb(45, 45, 45);
	}

	return compMain;
};

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