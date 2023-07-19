export default {
	title: '斗魂觉醒 莎弥拉',
	title1: '斗魂觉醒',
	title2: '莎弥拉',
	champion: {
		id: 360,
		name: 'Samira',
	},
	skin: {
		id: 30,
		name: 'Soul Fighter'
	},
	color: '#D85639',
	splashMiddle: '${C.dirAutogen}/reso/splash-left/360030.png',
	events: {
		'[攻击:生物:纳什男爵]':
			{ target: '${C.dirAutogen}/reso/icon/@monster/baron.png' },
		'[击杀:建筑:防御塔]':
			{ target: '${C.dirAutogen}/reso/icon/turret.png' },

		'[初遇:皮肤:斗魂觉醒 伊芙琳]':
			{ target: '${C.dirAutogen}/reso/icon/@unofficial/sf-evelynn.png' },
		'[击杀:皮肤:斗魂觉醒 伊芙琳]':
			{ target: '${C.dirAutogen}/reso/icon/@unofficial/sf-evelynn.png' },
		'[初遇:皮肤:斗魂觉醒 格温]':
			{ target: '${C.dirAutogen}/reso/icon/@unofficial/sf-gwen.png' },
		'[击杀:皮肤:斗魂觉醒 格温]':
			{ target: '${C.dirAutogen}/reso/icon/@unofficial/sf-gwen.png' },
		'[初遇:皮肤:斗魂觉醒 烬]':
			{ target: '${C.dirAutogen}/reso/icon/@unofficial/sf-jhin.png' },
		'[击杀:皮肤:斗魂觉醒 烬]':
			{ target: '${C.dirAutogen}/reso/icon/@unofficial/sf-jhin.png' },
		'[初遇:皮肤:斗魂觉醒 拉克丝]':
			{ target: '${C.dirAutogen}/reso/icon/lux/38.png' },
		'[击杀:皮肤:斗魂觉醒 拉克丝]':
			{ target: '${C.dirAutogen}/reso/icon/lux/38.png' },
		'[初遇:皮肤:斗魂觉醒 纳亚菲利]':
			{ target: '${C.dirAutogen}/reso/icon/naafiri/1.png' },
		'[击杀:皮肤:斗魂觉醒 纳亚菲利]':
			{ target: '${C.dirAutogen}/reso/icon/naafiri/1.png' },
		'[初遇:皮肤:斗魂觉醒 派克]':
			{ target: '${C.dirAutogen}/reso/icon/pyke/53.png' },
		'[击杀:皮肤:斗魂觉醒 派克]':
			{ target: '${C.dirAutogen}/reso/icon/pyke/53.png' },
		'[初遇:皮肤:斗魂觉醒 瑟提]':
			{ target: '${C.dirAutogen}/reso/icon/sett/45.png' },
		'[击杀:皮肤:斗魂觉醒 瑟提]':
			{ target: '${C.dirAutogen}/reso/icon/sett/45.png' },
		'[初遇:皮肤:斗魂觉醒 萨科]':
			{ target: '${C.dirAutogen}/reso/icon/@unofficial/sf-shaco.png' },
		'[击杀:皮肤:斗魂觉醒 萨科]':
			{ target: '${C.dirAutogen}/reso/icon/@unofficial/sf-shaco.png' },
		'[初遇:皮肤:斗魂觉醒 佛耶戈]':
			{ target: '${C.dirAutogen}/reso/icon/@unofficial/sf-viego.png' },
		'[击杀:皮肤:斗魂觉醒 佛耶戈]':
			{ target: '${C.dirAutogen}/reso/icon/@unofficial/sf-viego.png' },
		'[移动:初次][友方:使用:皮肤:斗魂觉醒 佛耶戈]':
			{ target: '${C.dirAutogen}/reso/icon/@unofficial/sf-viego.png' },


		'[使用:Q交火::注释:远程]':
			{ skill: '${C.dirAutogen}/reso/icon/Samira/Q.png' },
		'[使用:Q交火::注释:近战]':
			{ skill: '${C.dirAutogen}/reso/icon/Samira/Q.png' },
		'[使用:W锋旋]':
			{ skill: '${C.dirAutogen}/reso/icon/Samira/W.png' },
		'[使用:E狂飙]':
			{ skill: '${C.dirAutogen}/reso/icon/Samira/E.png' },
		'[升级:R炼狱扳机:初次]':
			{ skill: '${C.dirAutogen}/reso/icon/Samira/R_8.png' },
		'[冷却:R炼狱扳机]':
			{ skill: '${C.dirAutogen}/reso/icon/Samira/R_8.png' },
		'[使用:R炼狱扳机]':
			{ skill: '${C.dirAutogen}/reso/icon/Samira/R_8.png' },
	},
	lines: {
	}
};
