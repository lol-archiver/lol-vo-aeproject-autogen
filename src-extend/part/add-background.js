this.AddBackGround = () => {
	const startBackgroundMiddle = 8;
	const scaleBackground = C.isLandscape ? 158 : 268;


	/** @type {FootageItem} */
	const footageBackground = GetFootage(EvalString(C.fileSplash), DirFootage);
	const isVideoBackground = (footageBackground.file.name.match(/\.mp4$/) || []).length > 0;



	const layerBackground = CompMain.layers.add(footageBackground, D.full);
	layerBackground.startTime = D.opener - 1;
	layerBackground.scale.setValueAtTime(D.opener - 1, [scaleBackground * 1.5, scaleBackground * 1.5]);
	layerBackground.scale.setValueAtTime(D.opener + 2, [scaleBackground, scaleBackground]);

	const positionSplashBackground = layerBackground.position.value;
	positionSplashBackground[0] += OffsetSplashBackground;
	layerBackground.position.setValue(positionSplashBackground);

	const blurSplashBackground = layerBackground.effect.addProperty('ADBE Box Blur2');
	/** @type {Property} */
	const propertyRadiusBlurSplashBackground = blurSplashBackground[L.blurRadius];
	propertyRadiusBlurSplashBackground.setValueAtTime(5, 0);
	propertyRadiusBlurSplashBackground.setValueAtTime(9, 7);

	if(isVideoBackground && footageBackground.duration <= (startBackgroundMiddle - layerBackground.startTime)) {
		const layerBackground2 = CompMain.layers.add(footageBackground, D.full);
		layerBackground2.startTime = layerBackground.startTime + footageBackground.duration;
		layerBackground2.scale.setValue([scaleBackground, scaleBackground]);

		const positionSplashBackground2 = layerBackground2.position.value;
		positionSplashBackground2[0] += OffsetSplashBackground;
		layerBackground2.position.setValue(positionSplashBackground2);

		const blurSplashBackground2 = layerBackground2.effect.addProperty('ADBE Box Blur2');
		blurSplashBackground2[L.blurRadius].setValue(propertyRadiusBlurSplashBackground.valueAtTime(9, false));
	}


	if(I.splashMiddle) {
		const footageBackgroundMiddle = GetFootage(EvalString(I.splashMiddle), DirFootage);
		const isVideoSplashMiddle = (footageBackgroundMiddle.file.name.match(/\.mp4$/) || []).length > 0;


		const layerBackgroundMiddle = CompMain.layers.add(footageBackgroundMiddle, D.full);

		layerBackgroundMiddle.startTime = startBackgroundMiddle;
		layerBackgroundMiddle.scale.setValue([scaleBackground, scaleBackground]);

		layerBackgroundMiddle.transform.opacity.setValueAtTime(8, 0);
		layerBackgroundMiddle.transform.opacity.setValueAtTime(8 + 2, 100);


		if(isVideoSplashMiddle) {
			const timesLoop = Math.ceil((D.full - 8) / (footageBackgroundMiddle.duration - 0)) - 1;

			for(let t = 0; t < timesLoop; t++) {
				const splashMiddle = CompMain.layers.add(footageBackgroundMiddle, D.full);

				const timeStart = 8 + (footageBackgroundMiddle.duration - 0) * (t + 1);
				splashMiddle.startTime = timeStart;
				splashMiddle.scale.setValue([scaleBackground, scaleBackground]);

				// splashMiddle.transform.opacity.setValueAtTime(timeStart, 0);
				// splashMiddle.transform.opacity.setValueAtTime(timeStart + 0.5, 100);
			}
		}

	}
};
