this.AddLine = (line, lid, dirLine, duration) => {
	if(!line.duration) { return; }

	const indexText = lid + 1;

	const side = line.side;
	const isMain = side == 'right';

	const colorLineBox = !isMain ? (line.colorLineBox ? RGB.apply(this, line.colorLineBox) : RGBH('902222')) : RGBH(I.color || '1FAAF1');

	const eventText = line.eventDirect || line.event;
	const markFinal = line.mark;

	const hasTarget = isMain ? line.target : false;
	const hasSkill = isMain ? line.skill : false;
	const hasEvent = line.hideEvent ? false : !!eventText;
	const hasMark = !!markFinal;


	const compLine = EnsureComp(indexText + line.line, duration, dirLine);
	compLine.bgColor = RGBH('0E0E0E');

	if(line.audio && !C.video.mute) {
		compLine.layers.add(GetFootage(EvalString(line.audio), DirVoice));
	}


	const layerBoxMark = hasMark ? compLine.layers.addShape() : null;
	const layerMarkBox = hasMark ? compLine.layers.addBoxText([1, 1], markFinal) : null;

	const layerBoxLine = compLine.layers.addShape();

	const layerWaterMark = compLine.layers.addText();

	const layerCircleMainShadow = compLine.layers.addShape();

	const layerBoxEvent = hasEvent ? compLine.layers.addShape() : null;

	const layerCircleMain = compLine.layers.addShape();
	const layerPictureMain = compLine.layers.add(GetFootage(EvalString(line.head), DirFootage));

	const layerCircleTarget = hasTarget ? compLine.layers.addShape() : null;
	const layerPictureTarget = hasTarget ? compLine.layers.add(GetFootage(EvalString(hasTarget), DirFootage)) : null;

	const layerPictureSkill = hasSkill ? compLine.layers.add(GetFootage(EvalString(hasSkill), DirFootage)) : null;
	const layerSquareSkill = hasSkill ? compLine.layers.addShape() : null;

	const layerEvent = hasEvent ? compLine.layers.addText(eventText) : null;
	const layerLineBox = compLine.layers.addBoxText([1, 1], line.line);




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
	layerWaterMark.name = 'WaterMark';

	// -------Line Box-------
	const groupBoxLine = layerBoxLine.content.addProperty('ADBE Vector Group');

	const borderBoxLine = groupBoxLine.content.addProperty('ADBE Vector Shape - Rect');
	borderBoxLine.size.expression = GetExpression(side + '/' + 'followSizeBoxLine');
	borderBoxLine.roundness.setValue(24);
	borderBoxLine.position.setValue([0, 0]);

	const fillBoxLine = groupBoxLine.content.addProperty('ADBE Vector Graphic - Fill');
	fillBoxLine.color.setValue(colorLineBox);

	layerBoxLine.transform.position.expression = GetExpression(side + '/' + 'followPositionBoxLine');

	// -------Event Box-------
	if(hasEvent) {
		const groupBoxEvent = layerBoxEvent.content.addProperty('ADBE Vector Group');

		const borderBoxEvent = groupBoxEvent.content.addProperty('ADBE Vector Shape - Rect');
		borderBoxEvent.size.expression = GetExpression(side + '/' + 'followSizeBoxEvent');
		borderBoxEvent.roundness.setValue(14);
		borderBoxEvent.position.setValue([0, 0]);

		const fillBoxEvent = groupBoxEvent.content.addProperty('ADBE Vector Graphic - Fill');
		fillBoxEvent.color.setValue(RGBH('FFFAFA'));

		layerBoxEvent.transform.position.expression = GetExpression(side + '/' + 'followPositionBoxEvent');

		const effectDropShadowBoxEvent = layerBoxEvent.effect.addProperty('ADBE Drop Shadow');
		effectDropShadowBoxEvent[L.shadowColor].setValue(RGBH('495051'));
		effectDropShadowBoxEvent[L.direction].setValue(135);
		effectDropShadowBoxEvent[L.opacity].setValue((70 / 100) * 255);
		effectDropShadowBoxEvent[L.distance].setValue(14);
		effectDropShadowBoxEvent[L.softness].setValue(7);
	}

	// -------Main Circle-------
	const groupCircleMain = layerCircleMain.content.addProperty('ADBE Vector Group');

	const borderCircleMain = groupCircleMain.content.addProperty('ADBE Vector Shape - Ellipse');
	borderCircleMain.size.setValue([160, 160]);
	borderCircleMain.position.setValue([0, 0]);

	const strokeCircleMain = groupCircleMain.content.addProperty('ADBE Vector Graphic - Stroke');
	strokeCircleMain.color.setValue(RGBH('FFFAFA'));
	strokeCircleMain.strokeWidth.setValue(40);

	const fillCircleMain = groupCircleMain.content.addProperty('ADBE Vector Graphic - Fill');
	fillCircleMain.color.setValue(RGBH('FFFFFF'));

	layerCircleMain.transform.position.expression = GetExpression(side + '/' + 'followPositionCircleMain');

	const groupCircleMainShadow = layerCircleMainShadow.content.addProperty('ADBE Vector Group');

	const borderCircleMainShadow = groupCircleMainShadow.content.addProperty('ADBE Vector Shape - Ellipse');
	borderCircleMainShadow.size.setValue([160, 160]);
	borderCircleMainShadow.position.setValue([0, 0]);

	const strokeCircleMainShadow = groupCircleMainShadow.content.addProperty('ADBE Vector Graphic - Stroke');
	strokeCircleMainShadow.color.setValue(RGBH('FFFAFA'));
	strokeCircleMainShadow.strokeWidth.setValue(40);

	layerCircleMainShadow.transform.position.expression = GetExpression(side + '/' + 'followPositionCircleMain');

	const effectDropShadowCircleMain = layerCircleMainShadow.effect.addProperty('ADBE Drop Shadow');
	effectDropShadowCircleMain[L.shadowColor].setValue(RGBH('495051'));
	effectDropShadowCircleMain[L.direction].setValue(isMain ? 225 : 135);
	effectDropShadowCircleMain[L.opacity].setValue((70 / 100) * 255);
	effectDropShadowCircleMain[L.distance].setValue(11);
	effectDropShadowCircleMain[L.softness].setValue(7);
	effectDropShadowCircleMain[L.shadowOnly].setValue(1);

	// -------Main Picture-------
	layerPictureMain.transform.scale.setValue([150 * (line.flipHor ? -1 : 1), 150]);
	layerPictureMain.transform.position.expression = GetExpression(side + '/' + 'followPositionCircleMain');


	if(hasSkill) {
		// -------Skill Square-------
		const groupSquareSkill = layerSquareSkill.content.addProperty('ADBE Vector Group');

		const borderSquareSkill = groupSquareSkill.content.addProperty('ADBE Vector Shape - Rect');
		borderSquareSkill.size.setValue([72, 72]);
		borderSquareSkill.position.setValue([0, 0]);
		borderSquareSkill.roundness.setValue(7);

		const strokeSquareSkill = groupSquareSkill.content.addProperty('ADBE Vector Graphic - Stroke');
		strokeSquareSkill.color.setValue(RGBH('FFFAFA'));
		strokeSquareSkill.strokeWidth.setValue(7);

		layerSquareSkill.transform.position.expression = GetExpression(side + '/' + 'followPositionSquareSkill');

		// -------Skill Picture-------
		layerPictureSkill.transform.scale.setValue([114, 114]);
		layerPictureSkill.transform.position.expression = GetExpression(side + '/' + 'followPositionSquareSkill');
	}

	if(hasTarget) {
		// -------Target Circle-------
		const groupCircleTarget = layerCircleTarget.content.addProperty('ADBE Vector Group');

		const borderCircleTarget = groupCircleTarget.content.addProperty('ADBE Vector Shape - Ellipse');
		borderCircleTarget.size.setValue([90, 90]);
		borderCircleTarget.position.setValue([0, 0]);

		const strokeCircleTarget = groupCircleTarget.content.addProperty('ADBE Vector Graphic - Stroke');
		strokeCircleTarget.color.setValue(RGBH('FFFAFA'));
		strokeCircleTarget.strokeWidth.setValue(24);

		const fillCircleTarget = groupCircleTarget.content.addProperty('ADBE Vector Graphic - Fill');
		fillCircleTarget.color.setValue(RGBH('FFFFFF'));

		layerCircleTarget.transform.position.expression = GetExpression(side + '/' + 'followPositionCircleTarget');

		// -------Target Picture-------
		layerPictureTarget.transform.scale.setValue([80, 80]);
		layerPictureTarget.transform.position.expression = GetExpression(side + '/' + 'followPositionCircleTarget');
	}

	// -------Event-------
	if(hasEvent) {
		layerEvent.transform.position.expression = GetExpression(side + '/' + 'followPositionTextEvent');

		const textDocEvent = layerEvent.sourceText.value;
		textDocEvent.resetCharStyle();
		textDocEvent.fontSize = C.video.size.fontLine;
		textDocEvent.fillColor = RGBH('495051');
		textDocEvent.font = 'Source Han Mono SC';
		textDocEvent.applyStroke = true;
		textDocEvent.strokeColor = RGBH('495051');
		textDocEvent.strokeWidth = 2;
		textDocEvent.text = eventText;
		layerEvent.sourceText.setValue(textDocEvent);
	}

	// -------Line-------
	layerLineBox.transform.position.setValue([0, 1000]);
	layerLineBox.transform.position.expression = GetExpression(side + '/' + 'limitPositionLine')
		.replace(/\$side\$/g, C.isLandscape ? 340 : 140)
		.replace(/\$bottom\$/g, C.isLandscape ? 100 : 160)
		.replace(/\$bottomMark\$/g, (line.boxHeightMark + 20) || 0);

	const colorLine = RGBH('FFFAFA');

	const textDocLine = layerLineBox.sourceText.value;
	textDocLine.resetCharStyle();
	textDocLine.fontSize = C.video.size.fontLine;
	textDocLine.fillColor = colorLine;
	textDocLine.font = 'Source Han Mono SC';
	textDocLine.applyStroke = true;
	textDocLine.strokeColor = colorLine;
	textDocLine.strokeWidth = 2;

	textDocLine.boxTextSize = line.boxTextSize;
	textDocLine.leading = C.video.size.fontLine + C.video.size.heightLeading;
	textDocLine.text = line.line;
	layerLineBox.sourceText.setValue(textDocLine);


	// -------水印-------
	layerWaterMark.transform.position.setValue([0, 1000]);
	layerWaterMark.transform.position.expression = GetExpression(side + '/' + 'followPositionWaterMark');

	const textWaterMark = layerWaterMark.sourceText.value;
	textWaterMark.resetCharStyle();
	textWaterMark.fontSize = C.video.size.fontLine - 15;
	textWaterMark.fillColor = colorLine;
	textWaterMark.font = 'Source Han Mono SC';
	textWaterMark.applyStroke = true;
	textWaterMark.strokeWidth = 0;
	textWaterMark.leading = C.video.size.fontLine - 15 + C.video.size.heightLeading;
	textWaterMark.text = 'DR';
	layerWaterMark.opacity.setValue(34);
	layerWaterMark.sourceText.setValue(textWaterMark);


	// -------备注-------
	if(hasMark) {
		layerBoxMark.name = 'BoxMark';
		layerMarkBox.name = 'Mark';

		// -------备注框-------
		const groupBoxMark = layerBoxMark.content.addProperty('ADBE Vector Group');

		const borderBoxMark = groupBoxMark.content.addProperty('ADBE Vector Shape - Rect');
		borderBoxMark.size.expression = GetExpression('mark/followSizeBoxMark');
		borderBoxMark.roundness.setValue(14);
		borderBoxMark.position.setValue([0, 0]);

		const fillBoxMark = groupBoxMark.content.addProperty('ADBE Vector Graphic - Fill');
		fillBoxMark.color.setValue(RGBH('495051'));

		layerBoxMark.transform.position.expression = GetExpression('mark/followPositionBoxMark');
		layerBoxMark.transform.opacity.setValueAtTime(0, 66);

		// -------备注-------
		layerMarkBox.transform.position.setValue([0, 1000]);
		layerMarkBox.transform.position.expression = GetExpression('mark/limitPositionMark')
			.replace(/\$sider\$/g, '\'' + line.side + '\'')
			.replace(/\$side\$/g, C.isLandscape ? 340 : 140)
			.replace(/\$bottom\$/g, C.isLandscape ? 100 : 160);

		const colorMark = RGBH('FFFAFA');

		const textDocMark = layerMarkBox.sourceText.value;
		textDocMark.resetCharStyle();
		textDocMark.fontSize = C.video.size.fontMark;
		textDocMark.fillColor = colorMark;
		textDocMark.font = 'Source Han Mono SC';
		textDocMark.applyStroke = true;
		textDocMark.strokeColor = colorMark;
		textDocMark.strokeWidth = 1;
		textDocMark.boxTextSize = line.boxTextSizeMark;
		textDocMark.leading = C.video.size.fontMark + C.video.size.heightLeading;
		textDocMark.text = markFinal;
		layerMarkBox.sourceText.setValue(textDocMark);
	}


	return compLine;
};