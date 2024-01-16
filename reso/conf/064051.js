import { eventsPublic } from './public.js';



export default {
	title: '天龙之子 李青',
	title1: '天龙之子',
	title2: '李青',
	champion: {
		id: 64,
		name: 'leesin',
	},
	skin: {
		id: 51,
		name: 'heavenscale'
	},
	color: 'C13C32',
	head: '${C.dirAutogen}/reso/icon/@unofficial/leesin-51.png',
	splashMiddle: '${C.dirAutogen}/reso/splash-left/064051.png',
	events: {
		...eventsPublic,

		'[初遇:皮肤:天龙之子 易]':
			{ target: '${C.dirAutogen}/reso/icon/@unofficial/masteryi-96.png' },
		'[击杀:皮肤:天龙之子 易]':
			{ target: '${C.dirAutogen}/reso/icon/@unofficial/masteryi-96.png' },
		'[初遇:皮肤:天龙之子 斯莫德]':
			{ target: '${C.dirAutogen}/reso/icon/smolder/1.png' },
		'[击杀:皮肤:天龙之子 斯莫德]':
			{ target: '${C.dirAutogen}/reso/icon/smolder/1.png' },
		'[初遇:皮肤:天龙之子 黛安娜]':
			{ target: '${C.dirAutogen}/reso/icon/diana/54.png' },
		'[击杀:皮肤:天龙之子 黛安娜]':
			{ target: '${C.dirAutogen}/reso/icon/diana/54.png' },
		'[初遇:皮肤:天龙之子 卡莎]':
			{ target: '${C.dirAutogen}/reso/icon/@unofficial/kaisa-59.png' },
		'[击杀:皮肤:天龙之子 卡莎]':
			{ target: '${C.dirAutogen}/reso/icon/@unofficial/kaisa-59.png' },
		'[初遇:皮肤:天龙之子 伊泽瑞尔]':
			{ target: '${C.dirAutogen}/reso/icon/@unofficial/ezreal-44.png' },
		'[击杀:皮肤:天龙之子 伊泽瑞尔]':
			{ target: '${C.dirAutogen}/reso/icon/@unofficial/ezreal-44.png' },
		'[初遇:皮肤:天龙之子 迦娜]':
			{ target: '${C.dirAutogen}/reso/icon/@unofficial/janna-56.png' },
		'[击杀:皮肤:天龙之子 迦娜]':
			{ target: '${C.dirAutogen}/reso/icon/@unofficial/janna-56.png' },
	},
	lines: {}
};
