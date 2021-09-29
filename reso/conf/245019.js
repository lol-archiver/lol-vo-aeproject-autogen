export default {
	title: '真实伤害 艾克',
	champion: {
		id: 245,
		name: 'Ekko',
	},
	skin: {
		id: 19,
		name: 'True Damage'
	},
	emote: 'w(ﾟДﾟ)w',
	events: {
		'[初遇:英雄:艾克]': {
			target: '${C.path.project.autogen}reso/icon/ekko/0.png',
		},
		'[击杀:英雄:艾克]': {
			target: '${C.path.project.autogen}reso/icon/ekko/0.png',
		},
		'[初遇:皮肤:DJ娑娜]': {
			target: '${C.path.project.autogen}reso/icon/sona/6.png',
		},
		'[击杀:皮肤:DJ娑娜]': {
			target: '${C.path.project.autogen}reso/icon/sona/6.png',
		},
		'[初遇:皮肤:真实伤害 阿卡丽]': {
			target: '${C.path.project.autogen}reso/icon/akali/15.png',
		},
		'[击杀:皮肤:真实伤害 阿卡丽]': {
			target: '${C.path.project.autogen}reso/icon/akali/15.png',
		},
		'[初遇:皮肤:真实伤害 奇亚娜]': {
			target: '${C.path.project.autogen}reso/icon/qiyana/2.png',
		},
		'[击杀:皮肤:真实伤害 奇亚娜]': {
			target: '${C.path.project.autogen}reso/icon/qiyana/2.png',
		},
		'[初遇:皮肤:真实伤害 赛娜]': {
			target: '${C.path.project.autogen}reso/icon/senna/1.png',
		},
		'[击杀:皮肤:真实伤害 赛娜]': {
			target: '${C.path.project.autogen}reso/icon/senna/1.png',
		},
		'[初遇:皮肤:真实伤害 亚索]': {
			target: '${C.path.project.autogen}reso/icon/yasuo/18.png',
		},
		'[击杀:皮肤:真实伤害 亚索]': {
			target: '${C.path.project.autogen}reso/icon/yasuo/18.png',
		},

		'[使用:Q技能:时间卷曲器]': {
			skill: '${C.path.project.autogen}reso/icon/Ekko/Q.png'
		},
		'[使用:W技能:时光交错]': {
			skill: '${C.path.project.autogen}reso/icon/Ekko/W.png'
		},
		'[使用:E技能:相位俯冲]': {
			skill: '${C.path.project.autogen}reso/icon/Ekko/E.png'
		},
		'[使用:R技能:时空断裂]': {
			skill: '${C.path.project.autogen}reso/icon/Ekko/R.png'
		},

		'[静置]': {
			mark: '本应是模型做出静置动作时触发的语音\n但皮肤文件没有内置相应事件，所以只有声音，无法触发'
		},
		'[玩笑]': {
			mark: '后半部分是前半部分的倒放'
		},
	},
	lines: {
		'0C444C42': {
			afters: [
				{
					side: 'left',
					head: '${C.path.project.autogen}reso/icon/Lucian/0.png',
					line: '(눈_눈)',
					hideEvent: true,
				},
			],
		},
		'44481039': { mark: '不！是！Uncle！' },
		'DCCD212C': { mark: '不！是！Uncle！' },
	}
};