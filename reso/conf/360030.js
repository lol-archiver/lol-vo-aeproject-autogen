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
	splash: '${C.dirAutogen}/reso/splash/360030.mp4',
	splashMiddle: '${C.dirAutogen}/reso/splash-left/360030.mp4',
	events: {
		'[攻击:生物:纳什男爵]':
			{ target: '${C.dirAutogen}/reso/icon/@monster/baron.png' },
		'[击杀:建筑:防御塔]':
			{ target: '${C.dirAutogen}/reso/icon/turret.png' },

		'[初遇:皮肤:斗魂觉醒 伊芙琳]':
			{ target: '${C.dirAutogen}/reso/icon/evelynn/42.png' },
		'[击杀:皮肤:斗魂觉醒 伊芙琳]':
			{ target: '${C.dirAutogen}/reso/icon/evelynn/42.png' },
		'[初遇:皮肤:斗魂觉醒 格温]':
			{ target: '${C.dirAutogen}/reso/icon/gwen/20.png' },
		'[击杀:皮肤:斗魂觉醒 格温]':
			{ target: '${C.dirAutogen}/reso/icon/gwen/20.png' },
		'[初遇:皮肤:斗魂觉醒 烬]':
			{ target: '${C.dirAutogen}/reso/icon/jhin/36.png' },
		'[击杀:皮肤:斗魂觉醒 烬]':
			{ target: '${C.dirAutogen}/reso/icon/jhin/36.png' },
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
			{ target: '${C.dirAutogen}/reso/icon/shaco/43.png' },
		'[击杀:皮肤:斗魂觉醒 萨科]':
			{ target: '${C.dirAutogen}/reso/icon/shaco/43.png' },
		'[初遇:皮肤:斗魂觉醒 佛耶戈]':
			{ target: '${C.dirAutogen}/reso/icon/viego/30.png' },
		'[击杀:皮肤:斗魂觉醒 佛耶戈]':
			{ target: '${C.dirAutogen}/reso/icon/viego/30.png' },
		'[移动:初次][友方:使用:皮肤:斗魂觉醒 佛耶戈]':
			{ target: '${C.dirAutogen}/reso/icon/viego/30.png' },


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
		'A42E2677': { mark: '引申自动画《降世神通：最后的气宗》开场白' },
		'DA764734': { mark: '原文“Time to take \'em for a ride!\\”引申自游戏《漫威 vs 卡普空 2》角色选择时的背景音乐' },
		'6F111E0B': { mark: '原文“They run, they die tired\\”引申自《星球大战》\\\\衍生电子小说《A Practical Man》波巴·费特的台词' },
		'02E6AE79': { mark: '引申自萨弥拉基础皮肤初遇拉莫斯时的台词：\\\\“会说话的……乌龟？”' },
		'232AA77E': { mark: '引申自游戏《罪恶装备Xrd》Leo的胜利台词' },
		'2493D75F': { mark: '“别想跑”原文“Get over here!\\”引申自游戏《真人快打》蝎子的终结技台词' },
		'6220340F': { mark: '“她就是全场焦点”原文“she is the moment\\”引申自演员温迪·威廉姆斯点评莉儿·金时\\，画面显示小猪佩奇的梗' },
	}
};
