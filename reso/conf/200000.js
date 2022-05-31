export default {
	title: '虚空女皇 卑尔维斯',
	title1: '虚空女皇',
	title2: '卑尔维斯',
	champion: {
		id: 200,
		name: 'Belveth',
	},
	skin: {
		id: 0,
		name: '_Base'
	},
	color: '#9530CB',
	splashMiddle: '${C.dirAutogen}/reso/splash-left/200000.png',
	shade: {
		file: '${C.dirAutogen}/reso/shade/200000.png',
		scale: [150, 150],
		opacity: 45,
		// invert: false,
	},
	events: {
		'[攻击:生物:纳什男爵]':
			{ target: '${C.dirAutogen}/reso/other/icon/baron.png' },
		'[攻击:生物:峡谷先锋]':
			{ target: '${C.dirAutogen}/reso/other/icon/rift-herald.png' },
		'[攻击:生物:龙]':
			{ target: '${C.dirAutogen}/reso/other/icon/elder-dragon.png' },
		'[初遇:英雄:卡莎]':
			{ target: '${C.dirAutogen}/reso/icon/Kaisa/0.png' },
		'[击杀:英雄:卡莎]':
			{ target: '${C.dirAutogen}/reso/icon/Kaisa/0.png' },
		'[初遇:英雄:卡萨丁]':
			{ target: '${C.dirAutogen}/reso/icon/Kassadin/0.png' },
		'[击杀:英雄:卡萨丁]':
			{ target: '${C.dirAutogen}/reso/icon/Kassadin/0.png' },
		'[初遇:英雄:玛尔扎哈]':
			{ target: '${C.dirAutogen}/reso/icon/Malzahar/0.png' },
		'[击杀:英雄:玛尔扎哈]':
			{ target: '${C.dirAutogen}/reso/icon/Malzahar/0.png' },
		'[初遇:英雄:维克兹]':
			{ target: '${C.dirAutogen}/reso/icon/Velkoz/0.png' },
		'[击杀:英雄:维克兹]':
			{ target: '${C.dirAutogen}/reso/icon/Velkoz/0.png' },
		'[击杀:英雄:塔莉垭]':
			{ target: '${C.dirAutogen}/reso/icon/Taliyah/0.png' },
		'[初遇:英雄:佛耶戈]':
			{ target: '${C.dirAutogen}/reso/icon/Viego/0.png' },
		'[击杀:英雄:佛耶戈]':
			{ target: '${C.dirAutogen}/reso/icon/Viego/0.png' },
		'[初遇:英雄:丽桑卓]':
			{ target: '${C.dirAutogen}/reso/icon/Lissandra/0.png' },
		'[击杀:英雄:丽桑卓]':
			{ target: '${C.dirAutogen}/reso/icon/Lissandra/0.png' },
		'[初遇:英雄:科加斯]':
			{ target: '${C.dirAutogen}/reso/icon/Chogath/0.png' },
		'[击杀:英雄:科加斯]':
			{ target: '${C.dirAutogen}/reso/icon/Chogath/0.png' },
		'[初遇:英雄:卡兹克]':
			{ target: '${C.dirAutogen}/reso/icon/KhaZix/0.png' },
		'[击杀:英雄:卡兹克]':
			{ target: '${C.dirAutogen}/reso/icon/KhaZix/0.png' },
		'[初遇:英雄:克格莫]':
			{ target: '${C.dirAutogen}/reso/icon/KogMaw/0.png' },
		'[击杀:英雄:克格莫]':
			{ target: '${C.dirAutogen}/reso/icon/KogMaw/0.png' },
		'[初遇:英雄:雷克塞]':
			{ target: '${C.dirAutogen}/reso/icon/Reksai/0.png' },
		'[击杀:英雄:雷克塞]':
			{ target: '${C.dirAutogen}/reso/icon/Reksai/0.png' },

		'[使用:Q技能:虚空激流]':
			{ skill: '${C.dirAutogen}/reso/icon/Belveth/Q_15.png' },
		'[使用:W技能:上觐沉渊]':
			{ skill: '${C.dirAutogen}/reso/icon/Belveth/W.png' },
		'[使用:E技能:搠面皇锋]':
			{ skill: '${C.dirAutogen}/reso/icon/Belveth/E.png' },
		'[学习:R技能:万载豪筵::1级]':
			{ skill: '${C.dirAutogen}/reso/icon/Belveth/R.png' },
		'[使用:R技能:万载豪筵]':
			{ skill: '${C.dirAutogen}/reso/icon/Belveth/R.png' },
		'[使用:R技能:万载豪筵]、[使用:R技能:万载豪筵:命中]':
			{ skill: '${C.dirAutogen}/reso/icon/Belveth/R.png' },

		'[使用:道具:守卫]':
		{
			skill: '${C.dirAutogen}/reso/icon/Item/3350_greateryellowtrinket.png',
			mark: '单局游戏最多触发4次',
		},
	},
	lines: {
		'53B5AA4C': { mark: '“指令”原文“warning”，理解为“警告”的意思更好', },
		'3C12CF09': { mark: '原文“Drown in me.”', },
		'7598DC3B': { mark: '原文“So hungry.”', },
	}
};
