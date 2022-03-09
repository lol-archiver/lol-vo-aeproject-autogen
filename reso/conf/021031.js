export default {
	title: '幻灵战斗队长 厄运小姐',
	title1: '幻灵战斗队长',
	title2: '厄运小姐',
	champion: {
		id: 21,
		name: 'MissFortune',
	},
	skin: {
		id: 31,
		name: 'Battle Bunny'
	},
	color: '#D36CB5',
	// splash: 'D:/project/@lol/lol-wad-extract/test3.png',
	events: {
		'[初遇:皮肤:幻灵战斗兔 锐雯]':
			{ target: '${C.dirAutogen}/reso/icon/Riven/44.png' },
		'[击杀:皮肤:幻灵战斗兔 锐雯]':
			{ target: '${C.dirAutogen}/reso/icon/Riven/44.png' },
		'[初遇:皮肤:幻灵战斗猫 金克斯]':
			{ target: '${C.dirAutogen}/reso/icon/Jinx/38.png' },
		'[击杀:皮肤:幻灵战斗猫 金克斯]':
			{ target: '${C.dirAutogen}/reso/icon/Jinx/38.png' },
		'[初遇:皮肤:幻灵战斗狼 塞拉斯]':
			{ target: '${C.dirAutogen}/reso/icon/Sylas/24.png' },
		'[击杀:皮肤:幻灵战斗狼 塞拉斯]':
			{ target: '${C.dirAutogen}/reso/icon/Sylas/24.png' },
		'[初遇:皮肤:幻灵战斗蝠 薇恩]':
			{ target: '${C.dirAutogen}/reso/icon/Vayne/32.png' },
		'[击杀:皮肤:幻灵战斗蝠 薇恩]':
			{ target: '${C.dirAutogen}/reso/icon/Vayne/32.png' },

		'[使用:Q技能:一箭双雕:命中]':
			{ skill: '${C.dirAutogen}/reso/icon/MissFortune/Q.png' },
		'[使用:Q技能:一箭双雕]':
			{ skill: '${C.dirAutogen}/reso/icon/MissFortune/Q.png' },
		'[使用:W技能:大步流星]':
			{ skill: '${C.dirAutogen}/reso/icon/MissFortune/W.png' },
		'[使用:E技能:枪林弹雨]':
			{ skill: '${C.dirAutogen}/reso/icon/MissFortune/E.png' },
		'[冷却:R技能:弹幕时间]':
			{ skill: '${C.dirAutogen}/reso/icon/MissFortune/R.png' },
		'[使用:R技能:弹幕时间]':
			{ skill: '${C.dirAutogen}/reso/icon/MissFortune/R.png' },
	},
	lines: {
		'0D802C67': { mark: '“砰”原文“bang”，拟声词' },
		'42615038': { mark: '“狡兔01”原文“BB01”。发音使用了数字军语：洞=0，幺=1' },
		'5469D16A': { mark: '“狡兔01”原文“BB01”。发音使用了数字军语：洞=0，幺=1' },
		'8C37744B': { mark: '“狡兔01”原文“BB01”。发音使用了数字军语：洞=0，幺=1' },
		'BEEF2A71': { mark: '“狡兔01”原文“BB01”。发音使用了数字军语：洞=0，幺=1' },
	}
};