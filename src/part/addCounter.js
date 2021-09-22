P.addCounter = function addCounter() {
	var layerCounter = T.compMain.layers.addText('');
	layerCounter.transform.position.setValue([70, 1020]);

	var textDocCounter = layerCounter.sourceText.value;
	textDocCounter.resetCharStyle();
	textDocCounter.fontSize = 24;
	textDocCounter.fillColor = T.rgb(224, 224, 224);
	textDocCounter.font = 'Source Han Mono SC';
	textDocCounter.applyStroke = true;
	textDocCounter.strokeColor = T.rgb(224, 224, 224);
	textDocCounter.strokeWidth = 2;

	layerCounter.sourceText.setValue(textDocCounter);

	layerCounter.startTime = D.title;
	layerCounter.duration = D.lines;

	var duration = D.title;
	var now = D.length;

	while(now) {
		layerCounter.sourceText.setValueAtTime(duration, now - 1);
		duration += D.list[D.length - now--][0] + D.interval;
	}
};