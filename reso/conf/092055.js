export default {
	title: '绝息圣堂 锐雯',
	title1: '绝息圣堂',
	title2: '锐雯',
	champion: {
		id: 92,
		name: 'Riven',
	},
	skin: {
		id: 55,
		name: 'Broken Covenant'
	},
	color: '#D53D56',
	splashMiddle: '${C.dirAutogen}/reso/splash-left/092055.png',
	events: {
		'[攻击:生物:纳什男爵]':
			{ target: '${C.dirAutogen}/reso/icon/@monster/baron.png' },
		'[击杀:建筑:防御塔]':
			{ target: '${C.dirAutogen}/reso/icon/turret.png' },

		'[初遇:皮肤:绝息圣堂 弗拉基米尔]':
			{ target: '${C.dirAutogen}/reso/icon/Vladimir/39.png' },
		'[击杀:皮肤:绝息圣堂 弗拉基米尔]':
			{ target: '${C.dirAutogen}/reso/icon/Vladimir/39.png' },
		'[初遇:皮肤:绝息圣堂 厄运小姐]':
			{ target: '${C.dirAutogen}/reso/icon/MissFortune/40.png' },
		'[击杀:皮肤:绝息圣堂 厄运小姐]':
			{ target: '${C.dirAutogen}/reso/icon/MissFortune/40.png' },
		'[初遇:皮肤:绝息圣堂 魔腾]':
			{ target: '${C.dirAutogen}/reso/icon/Nocturne/17.png' },
		'[击杀:皮肤:绝息圣堂 魔腾]':
			{ target: '${C.dirAutogen}/reso/icon/Nocturne/17.png' },
		'[初遇:皮肤:绝息圣堂 科加斯]':
			{ target: '${C.dirAutogen}/reso/icon/Chogath/23.png' },
		'[击杀:皮肤:绝息圣堂 科加斯]':
			{ target: '${C.dirAutogen}/reso/icon/Chogath/23.png' },
		'[初遇:皮肤:绝息圣堂 霞]':
			{ target: '${C.dirAutogen}/reso/icon/Xayah/37.png' },
		'[击杀:皮肤:绝息圣堂 霞]':
			{ target: '${C.dirAutogen}/reso/icon/Xayah/37.png' },
		'[初遇:皮肤:绝息圣堂 洛]':
			{ target: '${C.dirAutogen}/reso/icon/Rakan/27.png' },
		'[击杀:皮肤:绝息圣堂 洛]':
			{ target: '${C.dirAutogen}/reso/icon/Rakan/27.png' },

		'[使用:W震魂怒吼]':
			{ skill: '${C.dirAutogen}/reso/icon/Riven/W.png' },
		'[使用:E勇往直前]':
			{ skill: '${C.dirAutogen}/reso/icon/Riven/E.png' },
		'[初次升级:R放逐之锋]':
			{ skill: '${C.dirAutogen}/reso/icon/Riven/R_1.png' },
		'[使用:R放逐之锋:初次施放]':
			{ skill: '${C.dirAutogen}/reso/icon/Riven/R_1.png' },
		'[使用:R放逐之锋:再次施放]、[使用:W震魂怒吼]':
			{ skill: '${C.dirAutogen}/reso/icon/Riven/R_2.png' },
	},
	lines: {}
};
