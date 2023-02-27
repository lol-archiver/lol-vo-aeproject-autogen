export default {
	title: '狂野女猎手 奈德丽',
	title1: '狂野女猎手',
	title2: '奈德丽',
	champion: {
		id: 76,
		name: 'Nidalee',
	},
	skin: {
		id: 0,
		name: '_Base'
	},
	color: '#64AA66',
	splashMiddle: '${C.dirAutogen}/reso/splash-left/076000.png',
	events: {
		'[初遇:皮肤:绝息圣堂 弗拉基米尔]':
			{ target: '${C.dirAutogen}/reso/icon/Vladimir/39.png' },

		'[初遇:地区:皮尔特沃夫]':
			{ target: '${C.dirAutogen}/reso/region/piltover.png' },
		'[击杀:地区:皮尔特沃夫]':
			{ target: '${C.dirAutogen}/reso/region/piltover.png' },

		'[初遇:英雄:妮蔻]':
			{ target: '${C.dirAutogen}/reso/icon/Neeko/0.png' },
		'[击杀:英雄:妮蔻]':
			{ target: '${C.dirAutogen}/reso/icon/Neeko/0.png' },
		'[初遇:英雄:千珏]':
			{ target: '${C.dirAutogen}/reso/icon/Kindred/0.png' },
		'[击杀:英雄:千珏]':
			{ target: '${C.dirAutogen}/reso/icon/Kindred/0.png' },
		'[初遇:英雄:奇亚娜]':
			{ target: '${C.dirAutogen}/reso/icon/Qiyana/0.png' },
		'[击杀:英雄:奇亚娜]':
			{ target: '${C.dirAutogen}/reso/icon/Qiyana/0.png' },
		'[初遇:英雄:雷恩加尔]':
			{ target: '${C.dirAutogen}/reso/icon/Rengar/0.png' },
		'[击杀:英雄:雷恩加尔]':
			{ target: '${C.dirAutogen}/reso/icon/Rengar/0.png' },
		'[初遇:英雄:悠米]':
			{ target: '${C.dirAutogen}/reso/icon/Yuumi/0.png', },
		'[击杀:英雄:悠米]':
			{ target: '${C.dirAutogen}/reso/icon/Yuumi/0.png' },
		'[初遇:英雄:乌迪尔]':
			{ target: '${C.dirAutogen}/reso/icon/Udyr/0.png' },
		'[击杀:英雄:乌迪尔]':
			{ target: '${C.dirAutogen}/reso/icon/Udyr/0.png' },
		'[初遇:英雄:Milio]': {
			target: '${C.dirAutogen}/reso/icon/-1.png',
			mark: '新英雄“Milio”，简中译名未知\\。幼猫，原文“pakiti”\\，奈德丽所在氏族表达“小猫”的用词',
		},
		'[击杀:英雄:Milio]': {
			target: '${C.dirAutogen}/reso/icon/-1.png',
			mark: '新英雄“Milio”，简中译名未知'
		},
		'[初遇:英雄:Naafiri]': {
			target: '${C.dirAutogen}/reso/icon/-1.png',
			mark: '新英雄“Naafiri”，简中译名未知'
		},
		'[击杀:英雄:Naafiri]': {
			target: '${C.dirAutogen}/reso/icon/-1.png',
			mark: '新英雄“Naafiri”，简中译名未知'
		},
		'[初遇:英雄:奎桑提]':
			{ target: '${C.dirAutogen}/reso/icon/KSante/0.png' },
		'[击杀:英雄:奎桑提]':
			{ target: '${C.dirAutogen}/reso/icon/KSante/0.png' },


		'[触发:P寻觅:标记敌人]':
			{ skill: '${C.dirAutogen}/reso/icon/Nidalee/P.png' },
		'[击杀:英雄::注释:使用【Q1标枪投掷】]':
			{ skill: '${C.dirAutogen}/reso/icon/Nidalee/Q_1.png' },
		'[使用:Q1标枪投掷]':
			{ skill: '${C.dirAutogen}/reso/icon/Nidalee/Q_1.png' },
		'[使用:Q1标枪投掷:命中]':
			{ skill: '${C.dirAutogen}/reso/icon/Nidalee/Q_1.png' },
		'[使用:W1丛林伏击]':
			{ skill: '${C.dirAutogen}/reso/icon/Nidalee/W_1.png' },
		'[使用:E1野性奔腾]':
			{ skill: '${C.dirAutogen}/reso/icon/Nidalee/W_1.png' },
		'[使用:R美洲狮形态]':
			{ skill: '${C.dirAutogen}/reso/icon/Nidalee/R_1.png' },

		'[重生:注释:非语义]':
			{ mark: '该重生语音触发概率100%\\，其他重生语音触发概率75%' },
	},
	lines: {
		'7429D84D': { mark: '小猫咪，原文“pakiti”\\，奈德丽所在氏族表达“小猫”的用词' },
		'3C103070': { mark: '后代，原文“pakiti”\\，奈德丽所在氏族表达“小猫”的用词' },
		'54A12328': { mark: '幼猫，原文“pakiti”\\，奈德丽所在氏族表达“小猫”的用词' },
		'AE507518': { mark: '幼猫，原文“pakiti”\\，奈德丽所在氏族表达“小猫”的用词' },
		'4B67DE15': { mark: '帕卡，原文“Pakaa”，简中用字未知，奈德丽所在氏族\\。卡仕达芝，原文“Kashdaji”\\，简中用字未知，外部对奈德丽所在氏族的称呼' },
		'2A0B9D36': { mark: '帕卡，原文“Pakaa”\\，简中用字未知，奈德丽所在氏族\\。林猫，一种动物' },
		'68BBE609': { mark: '帕卡，原文“Pakaa”\\，简中用字未知，奈德丽所在氏族' },
		'7D73EA2D': { mark: '族群，原文“Pakaa”\\，简中用字未知，奈德丽所在氏族“帕卡”' },
		'20EB1644': { mark: '帕卡的同胞，原文“kupaka”\\，奈德丽所在氏族表达“兄弟姐妹、同胞”的用词' },
		'F1DCCC3B': { mark: '卡仕达芝母老虎，原文“Kashdaji Queen”\\，简中用字未知，卡仕达芝是外部对奈德丽所在氏族的称呼' },
		'9005A308': { mark: '卡仕达芝母老虎，原文“Kashdaji Queen”\\，简中用字未知，卡仕达芝是外部对奈德丽所在氏族的称呼' },
	}
};
