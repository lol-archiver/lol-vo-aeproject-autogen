P.addLine = function addLine(line, event, lid, eid, folderLines, duration) {
	if(!line.duration) { return; }

	var indexText = '(' + (eid + 1) + '/' + (lid + 1) + ')';
	var side = line.side;
	var colorLineBox = side == 'left' ? (line.colorLineBox ? T.rgb.apply(this, line.colorLineBox) : T.rgb(140, 24, 24)) : T.rgb(31, 170, 241);

	var target = line.target || event.target;
	var skill = line.skill || event.skill;

	var compLine = folderLines.items.addComp(indexText + line.line, 1920, 1080, 1, duration, 60);
	compLine.bgColor = T.rgb(14, 14, 14);

	if(line.audio) {
		compLine.layers.add(F(T.parseConfig(line.audio), T.folderVoices));
	}

	var layerBoxLine = compLine.layers.addShape();
	var layerBoxEvent = side == 'right' ? compLine.layers.addShape() : null;

	var layerCircleTarget = side == 'right' && target ? compLine.layers.addShape() : null;
	var layerPictureTarget = side == 'right' && target ? compLine.layers.add(F(T.parseConfig(target), T.folderImages)) : null;

	var layerCircleMain = compLine.layers.addShape();
	var layerPictureMain = compLine.layers.add(F(T.parseConfig(line.head), T.folderImages));

	var layerPictureSkill = side == 'right' && skill ? compLine.layers.add(F(T.parseConfig(skill), T.folderImages)) : null;
	var layerSquareSkill = side == 'right' && skill ? compLine.layers.addShape() : null;

	var layerEvent = side == 'right' ? compLine.layers.addText(event.event) : null;
	var layerLineBox = compLine.layers.addBoxText([1, 1], line.line);

	layerBoxLine.name = 'BoxLine';
	if(side == 'right') { layerBoxEvent.name = 'BoxEvent'; }

	if(side == 'right' && target) { layerCircleTarget.name = 'CircleTarget'; }
	if(side == 'right' && target) { layerPictureTarget.name = 'PictureTarget'; }

	layerCircleMain.name = 'CircleMain';
	layerPictureMain.name = 'PictureMain';

	if(side == 'right' && skill) { layerPictureSkill.name = 'PictureSkill'; }
	if(side == 'right' && skill) { layerSquareSkill.name = 'SquareSkill'; }

	if(side == 'right') { layerEvent.name = 'Event'; }
	layerLineBox.name = 'Line';

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
	if(side == 'right') {
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


	if(side == 'right' && skill) {
		// -------Skill Square-------
		var groupSquareSkill = layerSquareSkill.content.addProperty('ADBE Vector Group');

		var borderSquareSkill = groupSquareSkill.content.addProperty('ADBE Vector Shape - Rect');
		borderSquareSkill.size.setValue([72, 72]);
		borderSquareSkill.position.setValue([0, 0]);
		borderSquareSkill.roundness.setValue(7);

		var strokeSquareSkill = groupSquareSkill.content.addProperty('ADBE Vector Graphic - Stroke');
		strokeSquareSkill.color.setValue(T.rgb(255, 250, 250));
		strokeSquareSkill.strokeWidth.setValue(7);

		layerSquareSkill.transform.position.expression = E(side + '/' + 'followPositionSquareSkill');

		// -------Skill Picture-------
		layerPictureSkill.transform.scale.setValue([114, 114]);
		layerPictureSkill.transform.position.expression = E(side + '/' + 'followPositionSquareSkill');
	}

	if(side == 'right' && target) {
		// -------Target Circle-------
		var groupCircleTarget = layerCircleTarget.content.addProperty('ADBE Vector Group');

		var borderCircleTarget = groupCircleTarget.content.addProperty('ADBE Vector Shape - Ellipse');
		borderCircleTarget.size.setValue([85, 85]);
		borderCircleTarget.position.setValue([0, 0]);

		var strokeCircleTarget = groupCircleTarget.content.addProperty('ADBE Vector Graphic - Stroke');
		strokeCircleTarget.color.setValue(T.rgb(255, 250, 250));
		strokeCircleTarget.strokeWidth.setValue(24);

		var fillCircleTarget = groupCircleTarget.content.addProperty('ADBE Vector Graphic - Fill');
		fillCircleTarget.color.setValue(T.rgb(255, 255, 255));

		layerCircleTarget.transform.position.expression = E(side + '/' + 'followPositionCircleTarget');

		// -------Target Picture-------
		layerPictureTarget.transform.scale.setValue([80, 80]);
		layerPictureTarget.transform.position.expression = E(side + '/' + 'followPositionCircleTarget');
	}

	// -------Event-------
	if(side == 'right') {
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