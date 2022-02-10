this.T = {
	enumLine: function(lines, callback) {
		var index = 0;

		for(var lid = 0; lid < lines.length; lid++) {
			var line = lines[lid];

			if(line.duration) {
				callback(line, lid, index++);
			}
		}
	},
	each: function(parent, callback) {
		if(!(parent instanceof Project) && !(parent instanceof FolderItem)) { throw 'parent cannot forEach'; }
		if(!(callback instanceof Function)) { throw 'callback not Function'; }

		var arrItem = [];
		var item;
		var i;

		for(i = 1; i <= parent.numItems; i++) {
			arrItem.push(parent.item(i));
		}

		for(i = 0; i < arrItem.length; i++) {
			item = arrItem[i];

			callback(item, i);
		}
	},
	find: function(name, parent) {
		var result;

		if(!parent) {
			parent = app.project;
		}

		T.each(parent, function(item) {
			if(item.name == name) {
				result = item;
			}
		});

		return result;
	},
	rgb: function(r, g, b) {
		return [(r / 255).toFixed(4), (g / 255).toFixed(4), (b / 255).toFixed(4)];
	},
	readFile: function(path, encoding) {
		var file = new File(path);

		if(encoding) {
			file.encoding = encoding;
		}

		file.open('r');

		var text = file.read();

		file.close();

		return text;
	},
	ensureDir: function(name, parent) {
		var dir;

		T.each(parent, function(item) {
			if(item instanceof FolderItem) {
				if(name == item.name) {
					dir = item;
				}
			}
		});

		return dir || parent.items.addFolder(name);
	},
	getBoxSize: function(text) {
		var fontSize = C.video.size.fontLine;
		var heightLeading = C.video.size.heightLeading;
		var widthMax = 1080;
		var heightMax = 1080;

		var layerLine = T.compMain.layers.addBoxText([widthMax, heightMax], text);

		var textDocLine = layerLine.sourceText.value;
		textDocLine.resetCharStyle();
		textDocLine.fontSize = fontSize;
		textDocLine.font = 'Source Han Mono SC';
		textDocLine.applyStroke = true;
		textDocLine.strokeWidth = 2;
		textDocLine.text = text;
		textDocLine.name = 'Test';
		textDocLine.leading = fontSize + heightLeading;
		layerLine.sourceText.setValue(textDocLine);

		var rect = layerLine.sourceRectAtTime(0, false);

		var widthBox = Math.ceil(rect.width) + fontSize;
		var lineBox = Math.round((rect.height - fontSize) / (fontSize + heightLeading)) + 1;

		layerLine.remove();

		return [widthBox, lineBox * (fontSize + heightLeading) - heightLeading, lineBox];
	},
	getBoxSizeMark: function(text) {
		var fontSize = C.video.size.fontMark;
		var heightLeading = C.video.size.heightLeading;
		var widthMax = 1080;
		var heightMax = 1080;

		var layerLine = T.compMain.layers.addBoxText([widthMax, heightMax], text);

		var textDocLine = layerLine.sourceText.value;
		textDocLine.resetCharStyle();
		textDocLine.fontSize = fontSize;
		textDocLine.font = 'Source Han Mono SC';
		textDocLine.applyStroke = true;
		textDocLine.strokeWidth = 1;
		textDocLine.text = text;
		textDocLine.name = 'TestMark';
		textDocLine.leading = fontSize + heightLeading;
		layerLine.sourceText.setValue(textDocLine);

		var rect = layerLine.sourceRectAtTime(0, false);

		var widthBox = Math.ceil(rect.width) + fontSize;
		var lineBox = Math.round((rect.height - fontSize) / (fontSize + heightLeading)) + 1;

		layerLine.remove();

		return [widthBox, lineBox * (fontSize + heightLeading) - heightLeading, lineBox];
	},
	parseConfig: function(str) {
		return str.replace(/\$\{.+?\}/g, function(text) {
			C;
			I;
			try {
				return eval(text.replace(/(^\$\{)|(\}$)/g, ''));
			}
			catch(error) {
				return text;
			}
		});
	}
};

this.Ease1 = new KeyframeEase(0, 75);
this.Ease2 = new KeyframeEase(0, 100);
this.SetEase = function(propertySpec, key1, key2, ease) {
	var length = propertySpec.keyInTemporalEase(key1).length;
	var eases = length == 2 ? [ease, ease] : (length == 3 ? [ease, ease, ease] : [ease]);

	propertySpec.setTemporalEaseAtKey(key1, propertySpec.keyInTemporalEase(key1), eases);
	propertySpec.setTemporalEaseAtKey(key2, eases, propertySpec.keyOutTemporalEase(key2));
};

this.AddProperty = function(group, name, nameProp) {
	var property = group.addProperty(name);

	if(typeof nameProp == 'string') {
		property.name = nameProp;
	}

	return property;
};
this.AddShape = function(group, nameShape) {
	var shape = group.addShape();

	if(typeof nameShape == 'string') {
		shape.name = nameShape;
	}

	return shape;
};
this.AddText = function(group, string, nameText) {
	var text = group.addText(string);

	if(typeof nameText == 'string') {
		text.name = nameText;
	}

	return text;
};


// @include 'config.js';
this.C = JSON.parse(T.readFile(pathConfig, 'UTF8'));
this.I = JSON.parse(T.readFile(pathInfo, 'UTF8'));

C.widthVideo = C.video.width;
C.heightVideo = C.video.height;
// C.widthVideo = C.video.height; C.heightVideo = C.video.width;
C.isLandscape = C.widthVideo > C.heightVideo;
C.pixelAspect = 1;
C.frameRate = 60;

var fileLog = new File(C.fileLog);
fileLog.encoding = 'UTF8';
fileLog.open('a');
this.L = function() {
	var text = [];

	for(var key in arguments) {
		if(key == '0' || ~~key) {
			text.push(arguments[key]);
		}
	}

	fileLog.writeln.apply(fileLog, [text.join(' ')]);
};
this.L.end = function() { fileLog.close(); };


this.D = {
	interval: C.video.duration.interval,
	title: C.video.duration.title,
	credit: C.video.duration.credit
};


this.P = {};
// @include 'part/calcDuration.js';
// @include 'part/addLine.js';
// @include 'part/addLineScroll.js';
// @include 'part/addTitle.js';
// @include 'part/addCredit.js';
// @include 'part/addBgm.js';
// @include 'part/addWaterMark.js';
// @include 'part/addCounter.js';


this.E = function Expression(name) { return T.readFile(C.dirExpression + '/' + name + '.js', 'UTF8'); };


var mapFootage = {};
this.F = function Footage(path, parent) {
	var footage = mapFootage[path];

	if(!footage) {
		// eslint-disable-next-line no-useless-catch
		try {
			footage = app.project.importFile(new ImportOptions(new File(path)));
		}
		catch(error) {
			throw error;
		}

		if(parent) {
			footage.parentFolder = parent;
		}

		mapFootage[path] = footage;
	}

	return footage;
};

L('-------date-------'.replace('date', new Date()));