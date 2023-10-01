export default {
	title: '魔女 娜美',
	title1: '魔女',
	title2: '娜美',
	champion: {
		id: 267,
		name: 'Nami',
	},
	skin: {
		id: 51,
		name: 'Coven'
	},
	color: '#BA4B6D',
	splashMiddle: '${C.dirAutogen}/reso/splash-left/267051.png',
	events: {
		'[击杀:生物:纳什男爵]':
			{ target: '${C.dirAutogen}/reso/icon/@monster/baron.png' },
		'[击杀:建筑:防御塔]':
			{ target: '${C.dirAutogen}/reso/icon/turret.png' },


		'[购买:道具:鞋类]':
			{ skill: '${C.dirAutogen}/reso/icon/@item/1001_class_t1_bootsofspeed.png' },

		'[初遇:皮肤:古神 莫德凯撒]':
			{ target: '${C.dirAutogen}/reso/icon/mordekaiser/44.png' },
		'[击杀:皮肤:古神 莫德凯撒]':
			{ target: '${C.dirAutogen}/reso/icon/mordekaiser/44.png' },
		'[初遇:皮肤:至尊魔女 莫甘娜]':
			{ target: '${C.dirAutogen}/reso/icon/morgana/26.png' },
		'[击杀:皮肤:至尊魔女 莫甘娜]':
			{ target: '${C.dirAutogen}/reso/icon/morgana/26.png' },
		'[初遇:皮肤:魔女 辛德拉]':
			{ target: '${C.dirAutogen}/reso/icon/syndra/54.png' },
		'[击杀:皮肤:魔女 辛德拉]':
			{ target: '${C.dirAutogen}/reso/icon/syndra/54.png' },
		'[初遇:皮肤:魔女 阿卡丽]':
			{ target: '${C.dirAutogen}/reso/icon/akali/70.png' },
		'[击杀:皮肤:魔女 阿卡丽]':
			{ target: '${C.dirAutogen}/reso/icon/akali/70.png' },
		'[初遇:皮肤:魔女 伊莉丝]':
			{ target: '${C.dirAutogen}/reso/icon/elise/24.png' },
		'[击杀:皮肤:魔女 伊莉丝]':
			{ target: '${C.dirAutogen}/reso/icon/elise/24.png' },
		'[初遇:皮肤:魔女 尼菈]':
			{ target: '${C.dirAutogen}/reso/icon/nilah/11.png' },
		'[击杀:皮肤:魔女 尼菈]':
			{ target: '${C.dirAutogen}/reso/icon/nilah/11.png' },


		'[使用:Q碧波之牢:命中]':
			{ skill: '${C.dirAutogen}/reso/icon/nami/Q.png' },
		'[使用:Q碧波之牢:未命中]':
			{ skill: '${C.dirAutogen}/reso/icon/nami/Q.png' },
		'[使用:Q碧波之牢]':
			{ skill: '${C.dirAutogen}/reso/icon/nami/Q.png' },
		'[使用:W冲击之潮]':
			{ skill: '${C.dirAutogen}/reso/icon/nami/W.png' },
		'[使用:E唤潮之佑]':
			{ skill: '${C.dirAutogen}/reso/icon/nami/E.png' },
		'[使用:R怒涛之啸]':
			{ skill: '${C.dirAutogen}/reso/icon/nami/R.png' },
	},
	lines: {
		'49A14504': { mark: '不包括有点神奇之靴' },
	}
};
