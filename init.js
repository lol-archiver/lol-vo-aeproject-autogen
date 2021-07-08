this.T = {
	enumLine: function(events, callback) {
		var index = 0;

		for(var eid = 0; eid <= (events.length - 1); eid++) {
			var event = events[eid];

			for(var lid = 0; lid < event.arrLine.length; lid++) {
				var line = event.arrLine[lid];

				if(line.duration) {
					callback(line, event, lid, eid, index++);
				}
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
	ensureFolder: function(name, parent) {
		var folderItem;

		T.each(parent, function(item) {
			if(item instanceof FolderItem) {
				if(name == item.name) {
					folderItem = item;
				}
			}
		});

		return folderItem || parent.items.addFolder(name);
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
			var CC = I;
			try {
				return eval(text.replace(/(^\$\{)|(\}$)/g, ''));
			}
			catch(error) {
				return text;
			}
		});
	}
};

this.I = JSON.parse(T.readFile(C.path.info, 'UTF8'));
C.init(I);

var file = new File(C.path.file.log);
file.encoding = 'UTF8';
file.open('a');

this.L = function() {
	var text = [];

	for(var key in arguments) {
		if(key == '0' || ~~key) {
			text.push(arguments[key]);
		}
	}

	file.writeln.apply(file, [text.join(' ')]);
};
this.L.end = function() {
	file.close();
};

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

L('-------date-------'.replace('date', new Date()));