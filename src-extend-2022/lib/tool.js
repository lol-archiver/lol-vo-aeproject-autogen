// @include 'lib/json2.js';


/**
 * 读取文件
 * @param {string} path 文件路径
 * @param {string} encoding 文件编码
 * @returns {string} 文件内容
 */
this.ReadFile = (path, encoding = 'UTF8') => {
	const file = new File(path);

	if(encoding) { file.encoding = encoding; }

	try {
		file.open('r');

		return file.read();
	}
	finally {
		file.close();
	}
};


/**
 * 读取AE表达式
 * @param {string} name AE表达式文件名（不带文件后缀）
 * @returns {string} AE表达式
 */
this.GetExpression = name => ReadFile(C.dirExpression + '/' + name + '.js');


/**
 * 遍历项目的子项目
 * @param {Item} Item 项目
 * @param {Function} callback 回调函数
 */
this.Each = (target, callback) => {
	// if(!(target instanceof Project) && !(target instanceof FolderItem)) { throw '目标不能遍历'; }
	if(!(callback instanceof Function)) { throw '回调函数不是函数'; }

	const items = [];

	for(let i = 1; i <= target.numItems; i++) {
		items.push(target.item(i));
	}

	for(let i = 0; i < items.length; i++) {
		callback(items[i], i);
	}
};

/**
 * 确保`素材目录`存在
 * @param {string} name 目录名
 * @param {FolderItem} parent 父目录
 * @returns
 */
this.EnsureDir = (name, parent) => {
	let dir;


	Each(parent, item => (item instanceof FolderItem && name == item.name) && (dir = item));


	return dir ?? parent.items.addFolder(name);
};

/**
 * 确保`合成项目`存在
 * @param {string} name 目录名
 * @param {Duration} duration 持续时间
 * @param {FolderItem} parent 父目录
 * @param {number} widthVideo 视频宽度
 * @param {number} heightVideo 视频高度
 * @returns {CompItem} 合成项目
 */
this.EnsureComp = (name, duration, parent, widthVideo = C.widthVideo, heightVideo = C.heightVideo) => {
	let comp;


	Each(parent, item => (item instanceof CompItem && name == item.name) && (comp = item));


	if(!comp) {
		comp = parent.items.addComp(name, widthVideo, heightVideo, C.pixelAspect, duration, C.frameRate);
		comp.bgColor = RGBH('2D2D2D');
	}


	return comp;
};


/**
 * 将RGB数值转换为RGB比例数组
 * @param {number} r 红
 * @param {number} g 绿
 * @param {number} b 蓝
 * @returns
 */
this.RGB = (r, g, b) => [(r / 255).toFixed(4), (g / 255).toFixed(4), (b / 255).toFixed(4)];

/**
 * 将RGB文本转换为RGB数组
 * @param {string} rgb RGB文本
 * @returns
 */
this.RGBH = (rgb_) => {
	const rgb = rgb_.replace(/^#/, '');

	const [rh, rl, gh, gl, bh, bl] = rgb;

	return RGB(Number(`0x${rh}${rl}`), Number(`0x${gh}${gl}`), Number(`0x${bh}${bl}`));
};


this.Ease1 = new KeyframeEase(0, 75);
this.Ease2 = new KeyframeEase(0, 100);
this.SetEase = (propertySpec, key1, key2, ease) => {
	const length = propertySpec.keyInTemporalEase(key1).length;
	const eases = length == 2 ? [ease, ease] : (length == 3 ? [ease, ease, ease] : [ease]);

	propertySpec.setTemporalEaseAtKey(key1, propertySpec.keyInTemporalEase(key1), eases);
	propertySpec.setTemporalEaseAtKey(key2, eases, propertySpec.keyOutTemporalEase(key2));
};


this.AddProperty = (group, name, nameProp) => {
	const property = group.addProperty(name);

	if(typeof nameProp == 'string') { property.name = nameProp; }

	return property;
};
this.AddShape = (group, nameShape) => {
	const shape = group.addShape();

	if(typeof nameShape == 'string') { shape.name = nameShape; }

	return shape;
};
this.AddText = (group, string, nameText) => {
	const text = group.addText(string);

	if(typeof nameText == 'string') { text.name = nameText; }

	return text;
};


this.EvalString = str => {
	return str.replace(/\$\{.+?\}/g, text => {
		C;
		I;
		try {
			return eval(text.replace(/(^\$\{)|(\}$)/g, ''));
		}
		catch(error) {
			return text;
		}
	});
};


this.EnumLine = (lines, callback) => {
	let index = 0;

	for(let lid = 0; lid < lines.length; lid++) {
		const line = lines[lid];

		if(line.duration) {
			callback(line, lid, index++);
		}
	}
};


this.GetBoxSize = text => {
	const fontSize = C.video.size.fontLine;
	const heightLeading = C.video.size.heightLeading;
	const widthMax = 1080;
	const heightMax = 1080;

	const layerLine = CompMain.layers.addBoxText([widthMax, heightMax], text);

	const textDocLine = layerLine.sourceText.value;
	textDocLine.resetCharStyle();
	textDocLine.fontSize = fontSize;
	textDocLine.font = 'Source Han Mono SC';
	textDocLine.applyStroke = true;
	textDocLine.strokeWidth = 2;
	textDocLine.text = text;
	textDocLine.name = 'Test';
	textDocLine.leading = fontSize + heightLeading;
	layerLine.sourceText.setValue(textDocLine);

	const rect = layerLine.sourceRectAtTime(0, false);

	const widthBox = Math.ceil(rect.width) + fontSize;
	const lineBox = Math.round((rect.height - fontSize) / (fontSize + heightLeading)) + 1;

	layerLine.remove();

	return [widthBox, lineBox * (fontSize + heightLeading) - heightLeading, lineBox];
};
this.GetBoxSizeMark = text => {
	const fontSize = C.video.size.fontMark;
	const heightLeading = C.video.size.heightLeading;
	const widthMax = 1080;
	const heightMax = 1080;

	const layerLine = CompMain.layers.addBoxText([widthMax, heightMax], text);

	const textDocLine = layerLine.sourceText.value;
	textDocLine.resetCharStyle();
	textDocLine.fontSize = fontSize;
	textDocLine.font = 'Source Han Mono SC';
	textDocLine.applyStroke = true;
	textDocLine.strokeWidth = 1;
	textDocLine.text = text;
	textDocLine.name = 'TestMark';
	textDocLine.leading = fontSize + heightLeading;
	layerLine.sourceText.setValue(textDocLine);

	const rect = layerLine.sourceRectAtTime(0, false);

	const widthBox = Math.ceil(rect.width) + fontSize;
	const lineBox = Math.round((rect.height - fontSize) / (fontSize + heightLeading)) + 1;

	layerLine.remove();

	return [widthBox, lineBox * (fontSize + heightLeading) - heightLeading, lineBox];
};