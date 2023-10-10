import { eventsPublic } from './public.js';



const headRakan = '${C.dirAutogen}/reso/icon/rakan/36.png';
const headXayah = '${C.dirAutogen}/reso/icon/xayah/38.png';
const headFamiliar = '${C.dirAutogen}/reso/icon/@other/riku.png';


export default {
	title: '星之守护者 净化之翎 洛',
	title1: '星之守护者 净化之翎',
	title2: '洛',
	champion: {
		id: 497,
		name: 'Rakan',
	},
	skin: {
		id: 36,
		name: 'Redeemed Star Guardian'
	},
	color: '27B4A0',
	splashMiddle: '${C.dirAutogen}/reso/splash-left/497036.png',
	extras: {
		'498038': {
			fileDictation: '${C.dirDictation}/xayah/Redeemed Star Guardian@zh_cn.md',
			append: {
				folder: '${C.dirExtract}/@final/498038@星之守护者 净化之羽 霞@pbe',
				head: headXayah,
				target: headRakan,
				colorBoxLine: 'CA4986',
			},
		},
	},
	events: {
		...eventsPublic,


		'[初遇:皮肤:星之守护者 净化之羽 霞]':
			{ target: '${C.dirAutogen}/reso/icon/xayah/38.png' },
		'[击杀:皮肤:星之守护者 净化之羽 霞]':
			{ target: '${C.dirAutogen}/reso/icon/xayah/38.png' },
		'[初遇:皮肤:星之守护者 霞]':
			{ target: '${C.dirAutogen}/reso/icon/xayah/4.png' },
		'[击杀:皮肤:星之守护者 霞]':
			{ target: '${C.dirAutogen}/reso/icon/xayah/4.png' },
		'[初遇:皮肤:星之守护者 佐伊]':
			{ target: '${C.dirAutogen}/reso/icon/zoe/9.png' },
		'[击杀:皮肤:星之守护者 佐伊]':
			{ target: '${C.dirAutogen}/reso/icon/zoe/9.png' },
		'[初遇:皮肤:星之守护者 妮蔻]':
			{ target: '${C.dirAutogen}/reso/icon/neeko/10.png' },
		'[击杀:皮肤:星之守护者 妮蔻]':
			{ target: '${C.dirAutogen}/reso/icon/neeko/10.png' },
		'[初遇:皮肤:星之守护者 阿狸]':
			{ target: '${C.dirAutogen}/reso/icon/ahri/14.png' },
		'[击杀:皮肤:星之守护者 阿狸]':
			{ target: '${C.dirAutogen}/reso/icon/ahri/14.png' },
		'[初遇:皮肤:星之守护者 卡莎]':
			{ target: '${C.dirAutogen}/reso/icon/kaisa/40.png' },
		'[击杀:皮肤:星之守护者 卡莎]':
			{ target: '${C.dirAutogen}/reso/icon/kaisa/40.png' },
		'[初遇:皮肤:星之守护者 阿卡丽]':
			{ target: '${C.dirAutogen}/reso/icon/akali/61.png' },
		'[击杀:皮肤:星之守护者 阿卡丽]':
			{ target: '${C.dirAutogen}/reso/icon/akali/61.png' },
		'[初遇:皮肤:星之守护者 厄运小姐]':
			{ target: '${C.dirAutogen}/reso/icon/missfortune/15.png' },
		'[击杀:皮肤:星之守护者 厄运小姐]':
			{ target: '${C.dirAutogen}/reso/icon/missfortune/15.png' },
		'[初遇:皮肤:星之守护者 赛娜]':
			{ target: '${C.dirAutogen}/reso/icon/senna/46.png' },
		'[击杀:皮肤:星之守护者 赛娜]':
			{ target: '${C.dirAutogen}/reso/icon/senna/46.png' },
		'[初遇:皮肤:星之守护者 奥莉安娜]':
			{ target: '${C.dirAutogen}/reso/icon/orianna/29.png' },
		'[击杀:皮肤:星之守护者 奥莉安娜]':
			{ target: '${C.dirAutogen}/reso/icon/orianna/29.png' },
		'[初遇:皮肤:星之守护者 萨勒芬妮]':
			{ target: '${C.dirAutogen}/reso/icon/seraphine/34.png' },
		'[击杀:皮肤:星之守护者 萨勒芬妮]':
			{ target: '${C.dirAutogen}/reso/icon/seraphine/34.png' },


		'[使用:Q微光飞翎]':
			{ skill: '${C.dirAutogen}/reso/icon/rakan/q.png' },
		'[使用:Q微光飞翎:回复]':
			{ skill: '${C.dirAutogen}/reso/icon/rakan/q.png' },
		'[使用:W盛大登场:命中]':
			{ skill: '${C.dirAutogen}/reso/icon/rakan/w.png' },
		'[使用:E轻舞成双]':
			{ skill: '${C.dirAutogen}/reso/icon/rakan/e.png' },
		'[升级:R惊鸿过隙:初次]':
			{ skill: '${C.dirAutogen}/reso/icon/rakan/r.png' },
		'[使用:R惊鸿过隙]':
			{ skill: '${C.dirAutogen}/reso/icon/rakan/r.png' },
	},
	lines: {
		'EEC6CC3C': { mark: '对话1开始，双方距离400码内', target: headXayah },
		'F62CF50E': { event: '注释:对话1-2' },
		'0A1EE11E': { event: '注释:对话1-3', target: headXayah },
		'3A47D255': { event: '注释:对话1-4' },
		'60E17408': { event: '注释:对话1-5', mark: '对话1结束', target: headXayah },

		'BBA7382B': { mark: '对话2开始，双方距离400码内' },
		'B3C30C3A': { event: '注释:对话2-2', target: headXayah },
		'42712236': { event: '注释:对话2-3', target: headXayah },
		'08B13B37': { event: '注释:对话2-4', mark: '对话2结束' },

		'A21AFE2B': { mark: '对话3开始，双方距离400码内', target: headXayah },
		'2C0F202F': { event: '注释:对话3-2' },
		'0C6E732A': { event: '注释:对话3-3', target: headXayah },
		'6B909704': { event: '注释:对话3-4', mark: '对话3结束' },

		'E0EFC128': { mark: '对话4开始，双方距离400码内', target: headXayah },
		'EDA5172D': { event: '注释:对话4-2' },
		'C8C29733': { event: '注释:对话4-3', target: headXayah },
		'A9EFAC28': { event: '注释:对话4-4', mark: '对话4结束' },

		'2D6C3D06': { mark: '对话5开始，双方距离400码内' },
		'C291633D': { event: '注释:对话5-2', target: headXayah },
		'85167531': { event: '注释:对话5-3' },
		'B87D6804': { event: '注释:对话5-4', target: headXayah },
		'64471F05': { event: '注释:对话5-5' },
		'EC468528': { event: '注释:对话5-6', mark: '对话5结束', target: headXayah },


		'0D389735': { mark: '对话6开始，双方距离400码内' },
		'CD67A125': { event: '注释:对话6-2', target: headXayah },
		'82028E18': { event: '注释:对话6-3' },
		'1AD28C10': { event: '注释:对话6-4', mark: '对话6结束', target: headXayah },

		'4E458D12': { mark: '对话7开始，双方距离400码内', target: headXayah },
		'93718C10': { event: '注释:对话7-2' },
		'BFAAAD10': { event: '注释:对话7-3', target: headXayah },
		'234A6322': { event: '注释:对话7-4', mark: '对话7结束' },

		'A7663F35': { mark: '对话8开始，双方距离400码内', target: headXayah },
		'7C35BC16': { event: '注释:对话8-2', mark: '对话8结束' },

		'BDD2542E': { mark: '对话9开始，双方距离400码内' },
		'919FFE25': { event: '注释:对话9-2', target: headXayah },
		'813F7A1B': { event: '注释:对话9-3' },
		'B28E1831': { event: '注释:对话9-4', mark: '对话9结束', target: headXayah },

		'2C2BC11B': { mark: '对话10开始，双方距离400码内', target: headXayah },
		'6D381407': { event: '注释:对话10-2' },
		'A925B626': { event: '注释:对话10-3', mark: '对话10结束', target: headXayah },

		'3AC0410E': { mark: '对话11开始，双方距离400码内', target: headXayah },
		'3FEA2F11': { event: '注释:对话11-2' },
		'FEF4D91A': { event: '注释:对话11-3', mark: '对话11结束', target: headXayah },

		'5AD2E13C': { mark: '对话12开始，双方距离400码内' },
		'E02D8436': { event: '注释:对话12-2', mark: '对话12结束', target: headXayah },


		'F9426B06': { mark: '对话13开始，双方距离400码外', target: headXayah },
		'CC7E4908': { event: '注释:对话13-2' },
		'CCD9441D': { event: '注释:对话13-3', target: headXayah },
		'655FDA24': { event: '注释:对话13-4' },
		'5665141D': { event: '注释:对话13-5', mark: '对话13结束', target: headXayah },

		'36E4A029': { mark: '对话14开始，双方距离400码外', target: headXayah },
		'30BE7508': { event: '注释:对话14-2' },
		'7EED6126': { event: '注释:对话14-3', mark: '对话14结束', target: headXayah },

		'4C957D05': { mark: '对话15开始，双方距离400码外', target: headXayah },
		'94F5452F': { event: '注释:对话15-2' },
		'F958D12C': { event: '注释:对话15-3', mark: '对话15结束', target: headXayah },


		'DB07C712': { mark: '对话16开始，双方距离400码内', target: headXayah },
		'604DD33B': { event: '注释:对话16-2', mark: '对话16结束' },

		'7E58F228': { mark: '对话17开始，双方距离400码内' },
		'9F94DA19': { event: '注释:对话17-2', target: headXayah },
		'9CB1A727': { event: '注释:对话17-3', mark: '对话17结束' },



		'AC29232F': { mark: '对话18开始', target: headFamiliar },
		'07C30B33': { mark: '对话18结束', head: headFamiliar, event: '注释:对话18-2' },
		'835FBB12': { mark: '对话19开始', head: headFamiliar },
		'4D55B206': { mark: '对话19结束', target: headFamiliar, event: '注释:对话19-2', },
		'6E2E272C': { mark: '对话20开始', head: headFamiliar },
		'75B4E724': { mark: '对话20结束', target: headFamiliar, event: '注释:对话20-2', },
		'55A1EA12': { mark: '对话21开始', target: headFamiliar },
		'ADED9F14': { head: headFamiliar, event: '注释:对话21-2' },
		'816AAA31': { mark: '对话21结束', target: headFamiliar, event: '注释:对话21-3' },
		'14F9D415': { mark: '对话22开始', target: headFamiliar },
		'C8344C15': { head: headFamiliar, event: '注释:对话22-2' },
		'AED32E05': { mark: '对话22结束', target: headFamiliar, event: '注释:对话22-3' },
		'3714F23B': { mark: '对话23开始', target: headFamiliar },
		'949ABB31': { mark: '对话23结束', head: headFamiliar, event: '注释:对话23-2', },
		'217E8412': { mark: '对话24开始', target: headFamiliar },
		'6A853335': { head: headFamiliar, event: '注释:对话24-2' },
		'B4431802': { mark: '对话24结束', target: headFamiliar, event: '注释:对话24-3' },
		'8BF59527': { mark: '对话25开始', head: headFamiliar },
		'CB3DCB39': { mark: '对话25结束', target: headFamiliar, event: '注释:对话25-2', },
		'32A8032C': { mark: '对话26开始', head: headFamiliar },
		'FE9DCF2B': { mark: '对话26结束', target: headFamiliar, event: '注释:对话26-2', },
		'7B3F2F0B': { mark: '对话27开始', target: headFamiliar },
		'4FAEF72C': { head: headFamiliar, event: '注释:对话27-2' },
		'153A8826': { mark: '对话27结束', target: headFamiliar, event: '注释:对话27-3' },
	},
};
