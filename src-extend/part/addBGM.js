P.addBGM = function() {
	if(C.video.mute) { return; }

	var footage = F(C.path.file.bgm);

	var countLoop = Math.ceil((D.full / footage.duration));

	for(var i = 1; i <= countLoop; i++) {
		var layerBGM = T.compMain.layers.add(footage);

		layerBGM.audio.audioLevels.setValue([-11, -11]);
		layerBGM.startTime = footage.duration * (i - 1);

		if(i == countLoop) {
			layerBGM.audio.audioLevels.setValueAtTime(D.full - 4, [-11, -11]);
			layerBGM.audio.audioLevels.setValueAtTime(D.full, [-45, -45]);
		}
	}
};