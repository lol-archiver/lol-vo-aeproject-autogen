this.AddGlobalMark = () => {
	const sizeText = 26;
	const leadText = 4;

	for(const markGlobal of I.marksGlobal) {
		const lines = markGlobal.text.split('\n');

		const layerMarkGlobal = CompMain.layers.addText('');
		layerMarkGlobal.transform.position.setValue([(40 + 30 + 60), I.heightVideo - (lines.length * sizeText + (lines.length - 1) * leadText)]);

		SetText(layerMarkGlobal, {
			fillColor: RGBH('E0E0E0'),
			font: 'Source Han Mono SC',
			fontSize: sizeText,
			strokeColor: RGBH('E0E0E0'),
			strokeWidth: 1,
			leading: sizeText + leadText,
			text: markGlobal.text,
		});


		layerMarkGlobal.startTime = D.opener + D.title + markGlobal.born;
		layerMarkGlobal.outPoint = markGlobal.duration == -1 ? D.lines : layerMarkGlobal.startTime + markGlobal.duration;
	}
};
