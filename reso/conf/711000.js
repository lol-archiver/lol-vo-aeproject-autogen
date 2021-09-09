module.exports = {
	title: '愁云使者 薇古丝',
	champion: {
		id: 711,
		name: 'Vex',
	},
	skin: {
		id: 0,
		name: '_Base'
	},
	emote: 'ヾ(*´▽‘*)ﾉ',
	events: {
		'[初遇:皮肤:破败解封 锤石]':
			{ target: '${C.path.project.autogen}reso/icon/Thresh/27.png' },
		'[初遇:英雄:佛耶戈]':
			{ target: '${C.path.project.autogen}reso/icon/Vigeo/0.png' },
		'[初遇:英雄:阿木木]':
			{ target: '${C.path.project.autogen}reso/icon/Amumu/0.png' },
		'[初遇:英雄:蒙多医生]':
			{ target: '${C.path.project.autogen}reso/icon/DrMundo/0.png' },
		'[初遇:英雄:卡尔萨斯]':
			{ target: '${C.path.project.autogen}reso/icon/Karthus/0.png' },
		'[初遇:英雄:卢锡安]':
			{ target: '${C.path.project.autogen}reso/icon/Lucian/0.png' },
		'[初遇:英雄:拉克丝]':
			{ target: '${C.path.project.autogen}reso/icon/Lux/0.png' },
		'[初遇:英雄:维迦]':
			{ target: '${C.path.project.autogen}reso/icon/Veigar/0.png' },
		'[初遇:英雄:亚索]':
			{ target: '${C.path.project.autogen}reso/icon/Yasuo/0.png' },
		'[初遇:英雄:悠米]':
			{ target: '${C.path.project.autogen}reso/icon/Yuumi/0.png' },

		'[触发:P被动:终焉暮气:添加“暮气”标记]':
			{ skill: '${C.path.project.autogen}reso/icon/Ashe/P.png' },
		'[触发:P被动:终焉暮气:引爆标记]':
			{ skill: '${C.path.project.autogen}reso/icon/Ashe/P.png' },
		'[使用:Q技能:寒心波云]':
			{ skill: '${C.path.project.autogen}reso/icon/Ashe/Q.png' },
		'[使用:W技能:生人勿近]':
			{ skill: '${C.path.project.autogen}reso/icon/Ashe/W.png' },
		'[使用:E技能:溟濛渐染]':
			{ skill: '${C.path.project.autogen}reso/icon/Ashe/E.png' },
		'[使用:R技能:愁煞:第一次施放]':
			{ skill: '${C.path.project.autogen}reso/icon/Ashe/R.png' },
		'[使用:R技能:愁煞:第二次施放]':
			{ skill: '${C.path.project.autogen}reso/icon/Ashe/R_2.png' },
	},
	lines: {
		'5D0CF06A': {
			afters: [
				{
					side: 'left',
					head: '${C.path.project.autogen}reso/icon/Amumu/0.png',
					line: '(╥╯^╰╥)',
					hideEvent: true,
				},
			]
		},
		'001ECE22': { mark: '“POW”用于表达很重或者很响亮的声音', },
	}
};