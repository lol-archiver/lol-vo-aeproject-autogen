P.calcDuration = function calcDuration() {
	var arrEvent = JSON.parse(T.readFile(C.path.lines, 'UTF8'));

	var arrDuration = [];
	var linesDuration = 0;

	D.length = 0;
	T.enumLine(arrEvent, function() {
		D.length++;
	});

	T.enumLine(arrEvent, function(line, event, lid, eid, index) {
		var result = T.getBoxSize(line.line);

		line.boxLine = result[2];
		line.boxTextSize = result.slice(0, 2);
		line.boxHeight = 30 + (40 * 2 + 70) + ((50 + 10) * line.boxLine - 10) + 100 + 70;

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

	L(C.champion.name, D.full.toFixed(2), D.lines.toFixed(2));

	return arrEvent;
};