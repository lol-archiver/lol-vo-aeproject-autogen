this.CalcDuration = () => {
	/** @type {Array} */
	let lines = I.lines;

	if(C.video.range) { lines = lines.slice(C.video.range[0] - 1, C.video.range[1]); }


	const durations = [];
	let durationLines = 0;


	D.lengthLine = 0;
	EnumLine(lines, () => D.lengthLine++);

	EnumLine(lines, (line, lid, index) => {
		const [widthTextLine, heightTextLine, countRowBoxLine] = GetBoxSize(line.line);

		line.widthTextLine = widthTextLine;
		line.heightTextLine = heightTextLine;
		line.countRowLine = countRowBoxLine;

		line.heightLive =
			+ C.video.size.paddingLine
			+ heightTextLine
			+ C.video.size.paddingLine
			+ C.video.size.paddingTopExtra$event
			+ C.video.size.sizeBoxHeader / 2;


		if(line.cond) {
			const [widthTextCond, heightTextCond] = GetBoxSizeMark(line.cond);

			line.widthTextCond = widthTextCond;
			line.heightTextCond = heightTextCond;

			line.heightLive += C.video.size.paddingCond + heightTextCond + C.video.size.paddingCond;
		}


		if(line.mark) {
			const [widthTextMark, heightTextMark] = GetBoxSizeMark(line.mark);

			line.widthTextMark = widthTextMark;
			line.heightTextMark = heightTextMark;

			line.heightLive += C.video.size.gapBoxLive + C.video.size.paddingMark + heightTextMark + C.video.size.paddingMark;
		}



		durations.push([line.duration, line.heightLive]);

		const durationLine = line.duration + D.interval;

		durationLines += durationLine;

		line.durationLine = durationLine + 0.4 + (index >= D.lengthLine - 3 ? 4 : 0);
	});

	CompTest.remove();

	D.list = durations;

	D.lines = durationLines;

	D.ending += 4.5;

	D.full = D.opener + D.lines + D.ending;
	D.linesEnd = D.opener + D.lines;

	$.writeln(`${I.champion?.name ?? `${I.title1} ${I.title2}${I.title2Suffix || ''}`} ${D.full.toFixed(2)} ${D.lines.toFixed(2)}`);

	return lines;
};
