export default {
	title: '剪纸仙灵 艾瑞莉娅',
	title1: '剪纸仙灵',
	title2: '艾瑞莉娅',
	champion: {
		id: 39,
		name: 'Irelia',
	},
	skin: {
		id: 37,
		name: 'Mythmaker'
	},
	color: '#BA373A',
	splashMiddle: '${C.dirAutogen}/reso/splash-left/039037.png',
	events: {
		'[击杀:建筑:防御塔]':
			{ target: '${C.dirAutogen}/reso/icon/turret.png' },


		'[初遇:英雄:孙悟空]':
			{ target: '${C.dirAutogen}/reso/icon/MonkeyKing/0.png', mark: '虽然看实际的解包数据是任意皮肤的悟空都有效\n但原始的事件名显示是对悟空的一个不存在的皮肤生效' },
		'[击杀:英雄:孙悟空]':
			{ target: '${C.dirAutogen}/reso/icon/MonkeyKing/0.png' },
		'[初遇:皮肤:剪纸仙灵 加里奥]':
			{ target: '${C.dirAutogen}/reso/icon/Galio/28.png' },
		'[击杀:皮肤:剪纸仙灵 加里奥]':
			{ target: '${C.dirAutogen}/reso/icon/Galio/28.png' },
		'[初遇:皮肤:剪纸仙灵 盖伦]':
			{ target: '${C.dirAutogen}/reso/icon/Garen/33.png' },
		'[击杀:皮肤:剪纸仙灵 盖伦]':
			{ target: '${C.dirAutogen}/reso/icon/Garen/33.png' },
		'[初遇:皮肤:剪纸仙灵 希维尔]':
			{ target: '${C.dirAutogen}/reso/icon/Sivir/50.png' },
		'[击杀:皮肤:剪纸仙灵 希维尔]':
			{ target: '${C.dirAutogen}/reso/icon/Sivir/50.png' },
		'[初遇:皮肤:剪纸仙灵 婕拉]':
			{ target: '${C.dirAutogen}/reso/icon/Zyra/36.png' },
		'[击杀:皮肤:剪纸仙灵 婕拉]':
			{ target: '${C.dirAutogen}/reso/icon/Zyra/36.png' },

		'[使用:Q技能:利刃冲击:P被动满层]':
			{ skill: '${C.dirAutogen}/reso/icon/Irelia/Q.png', mark: '被动满层后，Q技能语音会按“AmBmCmDm”的顺序触发\\。其中ABCD为四组共16句语音，合起来是一首四字诗词\\。“m”则是视频末的一组4句语气语音，也用于被动未满时触发' },
		'[使用:Q技能:利刃冲击]':
			{ skill: '${C.dirAutogen}/reso/icon/Irelia/Q.png' },
		'[使用:W技能:距破之舞:蓄力]':
			{ skill: '${C.dirAutogen}/reso/icon/Irelia/W.png', mark: 'W技能蓄力和释放语音是固定搭配的' },
		'[使用:W技能:距破之舞:释放]':
			{ skill: '${C.dirAutogen}/reso/icon/Irelia/W.png' },
		'[使用:E技能:比翼双刃]':
			{ skill: '${C.dirAutogen}/reso/icon/Irelia/E.png' },
		'[升级:R技能:先锋之刃:初次]':
			{ skill: '${C.dirAutogen}/reso/icon/Irelia/R.png' },
		'[使用:R技能:先锋之刃]':
			{ skill: '${C.dirAutogen}/reso/icon/Irelia/R.png' },
	},
	lines: {
	}
};
