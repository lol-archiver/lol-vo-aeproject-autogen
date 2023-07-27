this.AddLine = (line, lid, dirLine, duration) => {
	if(!line.duration) { return; }

	const indexText = lid + 1;

	const side = line.side;
	const isMain = side == 'right';

	const colorBoxLine = !isMain ?
		(line.colorLineBox ?
			RGB.apply(this, line.colorLineBox) :
			RGBH('902222')) :
		RGBH(I.color || '1FAAF1');

	const eventText = line.eventDirect || line.event;
	const markFinal = line.mark;

	const hasTarget = isMain ? line.target : false;
	const hasSkill = isMain ? line.skill : false;
	const hasEvent = line.hideEvent ? false : !!eventText;
	const hasMark = !!markFinal;


	/** 合成宽度 */
	const widthCompLine = Math.max(C.widthVideo, C.heightVideo);
	/** 合成长度 */
	const heightCompLine = C.heightVideo;

	/** 台词字体颜色 */
	const colorLine = RGBH('FFFAFA');
	/** 备注字体颜色 */
	const colorMark = RGBH('FFFAFA');

	/** 台词盒边宽 */
	const paddingLine = 40;
	/** 台词盒到侧边的距离 */
	const siteLine = C.isLandscape ? 200 : 140;
	/** 台词盒到底边的距离 */
	const bottomLine = C.isLandscape ? 100 : 160;

	const leadingLine = C.video.size.heightLeading;

	const topPaddingLineBox = 70;
	const sidePaddingEvent = 50;
	const sizeBoxTarget = 100;
	const strokeBoxTarget = 24;
	const sizeBoxSkill = 72;
	const strokeBoxSkill = 7;

	// --------------台词合成--------------
	const compLine = EnsureComp(indexText + line.line, duration, dirLine, widthCompLine, heightCompLine);
	compLine.bgColor = RGBH('0E0E0E');

	/** 打开第一个台词的合成 */
	if(lid == 0) { compLine.openInViewer(); }

	/** 添加台词音频 */
	if(line.audio && !C.video.mute) { compLine.layers.add(GetFootage(EvalString(line.audio), DirVoice)); }


	const layerBoxMark = hasMark ? compLine.layers.addShape() : null;
	const layerMark = hasMark ? compLine.layers.addBoxText([1, 1], markFinal) : null;


	const layerBoxLine = compLine.layers.addShape();

	const layerShade = (I.shade?.file) ? compLine.layers.add(GetFootage(EvalString(I.shade.file), DirFootage)) : null;

	const layerWaterMark = compLine.layers.addText();

	const layerBoxHeaderShadow = compLine.layers.addShape();

	const layerBoxEvent = hasEvent ? compLine.layers.addShape() : null;
	const layerEvent = hasEvent ? compLine.layers.addText(eventText) : null;

	const layerBoxHeader = compLine.layers.addShape();
	const layerHeader = compLine.layers.add(GetFootage(EvalString(line.head), DirFootage));

	const layerBoxTarget = hasTarget ? compLine.layers.addShape() : null;
	const layerTarget = hasTarget ? compLine.layers.add(GetFootage(EvalString(hasTarget), DirFootage)) : null;

	const layerSkill = hasSkill ? compLine.layers.add(GetFootage(EvalString(hasSkill), DirFootage)) : null;
	const layerBoxSkill = hasSkill ? compLine.layers.addShape() : null;


	const layerLine = compLine.layers.addBoxText([1, 1], line.line);



	layerLine.name = '台词';
	layerBoxLine.name = '台词盒';

	layerHeader.name = '头像';
	layerBoxHeader.name = '头像盒';
	layerBoxHeaderShadow.name = '头像盒影';

	layerWaterMark.name = '水印';
	if(layerShade) { layerShade.name = '底纹'; }

	if(hasEvent) {
		layerEvent.name = '事件';
		layerBoxEvent.name = '事件盒';
	}

	if(hasTarget) {
		layerTarget.name = '目标';
		layerBoxTarget.name = '目标盒';
	}

	if(hasSkill) {
		layerSkill.name = '技能';
		layerBoxSkill.name = '技能盒';
	}

	if(hasMark) {
		layerMark.name = '备注';
		layerBoxMark.name = '备注盒';
	}



	// --------------台词--------------
	SetText(layerLine, {
		fillColor: colorLine,
		font: 'Source Han Mono SC',
		fontSize: C.video.size.fontLine,
		strokeColor: colorLine,
		strokeWidth: 2,
		boxTextSize: line.boxTextSize,
		leading: C.video.size.fontLine + leadingLine,
		text: line.line,
	});
	// const baselineLocationLine = layerLine.sourceText.value.baselineLocs;


	const rectLine = layerLine.sourceRectAtTime(0, false);

	const paddingMark = 20;
	const xLine = widthCompLine - line.boxTextSize[0] - siteLine - paddingLine;
	const yLine = heightCompLine - rectLine.height - bottomLine - paddingLine - (hasMark ? line.boxHeightMark + paddingMark : 0);


	SetAttr(layerLine.transform, { position: [xLine, yLine] });


	// --------------台词盒--------------
	const widthBoxLine = line.boxTextSize[0] + paddingLine * 2;
	const heightBoxLine = rectLine.height + paddingLine * 2 + topPaddingLineBox;

	/** @type {Group} */
	const boxLine = AddProperty(layerBoxLine.content, 'ADBE Vector Group');

	SetAttr(AddProperty(boxLine.content, 'ADBE Vector Shape - Rect'), {
		size: [widthBoxLine, heightBoxLine],
		roundness: 14,
	});
	$.writeln(widthBoxLine);
	$.writeln(heightBoxLine);

	const propFill = AddProperty(boxLine.content, 'ADBE Vector Graphic - Fill');
	SetAttr(propFill, { color: colorBoxLine });
	propFill.color.expression = 'comp("00-全局变量").layer("01-台词盒颜色").content("组 1").content("填充 1").color';

	SetAttr(layerBoxLine.transform, {
		position: [
			xLine + widthBoxLine / 2 - paddingLine,
			yLine + heightBoxLine / 2 - paddingLine - topPaddingLineBox - leadingLine / 2,
		],
	});



	// --------------底纹--------------
	if(layerShade) {
		const rectShade = layerShade.sourceRectAtTime(0, false);
		layerBoxLine.trackMatteType = TrackMatteType.ALPHA_INVERTED;
		SetAttr(layerShade.transform, {
			position: [
				xLine - paddingLine + rectShade.width / 2,
				yLine - paddingLine - topPaddingLineBox + rectShade.height / 2,
			],
			opacity: I.shade.opacity ?? 24,
			scale: I.shade.scale ?? [100, 100],
		});

		if(I.shade.gray === undefined || I.shade.gray) {
			AddProperty(layerShade.effect, 'ADBE Black&White');
		}

		if(I.shade.invert === undefined || I.shade.invert) {
			AddProperty(layerShade.effect, 'ADBE Invert');
		}
	}



	// --------------头像--------------
	const xHeader = xLine + widthBoxLine - paddingLine;
	const yHeader = yLine - paddingLine - topPaddingLineBox - leadingLine / 2;

	SetAttr(layerHeader.transform, { scale: [(line.flipHor ? -1 : 1) * 150, 150] });

	SetAttr(layerHeader.transform, { position: [xHeader, yHeader] });


	// --------------头像盒--------------
	const boxHeader = AddProperty(layerBoxHeader.content, 'ADBE Vector Group');
	const sizeBoxHeader = 200;

	SetAttr(AddProperty(boxHeader.content, 'ADBE Vector Shape - Ellipse'), {
		size: [sizeBoxHeader, sizeBoxHeader],
	});

	SetAttr(AddProperty(boxHeader.content, 'ADBE Vector Graphic - Fill'), { color: RGBH('FFFAFA'), });

	SetAttr(layerBoxHeader.transform, { position: [xHeader, yHeader] });

	const boxHeaderShadow = AddProperty(layerBoxHeaderShadow.content, 'ADBE Vector Group');

	SetAttr(AddProperty(boxHeaderShadow.content, 'ADBE Vector Shape - Ellipse'), {
		size: [sizeBoxHeader, sizeBoxHeader],
	});
	SetAttr(AddProperty(boxHeaderShadow.content, 'ADBE Vector Graphic - Fill'), { color: RGBH('FFFAFA'), });

	SetAttr(layerBoxHeaderShadow.transform, { position: [xHeader, yHeader] });

	SetAttr(AddProperty(layerBoxHeaderShadow.effect, 'ADBE Drop Shadow'), {
		[L.shadowColor]: RGBH('495051'),
		[L.direction]: isMain ? 225 : 135,
		[L.opacity]: (70 / 100) * 255,
		[L.distance]: 11,
		[L.softness]: 7,
		[L.shadowOnly]: 1,
	});



	// --------------水印--------------
	const fontSizeWaterMark = C.video.size.fontLine - 20;

	SetText(layerWaterMark, {
		fontSize: fontSizeWaterMark,
		fillColor: colorLine,
		font: 'Source Han Mono',
		strokeWidth: 2,
		strokeColor: colorLine,
		leading: fontSizeWaterMark + leadingLine,
		text: 'DR',
	});
	const rectWaterMark = layerWaterMark.sourceRectAtTime(0, false);


	SetAttr(layerWaterMark.transform, {
		position: [
			xHeader - rectWaterMark.width / 2,
			yHeader + rectWaterMark.height + sizeBoxHeader / 2 - 5,
		],
		opacity: 14,
	});






	if(hasEvent) {
		// --------------事件--------------
		SetText(layerEvent, {
			fontSize: C.video.size.fontLine,
			fillColor: RGBH('495051'),
			font: 'Source Han Mono SC',
			applyStroke: true,
			strokeColor: RGBH('495051'),
			strokeWidth: 2,
			text: eventText,
		});
		const rectEvent = layerEvent.sourceRectAtTime(0, false);


		const xEvent = xHeader - rectEvent.width - paddingLine * 2 - sidePaddingEvent;
		const yEvent = yHeader + rectEvent.height / 2 - leadingLine / 2;

		SetAttr(layerEvent.transform, { position: [xEvent, yEvent] });



		// --------------事件盒--------------
		const boxEvent = AddProperty(layerBoxEvent.content, 'ADBE Vector Group');

		SetAttr(AddProperty(boxEvent.content, 'ADBE Vector Shape - Rect'), {
			size: [
				rectEvent.width + paddingLine * 2 + topPaddingLineBox,
				rectEvent.height + paddingLine * 2,
			],
			roundness: 14,
		});

		SetAttr(AddProperty(boxEvent.content, 'ADBE Vector Graphic - Fill'), { color: RGBH('FFFAFA') });

		SetAttr(layerBoxEvent.transform, {
			position: [
				xEvent + rectEvent.width / 2 + sidePaddingEvent - paddingLine / 2 - 10,
				yEvent - rectEvent.height / 2 + leadingLine / 2,
			],
		});


		SetAttr(AddProperty(layerBoxEvent.effect, 'ADBE Drop Shadow'), {
			[L.shadowColor]: RGBH('495051'),
			[L.direction]: 135,
			[L.opacity]: (70 / 100) * 255,
			[L.distance]: 14,
			[L.softness]: 7,
		});
	}



	if(hasSkill) {
		// --------------技能图标--------------
		SetAttr(layerSkill.transform, { scale: [114, 114] });

		SetAttr(layerSkill.transform, {
			position: [
				xHeader + sizeBoxHeader / 2 - sizeBoxSkill / 2 + strokeBoxSkill,
				yHeader + sizeBoxHeader / 2 - sizeBoxSkill / 2 + strokeBoxSkill,
			],
		});


		// --------------技能盒--------------
		SetAttr(layerBoxSkill.transform, {
			position: [
				xHeader + sizeBoxHeader / 2 - sizeBoxSkill / 2 + strokeBoxSkill,
				yHeader + sizeBoxHeader / 2 - sizeBoxSkill / 2 + strokeBoxSkill,
			],
		});

		const boxSkill = AddProperty(layerBoxSkill.content, 'ADBE Vector Group');

		SetAttr(AddProperty(boxSkill.content, 'ADBE Vector Shape - Rect'), {
			size: [72, 72],
			roundness: 7,
		});

		SetAttr(AddProperty(boxSkill.content, 'ADBE Vector Graphic - Stroke'), { color: RGBH('FFFAFA'), strokeWidth: 7 });
	}



	if(hasTarget) {
		const xTarget = xHeader - sizeBoxHeader / 2 + 14;
		const yTarget = yHeader - sizeBoxHeader / 2 + 14;

		// --------------技能图标--------------
		SetAttr(layerTarget.transform, { scale: [86, 86], position: [xTarget, yTarget] });



		// --------------目标盒--------------
		const boxTarget = AddProperty(layerBoxTarget.content, 'ADBE Vector Group');

		SetAttr(AddProperty(boxTarget.content, 'ADBE Vector Shape - Ellipse'), {
			size: [sizeBoxTarget, sizeBoxTarget],
		});

		SetAttr(AddProperty(boxTarget.content, 'ADBE Vector Graphic - Stroke'), { color: RGBH('FFFAFA'), strokeWidth: strokeBoxTarget });


		SetAttr(layerBoxTarget.transform, { position: [xTarget, yTarget] });
	}



	if(hasMark) {
		// --------------备注--------------
		SetText(layerMark, {
			fillColor: colorMark,
			font: 'Source Han Mono SC',
			fontSize: C.video.size.fontMark,
			strokeColor: colorMark,
			strokeWidth: 1,
			boxTextSize: line.boxTextSizeMark,
			leading: C.video.size.fontMark + leadingLine,
			text: markFinal,
		});
		// const baselineLocationMark = layerMark.sourceText.value.baselineLocs;


		const rectMark = layerMark.sourceRectAtTime(0, false);

		const xMark = widthCompLine - line.boxTextSizeMark[0] - siteLine - paddingMark;
		const yMark = heightCompLine - rectMark.height - bottomLine - paddingMark;

		SetAttr(layerMark.transform, {
			position: [
				widthCompLine - line.boxTextSizeMark[0] - siteLine - paddingMark,
				heightCompLine - rectMark.height - bottomLine - paddingMark,
			],
		});



		// --------------备注框--------------
		const boxMark = AddProperty(layerBoxMark.content, 'ADBE Vector Group');


		SetAttr(AddProperty(boxMark.content, 'ADBE Vector Shape - Rect'), {
			roundness: 14,
			size: [
				line.boxTextSizeMark[0] + paddingMark * 2,
				line.boxTextSizeMark[1] + paddingMark * 2,
			]
		});

		SetAttr(AddProperty(boxMark.content, 'ADBE Vector Graphic - Fill'), { color: RGBH('495051'), });


		SetAttr(layerBoxMark.transform, {
			opacity: 66,
			position: [
				xMark + line.boxTextSizeMark[0] / 2,
				yMark + rectMark.height / 2,
			]
		});
	}



	return compLine;
};
