export default {
	title: '铸星龙王 奥瑞利安·索尔',
	title1: '铸星龙王',
	title2: '奥瑞利安·索尔',
	champion: {
		id: 136,
		name: 'AurelionSol',
	},
	skin: {
		id: 0,
		name: '@base'
	},
	color: '#4fb5d7',
	splashMiddle: '${C.dirAutogen}/reso/splash-left/136000.png',
	events: {
		'[初遇:生物:龙]':
			{ target: '${C.dirAutogen}/reso/icon/@monster/fire-dragon.png' },
		'[击杀:建筑:防御塔]':
			{ target: '${C.dirAutogen}/reso/icon/turret.png' },
		'[初遇:地区:巨神峰]':
			{ target: '${C.dirAutogen}/reso/region/mt_targon.png' },

		'[购买:道具:守护者法球]':
			{ skill: '${C.dirAutogen}/reso/icon/@item/3112_aram_t1_guardiansorb.png' },
		'[购买:道具:兰德里的苦楚]':
			{ skill: '${C.dirAutogen}/reso/icon/@item/6653_mage_t4_liandrysanguish.png' },
		'[购买:道具:卢登的激荡]':
			{ skill: '${C.dirAutogen}/reso/icon/@item/6655_mage_t4_ludenstempest.png' },
		'[购买:道具:灭世者的死亡之帽]':
			{ skill: '${C.dirAutogen}/reso/icon/@item/3089_mage_t3_deathcap.png' },
		'[购买:道具:瑞莱的冰晶节杖]':
			{ skill: '${C.dirAutogen}/reso/icon/@item/3116_mage_t3_rylajscrystalscepter.png' },
		'[购买:道具:法师之靴]':
			{ skill: '${C.dirAutogen}/reso/icon/@item/3020_class_t2_sorcerersshoes.png' },

		'[初遇:皮肤:灌篮高手 德莱厄斯]':
			{ target: '${C.dirAutogen}/reso/icon/darius/4.png' },
		'[初遇:皮肤:驯龙炮手 崔丝塔娜]':
			{ target: '${C.dirAutogen}/reso/icon/tristana/10.png' },
		'[初遇:英雄:潘森]':
			{ target: '${C.dirAutogen}/reso/icon/pantheon/0.png' },
		'[初遇:英雄:瑞兹]':
			{ target: '${C.dirAutogen}/reso/icon/ryze/0.png' },
		'[初遇:英雄:希瓦娜]':
			{ target: '${C.dirAutogen}/reso/icon/shyvana/0.png' },
		'[初遇:英雄:巴德]':
			{ target: '${C.dirAutogen}/reso/icon/bard/0.png' },
		'[初遇:英雄:索拉卡]':
			{ target: '${C.dirAutogen}/reso/icon/soraka/0.png' },
		'[初遇:英雄:基兰]':
			{ target: '${C.dirAutogen}/reso/icon/zilean/0.png' },
		'[初遇:英雄:蕾欧娜]':
			{ target: '${C.dirAutogen}/reso/icon/leona/0.png' },
		'[初遇:英雄:黛安娜]':
			{ target: '${C.dirAutogen}/reso/icon/diana/0.png' },
		'[初遇:英雄:塔里克]':
			{ target: '${C.dirAutogen}/reso/icon/taric/0.png' },
		'[初遇:英雄:俄洛伊]':
			{ target: '${C.dirAutogen}/reso/icon/illaoi/0.png' },
		'[初遇:英雄:阿兹尔]':
			{ target: '${C.dirAutogen}/reso/icon/azir/0.png' },
		'[初遇:英雄:内瑟斯]':
			{ target: '${C.dirAutogen}/reso/icon/nasus/0.png' },
		'[初遇:英雄:雷克顿]':
			{ target: '${C.dirAutogen}/reso/icon/renekton/0.png' },
		'[初遇:英雄:拉莫斯]':
			{ target: '${C.dirAutogen}/reso/icon/rammus/0.png' },
		'[初遇:英雄:阿木木]':
			{ target: '${C.dirAutogen}/reso/icon/amumu/0.png' },
		'[初遇:英雄:安妮]':
			{ target: '${C.dirAutogen}/reso/icon/annie/0.png' },
		'[初遇:英雄:泰达米尔]':
			{ target: '${C.dirAutogen}/reso/icon/tryndamere/0.png' },
		'[初遇:英雄:费德提克]':
			{ target: '${C.dirAutogen}/reso/icon/fiddlesticks/0.png' },
		'[初遇:英雄:塔姆]':
			{ target: '${C.dirAutogen}/reso/icon/tahmkench/0.png' },
		'[初遇:英雄:墨菲特]':
			{ target: '${C.dirAutogen}/reso/icon/malphite/0.png' },
		'[初遇:英雄:金克丝]':
			{ target: '${C.dirAutogen}/reso/icon/jinx/0.png' },
		'[初遇:英雄:凯特琳]':
			{ target: '${C.dirAutogen}/reso/icon/caitlyn/0.png' },
		'[初遇:英雄:艾克]':
			{ target: '${C.dirAutogen}/reso/icon/ekko/0.png' },
		'[初遇:英雄:蔚]':
			{ target: '${C.dirAutogen}/reso/icon/vi/0.png' },
		'[初遇:英雄:盖伦]':
			{ target: '${C.dirAutogen}/reso/icon/garen/0.png' },
		'[初遇:英雄:拉克丝]':
			{ target: '${C.dirAutogen}/reso/icon/lux/0.png' },
		'[初遇:英雄:德莱文]':
			{ target: '${C.dirAutogen}/reso/icon/draven/0.png' },
		'[初遇:英雄:弗拉基米尔]':
			{ target: '${C.dirAutogen}/reso/icon/vladimir/0.png' },
		'[初遇:英雄:扎克]':
			{ target: '${C.dirAutogen}/reso/icon/zac/0.png' },
		'[初遇:英雄:阿狸]':
			{ target: '${C.dirAutogen}/reso/icon/ahri/0.png' },
		'[初遇:英雄:烬]':
			{ target: '${C.dirAutogen}/reso/icon/jhin/0.png' },
		'[初遇:英雄:纳尔]':
			{ target: '${C.dirAutogen}/reso/icon/gnar/0.png' },
		'[初遇:英雄:格雷福斯]':
			{ target: '${C.dirAutogen}/reso/icon/graves/0.png' },
		'[初遇:英雄:厄运小姐]':
			{ target: '${C.dirAutogen}/reso/icon/missfortune/0.png' },


		'[使用:Q星河冲荡:结束时]':
			{ skill: '${C.dirAutogen}/reso/icon/aurelionsol/Q.png' },
		'[使用:W星穹流丽]':
			{ skill: '${C.dirAutogen}/reso/icon/aurelionsol/W_1.png' },
		'[使用:E星芒凝汇]':
			{ skill: '${C.dirAutogen}/reso/icon/aurelionsol/E.png' },
		'[升级:R星天落瀑:初次]':
			{ skill: '${C.dirAutogen}/reso/icon/aurelionsol/R_1.png' },
		'[使用:R星天落瀑（星落）]':
			{ skill: '${C.dirAutogen}/reso/icon/aurelionsol/R_1.png' },
		'[使用:R星天落瀑（天瀑）]':
			{ skill: '${C.dirAutogen}/reso/icon/aurelionsol/R_2.png' },
		'[使用:R星天落瀑（天瀑）:击杀英雄时]':
			{ skill: '${C.dirAutogen}/reso/icon/aurelionsol/R_2.png' },

	},
	lines: {
		'D15EF11C': { mark: '由于龙王重做的版本移除了时光之杖\\，导致重做前购买时光之杖语音也被移除\\。虽然当前版本时光之杖已经回归，但仍未补回语音' }
	}
};
