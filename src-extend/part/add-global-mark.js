this.AddGlobalMark = () => {
	const sizeText = 24 * I.scaleVideo;
	const leadText = 8 * I.scaleVideo;

	for(const markGlobal of I.marksGlobal) {
		const lines = markGlobal.text.split('\n');

		const layerMarkGlobal = CompMain.layers.addText('因');
		const yOffsetMarkGlobal = (40 + 20 + 40) + Math.max(lines.length - 3, 0) * (sizeText + leadText);
		layerMarkGlobal.transform.position.setValue([(40 + 30 + 60) * I.scaleVideo, I.heightVideo - yOffsetMarkGlobal * I.scaleVideo]);

		SetText(layerMarkGlobal, {
			fillColor: RGBH('FFFAFA'),
			font: 'SourceHanMonoSC-Regular',
			fontSize: sizeText,
			strokeColor: RGBH('FFFAFA'),
			strokeWidth: 1 * I.scaleVideo,
			leading: sizeText + leadText,
			text: markGlobal.text,
		});


		layerMarkGlobal.startTime = D.linesBorn + markGlobal.born;
		layerMarkGlobal.outPoint = markGlobal.duration == -1 ? D.linesDead + 1.5 : (layerMarkGlobal.startTime + markGlobal.duration);


		const effectDropShadowMarkGlobal = layerMarkGlobal.effect.addProperty('ADBE Drop Shadow');
		effectDropShadowMarkGlobal[L.shadowColor].setValue(RGBH('474747'));
		effectDropShadowMarkGlobal[L.direction].setValue(135);
		effectDropShadowMarkGlobal[L.opacity].setValue(255);
		effectDropShadowMarkGlobal[L.distance].setValue(7);
		effectDropShadowMarkGlobal[L.softness].setValue(4);
		effectDropShadowMarkGlobal[L.shadowOnly].setValue(0);
	}
};
