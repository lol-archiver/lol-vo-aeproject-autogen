T.ensureComp = function(name, duration, parent, widthVideo, heightVideo) {
	var compMain;

	T.each(parent, function(item) {
		if(item instanceof CompItem && item.name == name) {
			compMain = item;
		}
	});

	if(!compMain) {
		compMain = parent.items.addComp(name, widthVideo || C.widthVideo, heightVideo || C.heightVideo, C.pixelAspect, duration, C.frameRate);
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

T.dirLine = T.ensureDir('01Line', app.project);
T.dirVoice = T.ensureDir('02Voice', app.project);
T.dirImage = T.ensureDir('03Image', app.project);
T.dirComp = T.ensureDir('04Comp', app.project);
T.compMain = T.ensureComp('Main', 1, app.project);