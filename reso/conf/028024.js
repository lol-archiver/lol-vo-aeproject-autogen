export default {
	title: '魔女 伊芙琳',
	champion: {
		id: 28,
		name: 'Evelynn',
	},
	skin: {
		id: 24,
		name: 'Coven'
	},
	emote: 'o(*≧▽≦)ツ',
	events: {
		'[初遇:皮肤:日月之蚀 蕾欧娜]':
			{ target: '${C.dirAutogen}/reso/icon/Leona/10_11.png' },
		'[击杀:皮肤:日月之蚀 蕾欧娜]':
			{ target: '${C.dirAutogen}/reso/icon/Leona/10_11.png' },
		'[初遇:皮肤:至尊魔女 莫甘娜]':
			{ target: '${C.dirAutogen}/reso/icon/Morgana/26.png' },
		'[击杀:皮肤:至尊魔女 莫甘娜]':
			{ target: '${C.dirAutogen}/reso/icon/Morgana/26.png' },
		'[初遇:皮肤:魔女 阿狸]':
			{ target: '${C.dirAutogen}/reso/icon/Ahri/42.png' },
		'[击杀:皮肤:魔女 阿狸]':
			{ target: '${C.dirAutogen}/reso/icon/Ahri/42.png' },
		'[初遇:皮肤:魔女 艾希]':
			{ target: '${C.dirAutogen}/reso/icon/Ashe/32.png' },
		'[击杀:皮肤:魔女 艾希]':
			{ target: '${C.dirAutogen}/reso/icon/Ashe/32.png' },
		'[初遇:皮肤:魔女 卡西奥佩娅]':
			{ target: '${C.dirAutogen}/reso/icon/Cassiopeia/18.png' },
		'[击杀:皮肤:魔女 卡西奥佩娅]':
			{ target: '${C.dirAutogen}/reso/icon/Cassiopeia/18.png' },
		'[初遇:皮肤:古神 墨菲特]':
			{ target: '${C.dirAutogen}/reso/icon/Malphite/27.png' },
		'[击杀:皮肤:古神 墨菲特]':
			{ target: '${C.dirAutogen}/reso/icon/Malphite/27.png' },
		'[初遇:皮肤:古神 沃里克]':
			{ target: '${C.dirAutogen}/reso/icon/Warwick/35.png' },
		'[击杀:皮肤:古神 沃里克]':
			{ target: '${C.dirAutogen}/reso/icon/Warwick/35.png' },
		'[初遇:英雄:凯尔]':
			{ target: '${C.dirAutogen}/reso/icon/Kayle/0.png' },
		'[击杀:英雄:凯尔]':
			{ target: '${C.dirAutogen}/reso/icon/Kayle/0.png' },

		'[触发:P被动:恶魔魅影:进入伪装]':
			{ skill: '${C.dirAutogen}/reso/icon/Evelynn/P.png' },
		'[使用:Q技能:憎恨之刺]':
			{ skill: '${C.dirAutogen}/reso/icon/Evelynn/Q.png' },
		'[使用:W技能:引诱:标记敌方]':
			{ skill: '${C.dirAutogen}/reso/icon/Evelynn/W.png' },
		'[使用:E技能:鞭笞]':
			{ skill: '${C.dirAutogen}/reso/icon/Evelynn/E.png' },
		'[使用:R技能:最终抚慰]':
			{ skill: '${C.dirAutogen}/reso/icon/Evelynn/R.png' },
	},
	lines: {
		'4B12DA6C': {
			afters: [
				{
					side: 'left',
					head: '${C.dirAutogen}/reso/icon/Leona/10_11.png',
					line: '凸(゜皿゜メ)',
					hideEvent: true,
				},
			],
		},
	},
};