export default {
	title: '虚空女皇 卑尔维斯',
	title1: '虚空女皇 卑尔维斯',
	title2: '预热语音彩蛋',
	splash: '${C.dirAutogen}/reso/special/belveth_easter_egg/belveth-color-story.jpg',
	color: '#9530CB',
	head: '${C.dirAutogen}/reso/other/icon/Belveth.png',
	linesSpecial: [
		// 卡莎
		{
			event: '[击杀:英雄::注释:卡莎触发]',
			line: '卡莎，我太失望了。监视者才是真正的威胁',
			mark: '50%概率触发，单局游戏最多触发1次',
			file: '${C.dirAutogen}/reso/special/belveth_easter_egg/KaisaKill[8BB79116][A3B9D431].wav',
			target: '${C.dirAutogen}/reso/icon/Kaisa/0.png',
		},
		// 卡萨丁
		{
			event: '[击杀:英雄::注释:卡萨丁触发]',
			line: '你的顽固和勇气与你的女儿如出一辙\\。而现在，我也是一样的了',
			mark: '50%概率触发，单局游戏最多触发1次',
			file: '${C.dirAutogen}/reso/special/belveth_easter_egg/KassadinKill[8A3D9425][09E8BE65].wav',
			target: '${C.dirAutogen}/reso/icon/Kassadin/0.png',
		},
		{
			event: '[阵亡:注释:卡萨丁触发]',
			line: '卡萨丁，虚空已经不再是你所理解的模样\\，你的抗争注定无果',
			mark: '50%概率触发',
			file: '${C.dirAutogen}/reso/special/belveth_easter_egg/KassadinDeath[4B3ED114][60AB9809].wav',
			target: '${C.dirAutogen}/reso/icon/Kassadin/0.png',
		},
		// 玛尔扎哈
		{
			event: '[击杀:英雄::注释:玛尔扎哈触发]',
			line: '我的先知，见证我的辉煌吧',
			mark: '50%概率触发，单局游戏最多触发1次',
			file: '${C.dirAutogen}/reso/special/belveth_easter_egg/2447859457[523410701][0D9D321F][629D580A].wav',
			target: '${C.dirAutogen}/reso/icon/Malzahar/0.png',
		},
		{
			event: '[重生:注释:玛尔扎哈触发]',
			line: '玛尔扎哈，你已经看到了结局\\。那么，你现在看到的就是开端',
			mark: '50%概率触发，单局游戏最多触发1次',
			file: '${C.dirAutogen}/reso/special/belveth_easter_egg/2759549683[1068426419][B3E4AE3F][5D7B1345].wav',
			target: '${C.dirAutogen}/reso/icon/Malzahar/0.png',
		},
		// 维克兹
		{
			event: '[击杀:英雄::注释:维克兹触发]',
			line: '维克兹，你的监视者们不可能轻易将我扼杀',
			mark: '50%概率触发，单局游戏最多触发1次',
			file: '${C.dirAutogen}/reso/special/belveth_easter_egg/VoidKill[E1D0BC3A][62C35D56].wav',
			target: '${C.dirAutogen}/reso/icon/Velkoz/0.png',
		},
		{
			event: '[重生:注释:维克兹触发]',
			line: '监视者必须歼灭，虚空才能重生',
			mark: '50%概率触发，单局游戏最多触发1次',
			file: '${C.dirAutogen}/reso/special/belveth_easter_egg/VelkozRespawn[E6E8AF30][65EA0629].wav',
			target: '${C.dirAutogen}/reso/icon/Velkoz/0.png',
		},

		// 虚空英雄
		{
			event: '[对局:开始:注释:虚空英雄触发]',
			line: '虚空的孩子啊\\，我对你并不熟悉，展现你的忠心吧',
			mark: '仅 卡莎/卡萨丁/玛尔扎哈/维克兹/卡兹克/克格莫/雷克赛/科加斯 可触发。50%概率触发。科加斯还会在重生、初次移动时触发',
			file: '${C.dirAutogen}/reso/special/belveth_easter_egg/VoidSpawnIn[7BE21F03][7E1EF6C9].wav',
			target: '${C.dirAutogen}/reso/other/void-champion-1.png',
		},
		{
			event: '[对局:开始:注释:虚空英雄触发]',
			line: '我们将吞噬你，再成为你',
			mark: '仅 卡莎/卡萨丁/玛尔扎哈/维克兹/卡兹克/克格莫/雷克赛/科加斯 可触发。50%概率触发。科加斯还会在重生、初次移动时触发',
			file: '${C.dirAutogen}/reso/special/belveth_easter_egg/VoidSpawnIn[568CFB50][8FDA531F].wav',
			target: '${C.dirAutogen}/reso/other/void-champion-2.png',
		},
		{
			event: '[击杀:英雄::注释:虚空英雄触发]',
			line: '我会将你善用',
			mark: '仅 卡兹克/克格莫/雷克赛/科加斯 可触发\\。50%概率触发，单局游戏最多触发1次',
			file: '${C.dirAutogen}/reso/special/belveth_easter_egg/VoidKill[14DD444F][FC9C516D].wav',
			target: '${C.dirAutogen}/reso/other/void-champion-1.png',
		},
	],
};
