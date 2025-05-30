this.AddBackGround = () => {
	// --------------背景合成--------------
	const compBackground = this.CompBack = EnsureComp('00-背景', D.full, DirComp, I.widthVideo, I.heightVideo);
	compBackground.bgColor = RGBH('0E0E0E');
	const layersBackground = compBackground.layers;

	const layerCompBackground = CompMain.layers.add(compBackground, D.full);
	layerCompBackground.startTime = D.opener - 1;


	/** @type {FootageItem} */
	const footageBackground = GetFootage(I.fileBackground, DirFootage);
	// const isVideoBackground = (footageBackground.file.name.match(/\.mp4$/) || []).length > 0;

	const scaleBackground = I.heightVideo / footageBackground.height * 100;


	const layerBackground = layersBackground.add(footageBackground, D.full);
	layerBackground.startTime = 0;
	layerBackground.scale.setValueAtTime(0, [scaleBackground * 1.5, scaleBackground * 1.5]);
	layerBackground.scale.setValueAtTime(1, [scaleBackground, scaleBackground]);

	const positionSplashBackground = layerBackground.position.value;
	positionSplashBackground[0] += OffsetSplashBackground;
	layerBackground.position.setValue(positionSplashBackground);

	const blurSplashBackground = layerBackground.effect.addProperty('ADBE Box Blur2');
	/** @type {Property} */
	const propertyRadiusBlurSplashBackground = blurSplashBackground[L.blurRadius];
	propertyRadiusBlurSplashBackground.setValueAtTime(1, 0);
	propertyRadiusBlurSplashBackground.setValueAtTime(5, 7);

	// if(isVideoBackground && footageBackground.duration <= (startBackgroundMiddle - layerBackground.startTime)) {
	// 	const layerBackground2 = CompMain.layers.add(footageBackground, D.full);
	// 	layerBackground2.startTime = layerBackground.startTime + footageBackground.duration;
	// 	layerBackground2.scale.setValue([scaleBackground, scaleBackground]);

	// 	const positionSplashBackground2 = layerBackground2.position.value;
	// 	positionSplashBackground2[0] += OffsetSplashBackground;
	// 	layerBackground2.position.setValue(positionSplashBackground2);

	// 	const blurSplashBackground2 = layerBackground2.effect.addProperty('ADBE Box Blur2');
	// 	blurSplashBackground2[L.blurRadius].setValue(propertyRadiusBlurSplashBackground.valueAtTime(9, false));
	// }


	if(I.fileBackgroundMain) {
		const footageBackgroundMain = GetFootage(I.fileBackgroundMain, DirFootage);
		// const isVideoBackgroundMain = (footageBackgroundMain.file.name.match(/\.mp4$/) || []).length > 0;

		const startBackgroundMain = 4;

		const layerBackgroundMain = layersBackground.add(footageBackgroundMain, D.full);

		layerBackgroundMain.startTime = startBackgroundMain;
		layerBackgroundMain.scale.setValue([scaleBackground, scaleBackground]);

		layerBackgroundMain.transform.opacity.setValueAtTime(startBackgroundMain, 0);
		layerBackgroundMain.transform.opacity.setValueAtTime(startBackgroundMain + 2, 100);


		// if(isVideoBackgroundMain) {
		// 	const timesLoop = Math.ceil((D.full - 8) / (footageBackgroundMain.duration - 0)) - 1;

		// 	for(let times = 0; times < timesLoop; times++) {
		// 		const layerBackgroundMainVideo = layersBackground.add(footageBackgroundMain, D.full);

		// 		const timeStart = 8 + (footageBackgroundMain.duration - 0) * (times + 1);
		// 		layerBackgroundMainVideo.startTime = timeStart;
		// 		layerBackgroundMainVideo.scale.setValue([scaleBackground, scaleBackground]);
		// 	}
		// }
	}
};


/**
 * @param {string} pathBackground
 * @param {number} accumDuration
 */
this.AddLineBackGround = (pathBackground, accumDuration) => {
	const timeStart = accumDuration - 2;

	/** @type {FootageItem} */
	const footageBackground = GetFootage(pathBackground, DirFootage);

	const scaleBackground = I.heightVideo / footageBackground.height * 100;


	const layerBackground = CompBack.layers.add(footageBackground, D.full);

	layerBackground.startTime = timeStart;
	layerBackground.scale.setValue([scaleBackground, scaleBackground]);

	layerBackground.transform.opacity.setValueAtTime(timeStart, 0);
	layerBackground.transform.opacity.setValueAtTime(timeStart + 1, 100);
};
