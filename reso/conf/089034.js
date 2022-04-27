export default {
	title: '西部魔影 蕾欧娜',
	title1: '西部魔影',
	title2: '蕾欧娜',
	champion: {
		id: 89,
		name: 'Leona',
	},
	skin: {
		id: 34,
		name: 'High Noon'
	},
	color: '#D43C2B',
	splashMiddle: '${C.dirAutogen}/reso/splash-left/089034.png',
	shade: {
		file: '${C.dirAutogen}/reso/shade/089034.png',
		opacity: 20,
		// invert: false,
	},
	events: {
		'[初遇:英雄:崔斯特]、[初遇:英雄:格雷福斯]':
			{ target: '${C.dirAutogen}/reso/other/TwistedFateGraves.png' },
		'[初遇:英雄:黛安娜]':
			{ target: '${C.dirAutogen}/reso/icon/Diana/0.png' },
		'[击杀:英雄:黛安娜]':
			{ target: '${C.dirAutogen}/reso/icon/Diana/0.png' },
		'[初遇:皮肤:西部魔影 莫德凯撒]':
			{ target: '${C.dirAutogen}/reso/icon/Mordekaiser/32.png' },
		'[击杀:皮肤:西部魔影 莫德凯撒]':
			{ target: '${C.dirAutogen}/reso/icon/Mordekaiser/32.png' },
		'[初遇:皮肤:西部天使 艾希]':
			{ target: '${C.dirAutogen}/reso/icon/Ashe/17.png' },
		'[击杀:皮肤:西部天使 艾希]':
			{ target: '${C.dirAutogen}/reso/icon/Ashe/17.png' },
		'[初遇:皮肤:西部魔影 卢锡安]':
			{ target: '${C.dirAutogen}/reso/icon/Lucian/8.png' },
		'[击杀:皮肤:西部魔影 卢锡安]':
			{ target: '${C.dirAutogen}/reso/icon/Lucian/8.png' },
		'[初遇:皮肤:西部天使 赛娜]':
			{ target: '${C.dirAutogen}/reso/icon/Senna/10.png' },
		'[击杀:皮肤:西部天使 赛娜]':
			{ target: '${C.dirAutogen}/reso/icon/Senna/10.png' },
		'[初遇:皮肤:西部魔影 卡特琳娜]':
			{ target: '${C.dirAutogen}/reso/icon/Katarina/37.png' },
		'[初遇:皮肤:西部魔影 泰隆]':
			{ target: '${C.dirAutogen}/reso/icon/Talon/38.png' },
		'[初遇:皮肤:西部魔影 维鲁斯]':
			{ target: '${C.dirAutogen}/reso/icon/Varus/34.png' },

		'[初遇:皮肤:西部魔影 莎弥拉]':
			{ target: '${C.dirAutogen}/reso/other/icon/-1.png' },
		// { target: '${C.dirAutogen}/reso/icon/Samira/20.png' },
		'[初遇:皮肤:西部魔影 塞恩]':
			{ target: '${C.dirAutogen}/reso/other/icon/-1.png' },
		// { target: '${C.dirAutogen}/reso/icon/Sion/30.png' },
		'[初遇:皮肤:西部魔影 塔姆]':
			{ target: '${C.dirAutogen}/reso/other/icon/-1.png' },
		// { target: '${C.dirAutogen}/reso/icon/TahmKench/20.png' },
		'[初遇:皮肤:西部魔影 图奇]':
			{ target: '${C.dirAutogen}/reso/other/icon/-1.png' },
		// { target: '${C.dirAutogen}/reso/icon/Twitch/45.png' },
		'[初遇:皮肤:西部魔影 维克托]':
			{ target: '${C.dirAutogen}/reso/other/icon/-1.png' },
		// { target: '${C.dirAutogen}/reso/icon/Viktor/14.png' },

		'[使用:Q技能:破晓之盾]':
			{ skill: '${C.dirAutogen}/reso/icon/Leona/Q.png' },
		'[使用:W技能:日蚀]':
			{ skill: '${C.dirAutogen}/reso/icon/Leona/W.png' },
		'[使用:E技能:天顶之刃]':
			{ skill: '${C.dirAutogen}/reso/icon/Leona/E.png' },
		'[使用:R技能:日炎耀斑]':
			{ skill: '${C.dirAutogen}/reso/icon/Leona/R.png' },
		'[学习:R技能:日炎耀斑::1级]':
			{ skill: '${C.dirAutogen}/reso/icon/Leona/R.png' },

		'[使用:道具:监视图腾]':
			{ skill: '${C.dirAutogen}/reso/icon/Item/3350_greateryellowtrinket.png' },
		'[击杀:道具:监视图腾]':
			{ skill: '${C.dirAutogen}/reso/icon/Item/3350_greateryellowtrinket.png' },
	},
	lines: {
		'16BAC83F': { mark: '20%机率触发，每次触发相隔至少60秒，每局最多触发4次' },
		'76B8D209': { mark: '20%机率触发，每次触发相隔至少60秒，每局最多触发4次' },
		'7CA2CB4C': { mark: '20%机率触发，每次触发相隔至少60秒，每局最多触发4次' },

		'ECF40D4D': { mark: '25%机率触发' },
		'B0F07A4A': { mark: '25%机率触发' },
		'3C63FC75': { mark: '25%机率触发' },
		'F20EBE56': { mark: '25%机率触发' },

		'072C3B67': { mark: '25%机率触发，每次触发相隔至少180秒' },
		'13CBC327': { mark: '25%机率触发，每次触发相隔至少180秒' },
		'84CC721D': { mark: '25%机率触发，每次触发相隔至少180秒' },

		'890FA24D': { mark: '20%机率触发' },
		'D146DE06': { mark: '20%机率触发' },
		'F234E67D': { mark: '20%机率触发' },
		'FED72836': { mark: '20%机率触发' },

		'09C60A51': { mark: 'Bessie，贝茜' },
		'D6E70D11': { mark: 'Bessie，贝茜' },
	}
};
