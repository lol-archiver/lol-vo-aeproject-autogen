// @include 'json2.js';
// @include 'config.js';
// @include 'init.js';
// @include 'expression.js';
// @include 'ensure.js';
// @include 'footage.js';

(function() {
	var arrEvent = P.calcDuration();

	T.compMain.duration = D.full;
	T.compMain.openInViewer();

	P.addBGM();
	P.addTitle();

	var accumDuration = D.title;
	T.enumLine(arrEvent, function(line, event, lid, eid, index) {
		var yCenter = 540;

		var yLine = yCenter + line.boxHeight;
		var indexLine = index;

		var durationLine = line.durationLine;

		while(yLine >= -yCenter) {
			var lineInfoExtra = D.list[++indexLine];

			if(lineInfoExtra) {
				var nextDuration = lineInfoExtra[0];
				var nextBoxHeight = lineInfoExtra[1];

				yLine -= nextBoxHeight;

				durationLine += nextDuration + D.interval;
			}
			else {
				break;
			}
		}

		var compLine = P.addLine(line, event, lid, eid, T.folderLines, durationLine);

		P.addLineScroll(line, compLine, index, accumDuration, durationLine);

		accumDuration += line.duration + D.interval;
	});

	P.addCounter();
	P.addCredit();
	P.addWaterMark();

	L.end();
})();