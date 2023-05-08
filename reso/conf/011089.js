export default {
	title: '墨之影武者 易',
	title1: '墨之影武者',
	title2: '易',
	champion: {
		id: 11,
		name: 'MasterYi',
	},
	skin: {
		id: 89,
		name: 'Inkshadow'
	},
	head: '${C.dirAutogen}/reso/icon/@unofficial/ink-masteryi.png',
	color: '#F16629',
	splashMiddle: '${C.dirAutogen}/reso/splash-left/011089.png',
	events: {
		'[攻击:生物:纳什男爵]':
			{ target: '${C.dirAutogen}/reso/icon/@monster/baron.png' },
		'[抢先击杀:生物:纳什男爵]':
			{ target: '${C.dirAutogen}/reso/icon/@monster/baron.png' },
		'[攻击:生物:龙]':
			{ target: '${C.dirAutogen}/reso/icon/@monster/fire-dragon.png' },
		'[抢先击杀:生物:龙]':
			{ target: '${C.dirAutogen}/reso/icon/@monster/fire-dragon.png' },
		'[攻击:生物:峡谷先锋]':
			{ target: '${C.dirAutogen}/reso/icon/@monster/rift-herald.png' },

		'[击杀:建筑:防御塔]':
			{ target: '${C.dirAutogen}/reso/icon/turret.png' },


		'[初遇:皮肤:墨之影武者 卡莎]':
			{ target: '${C.dirAutogen}/reso/icon/@unofficial/ink-kaisa.png' },
		'[击杀:皮肤:墨之影武者 卡莎]':
			{ target: '${C.dirAutogen}/reso/icon/@unofficial/ink-kaisa.png' },
		'[初遇:皮肤:墨影行者 乌迪尔]':
			{ target: '${C.dirAutogen}/reso/icon/@unofficial/ink-udyr.png' },
		'[击杀:皮肤:墨影行者 乌迪尔]':
			{ target: '${C.dirAutogen}/reso/icon/@unofficial/ink-udyr.png' },
		'[初遇:皮肤:墨影之灵 奥瑞利安·索尔]':
			{ target: '${C.dirAutogen}/reso/icon/@unofficial/ink-aurelionsol.png' },
		'[击杀:皮肤:墨影之灵 奥瑞利安·索尔]':
			{ target: '${C.dirAutogen}/reso/icon/@unofficial/ink-aurelionsol.png' },
		'[初遇:皮肤:墨影之灵 沃利贝尔]':
			{ target: '${C.dirAutogen}/reso/icon/@unofficial/ink-volibear.png' },
		'[击杀:皮肤:墨影之灵 沃利贝尔]':
			{ target: '${C.dirAutogen}/reso/icon/@unofficial/ink-volibear.png' },
		'[初遇:皮肤:墨之影武者 亚索]':
			{ target: '${C.dirAutogen}/reso/icon/@unofficial/ink-yasuo.png' },
		'[击杀:皮肤:墨之影武者 亚索]':
			{ target: '${C.dirAutogen}/reso/icon/@unofficial/ink-yasuo.png' },
		'[击杀:皮肤:墨之影武者 永恩]':
			{ target: '${C.dirAutogen}/reso/icon/@unofficial/ink-yone.png' },
		'[初遇:皮肤:墨之影武者 永恩]':
			{ target: '${C.dirAutogen}/reso/icon/@unofficial/ink-yone.png' },


		'[移动::注释:R技能激活时]':
			{ skill: '${C.dirAutogen}/reso/icon/MasterYi/R.png' },
		'[击杀:英雄::注释:R技能激活时]':
			{ skill: '${C.dirAutogen}/reso/icon/MasterYi/R.png' },
		'[使用:W冥想]':
			{ skill: '${C.dirAutogen}/reso/icon/MasterYi/W.png' },
		'[使用:E无极剑道]':
			{ skill: '${C.dirAutogen}/reso/icon/MasterYi/E.png' },
		'[初次升级:R高原血统]':
			{ skill: '${C.dirAutogen}/reso/icon/MasterYi/R.png' },
		'[使用:R高原血统]':
			{ skill: '${C.dirAutogen}/reso/icon/MasterYi/R.png' },
	},
	lines: {
		'63FF6655': { mark: '“纲”原文“chapters”\\，“领”原文“legend”\\，意为“纲领”' },
		'64610B1C': { mark: '“拉巴登”原文“Rabadon”，城市\\。“卡勃尔派”原文“the Cabal”\\，墨之影世界观中的反派阵营\\，皮肤传记中也译作“阴谋集团”' },
		'7D832261': { mark: '“卡勃尔派”原文“the Cabal”\\，墨之影世界观中的反派阵营\\，皮肤传记中也译作“阴谋集团”' },
		'B8B3BE28': { mark: '“卡勃尔派”原文“the Cabal”\\，墨之影世界观中的反派阵营\\，皮肤传记中也译作“阴谋集团”' },
	}
};
