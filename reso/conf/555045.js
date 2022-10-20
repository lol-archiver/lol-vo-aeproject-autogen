export default {
	title: '至高天 派克',
	title1: '至高天',
	title2: '派克',
	champion: {
		id: 555,
		name: 'Pyke',
	},
	skin: {
		id: 45,
		name: 'Empyrean'
	},
	color: '#D23F45',
	head: '${C.dirAutogen}/reso/other/icon/emp-pyke.png',
	splashMiddle: '${C.dirAutogen}/reso/splash-left/555045.png',
	events: {
		'[攻击:生物:纳什男爵]':
			{ target: '${C.dirAutogen}/reso/icon/@monster/baron.png' },

		'[击杀:建筑:防御塔]':
			{ target: '${C.dirAutogen}/reso/icon/turret.png' },

		'[初遇:英雄:派克]':
			{ target: '${C.dirAutogen}/reso/icon/Pyke/0.png' },
		'[击杀:英雄:派克]':
			{ target: '${C.dirAutogen}/reso/icon/Pyke/0.png' },
		'[初遇:英雄:烬]':
			{ target: '${C.dirAutogen}/reso/icon/Jhin/0.png', mark: '检查了触发逻辑，确实是任意皮肤的烬均可触发\\，不知道是否拳头设置错误' },
		'[击杀:皮肤:至高天 烬]':
			{ target: '${C.dirAutogen}/reso/other/icon/emp-jhin.png' },
		'[初遇:皮肤:至高天 劫]':
			{ target: '${C.dirAutogen}/reso/other/icon/emp-zed.png' },
		'[击杀:皮肤:至高天 劫]':
			{ target: '${C.dirAutogen}/reso/other/icon/emp-zed.png' },
		'[初遇:皮肤:至高天 贾克斯]':
			{ target: '${C.dirAutogen}/reso/other/icon/emp-jax.png' },
		'[击杀:皮肤:至高天 贾克斯]':
			{ target: '${C.dirAutogen}/reso/other/icon/emp-jax.png' },
		'[初遇:皮肤:至高天 薇古丝]':
			{ target: '${C.dirAutogen}/reso/other/icon/emp-vex.png' },
		'[击杀:皮肤:至高天 薇古丝]':
			{ target: '${C.dirAutogen}/reso/other/icon/emp-vex.png' },
		'[初遇:英雄:拉克丝]':
			{ target: '${C.dirAutogen}/reso/icon/Lux/0.png', mark: '检查了触发逻辑，确实是任意皮肤的拉克丝均可触发\\，不知道是否拳头设置错误' },
		'[击杀:皮肤:至高天 拉克丝]':
			{ target: '${C.dirAutogen}/reso/other/icon/emp-lux.png' },
		'[初遇:皮肤:至高天 扎克]':
			{ target: '${C.dirAutogen}/reso/other/icon/emp-zac.png' },
		'[击杀:皮肤:至高天 扎克]':
			{ target: '${C.dirAutogen}/reso/other/icon/emp-zac.png' },



		'[使用:Q技能:透骨尖钉:秒放戳刺]':
			{ skill: '${C.dirAutogen}/reso/icon/Pyke/Q.png' },
		'[使用:Q技能:透骨尖钉:蓄力扔出]':
			{ skill: '${C.dirAutogen}/reso/icon/Pyke/Q.png' },
		'[使用:Q技能:透骨尖钉:蓄力扔出命中]':
			{ skill: '${C.dirAutogen}/reso/icon/Pyke/Q.png' },
		'[使用:Q技能:透骨尖钉:蓄力扔出未命中]':
			{ skill: '${C.dirAutogen}/reso/icon/Pyke/Q.png' },
		'[使用:W技能:幽潭潜行]':
			{ skill: '${C.dirAutogen}/reso/icon/Pyke/W.png' },
		'[使用:W技能:幽潭潜行:主动离开伪装]':
			{ skill: '${C.dirAutogen}/reso/icon/Pyke/W.png', mark: '仅在伪装时使用Q/E技能触发，其他情况不触发' },
		'[升级:R技能:涌泉之恨:初次]':
			{ skill: '${C.dirAutogen}/reso/icon/Pyke/R.png' },
		'[使用:R技能:涌泉之恨]':
			{ skill: '${C.dirAutogen}/reso/icon/Pyke/R.png' },
		'[使用:R技能:涌泉之恨:金币分红]':
			{ skill: '${C.dirAutogen}/reso/icon/Pyke/R.png' },
	},
	lines: {
		'396BE156': { mark: '奶油，原文“butter”，可能是指固体状的黄油。' },
		'9BDF0861': { mark: '至高天，原文“empyrean”，宗教用语\\。是十层天中的最高层，那里有至纯的纯火\\。因此该系列和语音中有不少关于火的元素' },
	}
};
