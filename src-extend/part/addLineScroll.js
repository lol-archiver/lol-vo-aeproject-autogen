P.addLineScroll = function addLineScroll(line, compLine, index, accumDuration, durationLine) {
	var xCenter = 960;
	var yCenter = 540;

	var layerLine = T.compMain.layers.add(compLine, durationLine);

	layerLine.startTime = accumDuration;
	layerLine.transform.position.setValue([xCenter, yCenter + line.boxHeight]);

	var yLine = yCenter + line.boxHeight;
	var accumDurationLine = accumDuration;

	while(yLine >= -yCenter) {
		var lineInfoExtra = D.list[index++];

		if(lineInfoExtra) {
			var nextDuration = lineInfoExtra[0];
			var nextBoxHeight = lineInfoExtra[1];

			layerLine.transform.position.setValueAtTime(accumDurationLine, [xCenter, yLine]);

			layerLine.transform.position.setValueAtTime(accumDurationLine + 0.1, [xCenter, yLine -= nextBoxHeight]);

			accumDurationLine += nextDuration + D.interval;
		}
		else {
			break;
		}
	}
};