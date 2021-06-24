module.exports = {
	title: '寒冰射手 艾希',
	champion: {
		id: 22,
		name: 'Ashe',
	},
	skin: {
		id: 0,
		name: '_Base'
	},
	emote: '(ФωФ)',
	events: {
		'[初遇:英雄:内瑟斯]':
			{ target: '${C.path.project.autogen}reso/icon/Nasus/0.png' },
		'[击杀:英雄:内瑟斯]':
			{ target: '${C.path.project.autogen}reso/icon/Nasus/0.png' },
		'[初遇:皮肤:源计划：超体 莫德凯撒]':
			{ target: '${C.path.project.autogen}reso/icon/Mordekaiser/13.png' },
		'[击杀:皮肤:源计划：超体 莫德凯撒]':
			{ target: '${C.path.project.autogen}reso/icon/Mordekaiser/13.png' },
		'[初遇:皮肤:源计划：末日 沃里克]':
			{ target: '${C.path.project.autogen}reso/icon/Warwick/16.png' },
		'[击杀:皮肤:源计划：末日 沃里克]':
			{ target: '${C.path.project.autogen}reso/icon/Warwick/16.png' },

		'[初遇:皮肤:源计划：联合 艾希]':
			{ target: '${C.path.project.autogen}reso/icon/Ashe/8.png' },
		'[击杀:皮肤:源计划：联合 艾希]':
			{ target: '${C.path.project.autogen}reso/icon/Ashe/8.png' },
		'[初遇:皮肤:源计划：林 易]':
			{ target: '${C.path.project.autogen}reso/icon/MasterYi/9.png' },
		'[击杀:皮肤:源计划：林 易]':
			{ target: '${C.path.project.autogen}reso/icon/MasterYi/9.png' },
		'[初遇:皮肤:源计划：毁灭 派克]':
			{ target: '${C.path.project.autogen}reso/icon/Pyke/16.png' },
		'[击杀:皮肤:源计划：毁灭 派克]':
			{ target: '${C.path.project.autogen}reso/icon/Pyke/16.png' },
		'[初遇:皮肤:源计划：泯灭 雷克顿]':
			{ target: '${C.path.project.autogen}reso/icon/Renekton/26.png' },
		'[击杀:皮肤:源计划：泯灭 雷克顿]':
			{ target: '${C.path.project.autogen}reso/icon/Renekton/26.png' },
		'[初遇:皮肤:源计划：统帅 瑟庄妮]':
			{ target: '${C.path.project.autogen}reso/icon/Sejuani/16.png' },
		'[击杀:皮肤:源计划：统帅 瑟庄妮]':
			{ target: '${C.path.project.autogen}reso/icon/Sejuani/16.png' },
		'[初遇:皮肤:源计划：魅灵 赛娜]':
			{ target: '${C.path.project.autogen}reso/icon/Senna/16.png' },
		'[击杀:皮肤:源计划：魅灵 赛娜]':
			{ target: '${C.path.project.autogen}reso/icon/Senna/16.png' },
		'[初遇:皮肤:源计划：逆流 塞拉斯]':
			{ target: '${C.path.project.autogen}reso/icon/Sylas/13.png' },
		'[击杀:皮肤:源计划：逆流 塞拉斯]':
			{ target: '${C.path.project.autogen}reso/icon/Sylas/13.png' },
		'[初遇:皮肤:源计划：天眼 维鲁斯]':
			{ target: '${C.path.project.autogen}reso/icon/Varus/16.png' },
		'[击杀:皮肤:源计划：天眼 维鲁斯]':
			{ target: '${C.path.project.autogen}reso/icon/Varus/16.png' },

		'[使用:Q技能:暴君狂击]':
			{ skill: '${C.path.project.autogen}reso/icon/Renekton/Q.png' },
		'[使用:W技能:冷酷捕猎]':
			{ skill: '${C.path.project.autogen}reso/icon/Renekton/W.png' },
		'[使用:W技能:冷酷捕猎:狂怒状态下]':
			{ skill: '${C.path.project.autogen}reso/icon/Renekton/W.png' },
		'[使用:E技能:横冲直撞:横冲]':
			{ skill: '${C.path.project.autogen}reso/icon/Renekton/E.png' },
		'[使用:E技能:横冲直撞:直撞]':
			{ skill: '${C.path.project.autogen}reso/icon/Renekton/E.png' },
		'[使用:R技能:终极统治]':
			{ skill: '${C.path.project.autogen}reso/icon/Renekton/R.png' },
	},
	lines: {
		'9CE34127': {
			mark: 'R技能的英文语音有三句。中文语音在正式服上线后依旧只有两句，基本上是确定少一句了',
		},


		'EE47DF4B': {
			afters: [
				{
					side: 'left',
					head: '${C.path.project.autogen}reso/icon/Varus/16.png',
					line: 'o(≧口≦)o\n￣へ￣\n╰(‵□′)╯',
					hideEvent: true,
				},
			]
		},
	}
};