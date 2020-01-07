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
		var compLine = P.addLine(line, event, lid, eid, T.folderLines, D.linesEnd - accumDuration);

		accumDuration = P.addLineScroll(line, compLine, accumDuration, index);
	});

	P.addCounter();
	P.addCredit();
	P.addWaterMark();

	L.end();
})();