P.addWaterMark = function addWaterMark() {
	var layerWaterMark = T.compMain.layers.add(F(C.path.waterMark));

	layerWaterMark.transform.scale.setValue([14, 14]);
	layerWaterMark.transform.position.setValue([40, 1040]);

	layerWaterMark.startTime = 0;
	layerWaterMark.duration = D.linesEnd;

	return layerWaterMark;
};