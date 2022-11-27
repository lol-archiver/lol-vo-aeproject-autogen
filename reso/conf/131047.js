export default {
	title: '北极星神 黛安娜',
	title1: '北极星神',
	title2: '黛安娜',
	champion: {
		id: 131,
		name: 'Diana',
	},
	skin: {
		id: 47,
		name: 'Winterblessed'
	},
	color: '#54A4B3',
	splashMiddle: '${C.dirAutogen}/reso/splash-left/131047.png',
	events: {
		'[攻击:生物:龙]':
			{ target: '${C.dirAutogen}/reso/icon/@monster/fire-dragon.png' },
		'[击杀:建筑:防御塔]':
			{ target: '${C.dirAutogen}/reso/icon/turret.png' },


		'[初遇:英雄:蕾欧娜]':
			{ target: '${C.dirAutogen}/reso/icon/Leona/0.png' },
		'[击杀:英雄:蕾欧娜]':
			{ target: '${C.dirAutogen}/reso/icon/Leona/0.png' },
		'[初遇:皮肤:北极星守望者 佐伊]':
			{ target: '${C.dirAutogen}/reso/icon/Zoe/22.png' },
		'[击杀:皮肤:北极星守望者 佐伊]':
			{ target: '${C.dirAutogen}/reso/icon/Zoe/22.png' },
		'[初遇:皮肤:北极星之兽 沃里克]':
			{ target: '${C.dirAutogen}/reso/icon/Warwick/45.png' },
		'[击杀:皮肤:北极星之兽 沃里克]':
			{ target: '${C.dirAutogen}/reso/icon/Warwick/45.png' },
		'[初遇:皮肤:北极星使者 斯维因]':
			{ target: '${C.dirAutogen}/reso/icon/Swain/21.png' },
		'[击杀:皮肤:北极星使者 斯维因]':
			{ target: '${C.dirAutogen}/reso/icon/Swain/21.png' },
		'[初遇:皮肤:北极星圣贤 基兰]':
			{ target: '${C.dirAutogen}/reso/icon/Zilean/14.png' },
		'[击杀:皮肤:北极星圣贤 基兰]':
			{ target: '${C.dirAutogen}/reso/icon/Zilean/14.png' },
		'[初遇:皮肤:北极星使者 萨科]':
			{ target: '${C.dirAutogen}/reso/icon/Shaco/33.png' },
		'[击杀:皮肤:北极星使者 萨科]':
			{ target: '${C.dirAutogen}/reso/icon/Shaco/33.png' },


		'[使用:Q技能:新月打击]':
			{ skill: '${C.dirAutogen}/reso/icon/Diana/Q.png' },
		'[使用:Q技能:新月打击:命中]':
			{ skill: '${C.dirAutogen}/reso/icon/Diana/Q.png' },
		'[使用:Q技能:新月打击:未命中]':
			{ skill: '${C.dirAutogen}/reso/icon/Diana/Q.png' },
		'[使用:W技能:苍白之瀑]':
			{ skill: '${C.dirAutogen}/reso/icon/Diana/W.png' },
		'[使用:E技能:月神冲刺]':
			{ skill: '${C.dirAutogen}/reso/icon/Diana/E.png' },
		'[升级:R技能:月之降临:初次]':
			{ skill: '${C.dirAutogen}/reso/icon/Diana/R.png' },
		'[使用:R技能:月之降临]':
			{ skill: '${C.dirAutogen}/reso/icon/Diana/R.png' },
		'[变身]':
			{ skill: '${C.dirAutogen}/reso/icon/Diana/R.png', mark: 'R技能命中至少两名敌方英雄触发变身\\。语音每局游戏最多触发两次' },
	},
	lines: {
	}
};
