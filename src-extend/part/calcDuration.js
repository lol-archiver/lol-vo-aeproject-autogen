P.calcDuration = function calcDuration() {
	/** @type {Array} */
	var lines = I.lines;

	if(C.video.range) { lines = lines.slice(C.video.range[0], C.video.range[1]); }


	var durations = [];
	var durationLines = 0;


	D.lengthLine = 0;
	T.enumLine(lines, function() { D.lengthLine++; });

	T.enumLine(lines, function(line, lid, index) {
		var sizeLine = T.getBoxSize(line.line);

		line.boxLine = sizeLine[2];
		line.boxTextSize = sizeLine.slice(0, 2);
		line.boxHeight = 30 + (C.video.size.paddingLine * 2 + 70) +
			sizeLine[1] + 140;

		if(line.mark) {
			var sizeMark = T.getBoxSizeMark(line.mark);

			line.boxTextSizeMark = sizeMark.slice(0, 2);
			line.boxHeightMark = sizeMark[1] + C.video.size.paddingMark;
			line.boxHeight += 20 + line.boxHeightMark;
		}

		durations.push([line.duration, line.boxHeight]);

		var durationLine = line.duration + D.interval;

		durationLines += durationLine;

		line.durationLine = durationLine + 0.4 + (index >= D.lengthLine - 3 ? 4 : 0);
	});

	D.list = durations;

	D.lines = durationLines;

	D.credit += 4.5;

	D.full = D.title + D.lines + D.credit;
	D.linesEnd = D.title + D.lines;

	L(I.champion.name, D.full.toFixed(2), D.lines.toFixed(2));

	return lines;
};