// @include 'json2.js';
// @include 'config.js';
// @include 'init.js';
// @include 'expression.js';
// @include 'ensure.js';
// @include 'footage.js';

var enumLine = function(arrEvent, callback) {
	var count = 0;

	for(var eid = 0; eid < (arrEvent.length); eid++) {
		var event = arrEvent[eid];

		for(var lid = 0; lid < event.arrLine.length; lid++) {
			var line = event.arrLine[lid];

			if(line.duration) {
				callback(line, event, lid, eid, count++);
			}
		}
	}
};

var addCompLine = function(line, event, lid, eid, folderLines, duration) {
	if(!line.duration) { return; }

	var indexText = '(' + (eid + 1) + '/' + (lid + 1) + ')';
	var side = line.reply ? 'left' : 'right';
	var colorLineBox = line.reply ? (line.colorLineBox ? T.rgb.apply(this, line.colorLineBox) : T.rgb(140, 24, 24)) : T.rgb(31, 170, 241);

	var compLine = folderLines.items.addComp(indexText + line.line, 1920, 1080, 1, duration, 60);
	compLine.bgColor = T.rgb(14, 14, 14);

	if(line.audio) {
		compLine.layers.add(F(line.audio, T.folderVoices));
	}

	var layerBoxLine = compLine.layers.addShape();
	var layerBoxEvent = line.reply ? null : compLine.layers.addShape();
	var layerCircleMain = compLine.layers.addShape();
	var layerPictureMain = compLine.layers.add(F(line.head, T.folderImages));
	var layerEvent = line.reply ? null : compLine.layers.addText(event.event);
	var layerLine = compLine.layers.addText(line.line);

	// -------Line Box-------
	var groupBoxLine = layerBoxLine.content.addProperty('ADBE Vector Group');

	var borderBoxLine = groupBoxLine.content.addProperty('ADBE Vector Shape - Rect');
	borderBoxLine.size.expression = E(side + '/' + 'followSizeBoxLine');
	borderBoxLine.roundness.setValue(34);
	borderBoxLine.position.setValue([0, 0]);

	var fillBoxLine = groupBoxLine.content.addProperty('ADBE Vector Graphic - Fill');
	fillBoxLine.color.setValue(colorLineBox);

	layerBoxLine.transform.position.expression = E(side + '/' + 'followPositionBoxLine');

	// -------Event Box-------
	if(!line.reply) {
		var groupBoxEvent = layerBoxEvent.content.addProperty('ADBE Vector Group');

		var borderBoxEvent = groupBoxEvent.content.addProperty('ADBE Vector Shape - Rect');
		borderBoxEvent.size.expression = E(side + '/' + 'followSizeBoxEvent');
		borderBoxEvent.roundness.setValue(24);
		borderBoxEvent.position.setValue([0, 0]);

		var fillBoxEvent = groupBoxEvent.content.addProperty('ADBE Vector Graphic - Fill');
		fillBoxEvent.color.setValue(T.rgb(255, 250, 250));

		layerBoxEvent.transform.position.expression = E(side + '/' + 'followPositionBoxEvent');
	}

	// -------Main Circle-------
	var groupCircleMain = layerCircleMain.content.addProperty('ADBE Vector Group');

	var borderCircleMain = groupCircleMain.content.addProperty('ADBE Vector Shape - Ellipse');
	borderCircleMain.size.setValue([160, 160]);
	borderCircleMain.position.setValue([0, 0]);

	var strokeCircleMain = groupCircleMain.content.addProperty('ADBE Vector Graphic - Stroke');
	strokeCircleMain.color.setValue(T.rgb(255, 250, 250));
	strokeCircleMain.strokeWidth.setValue(40);

	var fillCircleMain = groupCircleMain.content.addProperty('ADBE Vector Graphic - Fill');
	fillCircleMain.color.setValue(T.rgb(255, 255, 255));

	layerCircleMain.transform.position.expression = E(side + '/' + 'followPositionCircleMain');

	// -------Main Picture-------
	layerPictureMain.transform.scale.setValue([150, 150]);
	layerPictureMain.transform.position.expression = E(side + '/' + 'followPositionCircleMain');

	// -------Event-------
	if(!line.reply) {
		layerEvent.transform.position.expression = E(side + '/' + 'followPositionTextEvent');

		var textDocEvent = layerEvent.sourceText.value;
		textDocEvent.resetCharStyle();
		textDocEvent.fontSize = 48;
		textDocEvent.fillColor = T.rgb(73, 80, 81);
		textDocEvent.font = 'Source Han Mono';
		textDocEvent.applyStroke = true;
		textDocEvent.strokeColor = T.rgb(73, 80, 81);
		textDocEvent.strokeWidth = 2;
		textDocEvent.text = event.event;
		layerEvent.sourceText.setValue(textDocEvent);
	}

	// -------Line-------
	layerLine.transform.position.setValue([0, 1000]);
	layerLine.transform.position.expression = E(side + '/' + 'limitPositionLine');

	var colorLine = line.line == '(语气)' ? T.rgb(214, 214, 214) : T.rgb(255, 250, 250);

	var textDocLine = layerLine.sourceText.value;
	textDocLine.resetCharStyle();
	textDocLine.fontSize = 48;
	textDocLine.fillColor = colorLine;
	textDocLine.font = 'Source Han Mono';
	textDocLine.applyStroke = true;
	textDocLine.strokeColor = colorLine;
	textDocLine.strokeWidth = 2;
	textDocLine.text = line.line;
	layerLine.sourceText.setValue(textDocLine);

	return compLine;
};

var addCompStart = function(totalDuration) {
	var splashStart = F(C.path.splash);
	var layerSplashStart = T.compMain.layers.add(splashStart, totalDuration + 8);
	layerSplashStart.transform.scale.setValueAtTime(0, [200, 200]);
	layerSplashStart.transform.scale.setValueAtTime(2, [150, 150]);

	var effectBlurSplash = layerSplashStart.effect.addProperty('ADBE Box Blur2');
	effectBlurSplash.iterations.setValue(4);
	effectBlurSplash.blurRadius.setValueAtTime(0, 0);
	effectBlurSplash.blurRadius.setValueAtTime(2, 0);
	effectBlurSplash.blurRadius.setValueAtTime(4, 7);

	var layerTitle = T.compMain.layers.addText(C.champion.nameShow);
	layerTitle.transform.position.setValue([40, 150]);
	layerTitle.transform.opacity.setValueAtTime(0, 100);
	layerTitle.transform.opacity.setValueAtTime(2, 40);
	layerTitle.transform.opacity.setValueAtTime(4, 0);

	var textDocTitle = layerTitle.sourceText.value;
	textDocTitle.resetCharStyle();
	textDocTitle.fontSize = 100;
	textDocTitle.fillColor = T.rgb(255, 250, 250);
	textDocTitle.font = 'Source Han Mono';
	textDocTitle.applyStroke = true;
	textDocTitle.strokeColor = T.rgb(255, 250, 250);
	textDocTitle.strokeWidth = 4;

	layerTitle.sourceText.setValue(textDocTitle);
};

var addCompEnd = function(totalDuration) {
	var splashEnd = F(C.path.splash);
	var layerSplashEnd = T.compMain.layers.add(splashEnd, totalDuration + 8);
	layerSplashEnd.startTime = totalDuration + 2;

	layerSplashEnd.transform.scale.setValue([150, 150]);
	layerSplashEnd.transform.opacity.setValueAtTime(totalDuration + 2, 0);
	layerSplashEnd.transform.opacity.setValueAtTime(totalDuration + 3.4, 100);

	var layerThankyou = T.compMain.layers.addText('感谢收看！\n');

	layerThankyou.startTime = totalDuration + 4;
	layerThankyou.duration = 4;

	layerThankyou.transform.position.setValue([40, 150]);
	layerThankyou.transform.opacity.setValueAtTime(totalDuration + 4, 0);
	layerThankyou.transform.opacity.setValueAtTime(totalDuration + 6, 100);

	var textDocThankyou = layerThankyou.sourceText.value;
	textDocThankyou.resetCharStyle();
	textDocThankyou.fontSize = 100;
	textDocThankyou.fillColor = T.rgb(224, 224, 224);
	textDocThankyou.font = 'Source Han Mono';
	textDocThankyou.applyStroke = true;
	textDocThankyou.strokeColor = T.rgb(224, 224, 224);
	textDocThankyou.strokeWidth = 4;

	layerThankyou.sourceText.setValue(textDocThankyou);

	var layerInfo = T.compMain.layers.addText('解包/听写/整理/制作\n       by DanoR\n'+C.emote+'\n\n如有错漏，敬请留言');

	layerInfo.startTime = totalDuration + 4;
	layerInfo.duration = 4;

	layerInfo.transform.position.setValue([40, 300]);
	layerInfo.transform.opacity.setValueAtTime(totalDuration + 4, 0);
	layerInfo.transform.opacity.setValueAtTime(totalDuration + 6, 100);

	var textDocInfo = layerInfo.sourceText.value;
	textDocInfo.resetCharStyle();
	textDocInfo.fontSize = 50;
	textDocInfo.fillColor = T.rgb(224, 224, 224);
	textDocInfo.font = 'Source Han Mono';
	textDocInfo.applyStroke = true;
	textDocInfo.strokeColor = T.rgb(224, 224, 224);
	textDocInfo.strokeWidth = 1;

	layerInfo.sourceText.setValue(textDocInfo);
};

var addCompCounter = function(totalLine, totalDuration, arrDuration) {
	var layerCounter = T.compMain.layers.addText('');
	layerCounter.transform.position.setValue([70, 1020]);

	var textDocCounter = layerCounter.sourceText.value;
	textDocCounter.resetCharStyle();
	textDocCounter.fontSize = 24;
	textDocCounter.fillColor = T.rgb(224, 224, 224);
	textDocCounter.font = 'Source Han Mono';
	textDocCounter.applyStroke = true;
	textDocCounter.strokeColor = T.rgb(224, 224, 224);
	textDocCounter.strokeWidth = 2;

	layerCounter.sourceText.setValue(textDocCounter);

	layerCounter.startTime = 4;
	layerCounter.duration = totalDuration;

	var duration = 4;
	var now = totalLine;

	while(now) {
		layerCounter.sourceText.setValueAtTime(duration, now - 1);
		duration += arrDuration[totalLine - now--] + 2.4;
	}
};

(function() {
	var arrEvent = JSON.parse(T.readFile(C.path.lines, 'UTF8'));

	var arrDuration = [];
	var totalDuration = 0;
	var totalLine = 0;

	enumLine(arrEvent, function(line) {
		arrDuration.push(line.duration);

		totalDuration += line.duration + 2.4;

		totalLine++;
	});

	var layerBGM = T.compMain.layers.add(F(C.path.bgm));
	layerBGM.audio.audioLevels.setValue([-11, -11]);
	layerBGM.audio.audioLevels.setValueAtTime(totalDuration + 4, [-11, -11]);
	layerBGM.audio.audioLevels.setValueAtTime(totalDuration + 4 + 4, [-96, -96]);

	T.compMain.duration = totalDuration + 8;

	addCompStart(totalDuration);

	var accumDuration = 4;

	enumLine(arrEvent, function(line, event, lid, eid, countLine) {
		var compLine = addCompLine(line, event, lid, eid, T.folderLines, totalDuration - accumDuration + 4);

		var layerLine = T.compMain.layers.add(compLine, totalDuration - accumDuration + 4);

		layerLine.startTime = accumDuration;

		layerLine.transform.position.setValue([960, 540 + 360]);
		layerLine.transform.position.setValueAtTime(accumDuration, [960, 540 + 360]);
		layerLine.transform.position.setValueAtTime(accumDuration + 0.1, [960, 540]);

		accumDuration += line.duration + 2.4;

		var yLine = 540;
		var accumDurationLine = accumDuration;

		while(yLine >= -1080) {
			yLine -= 360;

			var nextDuration = arrDuration[++countLine];

			if(nextDuration) {
				layerLine.transform.position.setValueAtTime(accumDurationLine, [960, yLine + 360]);
				layerLine.transform.position.setValueAtTime(accumDurationLine + 0.1, [960, yLine]);

				accumDurationLine += nextDuration + 2.4;
			}
			else {
				break;
			}
		}
	});

	addCompCounter(totalLine, totalDuration, arrDuration);

	addCompEnd(totalDuration);

	var layerWaterMark = T.compMain.layers.add(F(C.path.waterMark));
	layerWaterMark.transform.scale.setValue([14, 14]);
	layerWaterMark.transform.position.setValue([40, 1040]);
	layerWaterMark.startTime = 0;
	layerWaterMark.duration = totalDuration + 4;

	T.compMain.openInViewer();

	L.end();
})();