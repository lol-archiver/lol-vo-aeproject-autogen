this.AddGlobalMark = () => {
	const sizeText = 24;
	const leadText = 8;

	for(const markGlobal of I.marksGlobal) {
		const lines = markGlobal.text.split('\n');

		const layerMarkGlobal = CompMain.layers.addText('');
		const yOffsetMarkGlobal = (40 + 20 + 40) + Math.max(lines.length - 3, 0) * (sizeText + leadText);
		layerMarkGlobal.transform.position.setValue([(40 + 30 + 60), I.heightVideo - yOffsetMarkGlobal]);

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
