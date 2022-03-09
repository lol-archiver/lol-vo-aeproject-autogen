this.AddCounter = () => {
	const layerWaterMark = CompMain.layers.add(GetFootage(C.fileWaterMark));

	layerWaterMark.transform.scale.setValue([14, 14]);
	layerWaterMark.transform.position.setValue([40, 1040]);

	layerWaterMark.startTime = 0;
	layerWaterMark.duration = D.linesEnd;


	const layerCounter = CompMain.layers.addText('');
	layerCounter.transform.position.setValue([70, 1020]);

	const textDocCounter = layerCounter.sourceText.value;
	textDocCounter.resetCharStyle();
	textDocCounter.fontSize = 24;
	textDocCounter.fillColor = RGBH('E0E0E0');
	textDocCounter.font = 'Source Han Mono SC';
	textDocCounter.applyStroke = true;
	textDocCounter.strokeColor = RGBH('E0E0E0');
	textDocCounter.strokeWidth = 2;

	layerCounter.sourceText.setValue(textDocCounter);

	layerCounter.startTime = D.opener + D.title;
	layerCounter.duration = D.lines;

	let duration = D.opener + D.title;
	let now = D.lengthLine;

	while(now) {
		layerCounter.sourceText.setValueAtTime(duration, now - 1);
		duration += D.list[D.lengthLine - now--][0] + D.interval;
	}
};