this.T = {
	each: function each(parent, callback) {
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
	find: function find(name, parent) {
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
	rgb: function rgb(r, g, b) {
		return [(r / 255).toFixed(4), (g / 255).toFixed(4), (b / 255).toFixed(4)];
	},
	readFile: function readFile(path, encoding) {
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
	}
};

var file = new File(C.path.logFile);
file.encoding = 'UTF8';
file.open('a');

this.L = function log() {
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

L('-------date-------'.replace('date', new Date()));