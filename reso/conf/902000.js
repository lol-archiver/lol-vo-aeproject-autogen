export default {
	title: '明烛 米利欧',
	title1: '明烛',
	title2: '米利欧',
	champion: {
		id: 902,
		name: 'Milio',
	},
	skin: {
		id: 0,
		name: '_Base'
	},
	color: '#EC8D46',
	splashMiddle: '${C.dirAutogen}/reso/splash-left/902000.png',
	events: {
		'[移动:在野区]':
			{ mark: '在召唤师峡谷的同一方野区中\\，累计移动至少400码后随机触发\\。离开野区或从一方野区进入另一方野区会重置移动累计' },
		'[攻击:生物:龙]':
			{ target: '${C.dirAutogen}/reso/icon/@monster/fire-dragon.png' },


		'[移动:初次:友方:英雄:奇亚娜]':
			{ target: '${C.dirAutogen}/reso/icon/Qiyana/0.png' },
		'[初遇:英雄:奇亚娜]':
			{ target: '${C.dirAutogen}/reso/icon/Qiyana/0.png' },
		'[击杀:英雄:奇亚娜]':
			{ target: '${C.dirAutogen}/reso/icon/Qiyana/0.png' },
		'[初遇:英雄:巴德]':
			{ target: '${C.dirAutogen}/reso/icon/Bard/0.png' },
		'[初遇:英雄:布兰德]':
			{ target: '${C.dirAutogen}/reso/icon/Brand/0.png' },
		'[初遇:英雄:阿木木]':
			{ target: '${C.dirAutogen}/reso/icon/Amumu/0.png' },
		'[初遇:英雄:努努和威朗普]':
			{ target: '${C.dirAutogen}/reso/icon/Nunu/0.png' },
		'[初遇:英雄:安妮]':
			{ target: '${C.dirAutogen}/reso/icon/Annie/0.png' },
		'[初遇:英雄:格温]':
			{ target: '${C.dirAutogen}/reso/icon/Gwen/0.png' },
		'[击杀:英雄:格温]':
			{ target: '${C.dirAutogen}/reso/icon/Gwen/0.png' },
		'[初遇:英雄:悠米]':
			{ target: '${C.dirAutogen}/reso/icon/Yuumi/0.png' },
		'[初遇:英雄:Naafiri]': {
			target: '${C.dirAutogen}/reso/icon/-1.png',
			mark: '新英雄“Naafiri”，简中译名未知'
		},
		'[击杀:英雄:Naafiri]': {
			target: '${C.dirAutogen}/reso/icon/-1.png',
			mark: '新英雄“Naafiri”，简中译名未知'
		},
		'[初遇:英雄:妮蔻]':
			{ target: '${C.dirAutogen}/reso/icon/Neeko/0.png' },
		'[击杀:英雄:妮蔻]':
			{ target: '${C.dirAutogen}/reso/icon/Neeko/0.png' },
		'[初遇:英雄:奈德丽]':
			{ target: '${C.dirAutogen}/reso/icon/Nidalee/0.png' },
		'[击杀:英雄:奈德丽]':
			{ target: '${C.dirAutogen}/reso/icon/Nidalee/0.png' },
		'[初遇:英雄:雷恩加尔]':
			{ target: '${C.dirAutogen}/reso/icon/Rengar/0.png' },
		'[击杀:英雄:雷恩加尔]':
			{ target: '${C.dirAutogen}/reso/icon/Rengar/0.png' },
		'[初遇:英雄:奎桑提]':
			{ target: '${C.dirAutogen}/reso/icon/KSante/0.png' },

		'[触发:P热情洋溢]':
			{ skill: '${C.dirAutogen}/reso/icon/Milio/P.png' },
		'[使用:Q火爆飞踢]':
			{ skill: '${C.dirAutogen}/reso/icon/Milio/Q.png' },
		'[使用:Q火爆飞踢:命中]':
			{ skill: '${C.dirAutogen}/reso/icon/Milio/Q.png' },
		'[使用:Q火爆飞踢:未命中]':
			{ skill: '${C.dirAutogen}/reso/icon/Milio/Q.png' },
		'[使用:W依依不舍]':
			{ skill: '${C.dirAutogen}/reso/icon/Milio/W.png' },
		'[使用:E融融情谊]':
			{ skill: '${C.dirAutogen}/reso/icon/Milio/E.png' },
		'[使用:R生生不息]':
			{ skill: '${C.dirAutogen}/reso/icon/Milio/R.png' },
	},
	lines: {
		'C12B6C49': { mark: '托马辛，原文“Tomasin”，米利欧的朋友' },
		'CD0BC539': { mark: '哈维，原文“Javi”，米利欧的表亲' },
		'D5A76428': { mark: '小猫，原文“pakiti”\\，奈德丽所在氏族表达“小猫”的用词\\。帕卡，原文“Pakaa”\\，简中用字未知，奈德丽所在氏族' },
		'E1ECDF1A': { mark: '空塞拿，音译，原文“Co\'om Se-Henna”\\，妮蔻所在氏族表达“我们永远微笑（好友）”的用词' },
		'1E340516': { mark: '育恩塔尔，原文“Yun Tal”\\，以绪塔尔的统治阶级' },
		'13B9987A': { mark: '育恩塔尔，原文“Yun Tal”\\，以绪塔尔的统治阶级' },
		'2F93A416': { mark: '育恩塔尔，原文“Yun Tal”\\，以绪塔尔的统治阶级' },
		'9C9E5E64': { mark: '育恩塔尔，原文“Yun Tal”\\，以绪塔尔的统治阶级' },
		'E523976B': { mark: '育恩塔尔，原文“Yun Tal”\\，以绪塔尔的统治阶级' },
		'2350EA7C': { mark: '维达利安，原文“Vidalion”，一座巨大的魔法织机\\，用于考验以绪塔尔的元素魔法学徒' },
		'23B7A117': { mark: '维达利安，原文“Vidalion”，一座巨大的魔法织机\\，用于考验以绪塔尔的元素魔法学徒' },
		'EFEEB153': { mark: '维达利安，原文“Vidalion”，一座巨大的魔法织机\\，用于考验以绪塔尔的元素魔法学徒' },
	}
};
