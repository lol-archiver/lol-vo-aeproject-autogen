this.AddLineScroll = (line, compLine, index, accumDuration, durationLine) => {
	const xCenter = C.widthVideo / 2 - (C.video.isLandscape ? 0 : 220);
	const yCenter = C.heightVideo / 2;

	const layerLine = CompMain.layers.add(compLine, durationLine);

	layerLine.startTime = accumDuration;

	layerLine.transform.position.setValue([xCenter, yCenter + line.heightLive + C.video.size.paddingBottomVideo]);

	if(!C.video.isLandscape) {
		layerLine.transform.scale.setValue([80, 80]);
	}


	layerLine.transform.opacity.setValueAtTime(accumDuration, 100);
	layerLine.transform.opacity.setValueAtTime(accumDuration + line.duration, 100);
	layerLine.transform.opacity.setValueAtTime(accumDuration + line.duration + 0.1, 80);


	let yLine = yCenter + (line.heightLive + C.video.size.paddingBottomVideo);
	let accumDurationLine = accumDuration;

	while(yLine >= -yCenter) {
		const lineInfoExtra = D.list[index++];
		if(!lineInfoExtra) { break; }


		const nextDuration = lineInfoExtra[0];
		const nextBoxHeight = lineInfoExtra[1] + C.video.size.gapLive;

		layerLine.transform.position.setValueAtTime(accumDurationLine, [xCenter, yLine]);

		layerLine.transform.position.setValueAtTime(accumDurationLine + 0.1, [xCenter, yLine -= nextBoxHeight]);

		accumDurationLine += nextDuration + D.interval;
	}
};
