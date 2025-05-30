/**
 * 添加全局变量
 * @returns {CompItem} 全局变量合成
 */
this.AddGlobal = () => {
	const compGlobal = EnsureComp('00-全局变量', D.opener, DirComp);


	for(let index = 0; index < I.colorsLine.length; index++) {
		const color = I.colorsLine[index];

		const layerColorBoxLine = compGlobal.layers.addShape();
		layerColorBoxLine.name = color;

		SetAttr(layerColorBoxLine.transform, {
			position: [(120 + (120 + 80) * index) * I.scaleVideo, 120 * I.scaleVideo],
		});

		/** @type {PropertyGroup} */
		const boxColorBoxLine = AddProperty(layerColorBoxLine.content, 'ADBE Vector Group');
		SetAttr(AddProperty(boxColorBoxLine.content, 'ADBE Vector Shape - Rect'), {
			size: [160 * I.scaleVideo, 160 * I.scaleVideo],
			roundness: 14 * I.scaleVideo,
		});
		SetAttr(AddProperty(boxColorBoxLine.content, 'ADBE Vector Graphic - Fill'), {
			color: RGBH(color || '1FAAF1'),
		});
	}



	compGlobal.openInViewer();


	return compGlobal;
};
