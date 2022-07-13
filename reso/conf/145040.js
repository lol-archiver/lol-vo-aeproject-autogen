export default {
	title: '星之守护者 卡莎',
	title1: '星之守护者',
	title2: '卡莎',
	champion: {
		id: 145,
		name: 'Kaisa',
	},
	skin: {
		id: 40,
		name: 'Star Guardian'
	},
	color: '#E97894',
	splashMiddle: '${C.dirAutogen}/reso/splash-left/145040.png',
	events: {
		'[击杀:建筑:防御塔]':
			{ target: '${C.dirAutogen}/reso/other/turret.png' },
		'[攻击:生物:纳什男爵]':
			{ target: '${C.dirAutogen}/reso/other/icon/baron.png' },
		'[攻击:生物:龙]':
			{ target: '${C.dirAutogen}/reso/other/icon/elder-dragon.png' },


		'[初遇:皮肤:星之守护者 阿卡丽]':
			{ target: '${C.dirAutogen}/reso/icon/Akali/61.png' },
		'[击杀:皮肤:星之守护者 阿卡丽]':
			{ target: '${C.dirAutogen}/reso/icon/Akali/61.png' },
		'[移动:初次:友方:皮肤:星之守护者 阿卡丽]':
			{ target: '${C.dirAutogen}/reso/icon/Akali/61.png' },
		'[初遇:皮肤:星之守护者 奎因]':
			{ target: '${C.dirAutogen}/reso/icon/14.png' },
		'[初遇:皮肤:星之守护者 塔莉娅]':
			{ target: '${C.dirAutogen}/reso/icon/Taliyah/11.png' },
		'[初遇:皮肤:星之守护者 芮尔]':
			{ target: '${C.dirAutogen}/reso/icon/Rell/10.png' },
		'[初遇:皮肤:星之吞噬者 莫甘娜]':
			{ target: '${C.dirAutogen}/reso/icon/Morgana/50.png' },
		'[击杀:皮肤:星之吞噬者 莫甘娜]':
			{ target: '${C.dirAutogen}/reso/icon/Morgana/50.png' },

		'[初遇:皮肤:星之吞噬者 费德提克]':
			{ target: '${C.dirAutogen}/reso/icon/Fiddlesticks/27.png' },
		'[击杀:皮肤:星之吞噬者 费德提克]':
			{ target: '${C.dirAutogen}/reso/icon/Fiddlesticks/27.png' },
		'[初遇:皮肤:星之守护者 娑娜]':
			{ target: '${C.dirAutogen}/reso/icon/Sona/35.png' },
		'[初遇:皮肤:星之守护者 艾克]':
			{ target: '${C.dirAutogen}/reso/icon/Ekko/45.png' },
		'[初遇:皮肤:星之守护者 尼菈]':
			{ target: '${C.dirAutogen}/reso/icon/Nilah/1.png' },
		'[初遇:皮肤:星之守护者COS 厄加特]':
			{ target: '${C.dirAutogen}/reso/icon/Urgot/15.png' },
		'[击杀:皮肤:星之守护者COS 厄加特]':
			{ target: '${C.dirAutogen}/reso/icon/Urgot/15.png' },
		'[初遇:皮肤:星之守护者 阿狸]':
			{ target: '${C.dirAutogen}/reso/icon/Ahri/14.png' },
		'[初遇:皮肤:星之守护者 金克丝]':
			{ target: '${C.dirAutogen}/reso/icon/Jinx/4.png' },
		'[初遇:皮肤:星之守护者 拉克丝]':
			{ target: '${C.dirAutogen}/reso/icon/Lux/6.png' },
		'[初遇:皮肤:星之守护者 霞]':
			{ target: '${C.dirAutogen}/reso/icon/Xayah/4.png' },
		'[击杀:皮肤:星之守护者 霞]':
			{ target: '${C.dirAutogen}/reso/icon/Xayah/4.png' },
		'[初遇:皮肤:星之守护者 洛]':
			{ target: '${C.dirAutogen}/reso/icon/Rakan/5.png' },
		'[击杀:皮肤:星之守护者 洛]':
			{ target: '${C.dirAutogen}/reso/icon/Rakan/5.png' },
		'[初遇:皮肤:星之守护者 佐伊]':
			{ target: '${C.dirAutogen}/reso/icon/Zoe/9.png' },
		'[击杀:皮肤:星之守护者 佐伊]':
			{ target: '${C.dirAutogen}/reso/icon/Zoe/9.png' },
		'[初遇:皮肤:星之守护者 辛德拉]':
			{ target: '${C.dirAutogen}/reso/icon/Syndra/6.png' },
		'[击杀:皮肤:星之守护者 辛德拉]':
			{ target: '${C.dirAutogen}/reso/icon/Syndra/6.png' },
		'[初遇:皮肤:星之守护者 妮蔻]':
			{ target: '${C.dirAutogen}/reso/icon/Neeko/10.png' },
		'[初遇:皮肤:星之守护者 伊泽瑞尔]':
			{ target: '${C.dirAutogen}/reso/icon/Ezreal/18.png' },
		'[初遇:皮肤:星之守护者 迦娜]':
			{ target: '${C.dirAutogen}/reso/icon/Janna/7.png' },
		'[初遇:皮肤:星之守护者 璐璐]':
			{ target: '${C.dirAutogen}/reso/icon/Lulu/6.png' },
		'[初遇:皮肤:星之守护者 厄运小姐]':
			{ target: '${C.dirAutogen}/reso/icon/MissFortune/15.png' },
		'[初遇:皮肤:星之守护者 波比]':
			{ target: '${C.dirAutogen}/reso/icon/Poppy/7.png' },
		'[初遇:皮肤:星之守护者 索拉卡]':
			{ target: '${C.dirAutogen}/reso/icon/Soraka/7.png' },


		'[普攻]、[暴击]、[使用:E技能:极限超载:攻击]':
			{ skill: '${C.dirAutogen}/reso/icon/Kaisa/E.png' },
		'[触发:P被动:体表活肤:攻击]':
			{ skill: '${C.dirAutogen}/reso/icon/Kaisa/P.png' },
		'[使用:Q技能:艾卡西亚暴雨]':
			{ skill: '${C.dirAutogen}/reso/icon/Kaisa/Q.png' },
		'[使用:W技能:虚空索敌]':
			{ skill: '${C.dirAutogen}/reso/icon/Kaisa/W.png' },
		'[使用:W技能:虚空索敌:命中]':
			{ skill: '${C.dirAutogen}/reso/icon/Kaisa/W.png' },
		'[使用:W技能:虚空索敌:击杀]':
			{ skill: '${C.dirAutogen}/reso/icon/Kaisa/W.png' },
		'[使用:W技能:虚空索敌:未命中]':
			{ skill: '${C.dirAutogen}/reso/icon/Kaisa/W.png' },
		'[使用:E技能:极限超载]':
			{ skill: '${C.dirAutogen}/reso/icon/Kaisa/E.png' },
		'[使用:R技能:猎手本能]':
			{ skill: '${C.dirAutogen}/reso/icon/Kaisa/R.png' },

		'[被:治疗:植物:蜜糖果实]':
			{ mark: '每局游戏每段语音仅可触发一次\\n且必须在血量不满时才能触发' }
	},
	lines: {
	}
};
