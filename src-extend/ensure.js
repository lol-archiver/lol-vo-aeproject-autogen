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
		if(item.name == 'Title 05') { return; }
	}
	catch(error) { true; }

	try {
		item.remove();
	}
	catch(error) { true; }
});


T.dirLine = T.ensureDir('01-Line', app.project);
T.dirVoice = T.ensureDir('02-Voice', app.project);
T.dirFootage = T.ensureDir('03-Footage', app.project);
T.dirComp = T.ensureDir('04-Comp', app.project);

T.compMain = T.ensureComp('Main', 1, app.project);