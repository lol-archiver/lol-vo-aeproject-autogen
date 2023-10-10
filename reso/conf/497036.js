const head = '${C.dirAutogen}/reso/icon/rakan/36.png';
const headFamiliar = '${C.dirAutogen}/reso/icon/@other/riku.png';

const line2 = {
	side: 'right',
	head: '${C.dirAutogen}/reso/icon/xayah/38.png',
	target: head,
	colorBoxLine: 'CA4986',
	folder: '[498038]星之守护者 净化之羽 霞[Xayah@PBE1@zh_cn]',
};



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
	events: {
		'[攻击:生物:纳什男爵]':
			{ target: '${C.dirAutogen}/reso/icon/@monster/baron.png' },
		'[击杀:建筑:防御塔]':
			{ target: '${C.dirAutogen}/reso/icon/turret.png' },


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
		'0858DE78': { mark: '对话1开始，400码距离内', target: line2.head },
		'91B8E42A': {
			event: '注释:对话1-3',
			target: line2.head,
			befores: [
				{
					...line2,
					event: '注释:对话1-2',
					line: '按计划来就行',
					hash: 'F62CF50E',
				},
			],
			afters: [
				{
					...line2,
					event: '注释:对话1-4',
					line: '星之守护者永远都有计划',
					hash: '3A47D255',
				},
			],
		},
		'62ECBE0E': { event: '注释:对话1-4', mark: '对话1结束', target: line2.head },

		'0D0E793F': {
			event: '注释:对话2-2',
			target: line2.head,
			befores: [
				{
					...line2,
					event: '[移动:初次][附近:友方:使用:英雄:洛]',
					line: '我今天讨厌所有人',
					hash: 'DC952019',
					mark: '对话2开始，400码距离内',
				},
			],
		},
		'5E932E20': {
			event: '注释:对话2-3',
			target: line2.head,
			afters: [
				{
					...line2,
					event: '注释:对话2-4',
					line: '杀死黑暗！',
					hash: '6F0F7011',
					mark: '对话2结束',
				},
			],
		},

		'478F9C7F': { mark: '对话3开始，400码距离内', target: line2.head },
		'F441B672': {
			event: '注释:对话3-3',
			target: line2.head,
			befores: [
				{
					...line2,
					event: '注释:对话3-2',
					line: '最好是真的',
					hash: '8C299A31',
				},
			],
			afters: [
				{
					...line2,
					event: '注释:对话3-4',
					line: '你可得盯着他呀，小库',
					hash: '3D6C270D',
					mark: '对话3结束',
				},
			],
		},

		'0AF39D5B': { mark: '对话4开始，400码距离内', target: line2.head },
		'59C4F354': {
			event: '注释:对话4-3',
			target: line2.head,
			befores: [
				{
					...line2,
					event: '注释:对话4-2',
					line: '当然，因为是我们',
					hash: 'E3EA2A08',
				},
			],
			afters: [
				{
					...line2,
					event: '注释:对话4-4',
					line: '别废话了',
					hash: '1998FB37',
					mark: '对话4结束',
				},
			],
		},

		'B72F5545': {
			event: '注释:对话5-2',
			target: line2.head,
			befores: [
				{
					...line2,
					event: '[移动:初次][附近:友方:使用:英雄:洛]',
					line: '如果事情出了岔子……',
					hash: '792C202E',
					mark: '对话5开始，400码距离内',
				},
			],
			afters: [
				{
					...line2,
					event: '注释:对话5-3',
					line: '有时候还是……有的',
					hash: 'C1141F74',
				},
			],
		},
		'2AC47157': {
			event: '注释:对话5-4',
			target: line2.head,
			afters: [
				{
					...line2,
					event: '注释:对话5-5',
					line: '你也喜欢临场发挥',
					hash: '4DA73C16',
				},
			],
		},
		'FEA0656F': { event: '注释:对话5-6', mark: '对话5结束', target: line2.head },



		'6ADD3603': {
			event: '注释:对话6-2',
			target: line2.head,
			befores: [
				{
					...line2,
					event: '[移动][附近:友方:使用:英雄:洛]',
					line: '还记得我们在\\\\那颗遥远星球上的时光吗？',
					hash: '62D24915',
					mark: '对话6开始，400码距离内',
				},
			],
			afters: [
				{
					...line2,
					event: '注释:对话6-3',
					line: '我想再去一次',
					hash: 'BF54ED07',
				},
			],
		},
		'B8FE8332': { event: '注释:对话6-4', mark: '对话6结束', target: line2.head },

		'1BDA9D1B': { mark: '对话7开始，400码距离内', target: line2.head },
		'DC256A11': {
			event: '注释:对话7-3',
			target: line2.head,
			befores: [
				{
					...line2,
					event: '注释:对话7-2',
					line: '他们都在忙着做俗气的鸟窝',
					hash: '35E8E058',
				},
			],
			afters: [
				{
					...line2,
					event: '注释:对话7-4',
					line: '因为他们都是木头脑子',
					hash: '3F240578',
					mark: '对话7结束',
				},
			],
		},

		'E092AD41': {
			mark: '对话8开始，400码距离内',
			target: line2.head,
			afters: [
				{
					...line2,
					event: '注释:对话8-2',
					line: '你这么一说，有点恶心',
					hash: 'D738313D',
					mark: '对话8结束',
				},
			],
		},

		'46C2A002': {
			event: '注释:对话9-2',
			target: line2.head,
			befores: [
				{
					...line2,
					event: '[移动][附近:友方:使用:英雄:洛]',
					line: '如果你还没做好准备……',
					hash: '426CD864',
					mark: '对话9开始，400码距离内',
				},
			],
			afters: [
				{
					...line2,
					event: '注释:对话9-3',
					line: '好，那先让小库把梳子放下',
					hash: '69451442',
				},
			],
		},
		'70E2557B': { event: '注释:对话9-4', mark: '对话9结束', target: line2.head },

		'BB8BF60B': {
			mark: '对话10开始，400码距离内',
			target: line2.head,
			afters: [
				{
					...line2,
					event: '注释:对话10-2',
					line: '你说的是鞋子？',
					hash: '7CDF9064',
				},
			],
		},
		'30EFAD34': { event: '注释:对话10-3', mark: '对话10结束', target: line2.head },

		'FE3F7A25': {
			mark: '对话11开始，400码距离内',
			target: line2.head,
			afters: [
				{
					...line2,
					event: '注释:对话11-2',
					line: '又怎么了，洛？',
					hash: 'C927CD12',
				},
			],
		},
		'29195670': { event: '注释:对话11-3', mark: '对话11结束', target: line2.head },

		'C3C4AA16': {
			event: '注释:对话12-2',
			mark: '对话12结束',
			target: line2.head,
			befores: [
				{
					...line2,
					event: '[移动][附近:友方:使用:英雄:洛]',
					line: '你一定要小心',
					hash: '6BAD4033',
					mark: '对话12开始，400码距离内',
				},
			],
		},


		'4E435D4D': { mark: '对话13开始，400码距离外', target: line2.head },
		'05160818': {
			event: '注释:对话13-3',
			target: line2.head,
			befores: [
				{
					...line2,
					event: '注释:对话13-2',
					line: '毕来面馆的拉面？',
					hash: 'E8B7C87B',
				},
			],
			afters: [
				{
					...line2,
					event: '注释:对话13-4',
					line: '呃，洛，哪有这种',
					hash: 'FB762F60',
				},
			],
		},
		'F58CAD55': { event: '注释:对话13-5', mark: '对话13结束', target: line2.head },

		'7CD8A827': { mark: '对话14开始，400码距离外', target: line2.head },
		'EC026364': {
			event: '注释:对话14-3',
			mark: '对话14结束',
			target: line2.head,
			befores: [
				{
					...line2,
					event: '注释:对话14-2',
					line: '这就是活着的意义',
					hash: '2D55E207',
				},
			],
		},

		'3078B474': { mark: '对话15开始，400码距离外', target: line2.head },
		'0AC09716': {
			event: '注释:对话15-3',
			mark: '对话15结束',
			target: line2.head,
			befores: [
				{
					...line2,
					event: '注释:对话15-2',
					line: '直到陨落或是死亡…\\…这誓言很蠢',
					hash: '24217F27',
				},
			],
		},


		'394EB13B': {
			mark: '对话16开始',
			target: line2.head,
			afters: [
				{
					...line2,
					event: '注释:对话16-2',
					line: '宝贝，来根巧克力吧',
					hash: '44B7AC52',
					mark: '对话16结束',
				},
			],
		},

		'A0B8B30F': {
			event: '注释:对话17-2',
			target: line2.head,
			befores: [
				{
					...line2,
					event: '[击杀:英雄][附近:友方:使用:英雄:洛]',
					line: '唉，我忘了在他死前说点狠的了',
					hash: '7C4E0C31',
					mark: '对话17开始，400码距离内',
				},
			],
			afters: [
				{
					...line2,
					event: '注释:对话17-3',
					line: '亲爱的，别破坏气氛好吗？',
					hash: '96130D15',
					mark: '对话17结束',
				},
			],
		},


		'1A92F102': { mark: '对话18开始', target: headFamiliar },
		'47BC910B': { mark: '对话18结束', head: headFamiliar, target: head, event: '注释:对话18-2' },
		'762DEE08': { mark: '对话19开始', head: headFamiliar, target: head },
		'F182C629': { mark: '对话19结束', target: headFamiliar, event: '注释:对话19-2', },
		'156CE719': { mark: '对话20开始', head: headFamiliar, target: head },
		'9D7E2626': { mark: '对话20结束', target: headFamiliar, event: '注释:对话20-2', },
		'0C652266': { mark: '对话21开始', target: headFamiliar },
		'0E958135': { head: headFamiliar, target: head, event: '注释:对话21-2' },
		'661C8928': { mark: '对话21结束', target: headFamiliar, event: '注释:对话21-3' },
		'832BCF7C': { mark: '对话22开始', target: headFamiliar },
		'09B09F3C': { head: headFamiliar, target: head, event: '注释:对话22-2' },
		'83186E7C': { mark: '对话22结束', target: headFamiliar, event: '注释:对话22-3' },
		'2F7C052E': { mark: '对话23开始', target: headFamiliar },
		'88132E15': { mark: '对话23结束', head: headFamiliar, target: head, event: '注释:对话23-2', },
		'007CC11D': { mark: '对话24开始', target: headFamiliar },
		'EB8C6824': { head: headFamiliar, target: head, event: '注释:对话24-2' },
		'A530464C': { mark: '对话24结束', target: headFamiliar, event: '注释:对话24-3' },
		'24F4A834': { mark: '对话25开始', head: headFamiliar, target: head },
		'94EB300F': { mark: '对话25结束', target: headFamiliar, event: '注释:对话25-2', },
		'B48A111D': { mark: '对话26开始', head: headFamiliar, target: head },
		'36817029': { mark: '对话26结束', target: headFamiliar, event: '注释:对话26-2', },
		'F6208657': { mark: '对话27开始', target: headFamiliar },
		'0DC7AE3C': { head: headFamiliar, target: head, event: '注释:对话27-2' },
		'B8ACA265': { mark: '对话27结束', target: headFamiliar, event: '注释:对话27-3' },
	},
};
