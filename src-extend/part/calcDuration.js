P.calcDuration = function calcDuration() {
	var events = I.events;

	if(C.video.rangeEvent) {
		events = events.slice(C.video.rangeEvent[0], C.video.rangeEvent[1]);
	}

	var arrDuration = [];
	var linesDuration = 0;

	D.length = 0;
	T.enumLine(events, function() {
		D.length++;
	});

	T.enumLine(events, function(line, event, lid, eid, index) {
		var sizeLine = T.getBoxSize(line.line);
		var markFinal = line.mark || event.mark;

		line.boxLine = sizeLine[2];
		line.boxTextSize = sizeLine.slice(0, 2);
		line.boxHeight = 30 + (C.video.size.paddingLine * 2 + 70) +
			sizeLine[1] + 140;

		if(markFinal) {
			var sizeMark = T.getBoxSizeMark(markFinal);

			line.boxTextSizeMark = sizeMark.slice(0, 2);
			line.boxHeightMark = sizeMark[1] + C.video.size.paddingMark;
			line.boxHeight += 20 + line.boxHeightMark;
		}

		arrDuration.push([line.duration, line.boxHeight]);

		var durationLine = line.duration + D.interval;

		linesDuration += durationLine;

		line.durationLine = durationLine + 0.4 + (index >= D.length - 3 ? 4 : 0);
	});

	D.list = arrDuration;

	D.lines = linesDuration;

	D.credit += 4.5;

	D.full = D.title + D.lines + D.credit;
	D.linesEnd = D.title + D.lines;

	L(D.lines - 120);
	L(D.linesEnd - 120);

	L(I.champion.name, D.full.toFixed(2), D.lines.toFixed(2));

	return events;
};