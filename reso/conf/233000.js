export default {
	title: '狂厄蔷薇 贝蕾亚',
	title1: '狂厄蔷薇',
	title2: '贝蕾亚',
	champion: {
		id: 233,
		name: 'Briar',
	},
	skin: {
		id: 0,
		name: '_Base'
	},
	color: '#E7395D',
	splashMiddle: '${C.dirAutogen}/reso/splash-left/233000.png',
	events: {
		'[攻击:生物:纳什男爵]':
			{ target: '${C.dirAutogen}/reso/icon/@monster/baron.png' },
		'[攻击:生物:龙]':
			{ target: '${C.dirAutogen}/reso/icon/@monster/fire-dragon.png' },
		'[攻击:生物:峡谷先锋]':
			{ target: '${C.dirAutogen}/reso/icon/@monster/rift-herald.png' },
		'[攻击:生物:绯红印记树怪]':
			{ target: '${C.dirAutogen}/reso/icon/@monster/red-brambleback.png' },
		'[攻击:生物:苍蓝雕纹魔像]':
			{ target: '${C.dirAutogen}/reso/icon/@monster/blue-sentinel.png' },
		'[攻击:生物:峡谷迅捷蟹]':
			{ target: '${C.dirAutogen}/reso/icon/@monster/rift-scuttler.png' },
		'[攻击:生物:暗影狼]':
			{ target: '${C.dirAutogen}/reso/icon/@monster/murkwolf.png' },
		'[攻击:生物:远古石甲虫]':
			{ target: '${C.dirAutogen}/reso/icon/@monster/krug.png' },
		'[攻击:生物:魔沼蛙]':
			{ target: '${C.dirAutogen}/reso/icon/@monster/gromp.png' },
		'[攻击:生物:锋喙鸟]':
			{ target: '${C.dirAutogen}/reso/icon/@monster/raptor.png' },

		'[初遇:英雄:弗拉基米尔]':
			{ target: '${C.dirAutogen}/reso/icon/vladimir/0.png' },
		'[攻击:英雄:弗拉基米尔]':
			{ target: '${C.dirAutogen}/reso/icon/vladimir/0.png' },
		'[击杀:英雄:弗拉基米尔]':
			{ target: '${C.dirAutogen}/reso/icon/vladimir/0.png' },
		'[初遇:英雄:赛恩]':
			{ target: '${C.dirAutogen}/reso/icon/sion/0.png' },
		'[攻击:英雄:赛恩]':
			{ target: '${C.dirAutogen}/reso/icon/sion/0.png' },
		'[击杀:英雄:赛恩]':
			{ target: '${C.dirAutogen}/reso/icon/sion/0.png' },
		'[初遇:英雄:泰隆]':
			{ target: '${C.dirAutogen}/reso/icon/talon/0.png' },
		'[攻击:英雄:泰隆]':
			{ target: '${C.dirAutogen}/reso/icon/talon/0.png' },
		'[击杀:英雄:泰隆]':
			{ target: '${C.dirAutogen}/reso/icon/talon/0.png' },

		'[使用:Q冲头]':
			{ skill: '${C.dirAutogen}/reso/icon/briar/q.png' },
		'[使用:W血莽/噬击]':
			{ skill: '${C.dirAutogen}/reso/icon/briar/w.png' },
		'[使用:E惊吼:鲜血狂乱结束时]':
			{ skill: '${C.dirAutogen}/reso/icon/briar/e.png' },
		'[使用:R毙除]':
			{ skill: '${C.dirAutogen}/reso/icon/briar/r.png' },
		'[使用:R毙除:命中时]':
			{ skill: '${C.dirAutogen}/reso/icon/briar/r.png' },
	},
	lines: {
	}
};
