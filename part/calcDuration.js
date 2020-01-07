P.calcDuration = function calcDuration() {
	var arrEvent = JSON.parse(T.readFile(C.path.lines, 'UTF8'));

	var arrDuration = [];
	var linesDuration = 0;
	var lengthLine = 0;

	T.enumLine(arrEvent, function(line) {
		arrDuration.push(line.duration);

		linesDuration += line.duration + D.interval;

		lengthLine++;
	});

	D.list = arrDuration;
	D.length = lengthLine;
	D.lines = linesDuration;

	D.full = D.title + D.lines + D.credit;
	D.linesEnd = D.title + D.lines;

	return arrEvent;
};