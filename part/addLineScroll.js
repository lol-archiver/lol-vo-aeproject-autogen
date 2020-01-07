P.addLineScroll = function addLineScroll(line, compLine, accumDuration, index) {
	var layerLine = T.compMain.layers.add(compLine, D.linesEnd - accumDuration);
	layerLine.startTime = accumDuration;
	layerLine.transform.position.setValue([960, 540 + 360]);
	layerLine.transform.position.setValueAtTime(accumDuration, [960, 540 + 360]);
	layerLine.transform.position.setValueAtTime(accumDuration + 0.1, [960, 540]);

	accumDuration += line.duration + D.interval;

	var yLine = 540;
	var accumDurationLine = accumDuration;

	while(yLine >= -1080) {
		yLine -= 360;

		var nextDuration = D.list[++index];

		if(nextDuration) {
			layerLine.transform.position.setValueAtTime(accumDurationLine, [960, yLine + 360]);
			layerLine.transform.position.setValueAtTime(accumDurationLine + 0.1, [960, yLine]);

			accumDurationLine += nextDuration + D.interval;
		}
		else {
			break;
		}
	}

	return accumDuration;
};