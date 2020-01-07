P.addLineScroll = function addLineScroll(line, compLine, index, accumDuration, durationLien) {
	var layerLine = T.compMain.layers.add(compLine, durationLien);
	layerLine.startTime = accumDuration;
	layerLine.transform.position.setValue([960, 540 + 360]);
	layerLine.transform.position.setValueAtTime(accumDuration, [960, 540 + 360]);
	layerLine.transform.position.setValueAtTime(accumDuration + 0.1, [960, 540]);

	var yLine = 540;
	var accumDurationLine = accumDuration + line.duration + D.interval;

	while(yLine >= -180) {
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
};