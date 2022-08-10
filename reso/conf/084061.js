export default {
	title: '星之守护者 阿卡丽',
	title1: '星之守护者',
	title2: '阿卡丽',
	champion: {
		id: 84,
		name: 'Akali',
	},
	skin: {
		id: 61,
		name: 'Star Guardian'
	},
	color: '#6047C6',
	splashMiddle: '${C.dirAutogen}/reso/splash-left/077000.mp4',
	// splashMiddle: '${C.dirAutogen}/reso/splash-left/084061.png',
	events: {
		'[击杀:建筑:防御塔]':
			{ target: '${C.dirAutogen}/reso/icon/turret.png' },
		'[攻击:生物:纳什男爵]':
			{ target: '${C.dirAutogen}/reso/icon/monster/baron.png' },


		'[初遇:皮肤:星之守护者 卡莎]':
			{ target: '${C.dirAutogen}/reso/icon/Kaisa/40.png' },
		'[击杀:皮肤:星之守护者 卡莎]':
			{ target: '${C.dirAutogen}/reso/icon/Kaisa/40.png' },
		'[移动:初次:友方:皮肤:星之守护者 卡莎]':
			{ target: '${C.dirAutogen}/reso/icon/Kaisa/40.png' },
		'[初遇:皮肤:星之守护者 拉克丝]':
			{ target: '${C.dirAutogen}/reso/icon/Lux/6.png' },
		'[击杀:皮肤:星之守护者 拉克丝]':
			{ target: '${C.dirAutogen}/reso/icon/Lux/6.png' },
		'[初遇:皮肤:星之吞噬者 莫甘娜]':
			{ target: '${C.dirAutogen}/reso/icon/Morgana/50.png' },
		'[击杀:皮肤:星之吞噬者 莫甘娜]':
			{ target: '${C.dirAutogen}/reso/icon/Morgana/50.png' },
		'[初遇:皮肤:星之吞噬者 费德提克]':
			{ target: '${C.dirAutogen}/reso/icon/Fiddlesticks/27.png' },
		'[击杀:皮肤:星之吞噬者 费德提克]':
			{ target: '${C.dirAutogen}/reso/icon/Fiddlesticks/27.png' },
		'[移动:初次:友方:皮肤:星之吞噬者 费德提克]':
			{ target: '${C.dirAutogen}/reso/icon/Fiddlesticks/27.png' },
		'[初遇:皮肤:星之守护者 阿狸]':
			{ target: '${C.dirAutogen}/reso/icon/Ahri/14.png' },
		'[击杀:皮肤:星之守护者 阿狸]':
			{ target: '${C.dirAutogen}/reso/icon/Ahri/14.png' },
		'[初遇:皮肤:星之守护者 艾克]':
			{ target: '${C.dirAutogen}/reso/icon/Ekko/45.png' },
		'[击杀:皮肤:星之守护者 艾克]':
			{ target: '${C.dirAutogen}/reso/icon/Ekko/45.png' },
		'[初遇:皮肤:星之守护者 尼菈]':
			{ target: '${C.dirAutogen}/reso/icon/Nilah/1.png' },
		'[击杀:皮肤:星之守护者 尼菈]':
			{ target: '${C.dirAutogen}/reso/icon/Nilah/1.png' },
		'[初遇:皮肤:星之守护者 奎因]':
			{ target: '${C.dirAutogen}/reso/icon/Quinn/14.png' },
		'[击杀:皮肤:星之守护者 奎因]':
			{ target: '${C.dirAutogen}/reso/icon/Quinn/14.png' },
		'[初遇:皮肤:星之守护者 芮尔]':
			{ target: '${C.dirAutogen}/reso/icon/Rell/10.png' },
		'[击杀:皮肤:星之守护者 芮尔]':
			{ target: '${C.dirAutogen}/reso/icon/Rell/10.png' },
		'[初遇:皮肤:星之守护者 娑娜]':
			{ target: '${C.dirAutogen}/reso/icon/Sona/35.png' },
		'[击杀:皮肤:星之守护者 娑娜]':
			{ target: '${C.dirAutogen}/reso/icon/Sona/35.png' },
		'[初遇:皮肤:星之守护者 塔莉娅]':
			{ target: '${C.dirAutogen}/reso/icon/Taliyah/11.png' },
		'[击杀:皮肤:星之守护者 塔莉娅]':
			{ target: '${C.dirAutogen}/reso/icon/Taliyah/11.png' },
		'[初遇:皮肤:星之守护者 霞]':
			{ target: '${C.dirAutogen}/reso/icon/Xayah/4.png' },
		'[击杀:皮肤:星之守护者 霞]':
			{ target: '${C.dirAutogen}/reso/icon/Xayah/4.png' },
		'[初遇:皮肤:星之守护者 洛]':
			{ target: '${C.dirAutogen}/reso/icon/Rakan/5.png' },
		'[击杀:皮肤:星之守护者 洛]':
			{ target: '${C.dirAutogen}/reso/icon/Rakan/5.png' },
		'[初遇:皮肤:星之守护者 厄运小姐]':
			{ target: '${C.dirAutogen}/reso/icon/MissFortune/15.png' },
		'[击杀:皮肤:星之守护者 厄运小姐]':
			{ target: '${C.dirAutogen}/reso/icon/MissFortune/15.png' },



		'[升级:R技能:我流秘奥义！表里杀缭乱:初次]':
			{ skill: '${C.dirAutogen}/reso/icon/Akali/R.png' },
		'[触发:P被动:我流忍法！潜龙印:强化攻击]':
			{ skill: '${C.dirAutogen}/reso/icon/Akali/P.png' },
		'[使用:Q技能:我流奥义！寒影]':
			{ skill: '${C.dirAutogen}/reso/icon/Akali/Q.png' },
		'[使用:W技能:我流奥义！霞阵]':
			{ skill: '${C.dirAutogen}/reso/icon/Akali/W.png' },
		'[使用:E技能:我流奥义！隼舞]':
			{ skill: '${C.dirAutogen}/reso/icon/Akali/E.png' },
		'[使用:R技能:我流秘奥义！表里杀缭乱:飞跃]':
			{ skill: '${C.dirAutogen}/reso/icon/Akali/R.png' },
		'[使用:R技能:我流秘奥义！表里杀缭乱:突刺]':
			{ skill: '${C.dirAutogen}/reso/icon/Akali/R_2.png' },


		'[等级提升]':
			{ mark: '20%概率触发，单局游戏最多触发4次' },
	},
	lines: {
	}
};
