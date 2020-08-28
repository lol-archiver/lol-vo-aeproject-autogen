P.addLine = function addLine(line, event, lid, eid, folderLines, duration) {
	if(!line.duration) { return; }

	var indexText = '(' + (eid + 1) + '/' + (lid + 1) + ')';

	var side = line.side;
	var isMain = side == 'right';

	var colorLineBox = !isMain ? (line.colorLineBox ? T.rgb.apply(this, line.colorLineBox) : T.rgb(144, 34, 34)) : T.rgb(31, 170, 241);

	var hasTarget = isMain ? line.target || event.target : false;
	var hasSkill = line.skill || event.skill;
	var hasEvent = line.showEvent || isMain;

	var compLine = folderLines.items.addComp(indexText + line.line, 1920, 1080, 1, duration, 60);
	compLine.bgColor = T.rgb(14, 14, 14);

	if(line.audio) {
		compLine.layers.add(F(T.parseConfig(line.audio), T.folderVoices));
	}

	var layerBoxLine = compLine.layers.addShape();

	var layerCircleMainShadow = compLine.layers.addShape();

	var layerBoxEvent = hasEvent ? compLine.layers.addShape() : null;

	var layerCircleMain = compLine.layers.addShape();
	var layerPictureMain = compLine.layers.add(F(T.parseConfig(line.head), T.folderImages));

	var layerCircleTarget = hasTarget ? compLine.layers.addShape() : null;
	var layerPictureTarget = hasTarget ? compLine.layers.add(F(T.parseConfig(hasTarget), T.folderImages)) : null;

	var layerPictureSkill = hasSkill ? compLine.layers.add(F(T.parseConfig(hasSkill), T.folderImages)) : null;
	var layerSquareSkill = hasSkill ? compLine.layers.addShape() : null;

	var layerEvent = hasEvent ? compLine.layers.addText(line.event || event.event) : null;
	var layerLineBox = compLine.layers.addBoxText([1, 1], line.line);

	layerBoxLine.name = 'BoxLine';
	if(hasEvent) { layerBoxEvent.name = 'BoxEvent'; }

	if(hasTarget) { layerCircleTarget.name = 'CircleTarget'; }
	if(hasTarget) { layerPictureTarget.name = 'PictureTarget'; }

	layerCircleMain.name = 'CircleMain';
	layerCircleMainShadow.name = 'CircleMainShadow';
	layerPictureMain.name = 'PictureMain';

	if(hasSkill) { layerPictureSkill.name = 'PictureSkill'; }
	if(hasSkill) { layerSquareSkill.name = 'SquareSkill'; }

	if(hasEvent) { layerEvent.name = 'Event'; }
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
	if(hasEvent) {
		var groupBoxEvent = layerBoxEvent.content.addProperty('ADBE Vector Group');

		var borderBoxEvent = groupBoxEvent.content.addProperty('ADBE Vector Shape - Rect');
		borderBoxEvent.size.expression = E(side + '/' + 'followSizeBoxEvent');
		borderBoxEvent.roundness.setValue(24);
		borderBoxEvent.position.setValue([0, 0]);

		var fillBoxEvent = groupBoxEvent.content.addProperty('ADBE Vector Graphic - Fill');
		fillBoxEvent.color.setValue(T.rgb(255, 250, 250));

		layerBoxEvent.transform.position.expression = E(side + '/' + 'followPositionBoxEvent');

		var effectDropShadowBoxEvent = layerBoxEvent.effect.addProperty('ADBE Drop Shadow');
		effectDropShadowBoxEvent.shadowColor.setValue(T.rgb(73, 80, 81));
		effectDropShadowBoxEvent.direction.setValue(135);
		effectDropShadowBoxEvent.opacity.setValue((70 / 100) * 255);
		effectDropShadowBoxEvent.distance.setValue(14);
		effectDropShadowBoxEvent.softness.setValue(7);
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

	var groupCircleMainShadow = layerCircleMainShadow.content.addProperty('ADBE Vector Group');

	var borderCircleMainShadow = groupCircleMainShadow.content.addProperty('ADBE Vector Shape - Ellipse');
	borderCircleMainShadow.size.setValue([160, 160]);
	borderCircleMainShadow.position.setValue([0, 0]);

	var strokeCircleMainShadow = groupCircleMainShadow.content.addProperty('ADBE Vector Graphic - Stroke');
	strokeCircleMainShadow.color.setValue(T.rgb(255, 250, 250));
	strokeCircleMainShadow.strokeWidth.setValue(40);

	layerCircleMainShadow.transform.position.expression = E(side + '/' + 'followPositionCircleMain');

	var effectDropShadowCircleMain = layerCircleMainShadow.effect.addProperty('ADBE Drop Shadow');
	effectDropShadowCircleMain.shadowColor.setValue(T.rgb(73, 80, 81));
	effectDropShadowCircleMain.direction.setValue(isMain ? 225 : 135);
	effectDropShadowCircleMain.opacity.setValue((70 / 100) * 255);
	effectDropShadowCircleMain.distance.setValue(11);
	effectDropShadowCircleMain.softness.setValue(7);
	effectDropShadowCircleMain.shadowOnly.setValue(1);

	// -------Main Picture-------
	layerPictureMain.transform.scale.setValue([150 * (line.flipHor ? -1 : 1), 150]);
	layerPictureMain.transform.position.expression = E(side + '/' + 'followPositionCircleMain');


	if(hasSkill) {
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

	if(hasTarget) {
		// -------Target Circle-------
		var groupCircleTarget = layerCircleTarget.content.addProperty('ADBE Vector Group');

		var borderCircleTarget = groupCircleTarget.content.addProperty('ADBE Vector Shape - Ellipse');
		borderCircleTarget.size.setValue([90, 90]);
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
	if(hasEvent) {
		layerEvent.transform.position.expression = E(side + '/' + 'followPositionTextEvent');

		var textDocEvent = layerEvent.sourceText.value;
		textDocEvent.resetCharStyle();
		textDocEvent.fontSize = 50;
		textDocEvent.fillColor = T.rgb(73, 80, 81);
		textDocEvent.font = 'Source Han Mono';
		textDocEvent.applyStroke = true;
		textDocEvent.strokeColor = T.rgb(73, 80, 81);
		textDocEvent.strokeWidth = 2;
		textDocEvent.text = line.event || event.event;
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