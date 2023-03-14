export default {
	title: '花仙女王 卡尔玛',
	title1: '花仙女王',
	title2: '卡尔玛',
	champion: {
		id: 43,
		name: 'Karma',
	},
	skin: {
		id: 54,
		name: 'Faerie Queen'
	},
	color: '#DC96E2',
	splashMiddle: '${C.dirAutogen}/reso/splash-left/043054.png',
	events: {
		'[击杀:建筑:防御塔]':
			{ target: '${C.dirAutogen}/reso/icon/turret.png' },
		'[击杀:系列:仙子之庭]':
			{ mark: '花仙子萨勒芬妮当前无法触发' },


		'[移动:初次:友方:皮肤:花仙骑士 卡莉丝塔]':
			{ target: '${C.dirAutogen}/reso/icon/Kalista/14.png' },
		'[初遇:皮肤:花仙骑士 卡莉丝塔]':
			{ target: '${C.dirAutogen}/reso/icon/Kalista/14.png' },
		'[击杀:皮肤:花仙骑士 卡莉丝塔]':
			{ target: '${C.dirAutogen}/reso/icon/Kalista/14.png' },
		'[初遇:皮肤:花仙贤者 米利欧]':
			{ target: '${C.dirAutogen}/reso/icon/Milio/1.png' },
		'[击杀:皮肤:花仙贤者 米利欧]':
			{ target: '${C.dirAutogen}/reso/icon/Milio/1.png' },
		'[初遇:皮肤:花仙使者 卡特琳娜]':
			{ target: '${C.dirAutogen}/reso/icon/Katarina/47.png' },
		'[击杀:皮肤:花仙使者 卡特琳娜]':
			{ target: '${C.dirAutogen}/reso/icon/Katarina/47.png' },
		'[初遇:皮肤:花仙贵族 伊泽瑞尔]':
			{ target: '${C.dirAutogen}/reso/icon/Ezreal/33.png' },
		'[击杀:皮肤:花仙贵族 伊泽瑞尔]':
			{ target: '${C.dirAutogen}/reso/icon/Ezreal/33.png' },
		'[初遇:皮肤:花仙骑士 菲奥娜]':
			{ target: '${C.dirAutogen}/reso/icon/Fiora/69.png' },
		'[击杀:皮肤:花仙骑士 菲奥娜]':
			{ target: '${C.dirAutogen}/reso/icon/Fiora/69.png' },
		'[初遇:皮肤:花仙子 萨勒芬妮]':
			{ target: '${C.dirAutogen}/reso/icon/Seraphine/24.png' },
		'[击杀:皮肤:花仙子 萨勒芬妮]':
			{ target: '${C.dirAutogen}/reso/icon/Seraphine/24.png' },


		'[使用:Q心灵烈焰]':
			{ skill: '${C.dirAutogen}/reso/icon/Karma/Q1.png' },
		'[使用:W坚定不移]':
			{ skill: '${C.dirAutogen}/reso/icon/Karma/W1.png' },
		'[使用:W坚定不移:增强]':
			{ skill: '${C.dirAutogen}/reso/icon/Karma/W2.png' },
		'[使用:E鼓舞]':
			{ skill: '${C.dirAutogen}/reso/icon/Karma/E1.png' },
		'[使用:E鼓舞:增强]':
			{ skill: '${C.dirAutogen}/reso/icon/Karma/E2.png' },
		'[使用:R梵咒]':
			{ skill: '${C.dirAutogen}/reso/icon/Karma/R.png' },
	},
	lines: {
		'F4CF1B1D': { mark: '达尔哈，在主宇宙中，是这一代卡尔玛化身对象的原名' },
	}
};
