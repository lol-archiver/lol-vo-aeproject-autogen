import { eventsPublic } from './public.js';



const headXayah = '${C.dirAutogen}/reso/icon/xayah/38.png';
const headRakan = '${C.dirAutogen}/reso/icon/rakan/36.png';
const headFamiliar = '${C.dirAutogen}/reso/icon/@other/saki.png';


export default {
	title: '星之守护者 净化之羽 霞',
	title1: '星之守护者 净化之羽',
	title2: '霞',
	champion: {
		id: 498,
		name: 'xayah',
	},
	skin: {
		id: 38,
		name: 'Redeemed Star Guardian'
	},
	color: 'CA4986',
	splashMiddle: '${C.dirAutogen}/reso/splash-left/498038.png',
	extras: {
		'497036': {
			fileDictation: '${C.dirDictation}/rakan/Redeemed Star Guardian@zh_cn.md',
			append: {
				folder: '${C.dirExtract}/@final/497036@星之守护者 净化之翎 洛@pbe',
				head: '${C.dirAutogen}/reso/icon/rakan/36.png',
				target: headXayah,
				colorBoxLine: '27B4A0',
			},
		},
	},
	events: {
		...eventsPublic,

		'[初遇:皮肤:星之守护者 净化之翎 洛]':
			{ target: '${C.dirAutogen}/reso/icon/rakan/36.png' },
		'[击杀:皮肤:星之守护者 净化之翎 洛]':
			{ target: '${C.dirAutogen}/reso/icon/rakan/36.png' },
		'[初遇:皮肤:星之守护者 洛]':
			{ target: '${C.dirAutogen}/reso/icon/rakan/5.png' },
		'[击杀:皮肤:星之守护者 洛]':
			{ target: '${C.dirAutogen}/reso/icon/rakan/5.png' },
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


		'[使用:Q双刃]':
			{ skill: '${C.dirAutogen}/reso/icon/xayah/q.png' },
		'[使用:E倒钩:禁锢敌人]':
			{ skill: '${C.dirAutogen}/reso/icon/xayah/e.png' },
		'[使用:E倒钩]':
			{ skill: '${C.dirAutogen}/reso/icon/xayah/e.png' },
		'[升级:R暴风羽刃:初次]':
			{ skill: '${C.dirAutogen}/reso/icon/xayah/r.png' },
		'[使用:R暴风羽刃]':
			{ skill: '${C.dirAutogen}/reso/icon/xayah/r.png' },
	},
	lines: {
		'EEC6CC3C': { mark: '对话1开始，双方距离400码内' },
		'F62CF50E': { event: '注释:对话1-2', target: headRakan },
		'0A1EE11E': { event: '注释:对话1-3' },
		'3A47D255': { event: '注释:对话1-4', target: headRakan },
		'60E17408': { event: '注释:对话1-5', mark: '对话1结束' },

		'BBA7382B': { mark: '对话2开始，双方距离400码内', target: headRakan },
		'B3C30C3A': { event: '注释:对话2-2' },
		'42712236': { event: '注释:对话2-3' },
		'08B13B37': { event: '注释:对话2-4', mark: '对话2结束', target: headRakan },

		'A21AFE2B': { mark: '对话3开始，双方距离400码内' },
		'2C0F202F': { event: '注释:对话3-2', target: headRakan },
		'0C6E732A': { event: '注释:对话3-3' },
		'6B909704': { event: '注释:对话3-4', mark: '对话3结束', target: headRakan },

		'E0EFC128': { mark: '对话4开始，双方距离400码内' },
		'EDA5172D': { event: '注释:对话4-2', target: headRakan },
		'C8C29733': { event: '注释:对话4-3' },
		'A9EFAC28': { event: '注释:对话4-4', mark: '对话4结束', target: headRakan },

		'2D6C3D06': { mark: '对话5开始，双方距离400码内', target: headRakan },
		'C291633D': { event: '注释:对话5-2' },
		'85167531': { event: '注释:对话5-3', target: headRakan },
		'B87D6804': { event: '注释:对话5-4' },
		'64471F05': { event: '注释:对话5-5', target: headRakan },
		'EC468528': { event: '注释:对话5-6', mark: '对话5结束' },


		'0D389735': { mark: '对话6开始，双方距离400码内', target: headRakan },
		'CD67A125': { event: '注释:对话6-2' },
		'82028E18': { event: '注释:对话6-3', target: headRakan },
		'1AD28C10': { event: '注释:对话6-4', mark: '对话6结束' },

		'4E458D12': { mark: '对话7开始，双方距离400码内' },
		'93718C10': { event: '注释:对话7-2', target: headRakan },
		'BFAAAD10': { event: '注释:对话7-3' },
		'234A6322': { event: '注释:对话7-4', mark: '对话7结束', target: headRakan },

		'A7663F35': { mark: '对话8开始，双方距离400码内' },
		'7C35BC16': { event: '注释:对话8-2', mark: '对话8结束', target: headRakan },

		'BDD2542E': { mark: '对话9开始，双方距离400码内', target: headRakan },
		'919FFE25': { event: '注释:对话9-2' },
		'813F7A1B': { event: '注释:对话9-3', target: headRakan },
		'B28E1831': { event: '注释:对话9-4', mark: '对话9结束' },

		'2C2BC11B': { mark: '对话10开始，双方距离400码内' },
		'6D381407': { event: '注释:对话10-2', target: headRakan },
		'A925B626': { event: '注释:对话10-3', mark: '对话10结束' },

		'3AC0410E': { mark: '对话11开始，双方距离400码内' },
		'3FEA2F11': { event: '注释:对话11-2', target: headRakan },
		'FEF4D91A': { event: '注释:对话11-3', mark: '对话11结束' },

		'5AD2E13C': { mark: '对话12开始，双方距离400码内', target: headRakan },
		'E02D8436': { event: '注释:对话12-2', mark: '对话12结束' },


		'F9426B06': { mark: '对话13开始，双方距离400码外' },
		'CC7E4908': { event: '注释:对话13-2', target: headRakan },
		'CCD9441D': { event: '注释:对话13-3' },
		'655FDA24': { event: '注释:对话13-4', target: headRakan },
		'5665141D': { event: '注释:对话13-5', mark: '对话13结束' },

		'36E4A029': { mark: '对话14开始，双方距离400码外' },
		'30BE7508': { event: '注释:对话14-2', target: headRakan },
		'7EED6126': { event: '注释:对话14-3', mark: '对话14结束' },

		'4C957D05': { mark: '对话15开始，双方距离400码外' },
		'94F5452F': { event: '注释:对话15-2', target: headRakan },
		'F958D12C': { event: '注释:对话15-3', mark: '对话15结束' },


		'DB07C712': { mark: '对话16开始，双方距离400码内' },
		'604DD33B': { event: '注释:对话16-2', mark: '对话16结束', target: headRakan },

		'7E58F228': { mark: '对话17开始，双方距离400码内', target: headRakan },
		'9F94DA19': { event: '注释:对话17-2' },
		'9CB1A727': { event: '注释:对话17-3', mark: '对话17结束', target: headRakan },



		'9A30F93E': { mark: '对话18开始', head: headFamiliar, target: headXayah },
		'655B101E': { mark: '对话18结束', event: '注释:对话18-2', target: headFamiliar },
		'CCEEEB37': { mark: '对话19开始', head: headFamiliar, target: headXayah },
		'A6A14732': { mark: '对话19结束', event: '注释:对话19-2', target: headFamiliar },
		'36D72021': { mark: '对话20开始', head: headFamiliar, target: headXayah },
		'2ABAD117': { mark: '对话20结束', event: '注释:对话20-2', target: headFamiliar },
		'494FC321': { mark: '对话21开始', target: headFamiliar },
		'B0B27939': { event: '注释:对话21-2', head: headFamiliar, target: headXayah },
		'DBAEF104': { mark: '对话21结束', event: '注释:对话21-3', target: headFamiliar },
		'106AFC28': { mark: '对话22开始', target: headFamiliar },
		'ECC85735': { event: '注释:对话22-2', head: headFamiliar, target: headXayah },
		'22449502': { mark: '对话22结束', event: '注释:对话22-3', target: headFamiliar },
		'5FECAA2C': { mark: '对话23开始', target: headFamiliar },
		'9106E32A': { event: '注释:对话23-2', head: headFamiliar, target: headXayah },
		'E73ACE0F': { mark: '对话23结束', event: '注释:对话23-3', target: headFamiliar },
		'F39E6D38': { mark: '对话24开始', target: headFamiliar },
		'71539436': { mark: '对话24结束', head: headFamiliar, target: headXayah },
		'07A6D83E': { mark: '对话25开始', target: headFamiliar },
		'47B9033E': { event: '注释:对话25-2', head: headFamiliar, target: headXayah },
		'7BF9240C': { mark: '对话25结束', event: '注释:对话25-3', target: headFamiliar },
		'C1086A1B': { mark: '对话26开始', target: headFamiliar },
		'7224B607': { event: '注释:对话26-2', head: headFamiliar, target: headXayah },
		'C2DFB017': { mark: '对话26结束', event: '注释:对话26-3', target: headFamiliar },
		'A2B5C83E': { mark: '对话27开始', head: headFamiliar, target: headXayah },
		'CB39A335': { mark: '对话27结束', event: '注释:对话27-2', target: headFamiliar },
		'857C3E2E': { mark: '对话28开始', target: headFamiliar },
		'931E2835': { event: '注释:对话28-2', head: headFamiliar, target: headXayah },
		'3ABA682B': { mark: '对话29开始', head: headFamiliar, target: headXayah },
		'FC9D610C': { mark: '对话29结束', event: '注释:对话29-2', target: headFamiliar },
	},
};
