this.AddCounter = (simple = false) => {
	const layerWaterMark = CompMain.layers.add(GetFootage(I.fileWaterMark));

	layerWaterMark.transform.scale.setValue([14, 14]);
	layerWaterMark.transform.position.setValue([40 * I.scaleVideo, I.heightVideo - (40 + 40) * I.scaleVideo]);

	layerWaterMark.startTime = D.opener + 1;
	layerWaterMark.duration = D.linesDead;
	layerWaterMark.transform.opacity.setValueAtTime(D.opener + 1, 0);
	layerWaterMark.transform.opacity.setValueAtTime(D.opener + 3, 100);


	const effectDropShadowWaterMark = layerWaterMark.effect.addProperty('ADBE Drop Shadow');
	effectDropShadowWaterMark[L.shadowColor].setValue(RGBH('040404'));
	effectDropShadowWaterMark[L.direction].setValue(135);
	effectDropShadowWaterMark[L.opacity].setValue(255);
	effectDropShadowWaterMark[L.distance].setValue(7 * I.scaleVideo);
	effectDropShadowWaterMark[L.softness].setValue(4);
	effectDropShadowWaterMark[L.shadowOnly].setValue(0);


	const layerCounter = CompMain.layers.addText('0');
	layerCounter.transform.position.setValue([(40 + 30) * I.scaleVideo, I.heightVideo - (40 + 20 + 40) * I.scaleVideo]);

	SetText(layerCounter, {
		fillColor: RGBH('FFFAFA'),
		font: 'SourceHanMonoSC-Regular',
		fontSize: 24 * I.scaleVideo,
		strokeColor: RGBH('FFFAFA'),
		strokeWidth: 1 * I.scaleVideo,
	});

	layerCounter.startTime = D.linesBorn;
	layerCounter.duration = D.lines;

	let duration = D.linesBorn;
	let now = D.lengthLine;

	if(simple) {
		layerCounter.sourceText.setValue(999);
	}
	else {
		while(now) {
			layerCounter.sourceText.setValueAtTime(duration, now - 1);
			duration += LinesInfoExtra[D.lengthLine - now--][0] + D.interval;

			if(now % 20 == 0) { $.writeln(`counter added: ${now}/${D.lengthLine}`); }
		}
	}

	const effectDropShadowCounter = layerCounter.effect.addProperty('ADBE Drop Shadow');
	effectDropShadowCounter[L.shadowColor].setValue(RGBH('474747'));
	effectDropShadowCounter[L.direction].setValue(135);
	effectDropShadowCounter[L.opacity].setValue(255);
	effectDropShadowCounter[L.distance].setValue(7);
	effectDropShadowCounter[L.softness].setValue(4);
	effectDropShadowCounter[L.shadowOnly].setValue(0);
};
