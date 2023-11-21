const headKayn = '${C.dirAutogen}/reso/icon/kayn/20-assassin.png';
const headRhaast = '${C.dirAutogen}/reso/icon/kayn/20-slay.png';


export default {
	title: '心之钢 凯隐',
	title1: '心之钢',
	title2: '凯隐',
	champion: {
		id: 141,
		name: 'Kayn',
	},
	skin: {
		id: 20,
		name: 'HEARTSTEEL'
	},
	color: 'BB33CA',
	splashMiddle: '${C.dirAutogen}/reso/splash-left/141020.png',
	events: {
		'[初遇:英雄:阿卡丽]':
			{ target: '${C.dirAutogen}/reso/icon/akali/0.png' },
		'[击杀:英雄:阿卡丽]':
			{ target: '${C.dirAutogen}/reso/icon/akali/0.png' },


		'[击杀:皮肤:DJ 娑娜]':
			{ target: '${C.dirAutogen}/reso/icon/sona/6.png' },
		'[初遇:皮肤:心之钢 永恩]':
			{ target: '${C.dirAutogen}/reso/icon/yone/45.png' },
		'[击杀:皮肤:心之钢 永恩]':
			{ target: '${C.dirAutogen}/reso/icon/yone/45.png' },
		'[初遇:皮肤:心之钢 伊泽瑞尔]':
			{ target: '${C.dirAutogen}/reso/icon/ezreal/43.png' },
		'[击杀:皮肤:心之钢 伊泽瑞尔]':
			{ target: '${C.dirAutogen}/reso/icon/ezreal/43.png' },
		'[初遇:皮肤:心之钢 厄斐琉斯]':
			{ target: '${C.dirAutogen}/reso/icon/aphelios/30.png' },
		'[击杀:皮肤:心之钢 厄斐琉斯]':
			{ target: '${C.dirAutogen}/reso/icon/aphelios/30.png' },
		'[初遇:皮肤:心之钢 瑟提]':
			{ target: '${C.dirAutogen}/reso/icon/sett/56.png' },
		'[击杀:皮肤:心之钢 瑟提]':
			{ target: '${C.dirAutogen}/reso/icon/sett/56.png' },
		'[初遇:皮肤:心之钢 奎桑提]':
			{ target: '${C.dirAutogen}/reso/icon/ksante/8.png' },
		'[击杀:皮肤:心之钢 奎桑提]':
			{ target: '${C.dirAutogen}/reso/icon/ksante/8.png' },

		'[触发:P暗裔魔镰:变身影流刺客]':
			{ skill: '${C.dirAutogen}/reso/icon/kayn/p.png' },
		'[触发:P暗裔魔镰:变身暗裔杀手]':
			{ skill: '${C.dirAutogen}/reso/icon/kayn/p.png' },
		'[使用:Q巨镰横扫::备注:仅变身前]':
			{ skill: '${C.dirAutogen}/reso/icon/kayn/Q_Primary.png' },
		'[使用:Q巨镰横扫::备注:仅影流刺客]':
			{ skill: '${C.dirAutogen}/reso/icon/kayn/Q_Primary.png' },
		'[使用:Q巨镰横扫::备注:仅暗裔杀手]':
			{ skill: '${C.dirAutogen}/reso/icon/kayn/Q_Primary.png' },
		'[英雄:W利刃纵贯::备注:仅变身前]':
			{ skill: '${C.dirAutogen}/reso/icon/kayn/W_Primary.png' },
		'[英雄:W利刃纵贯::备注:仅影流刺客]':
			{ skill: '${C.dirAutogen}/reso/icon/kayn/W_Primary.png' },
		'[英雄:W利刃纵贯::备注:仅暗裔杀手]':
			{ skill: '${C.dirAutogen}/reso/icon/kayn/W_Primary.png' },
		'[使用:E掠影步::备注:仅变身前]':
			{ skill: '${C.dirAutogen}/reso/icon/kayn/E_Primary.png' },
		'[使用:E掠影步::备注:仅影流刺客]':
			{ skill: '${C.dirAutogen}/reso/icon/kayn/E_Primary.png' },
		'[使用:E掠影步::备注:仅暗裔杀手]':
			{ skill: '${C.dirAutogen}/reso/icon/kayn/E_Primary.png' },
		'[使用:R裂舍影::备注:仅变身前]':
			{ skill: '${C.dirAutogen}/reso/icon/kayn/R_2_Primary.png' },
		'[使用:R裂舍影::备注:仅影流刺客]':
			{ skill: '${C.dirAutogen}/reso/icon/kayn/R_2_Primary.png' },
		'[使用:R裂舍影::备注:仅暗裔杀手]':
			{ skill: '${C.dirAutogen}/reso/icon/kayn/R_2_Primary.png' },
		'[使用:R裂舍影:破体而出]':
			{ skill: '${C.dirAutogen}/reso/icon/kayn/R_2_Primary.png' },
	},
	lines: {
		'6AAB5124': { mark: '对话1开始', head: headKayn },
		'CF54AF12': { event: '注释:对话1-2', mark: '对话1结束', head: headRhaast },


		'F4B52729': { mark: '对话2开始', head: headKayn, target: headRhaast },
		'1574B904': { event: '注释:对话2-2', head: headRhaast, target: headKayn },
		'DA4E373F': { event: '注释:对话2-3', mark: '对话2结束', head: headKayn, target: headRhaast },


		'CB13D727': { mark: '对话3开始', head: headRhaast, target: headKayn },
		'9ABD5E1B': { event: '注释:对话3-2', head: headKayn, target: headRhaast },
		'33B9A10D': { event: '注释:对话3-3', head: headRhaast, target: headKayn },
		'436F2D19': { event: '注释:对话3-4', head: headKayn, target: headRhaast },
		'CD018807': { event: '注释:对话3-5', head: headRhaast, target: headKayn },
		'E7D53521': { event: '注释:对话3-6', mark: '对话3结束', head: headKayn, target: headRhaast },

		'3C16E038': { mark: '对话4开始', head: headKayn, target: headRhaast },
		'CD99533A': { event: '注释:对话4-2', mark: '对话4结束', head: headRhaast, target: headKayn },

		'8FAA761D': { mark: '对话5开始', head: headKayn, target: headRhaast },
		'B8EFB213': { event: '注释:对话5-2', mark: '对话5结束', head: headRhaast, target: headKayn },

		'96A70D13': { mark: '对话6开始', head: headKayn, target: headRhaast },
		'77926126': { event: '注释:对话6-2', mark: '对话6结束', head: headRhaast, target: headKayn },

		'94CFDD1F': { mark: '对话7开始', head: headKayn, target: headRhaast },
		'229DB02A': { event: '注释:对话7-2', mark: '对话7结束', head: headRhaast, target: headKayn },

		'2FCB3738': { mark: '对话8开始', head: headKayn, target: headRhaast },
		'2C1FC53F': { event: '注释:对话8-2', mark: '对话8结束', head: headRhaast, target: headKayn },

		'4B5FBC16': { mark: '对话9开始', head: headRhaast, target: headKayn },
		'089A6033': { event: '注释:对话9-2', head: headKayn, target: headRhaast },
		'9536AA2F': { event: '注释:对话9-3', head: headRhaast, target: headKayn },
		'16F11910': { event: '注释:对话9-4', mark: '对话9结束', head: headKayn, target: headRhaast },

		'786E4C07': { mark: '对话10开始', head: headKayn, target: headRhaast },
		'16100D26': { event: '注释:对话10-2', mark: '对话10结束', head: headRhaast, target: headKayn },


		'79700A34': { mark: '对话11开始，仅影流刺客', head: headRhaast, target: headKayn },
		'7A51F708': { mark: '仅影流刺客', event: '注释:对话11-2', head: headKayn, target: headRhaast },
		'0478F137': { mark: '仅影流刺客', event: '注释:对话11-3', head: headRhaast, target: headKayn },
		'09BE2238': { mark: '仅影流刺客', event: '注释:对话11-4', head: headKayn, target: headRhaast },
		'51398D3D': { mark: '仅影流刺客', event: '注释:对话11-5', head: headRhaast, target: headKayn },
		'95A39A1E': { mark: '对话11结束，仅影流刺客', event: '注释:对话11-6', head: headKayn, target: headRhaast },

		'D88E2E31': { mark: '对话12开始，仅影流刺客', head: headRhaast, target: headKayn },
		'B3FD2024': { mark: '对话12结束，仅影流刺客', event: '注释:对话12-2', head: headKayn, target: headRhaast },

		'102DC004': { mark: '仅影流刺客' },
		'AC4AF318': { mark: '仅影流刺客' },
		'05138B1A': { mark: '仅影流刺客' },
		'7059D209': { mark: '仅影流刺客' },

		'A42FCE29': { mark: '仅暗裔杀手' },
		'C66E5717': { mark: '仅暗裔杀手' },
		'E561FB10': { mark: '仅暗裔杀手' },
		'ADF7F025': { mark: '仅暗裔杀手' },


		'2C0C9724': { mark: '对话13开始', head: headKayn, target: headRhaast },
		'CD6D2839': { event: '注释:对话13-2', mark: '对话13结束', head: headRhaast, target: headKayn },

		'FF62FA3C': { mark: '对话14开始', head: headRhaast, target: headKayn },
		'566E6111': { event: '注释:对话14-2', mark: '对话14结束', head: headKayn, target: headRhaast },

		'08859F24': { mark: '对话15开始', head: headRhaast, target: headKayn },
		'B268C61B': { event: '注释:对话15-2', mark: '对话15结束', head: headKayn, target: headRhaast },

		'AEEC6B11': { mark: '仅影流刺客' },
		'C393E51E': { mark: '仅影流刺客' },
		'1FA71B36': { mark: '仅影流刺客' },
		'0819CA0C': { mark: '仅影流刺客' },
		'92E89B02': { mark: '仅影流刺客' },
		'BAAC0616': { mark: '仅影流刺客' },
		'BE5CC123': { mark: '仅影流刺客' },
		'2E958101': { mark: '仅影流刺客' },

		'6DB55301': { mark: '仅暗裔杀手' },
		'460E6B00': { mark: '仅暗裔杀手' },
		'81E9B003': { mark: '仅暗裔杀手' },
		'D5A87B00': { mark: '仅暗裔杀手' },
		'E0C97519': { mark: '仅暗裔杀手' },


		'26559638': { mark: '对话16开始，仅变身前', head: headKayn, target: headRhaast },
		'A07D9D3B': { mark: '对话16结束，仅变身前', event: '注释:对话16-2', head: headRhaast, target: headKayn },

		'B99EC01B': { mark: '对话17开始，仅变身前', head: headKayn, target: headRhaast },
		'DF883024': { mark: '对话17结束，仅变身前', event: '注释:对话17-2', head: headRhaast, target: headKayn },

		'659F9920': { mark: '仅变身前' },
		'A4D73F38': { mark: '仅变身前' },
		'D4CAD43D': { mark: '仅变身前' },
		'A2D86634': { mark: '仅变身前' },
		'6BDE5D0E': { mark: '仅变身前' },

		'3B0D1D0D': { mark: '仅影流刺客' },
		'CA61D835': { mark: '仅影流刺客' },
		'3FCC5F0D': { mark: '仅影流刺客' },
		'FD4E1029': { mark: '仅影流刺客' },

		'89550813': { mark: '仅暗裔杀手' },
		'C7015F02': { mark: '仅暗裔杀手' },
		'EEE7A613': { mark: '仅暗裔杀手' },
		'AC825C1B': { mark: '仅暗裔杀手' },


		'0CACCB0F': { mark: '仅影流刺客' },
		'49535229': { mark: '仅影流刺客' },
		'5F319222': { mark: '仅影流刺客' },
		'35D6AD22': { mark: '仅影流刺客' },
		'93754126': { mark: '仅影流刺客' },

		'A0E2D91D': { mark: '仅暗裔杀手' },
		'1691AE26': { mark: '仅暗裔杀手' },
		'38AACE3F': { mark: '仅暗裔杀手' },


		'18505101': { mark: '对话18开始', head: headKayn, target: headRhaast },
		'4D2C7C3F': { event: '注释:对话18-2', mark: '对话18结束', head: headRhaast, target: headKayn },

		'0D539E0F': { mark: '仅影流刺客' },
		'BC0C4729': { mark: '仅影流刺客' },
		'144FFC01': { mark: '仅影流刺客' },
		'EC48E220': { mark: '仅影流刺客' },
		'7E639C14': { mark: '仅影流刺客' },
		'FD154734': { mark: '仅影流刺客' },
		'AB57010A': { mark: '仅影流刺客' },

		'7AC78936': { mark: '仅暗裔杀手' },
		'169E222C': { mark: '仅暗裔杀手' },
		'D7824234': { mark: '仅暗裔杀手' },
		'02CBAE0B': { mark: '仅暗裔杀手' },
		'2B024C3A': { mark: '仅暗裔杀手' },
		'F32B510C': { mark: '仅暗裔杀手' },


		'5D20D510': { mark: '仅影流刺客' },
		'E5A2B636': { mark: '仅影流刺客' },

		'8E633F31': { mark: '仅暗裔杀手' },
		'148A063F': { mark: '仅暗裔杀手' },

		'4FDEEE0B': { mark: '对话18开始，仅变身前', head: headKayn, target: headRhaast },
		'648FAE0C': { mark: '对话18结束，仅变身前', event: '注释:对话18-2', head: headRhaast, target: headKayn },
		'9F636331': { mark: '对话18开始，仅变身前', head: headKayn, target: headRhaast },
		'49EC6914': { mark: '对话18结束，仅变身前', event: '注释:对话18-2', head: headRhaast, target: headKayn },
		'5E19C70B': { mark: '仅变身前' },
		'390BFE1A': { mark: '仅变身前' },
		'58F3790E': { mark: '仅变身前' },
		'B1CDF62E': { mark: '仅变身前' },

		'A4DCCC38': { mark: '仅影流刺客' },
		'91C60531': { mark: '仅影流刺客' },
		'35C51C16': { mark: '仅影流刺客' },

		'F9EE7E2E': { mark: '仅暗裔杀手' },
		'22E66817': { mark: '仅暗裔杀手' },
		'435D2C09': { mark: '仅暗裔杀手' },

		'227AEF18': { mark: '仅变身前' },
		'668A140A': { mark: '仅变身前' },
		'14A22C01': { mark: '仅变身前' },
		'AB506A3D': { mark: '仅变身前' },
		'05A6001A': { mark: '仅变身前' },
		'30CA5538': { mark: '仅变身前' },
		'292F1315': { mark: '仅变身前' },

		'2BA9EB05': { mark: '仅影流刺客' },
		'DEF0DF02': { mark: '仅影流刺客' },
		'683EEB20': { mark: '仅影流刺客' },
		'1847321D': { mark: '仅影流刺客' },

		'E860D133': { mark: '仅暗裔杀手' },
		'5C477400': { mark: '仅暗裔杀手' },
		'E93F1119': { mark: '仅暗裔杀手' },

		'F4FA5E26': { mark: '仅变身前' },
		'EE5B8C08': { mark: '仅变身前' },
		'ADDDB521': { mark: '仅变身前' },
		'F5299715': { mark: '仅变身前' },
		'3CE9F92E': { mark: '仅变身前' },

		'3CFB5B15': { mark: '仅影流刺客' },
		'CD53A208': { mark: '仅影流刺客' },
		'07B92D0E': { mark: '仅影流刺客' },

		'CCD75C3F': { mark: '仅暗裔杀手' },
		'02673C0E': { mark: '仅暗裔杀手' },
		'21CADE00': { mark: '仅暗裔杀手' },

		'5D1C1B38': { mark: '仅变身前' },
		'F271EE13': { mark: '仅变身前' },
		'3E971A18': { mark: '仅变身前' },
		'35DD6F23': { mark: '仅变身前' },
		'386C212F': { mark: '仅变身前' },

		'D15D4E39': { mark: '仅影流刺客' },
		'EEC5FA2C': { mark: '仅影流刺客' },
		'9E84363F': { mark: '仅影流刺客' },
		'CE16E235': { mark: '仅影流刺客' },

		'33D41B1E': { mark: '仅暗裔杀手' },
		'8F9CB706': { mark: '仅暗裔杀手' },
		'D0DF080B': { mark: '仅暗裔杀手' },

		'38F29130': { mark: '仅变身前' },
		'E7CBDF30': { mark: '仅变身前' },
		'ABBBEE25': { mark: '仅变身前' },
		'88BFA809': { mark: '仅变身前' },

		'8A69DB0D': { mark: '仅影流刺客' },
		'30642A3E': { mark: '仅影流刺客' },
		'2FF3961A': { mark: '仅影流刺客' },

		'919A0815': { mark: '仅变身前' },
		'E7902F00': { mark: '仅变身前' },

		'0C11DC1B': { mark: '仅暗裔杀手' },
	}
};
