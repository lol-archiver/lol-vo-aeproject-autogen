export default {
	title: '斗魂觉醒 佛耶戈',
	title1: '斗魂觉醒',
	title2: '佛耶戈',
	champion: {
		id: 234,
		name: 'Viego',
	},
	skin: {
		id: 30,
		name: 'Soul Fighter'
	},
	color: '#D85639',
	splashMiddle: '${C.dirAutogen}/reso/splash-left/234030.png',
	events: {
		'[攻击:生物:纳什男爵]':
			{ target: '${C.dirAutogen}/reso/icon/@monster/baron.png' },
		'[击杀:生物:纳什男爵]':
			{ target: '${C.dirAutogen}/reso/icon/@monster/baron.png' },
		'[击杀:生物:龙]':
			{ target: '${C.dirAutogen}/reso/icon/@monster/fire-dragon.png' },
		'[击杀:生物:绯红印记树怪]':
			{ target: '${C.dirAutogen}/reso/icon/@monster/red-brambleback.png' },
		'[击杀:生物:苍蓝雕纹魔像]':
			{ target: '${C.dirAutogen}/reso/icon/@monster/blue-sentinel.png' },
		'[击杀:生物:野区普通生物]':
			{ target: '${C.dirAutogen}/reso/icon/@monster/murkwolf.png', mark: '魔沼蛙/暗影狼/锋喙鸟/远古石甲虫，不包括峡谷迅捷蟹' },
		'[击杀:建筑:防御塔]':
			{ target: '${C.dirAutogen}/reso/icon/turret.png' },


		'[移动:初次:友方:皮肤:斗魂觉醒 莎弥拉]':
			{ target: '${C.dirAutogen}/reso/icon/samira/30.png' },
		'[初遇:皮肤:斗魂觉醒 莎弥拉]':
			{ target: '${C.dirAutogen}/reso/icon/samira/30.png' },
		'[击杀:皮肤:斗魂觉醒 莎弥拉]':
			{ target: '${C.dirAutogen}/reso/icon/samira/30.png' },
		'[初遇:皮肤:斗魂觉醒 伊芙琳]':
			{ target: '${C.dirAutogen}/reso/icon/evelynn/42.png' },
		'[击杀:皮肤:斗魂觉醒 伊芙琳]':
			{ target: '${C.dirAutogen}/reso/icon/evelynn/42.png' },
		'[初遇:皮肤:斗魂觉醒 格温]':
			{ target: '${C.dirAutogen}/reso/icon/gwen/20.png' },
		'[击杀:皮肤:斗魂觉醒 格温]':
			{ target: '${C.dirAutogen}/reso/icon/gwen/20.png' },
		'[初遇:皮肤:斗魂觉醒 烬]':
			{ target: '${C.dirAutogen}/reso/icon/jhin/36.png' },
		'[击杀:皮肤:斗魂觉醒 烬]':
			{ target: '${C.dirAutogen}/reso/icon/jhin/36.png' },
		'[初遇:皮肤:斗魂觉醒 拉克丝]':
			{ target: '${C.dirAutogen}/reso/icon/lux/38.png' },
		'[击杀:皮肤:斗魂觉醒 拉克丝]':
			{ target: '${C.dirAutogen}/reso/icon/lux/38.png' },
		'[初遇:皮肤:斗魂觉醒 纳亚菲利]':
			{ target: '${C.dirAutogen}/reso/icon/naafiri/1.png' },
		'[击杀:皮肤:斗魂觉醒 纳亚菲利]':
			{ target: '${C.dirAutogen}/reso/icon/naafiri/1.png' },
		'[初遇:皮肤:斗魂觉醒 派克]':
			{ target: '${C.dirAutogen}/reso/icon/pyke/53.png' },
		'[击杀:皮肤:斗魂觉醒 派克]':
			{ target: '${C.dirAutogen}/reso/icon/pyke/53.png' },
		'[初遇:皮肤:斗魂觉醒 瑟提]':
			{ target: '${C.dirAutogen}/reso/icon/sett/45.png' },
		'[击杀:皮肤:斗魂觉醒 瑟提]':
			{ target: '${C.dirAutogen}/reso/icon/sett/45.png' },
		'[初遇:皮肤:斗魂觉醒 萨科]':
			{ target: '${C.dirAutogen}/reso/icon/shaco/43.png' },
		'[击杀:皮肤:斗魂觉醒 萨科]':
			{ target: '${C.dirAutogen}/reso/icon/shaco/43.png' },


		'[使用:Q破败王剑]':
			{ skill: '${C.dirAutogen}/reso/icon/viego/Q.png' },
		'[使用:W千载幽咽]':
			{ skill: '${C.dirAutogen}/reso/icon/viego/W.png' },
		'[使用:W千载幽咽:命中时]':
			{ skill: '${C.dirAutogen}/reso/icon/viego/W.png' },
		'[使用:W千载幽咽:未命中时]':
			{ skill: '${C.dirAutogen}/reso/icon/viego/W.png' },
		'[使用:E茫茫焦土]':
			{ skill: '${C.dirAutogen}/reso/icon/viego/E.png' },
		'[升级:R痛贯天灵:初次]':
			{ skill: '${C.dirAutogen}/reso/icon/viego/R.png' },
		'[使用:R痛贯天灵]':
			{ skill: '${C.dirAutogen}/reso/icon/viego/R.png' },
	},
	lines: {
		'AC69DC4E': { mark: '引申自一些街机游戏中的爬塔设定，如《真人快打》《罪恶装备》' },
		'D2B56332': { mark: '引申自动画《龙珠超》贝吉塔的台词\\：“只有废物才会放弃他的原则和尊严”' },
		'9CDC9A75': { mark: '原文“No rule says the host can\'t enter the tourney\\”引申自电影《神犬也疯狂》裁判的台词：“没有规则说狗不能打篮球”' },
		'3D49B26F': { mark: '原文“A challenger approaches\\”引申自游戏《全明星大乱斗》新角色出现时的挑战者模式' },
		'0F8C2068': { mark: '原文“Did you just look at me\\? How dare you! Close your eyes!\\”引申自电影《The Favourite.（宠儿）》安妮女王的台词' },
		'3FEBAD6E': { mark: '原文“Repeat after me\\: I\'ll never take on the Eye again\\”引申自游戏《拳皇》鲁加尔·伯恩斯坦的台词' },
		'48A4E43E': { mark: '原文“Come back when your soul has truly awakened\\”引申自游戏《铁拳》三岛平八的台词' },
		'B4551E38': { mark: '原文“Go home, Sett. Be a family man\\”引申自游戏《街头霸王2》古列的台词' },
		'F9F5A732': { mark: '原文“Looks like we\'ve got ourselves a real match\\”引申自格斗玩家社区（FGC）约2000年左右的流行梗\\。意思为原本一边倒的比赛又变得势均力敌' },
		'7737896D': { mark: '引申自佛耶戈在主宇宙中与伊苏尔德大婚当日收到的音乐盒\\，详见佛耶戈的宇宙故事《她》' },
		'DE614D35': { mark: '原文“You are the wind and my wings!\\”引申自Bette Midler的歌曲《Wind Beneath My Wings》' },
		'860C793C': { mark: '原文“Fatalit...\\”引申自游戏《真人快打》的终结技（fatality）' },
	}
};
