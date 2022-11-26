export default {
	title: '太空律动 "律动队长" 提莫',
	title1: '太空律动 "律动队长"',
	title2: '提莫',
	champion: {
		id: 17,
		name: 'Teemo',
	},
	skin: {
		id: 47,
		name: 'Space Groove'
	},
	color: '#3599EE',
	splashMiddle: '${C.dirAutogen}/reso/splash-left/017047.png',
	events: {
		'[攻击:生物:纳什男爵]':
			{ target: '${C.dirAutogen}/reso/icon/@monster/baron.png' },
		'[击杀:建筑:防御塔]':
			{ target: '${C.dirAutogen}/reso/icon/turret.png' },


		'[初遇:皮肤:太空律动 "猫猫" 布里和里茨]':
			{ target: '${C.dirAutogen}/reso/other/icon/spg-blitzcrank.png' },
		'[击杀:皮肤:太空律动 "猫猫" 布里和里茨]':
			{ target: '${C.dirAutogen}/reso/other/icon/spg-blitzcrank.png' },
		'[初遇:皮肤:太空律动 "电音酒桶" 古拉加斯]':
			{ target: '${C.dirAutogen}/reso/icon/Gragas/20.png' },
		'[击杀:皮肤:太空律动 "电音酒桶" 古拉加斯]':
			{ target: '${C.dirAutogen}/reso/icon/Gragas/20.png' },
		'[初遇:皮肤:太空律动 "噪音女王" 丽桑卓]':
			{ target: '${C.dirAutogen}/reso/icon/Lissandra/34.png' },
		'[击杀:皮肤:太空律动 "噪音女王" 丽桑卓]':
			{ target: '${C.dirAutogen}/reso/icon/Lissandra/34.png' },
		'[初遇:皮肤:太空律动 "魔音海妖" 娜美]':
			{ target: '${C.dirAutogen}/reso/icon/Nami/41.png' },
		'[击杀:皮肤:太空律动 "魔音海妖" 娜美]':
			{ target: '${C.dirAutogen}/reso/icon/Nami/41.png' },
		'[初遇:皮肤:太空律动 "创乐之神" 奥恩]':
		{ target: '${C.dirAutogen}/reso/icon/Ornn/11.png' },
		'[击杀:皮肤:太空律动 "创乐之神" 奥恩]':
		{ target: '${C.dirAutogen}/reso/icon/Ornn/11.png' },
		'[初遇:皮肤:太空律动 "爱乐之子" 塔里克]':
		{ target: '${C.dirAutogen}/reso/icon/Taric/18.png' },
		'[击杀:皮肤:太空律动 "爱乐之子" 塔里克]':
		{ target: '${C.dirAutogen}/reso/icon/Taric/18.png' },
		'[初遇:皮肤:太空律动 "万能舞王" 崔斯特]':
			{ target: '${C.dirAutogen}/reso/icon/TwistedFate/36.png' },
		'[击杀:皮肤:太空律动 "万能舞王" 崔斯特]':
			{ target: '${C.dirAutogen}/reso/icon/TwistedFate/36.png' },


		'[普攻]、[暴击]、[触发:E技能:毒性射击]':
			{ skill: '${C.dirAutogen}/reso/icon/Teemo/E.png' },
		'[使用:Q技能:致盲吹箭]':
			{ skill: '${C.dirAutogen}/reso/icon/Teemo/Q.png' },
		'[使用:W技能:小莫快跑]':
			{ skill: '${C.dirAutogen}/reso/icon/Teemo/W.png' },
		'[升级:R技能:种蘑菇:初次]':
			{ skill: '${C.dirAutogen}/reso/icon/Teemo/R.png' },
		'[使用:R技能:种蘑菇]':
			{ skill: '${C.dirAutogen}/reso/icon/Teemo/R.png' },
		'[使用:R技能:种蘑菇:爆炸]':
			{ skill: '${C.dirAutogen}/reso/icon/Teemo/R.png' },
	},
	lines: {
		// 'A36B3272': { mark: '我听不清\\，原文参考“it\'s like a supernova sleepover”' },
		// '2CB9F34A': { mark: '我听不清\\，原文参考“skating down to funky down”' },
		// '1348EE34': { mark: '我听不清\\，原文参考“boogie down”' },
		'35EDDD5C': { mark: '放克，原文“funk”，一种基础音乐风格' },
		'8CC0AD7C': { mark: '彩泥，原文“slime”' },
	}
};
