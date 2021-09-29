export default {
	title: '光明哨兵 薇恩',
	champion: {
		id: 67,
		name: 'Vayne',
	},
	skin: {
		id: 25,
		name: 'Sentinel'
	},
	emote: 'ψ( ╰_╯ )',
	events: {
		'[助攻:英雄:格雷福斯]':
			{ target: '${C.path.project.autogen}reso/icon/Graves/0.png' },
		'[初遇:英雄:格雷福斯]':
			{ target: '${C.path.project.autogen}reso/icon/Graves/0.png' },
		'[击杀:英雄:格雷福斯]':
			{ target: '${C.path.project.autogen}reso/icon/Graves/0.png' },
		'[移动:初次][友方:使用:皮肤:光明哨兵 格雷福斯]':
			{ target: '${C.path.project.autogen}reso/icon/Graves/35.png' },
		'[初遇:皮肤:光明哨兵 格雷福斯]':
			{ target: '${C.path.project.autogen}reso/icon/Graves/35.png' },
		'[击杀:皮肤:光明哨兵 格雷福斯]':
			{ target: '${C.path.project.autogen}reso/icon/Graves/35.png' },
		'[初遇:皮肤:光明哨兵 血港鬼影]':
			{ target: '${C.path.project.autogen}reso/icon/Pyke/34.png' },
		'[初遇:皮肤:破败军团 厄运小姐]':
			{ target: '${C.path.project.autogen}reso/icon/MissFortune/21.png' },
		'[初遇:皮肤:光明哨兵 皎月女神]':
			{ target: '${C.path.project.autogen}reso/icon/Diana/28.png' },
		'[初遇:皮肤:光明哨兵 艾瑞莉娅]':
			{ target: '${C.path.project.autogen}reso/icon/Irelia/26.png' },
		'[初遇:皮肤:光明哨兵 奥拉夫]':
			{ target: '${C.path.project.autogen}reso/icon/Olaf/25.png' },
		'[初遇:皮肤:光明哨兵 锐雯]':
			{ target: '${C.path.project.autogen}reso/icon/Riven/34.png' },
		'[初遇:皮肤:破败军团 潘森]':
			{ target: '${C.path.project.autogen}reso/icon/Pantheon/25.png' },
		'[初遇:皮肤:破败军团 德莱文]':
			{ target: '${C.path.project.autogen}reso/icon/Draven/20.png' },
		'[初遇:皮肤:破败军团 卡尔玛]':
			{ target: '${C.path.project.autogen}reso/icon/Karma/27.png' },
		'[初遇:皮肤:破败军团 希瓦娜]':
			{ target: '${C.path.project.autogen}reso/icon/Shyvana/8.png' },
		'[击杀:皮肤:破败军团 希瓦娜]':
			{ target: '${C.path.project.autogen}reso/icon/Shyvana/8.png' },
		'[初遇:英雄:佛耶戈]':
			{ target: '${C.path.project.autogen}reso/icon/Viego/0.png' },
		'[击杀:英雄:佛耶戈]':
			{ target: '${C.path.project.autogen}reso/icon/Viego/0.png' },
		'[初遇:英雄:格温]':
			{ target: '${C.path.project.autogen}reso/icon/Gwen/0.png' },
		'[击杀:英雄:格温]':
			{ target: '${C.path.project.autogen}reso/icon/Gwen/0.png' },
		'[初遇:英雄:卢锡安]':
			{ target: '${C.path.project.autogen}reso/icon/Lucian/0.png' },
		'[击杀:英雄:卢锡安]':
			{ target: '${C.path.project.autogen}reso/icon/Lucian/0.png' },
		'[初遇:英雄:赛娜]':
			{ target: '${C.path.project.autogen}reso/icon/Senna/0.png' },
		'[击杀:英雄:赛娜]':
			{ target: '${C.path.project.autogen}reso/icon/Senna/0.png' },
		'[初遇:英雄:波比]':
			{ target: '${C.path.project.autogen}reso/icon/Poppy/0.png' },
		'[击杀:英雄:波比]':
			{ target: '${C.path.project.autogen}reso/icon/Poppy/0.png' },
		'[初遇:英雄:伊芙琳]':
			{ target: '${C.path.project.autogen}reso/icon/Evelynn/0.png' },
		'[击杀:英雄:伊芙琳]':
			{ target: '${C.path.project.autogen}reso/icon/Evelynn/0.png' },

		'[使用:Q技能:闪避突袭]':
			{ skill: '${C.path.project.autogen}reso/icon/Vayne/Q.png' },
		'[使用:E技能:恶魔审判]':
			{ skill: '${C.path.project.autogen}reso/icon/Vayne/E.png' },
		'[使用:E技能:恶魔审判:击退至地形]':
			{ skill: '${C.path.project.autogen}reso/icon/Vayne/E.png' },
		'[使用:R技能:终极时刻]':
			{ skill: '${C.path.project.autogen}reso/icon/Vayne/R.png' },
	},
	lines: {
		'176A745C': {
			afters: [
				{
					side: 'left',
					head: '${C.path.project.autogen}reso/icon/Olaf/25.png',
					line: 'ヽ(💢｀皿´💢)ノ',
					hideEvent: true,
				},
			]
		},
	}
};