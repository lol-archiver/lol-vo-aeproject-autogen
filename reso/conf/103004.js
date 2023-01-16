export default {
	title: '偶像歌手 阿狸',
	title1: '偶像歌手',
	title2: '阿狸',
	champion: {
		id: 103,
		name: 'Ahri',
	},
	skin: {
		id: 4,
		name: 'Popstar'
	},
	color: '#834DEE',
	splashMiddle: '${C.dirAutogen}/reso/splash-left/103004.png',
	events: {
		'[初遇:皮肤:K/DA 阿狸]':
			{ target: '${C.dirAutogen}/reso/icon/Ahri/15.png' },


		'[使用:W技能:妖异狐火]':
			{ skill: '${C.dirAutogen}/reso/icon/Ahri/W.png' },
		'[使用:E技能:魅惑妖术]':
			{ skill: '${C.dirAutogen}/reso/icon/Ahri/E.png' },
		'[使用:E技能:魅惑妖术:命中]':
			{ skill: '${C.dirAutogen}/reso/icon/Ahri/E.png' },
		'[使用:R技能:灵魄突袭]':
			{ skill: '${C.dirAutogen}/reso/icon/Ahri/R.png' },
	},
	lines: {
		'D5793B6E': { mark: '至臻版本均可触发\\。K/DA ALL OUT不触发' },
	}
};
