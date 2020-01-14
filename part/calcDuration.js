P.calcDuration = function calcDuration() {
	var arrEvent = JSON.parse(T.readFile(C.path.lines, 'UTF8'));

	var arrDuration = [];
	var linesDuration = 0;
	var lengthLine = 0;

	T.enumLine(arrEvent, function(line) {
		var result = T.getBoxSize(line.line);

		line.boxLine = result[2];
		line.boxTextSize = result.slice(0, 2);
		line.boxHeight = 30 + (40 * 2 + 70) + ((50 + 10) * line.boxLine - 10) + 100 + 70;

		arrDuration.push([line.duration, line.boxHeight]);

		linesDuration += line.duration + D.interval;

		lengthLine++;
	});

	D.list = arrDuration;
	D.length = lengthLine;
	D.lines = linesDuration;

	D.full = D.title + D.lines + D.credit;
	D.linesEnd = D.title + D.lines;

	L(C.champion.name, D.full.toFixed(2), D.lines.toFixed(2));

	return arrEvent;
};