export default {
	title: '灵魂莲华 瑟提',
	title1: '灵魂莲华',
	title2: '瑟提',
	champion: {
		id: 875,
		name: 'Sett',
	},
	skin: {
		id: 38,
		name: 'Spirit Blossom'
	},
	color: '#EA7652',
	splashMiddle: '${C.dirAutogen}/reso/splash-left/875038.png',
	events: {
		'[攻击:生物:纳什男爵]':
			{ target: '${C.dirAutogen}/reso/icon/@monster/baron.png' },

		'[初遇:皮肤:灵魂莲华 厄斐琉斯]':
			{ target: '${C.dirAutogen}/reso/icon/Aphelios/20.png' },
		'[击杀:皮肤:灵魂莲华 厄斐琉斯]':
			{ target: '${C.dirAutogen}/reso/icon/Aphelios/20.png' },
		'[初遇:皮肤:灵魂莲华 阿狸]':
			{ target: '${C.dirAutogen}/reso/icon/Ahri/27.png' },
		'[击杀:皮肤:灵魂莲华 阿狸]':
			{ target: '${C.dirAutogen}/reso/icon/Ahri/27.png' },
		'[初遇:皮肤:灵魂莲华 锤石]':
			{ target: '${C.dirAutogen}/reso/icon/Thresh/17.png' },
		'[击杀:皮肤:灵魂莲华 锤石]':
			{ target: '${C.dirAutogen}/reso/icon/Thresh/17.png' },
		'[初遇:皮肤:灵魂莲华 易]':
			{ target: '${C.dirAutogen}/reso/icon/MasterYi/52.png' },
		'[击杀:皮肤:灵魂莲华 易]':
			{ target: '${C.dirAutogen}/reso/icon/MasterYi/52.png' },
		'[初遇:皮肤:灵魂莲华 索拉卡]':
			{ target: '${C.dirAutogen}/reso/icon/Soraka/27.png' },
		'[击杀:皮肤:灵魂莲华 索拉卡]':
			{ target: '${C.dirAutogen}/reso/icon/Soraka/27.png' },
		'[初遇:皮肤:灵魂莲华 辛德拉]':
			{ target: '${C.dirAutogen}/reso/icon/Syndra/44.png' },
		'[击杀:皮肤:灵魂莲华 辛德拉]':
			{ target: '${C.dirAutogen}/reso/icon/Syndra/44.png' },
		'[初遇:皮肤:灵魂莲华 约里克]':
			{ target: '${C.dirAutogen}/reso/icon/Yorick/30.png' },
		'[击杀:皮肤:灵魂莲华 约里克]':
			{ target: '${C.dirAutogen}/reso/icon/Yorick/30.png' },
		'[初遇:皮肤:灵魂莲华 德莱厄斯]':
			{ target: '${C.dirAutogen}/reso/icon/Darius/43.png' },
		'[击杀:皮肤:灵魂莲华 德莱厄斯]':
			{ target: '${C.dirAutogen}/reso/icon/Darius/43.png' },
		'[初遇:皮肤:灵魂莲华 伊芙琳]':
			{ target: '${C.dirAutogen}/reso/icon/Evelynn/32.png' },
		'[击杀:皮肤:灵魂莲华 伊芙琳]':
			{ target: '${C.dirAutogen}/reso/icon/Evelynn/32.png' },
		'[初遇:皮肤:灵魂莲华 崔丝塔娜]':
			{ target: '${C.dirAutogen}/reso/icon/Tristana/51.png' },
		'[击杀:皮肤:灵魂莲华 崔丝塔娜]':
			{ target: '${C.dirAutogen}/reso/icon/Tristana/51.png' },

		'[普攻]、[使用:Q技能:屈人之威:第一次攻击]':
			{ skill: '${C.dirAutogen}/reso/icon/Sett/Q.png' },
		'[使用:Q技能:屈人之威:第二次攻击]':
			{ skill: '${C.dirAutogen}/reso/icon/Sett/Q.png' },
		'[使用:W技能:蓄意轰拳]':
			{ skill: '${C.dirAutogen}/reso/icon/Sett/W.png' },
		'[使用:W技能:蓄意轰拳:豪意值满]':
			{ skill: '${C.dirAutogen}/reso/icon/Sett/W.png' },
		'[使用:E技能:强手裂颅:命中]':
			{ skill: '${C.dirAutogen}/reso/icon/Sett/E.png' },
		'[升级:R技能:叹为观止:初次]':
			{ skill: '${C.dirAutogen}/reso/icon/Sett/R.png' },
		'[使用:R技能:叹为观止]':
			{ skill: '${C.dirAutogen}/reso/icon/Sett/R.png' },

		'[等级提升]':
			{ mark: '25%概率触发，单局游戏最多触发4次' },
		'[打开:商店]':
			{ mark: '25%概率触发，单局游戏最多触发4次' },
		'[获得:强化]':
			{ mark: '20%概率触发' },
		'[击杀:建筑:防御塔]':
			{ target: '${C.dirAutogen}/reso/icon/turret.png', mark: '单局游戏最多触发4次' },
	},
	lines: {
		'9C1ABC3F': { mark: '特指设计师August在2021年上班摸鱼时在推特分享动图\\。动图中防御塔成为了瑟提R技能的目标' },
		'D2C0EF04': { mark: '是“蠢”不是“准”，原文“unqualified”' },
	}
};
