export default {
	title: '西部魔影 大小姐 蕾欧娜',
	title1: '西部魔影 大小姐',
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
		scale: [150, 150],
		opacity: 45,
		// invert: false,
	},
	events: {
		'[初遇:英雄:崔斯特]、[初遇:英雄:格雷福斯]':
			{ target: '${C.dirAutogen}/reso/other/TwistedFateGraves.png' },
		'[初遇:英雄:黛安娜]':
			{ target: '${C.dirAutogen}/reso/icon/Diana/0.png' },
		'[击杀:英雄:黛安娜]':
			{ target: '${C.dirAutogen}/reso/icon/Diana/0.png' },
		'[初遇:皮肤:西部魔影 地狱列车长 莫德凯撒]':
			{ target: '${C.dirAutogen}/reso/icon/Mordekaiser/32.png' },
		'[击杀:皮肤:西部魔影 地狱列车长 莫德凯撒]':
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
		'[初遇:皮肤:西部魔影 执行人 卡特琳娜]':
			{ target: '${C.dirAutogen}/reso/icon/Katarina/37.png' },
		'[初遇:皮肤:西部魔影 猎天使恶魔 泰隆]':
			{ target: '${C.dirAutogen}/reso/icon/Talon/38.png' },
		'[初遇:皮肤:西部魔影 天使 韦鲁斯]':
			{ target: '${C.dirAutogen}/reso/icon/Varus/34.png' },

		'[初遇:皮肤:西部魔影 持枪女巫 莎弥拉]':
			{ target: '${C.dirAutogen}/reso/icon/Samira/20.png' },
		'[初遇:皮肤:西部魔影 合成天使 塞恩]':
			{ target: '${C.dirAutogen}/reso/icon/Sion/30.png' },
		'[初遇:皮肤:西部魔影 恶魔大亨 塔姆]':
			{ target: '${C.dirAutogen}/reso/icon/TahmKench/20.png' },
		'[初遇:皮肤:西部魔影 送葬人 图奇]':
			{ target: '${C.dirAutogen}/reso/icon/Twitch/45.png' },
		'[初遇:皮肤:西部魔影 天才机械师 维克托]':
			{ target: '${C.dirAutogen}/reso/icon/Viktor/14.png' },

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

		'[使用:道具:守卫]':
		{
			skill: '${C.dirAutogen}/reso/icon/Item/3350_greateryellowtrinket.png',
			mark: '20%概率触发\\。以往的英雄或皮肤，只能通过放置侦查守卫来触发语音\\。但西部蕾欧娜可以放置任意种类守卫来触发语音'
		},
		'[击杀:道具:守卫]':
			{ skill: '${C.dirAutogen}/reso/icon/Item/3350_greateryellowtrinket.png' },

		'[升级]':
			{ mark: '20%概率触发，触发后冷却60秒\\，单局游戏最多触发4次' },

		'[打开:商店]':
			{ mark: '25%概率触发，触发后冷却180秒' },

		'[信号:协助我]':
			{ mark: '25%概率触发' },
		'[信号:危险]':
			{ mark: '25%概率触发' },
		'[信号:敌人不见了]':
			{ mark: '25%概率触发' },
		'[信号:正在路上]':
			{ mark: '25%概率触发' },
	},
	lines: {
		'09C60A51': { mark: 'Bessie，贝茜' },
		'D6E70D11': { mark: 'Bessie，贝茜' },
	}
};
