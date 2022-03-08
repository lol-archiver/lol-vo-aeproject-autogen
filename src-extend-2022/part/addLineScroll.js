this.AddLineScroll = (line, compLine, index, accumDuration, durationLine) => {
	const xCenter = C.widthVideo / 2;
	const yCenter = C.heightVideo / 2;

	const layerLine = CompMain.layers.add(compLine, durationLine);

	layerLine.startTime = accumDuration;
	layerLine.transform.position.setValue([xCenter, yCenter + line.boxHeight]);


	layerLine.transform.opacity.setValueAtTime(accumDuration, 100);
	layerLine.transform.opacity.setValueAtTime(accumDuration + line.duration, 100);
	layerLine.transform.opacity.setValueAtTime(accumDuration + line.duration + 0.1, 80);


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