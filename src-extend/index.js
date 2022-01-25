// @include 'json2.js';
// @include 'init.js';
// @include 'ensure.js';
// @include 'lang.js';

(function() {
	var events = P.calcDuration();

	T.compMain.duration = D.full;
	T.compMain.openInViewer();

	if(!C.video.simple) {
		P.addBGM();
		P.addTitle();
	}

	var accumDuration = D.title;
	T.enumLine(events, function(line, lid, index) {
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

		var compLine = P.addLine(line, lid, T.folderLines, durationLine);

		P.addLineScroll(line, compLine, index, accumDuration, durationLine);

		accumDuration += line.duration + D.interval;
	});

	if(!C.video.simple) {
		P.addCounter();
		P.addCredit();
		P.addWaterMark();
	}

	L.end();
})();