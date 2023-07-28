this.CalcDuration = () => {
	/** @type {Array} */
	let lines = I.lines;

	if(C.video.range) { lines = lines.slice(C.video.range[0], C.video.range[1]); }


	const durations = [];
	let durationLines = 0;


	D.lengthLine = 0;
	EnumLine(lines, () => D.lengthLine++);

	EnumLine(lines, (line, lid, index) => {
		const sizeLine = GetBoxSize(line.line);

		line.boxLine = sizeLine[2];
		line.boxTextSize = sizeLine.slice(0, 2);
		line.boxHeight = 30 + (C.video.size.paddingLine * 2 + 70) +
			sizeLine[1] + 140;

		if(line.mark) {
			const sizeMark = GetBoxSizeMark(line.mark);

			line.boxTextSizeMark = sizeMark.slice(0, 2);
			line.boxHeightMark = sizeMark[1] + C.video.size.paddingMark;
			line.boxHeight += 20 + line.boxHeightMark;
		}

		durations.push([line.duration, line.boxHeight]);

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
