this.AddBackGround = () => {
	const scaleSplashBackground = C.isLandscape ? 158 : 268;

	const splashBackground = CompMain.layers.add(GetFootage(C.fileSplash, DirFootage), D.full);
	splashBackground.startTime = D.opener - 1;
	splashBackground.scale.setValueAtTime(D.opener - 1, [scaleSplashBackground * 1.5, scaleSplashBackground * 1.5]);
	splashBackground.scale.setValueAtTime(D.opener + 2, [scaleSplashBackground, scaleSplashBackground]);
	const positionSplashBackground = splashBackground.position.value; positionSplashBackground[0] += OffsetSplashBackground;
	splashBackground.position.setValue(positionSplashBackground);


	const blurSplashBackground = splashBackground.effect.addProperty('ADBE Box Blur2');
	blurSplashBackground[L.blurRadius].setValueAtTime(5, 0);
	blurSplashBackground[L.blurRadius].setValueAtTime(9, 7);
};