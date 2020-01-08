P.addLine = function addLine(line, event, lid, eid, folderLines, duration) {
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
	var layerLineBox = compLine.layers.addBoxText([1, 1], line.line);

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
		textDocEvent.fontSize = 50;
		textDocEvent.fillColor = T.rgb(73, 80, 81);
		textDocEvent.font = 'Source Han Mono';
		textDocEvent.applyStroke = true;
		textDocEvent.strokeColor = T.rgb(73, 80, 81);
		textDocEvent.strokeWidth = 2;
		textDocEvent.text = event.event;
		layerEvent.sourceText.setValue(textDocEvent);
	}

	// -------Line-------
	layerLineBox.transform.position.setValue([0, 1000]);
	layerLineBox.transform.position.expression = E(side + '/' + 'limitPositionLine');

	var colorLine = line.line == '(语气)' ? T.rgb(214, 214, 214) : T.rgb(255, 250, 250);

	var textDocLine = layerLineBox.sourceText.value;
	textDocLine.resetCharStyle();
	textDocLine.fontSize = 50;
	textDocLine.fillColor = colorLine;
	textDocLine.font = 'Source Han Mono';
	textDocLine.applyStroke = true;
	textDocLine.strokeColor = colorLine;
	textDocLine.strokeWidth = 2;
	textDocLine.boxTextSize = line.boxTextSize;
	textDocLine.leading = 60;
	textDocLine.text = line.line;
	layerLineBox.sourceText.setValue(textDocLine);

	return compLine;
};