import { eventsPublic } from './public.js';



const headMom = '${C.dirAutogen}/reso/icon/@unofficial/smolder-mom.png';
const headSmolder = '${C.dirAutogen}/reso/icon/smolder/0.png';



export default {
	title: '炽炎雏龙 斯莫德',
	title1: '炽炎雏龙',
	title2: '斯莫德',
	champion: {
		id: 901,
		name: 'smolder',
	},
	skin: {
		id: 0,
		name: 'base'
	},
	color: 'CE354F',
	splashMiddle: '${C.dirAutogen}/reso/splash-left/901000.png',
	events: {
		...eventsPublic,

		'[初遇:英雄:奥瑞利安·索尔]':
			{ target: '${C.dirAutogen}/reso/icon/aurelionsol/0.png' },
		'[击杀:英雄:奥瑞利安·索尔]':
			{ target: '${C.dirAutogen}/reso/icon/aurelionsol/0.png' },
		'[初遇:英雄:希瓦娜]':
			{ target: '${C.dirAutogen}/reso/icon/shyvana/0.png' },
		'[击杀:英雄:希瓦娜]':
			{ target: '${C.dirAutogen}/reso/icon/shyvana/0.png' },
		'[初遇:英雄:嘉文四世]':
			{ target: '${C.dirAutogen}/reso/icon/jarvaniv/0.png' },
		'[初遇:英雄:佛耶戈]':
			{ target: '${C.dirAutogen}/reso/icon/viego/0.png' },
		'[击杀:英雄:佛耶戈]':
			{ target: '${C.dirAutogen}/reso/icon/viego/0.png' },
		'[初遇:英雄:卡莉丝塔]':
			{ target: '${C.dirAutogen}/reso/icon/kalista/0.png' },
		'[击杀:英雄:卡莉丝塔]':
			{ target: '${C.dirAutogen}/reso/icon/kalista/0.png' },

		'[进化:Q超级灼热龙息]':
			{ skill: '${C.dirAutogen}/reso/icon/smolder/q-4.png' },
		'[使用:Q超级灼热龙息]':
			{ skill: '${C.dirAutogen}/reso/icon/smolder/q-1.png' },
		'[使用:W阿嚏！]':
			{ skill: '${C.dirAutogen}/reso/icon/smolder/w.png' },
		'[使用:W阿嚏！:命中]':
			{ skill: '${C.dirAutogen}/reso/icon/smolder/w.png' },
		'[使用:W阿嚏！:未命中]':
			{ skill: '${C.dirAutogen}/reso/icon/smolder/w.png' },
		'[使用:E扑棱，扑棱，扑棱！]':
			{ skill: '${C.dirAutogen}/reso/icon/smolder/e.png' },
		'[使用:R妈----！]':
			{ skill: '${C.dirAutogen}/reso/icon/smolder/r.png' },
		'[使用:R妈----！:命中]':
			{ skill: '${C.dirAutogen}/reso/icon/smolder/r.png' },
		'[使用:R妈----！:未命中]':
			{ skill: '${C.dirAutogen}/reso/icon/smolder/r.png' },
	},
	lines: {
		'04302E26': { mark: '“蝰母”原文“Grandmother Viper”\\，卡玛维亚龙族的先祖' },
		'1A7C3F31': { mark: '1%的概率触发' },


		'A6D3E52B': { mark: '对话1开始', head: headMom, target: headSmolder },
		'5170B20E': { event: '注释:对话1-2', mark: '对话1结束', target: headMom },

		'F5204B12': { mark: '对话2开始', head: headMom, target: headSmolder },
		'6B722B09': { event: '注释:对话2-2', mark: '对话2结束', target: headMom },

		'439F0E04': { mark: '对话3开始', head: headMom, target: headSmolder },
		'49C4C811': { event: '注释:对话3-2', mark: '对话3结束', target: headMom },

		'46AB1322': { mark: '对话4开始', target: headMom },
		'466D9133': { event: '注释:对话4-2', head: headMom, target: headSmolder },
		'005D4E3B': { event: '注释:对话4-3', mark: '对话4结束', target: headMom },

		'5B6C3C23': { mark: '对话5开始', target: headMom },
		'F1B2582D': { event: '注释:对话5-2', head: headMom, target: headSmolder },
		'FA47AD32': { event: '注释:对话5-3', mark: '对话5结束', target: headMom },

		'1B7CDE13': { mark: '对话6开始', target: headMom },
		'B4F19D24': { event: '注释:对话6-2', head: headMom, target: headSmolder },
		'A72DC82C': { event: '注释:对话6-3', mark: '对话6结束', target: headMom },

		'B36AC207': { mark: '对话7开始', target: headMom },
		'97F9B219': { event: '注释:对话7-2', head: headMom, target: headSmolder },
		'B647D506': { event: '注释:对话7-3', mark: '对话7结束', target: headMom },

		'6DA77D3F': { mark: '对话8开始', target: headMom },
		'23B13C02': { event: '注释:对话8-2', mark: '对话8结束', head: headMom, target: headSmolder },

		'84155B2C': { mark: '对话9开始', head: headMom, target: headSmolder },
		'7659430D': { event: '注释:对话9-2', mark: '对话9结束', target: headMom },

		'FFA68D11': { mark: '对话10开始', target: headMom },
		'3C7A0B03': { event: '注释:对话10-2', head: headMom, target: headSmolder },
		'B3C67409': { event: '注释:对话10-3', target: headMom },
		'0CA81239': { event: '注释:对话10-4', mark: '对话10结束', head: headMom, target: headSmolder },

		'81293217': { mark: '对话11开始', target: headMom },
		'6F11A91B': { event: '注释:对话11-2', head: headMom, target: headSmolder },
		'E4130417': { event: '注释:对话11-3', target: headMom },
		'BDEA743C': { event: '注释:对话11-4', head: headMom, target: headSmolder },
		'A5F85118': { event: '注释:对话11-5', mark: '对话11结束', target: headMom },

		'11A66331': { mark: '对话12开始', target: headMom },
		'7C773433': { event: '注释:对话12-2', mark: '对话12结束', head: headMom, target: headSmolder },

		'082A402C': { mark: '对话13开始', head: headMom, target: headSmolder },
		'243DCC1C': {
			event: '注释:对话13-2', mark: '对话13结束\\\\由于拳头配置失误，此语音实际触发条件是“移动”', target: headMom,
			file: 'D:/project/@lol/lol-vo-extract/@final/901000@炽炎雏龙 斯莫德@pbe@zh/Move2DStandard[7B490001][694B802F][01134571].wav',
		},

		'D863E924': { mark: '对话14开始', target: headMom },
		'220E893C': { event: '注释:对话14-2', head: headMom, target: headSmolder },
		'7A7A743B': { event: '注释:对话14-3', mark: '对话14结束', target: headMom },
		'0FAB7A03': { mark: '对话15开始', target: headMom },
		'7C1EC61F': { event: '注释:对话15-2', head: headMom, target: headSmolder },
		'10EBE12F': { event: '注释:对话15-3', mark: '对话15结束', target: headMom },
		'1134A815': { mark: '对话16开始', target: headMom },
		'45385538': { event: '注释:对话16-2', head: headMom, target: headSmolder },
		'F1887A1B': { event: '注释:对话16-3', mark: '对话16结束', target: headMom },
		'AC888634': { mark: '对话17开始', target: headMom },
		'1E64E338': { event: '注释:对话17-2', head: headMom, target: headSmolder },
		'FA8C0519': { event: '注释:对话17-3', mark: '对话17结束', target: headMom },

		'358DF336': { mark: '对话18开始', head: headMom, target: headSmolder },
		'A9FDB129': { event: '注释:对话18-2', mark: '对话18结束', target: headMom },
		'E2CEDE21': { mark: '对话19开始', head: headMom, target: headSmolder },
		'AEFF9007': { event: '注释:对话19-2', mark: '对话19结束', target: headMom },

		'87AE4411': { mark: '对话20开始', target: headMom },
		'DC937312': { event: '注释:对话20-2', head: headMom, target: headSmolder },
		'AFA8EE38': { event: '注释:对话20-3', mark: '对话20结束', target: headMom },

		'9028DA13': { mark: '对话21开始', head: headMom, target: headSmolder },
		'4CC6A026': {
			event: '注释:对话21-2', mark: '对话21结束\\\\由于拳头配置失误，此语音为空，用英语音代替', target: headMom,
			folder: 'D:/project/@lol/lol-vo-extract/@final/901000@the Fiery Fledgling Smolder@pbe@en'
		},

		'7B490001': {
			mark: '由于拳头配置失误，此语音为空，用英语音代替',
			folder: 'D:/project/@lol/lol-vo-extract/@final/901000@the Fiery Fledgling Smolder@pbe@en'
		},
	}
};
