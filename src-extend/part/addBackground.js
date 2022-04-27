this.AddBackGround = () => {
	const scaleSplashBackground = C.isLandscape ? 158 : 268;

	const splashBackground = CompMain.layers.add(GetFootage(EvalString(C.fileSplash), DirFootage), D.full);
	splashBackground.startTime = D.opener - 1;
	splashBackground.scale.setValueAtTime(D.opener - 1, [scaleSplashBackground * 1.5, scaleSplashBackground * 1.5]);
	splashBackground.scale.setValueAtTime(D.opener + 2, [scaleSplashBackground, scaleSplashBackground]);
	const positionSplashBackground = splashBackground.position.value; positionSplashBackground[0] += OffsetSplashBackground;
	splashBackground.position.setValue(positionSplashBackground);


	const blurSplashBackground = splashBackground.effect.addProperty('ADBE Box Blur2');
	blurSplashBackground[L.blurRadius].setValueAtTime(5, 0);
	blurSplashBackground[L.blurRadius].setValueAtTime(9, 7);


	if(I.splashMiddle) {
		const splashMiddle = CompMain.layers.add(GetFootage(EvalString(I.splashMiddle), DirFootage), D.full);

		splashMiddle.startTime = 8;
		splashMiddle.scale.setValue([scaleSplashBackground, scaleSplashBackground]);

		splashMiddle.transform.opacity.setValueAtTime(8, 0);
		splashMiddle.transform.opacity.setValueAtTime(8 + 2, 100);

	}
};