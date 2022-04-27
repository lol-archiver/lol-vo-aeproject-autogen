export default {
	title: '日蚀骑士 希维尔',
	title1: '日蚀骑士',
	title2: '希维尔',
	champion: {
		id: 15,
		name: 'Sivir',
	},
	skin: {
		id: 43,
		name: 'Solar Eclipse'
	},
	color: '#9C2B27',
	splashMiddle: '${C.dirAutogen}/reso/splash-left/015043.png',
	shade: {
		file: '${C.dirAutogen}/reso/shade/015043.png',
		// opacity: 34,
		// invert: true,
	},
	events: {
		'[初遇:皮肤:日蚀骑士 凯尔]':
			{ target: '${C.dirAutogen}/reso/icon/Kayle/42.png' },
		'[击杀:皮肤:日蚀骑士 凯尔]':
			{ target: '${C.dirAutogen}/reso/icon/Kayle/42.png' },
		'[初遇:皮肤:日月之蚀 蕾欧娜]':
			{ target: '${C.dirAutogen}/reso/icon/Leona/10_11.png' },
		'[击杀:皮肤:日月之蚀 蕾欧娜]':
			{ target: '${C.dirAutogen}/reso/icon/Leona/10_11.png' },
		'[初遇:皮肤:日蚀骑士 瑟庄妮]':
			{ target: '${C.dirAutogen}/reso/icon/Sejuani/26.png' },
		'[击杀:皮肤:日蚀骑士 瑟庄妮]':
			{ target: '${C.dirAutogen}/reso/icon/Sejuani/26.png' },
		'[初遇:皮肤:月蚀骑士 赛娜]':
			{ target: '${C.dirAutogen}/reso/icon/Senna/26.png' },
		'[击杀:皮肤:月蚀骑士 赛娜]':
			{ target: '${C.dirAutogen}/reso/icon/Senna/26.png' },
		'[初遇:皮肤:月蚀骑士 亚托克斯]':
			{ target: '${C.dirAutogen}/reso/icon/Aatrox/21.png' },
		'[击杀:皮肤:月蚀骑士 亚托克斯]':
			{ target: '${C.dirAutogen}/reso/icon/Aatrox/21.png' },
		'[初遇:皮肤:至尊魔女 莫甘娜]':
			{ target: '${C.dirAutogen}/reso/icon/Morgana/26.png' },
		'[击杀:皮肤:至尊魔女 莫甘娜]':
			{ target: '${C.dirAutogen}/reso/icon/Morgana/26.png' },
		'[击杀:建筑:防御塔]':
			{ target: '${C.dirAutogen}/reso/other/turret.png' },


		'[使用:Q技能:回旋之刃]':
			{ skill: '${C.dirAutogen}/reso/icon/Sivir/Q.png' },
		'[使用:W技能:弹射]':
			{ skill: '${C.dirAutogen}/reso/icon/Sivir/W.png' },
		'[使用:E技能:法术护盾:格挡技能]':
			{ skill: '${C.dirAutogen}/reso/icon/Sivir/E.png' },
		'[使用:R技能:狩猎]':
			{ skill: '${C.dirAutogen}/reso/icon/Sivir/R.png' },
	},
	lines: {
		'E7DFC434': { mark: '原文“forged in sunfire”' },
		'DF99B935': { mark: '还挺押韵(･ω･`｡)' },
	}
};