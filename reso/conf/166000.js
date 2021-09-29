export default {
	title: '影哨 阿克尚',
	champion: {
		id: 166,
		name: 'Akshan',
	},
	skin: {
		id: 0,
		name: '_Base'
	},
	emote: 'ψ( ╰_╯ )',
	events: {
		'[初遇:地区:暗影岛]':
			{ target: '${C.path.project.autogen}reso/region/shadow_isles.png' },
		'[初遇:英雄:佛耶戈]':
			{ target: '${C.path.project.autogen}reso/icon/Viego/0.png' },
		'[初遇:英雄:卢锡安]':
			{ target: '${C.path.project.autogen}reso/icon/Lucian/0.png' },
		'[初遇:英雄:伊泽瑞尔]':
			{ target: '${C.path.project.autogen}reso/icon/Ezreal/0.png' },
		'[初遇:英雄:卡蜜尔]':
			{ target: '${C.path.project.autogen}reso/icon/Camille/0.png' },
		'[初遇:英雄:希维尔]':
			{ target: '${C.path.project.autogen}reso/icon/Sivir/0.png' },

		'[使用:Q技能:去而复还]':
			{ skill: '${C.path.project.autogen}reso/icon/Akshan/Q.png' },
		'[触发:W技能:赴险夺人:队友复活]':
			{ skill: '${C.path.project.autogen}reso/icon/Akshan/W.png' },
		'[使用:W技能:赴险夺人]':
			{ skill: '${C.path.project.autogen}reso/icon/Akshan/W.png' },
		'[使用:W技能:赴险夺人:现身]':
			{ skill: '${C.path.project.autogen}reso/icon/Akshan/W.png' },
		'[使用:E技能:骄行荡寇]':
			{ skill: '${C.path.project.autogen}reso/icon/Akshan/E.png' },
		'[使用:R技能:恩怨相抵]':
			{ skill: '${C.path.project.autogen}reso/icon/Akshan/R.png' },
		'[使用:R技能:恩怨相抵:子弹发射]':
			{ skill: '${C.path.project.autogen}reso/icon/Akshan/R.png' },
	},
	lines: {
		'FAE83024': {
			afters: [
				{
					side: 'left',
					head: '${C.path.project.autogen}reso/icon/Ezreal/0.png',
					line: '(o゜▽゜)o☆',
					hideEvent: true,
				},
			],
		},
	},
};