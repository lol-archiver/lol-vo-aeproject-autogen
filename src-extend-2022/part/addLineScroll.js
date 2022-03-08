this.AddLineScroll = (line, compLine, index, accumDuration, durationLine) => {
	const xCenter = 960;
	const yCenter = 540;

	const layerLine = CompMain.layers.add(compLine, durationLine);

	layerLine.startTime = accumDuration;
	layerLine.transform.position.setValue([xCenter, yCenter + line.boxHeight]);

	const bcLine = AddProperty(layerLine.effect, 'ADBE Brightness & Contrast 2');
	bcLine.Brightness.setValueAtTime(accumDuration, 0);
	bcLine.Brightness.setValueAtTime(accumDuration + line.duration, 0);
	bcLine.Brightness.setValueAtTime(accumDuration + line.duration + 0.1, -70);
	bcLine.Contrast.setValueAtTime(accumDuration, 0);
	bcLine.Contrast.setValueAtTime(accumDuration + line.duration, 0);
	bcLine.Contrast.setValueAtTime(accumDuration + line.duration + 0.1, -70);

	let yLine = yCenter + line.boxHeight;
	let accumDurationLine = accumDuration;

	while(yLine >= -yCenter) {
		const lineInfoExtra = D.list[index++];

		if(lineInfoExtra) {
			const nextDuration = lineInfoExtra[0];
			const nextBoxHeight = lineInfoExtra[1];

			layerLine.transform.position.setValueAtTime(accumDurationLine, [xCenter, yLine]);

			layerLine.transform.position.setValueAtTime(accumDurationLine + 0.1, [xCenter, yLine -= nextBoxHeight]);

			accumDurationLine += nextDuration + D.interval;
		}
		else {
			break;
		}
	}
};