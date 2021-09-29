export default {
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
			{ target: '${C.dirAutogen}/reso/icon/Thresh/27.png' },
		'[初遇:英雄:佛耶戈]':
			{ target: '${C.dirAutogen}/reso/icon/Viego/0.png' },
		'[初遇:英雄:阿木木]':
			{ target: '${C.dirAutogen}/reso/icon/Amumu/0.png' },
		'[初遇:英雄:蒙多医生]':
			{ target: '${C.dirAutogen}/reso/icon/DrMundo/0.png' },
		'[初遇:英雄:卡尔萨斯]':
			{ target: '${C.dirAutogen}/reso/icon/Karthus/0.png' },
		'[初遇:英雄:卢锡安]':
			{ target: '${C.dirAutogen}/reso/icon/Lucian/0.png' },
		'[初遇:英雄:拉克丝]':
			{ target: '${C.dirAutogen}/reso/icon/Lux/0.png' },
		'[初遇:英雄:维迦]':
			{ target: '${C.dirAutogen}/reso/icon/Veigar/0.png' },
		'[初遇:英雄:亚索]':
			{ target: '${C.dirAutogen}/reso/icon/Yasuo/0.png' },
		'[初遇:英雄:悠米]':
			{ target: '${C.dirAutogen}/reso/icon/Yuumi/0.png' },

		'[触发:P被动:终焉暮气:添加“暮气”标记]':
			{ skill: '${C.dirAutogen}/reso/icon/Vex/P.png' },
		'[触发:P被动:终焉暮气:引爆标记]':
			{ skill: '${C.dirAutogen}/reso/icon/Vex/P.png' },
		'[使用:Q技能:寒心波云]':
			{ skill: '${C.dirAutogen}/reso/icon/Vex/Q.png' },
		'[使用:W技能:生人勿近]':
			{ skill: '${C.dirAutogen}/reso/icon/Vex/W.png' },
		'[使用:E技能:溟濛渐染]':
			{ skill: '${C.dirAutogen}/reso/icon/Vex/E.png' },
		'[使用:R技能:愁煞:第一次施放]':
			{ skill: '${C.dirAutogen}/reso/icon/Vex/R.png' },
		'[使用:R技能:愁煞:第二次施放]':
			{ skill: '${C.dirAutogen}/reso/icon/Vex/R_2.png' },
	},
	lines: {
		'5D0CF06A': {
			afters: [
				{
					side: 'left',
					head: '${C.dirAutogen}/reso/icon/Amumu/0.png',
					line: '(╥╯^╰╥)',
					hideEvent: true,
				},
			]
		},
		'001ECE22': { mark: '“POW”用于表达很重或者很响亮的声音', },
		'F5D82758': { mark: '上下这两句台词会连着一起播放', },
	}
};