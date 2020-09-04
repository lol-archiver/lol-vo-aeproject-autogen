module.exports = {
	event: {
		'[初遇:英雄:永恩]':
			{ target: '${C.path.project.autogen}reso/icons/Yone/0.png' },
		'[击杀:英雄:永恩]':
			{ target: '${C.path.project.autogen}reso/icons/Yone/0.png' },
		'[初遇:皮肤:灵魂莲华 亚索]':
			{ target: '${C.path.project.autogen}reso/icons/Yasuo/36.png' },
		'[初遇:皮肤:灵魂莲华 永恩]':
			{ target: '${C.path.project.autogen}reso/icons/Yone/1.png' },
		'[击杀:皮肤:灵魂莲华 亚索]':
			{ target: '${C.path.project.autogen}reso/icons/Yasuo/36.png' },
		'[击杀:皮肤:灵魂莲华 永恩]':
			{ target: '${C.path.project.autogen}reso/icons/Yone/1.png' },
		'[攻击:皮肤:灵魂莲华 亚索]':
			{ target: '${C.path.project.autogen}reso/icons/Yasuo/36.png' },
		'[攻击:皮肤:灵魂莲华 永恩]':
			{ target: '${C.path.project.autogen}reso/icons/Yone/1.png' },
	},
	events: [
		{
			event: '[初遇:英雄:永恩]',
			eventRaw: 'FirstEncounter3DYone',
			arrLine: [
				{
					line: '永恩，我领会了你的教诲，但为时已晚',
					crc32: 'DF81C9EA', side: 'right', audioFolder: 'Yasuo@zh_cn@PBE1', head: '${C.path.project.autogen}reso/icons/Yasuo/0.png'
				},
				{
					line: '不配出鞘的剑，遇上不详的面具',
					crc32: '45552CA0', side: 'right', audioFolder: 'Yasuo@zh_cn@PBE1', head: '${C.path.project.autogen}reso/icons/Yasuo/0.png'
				},
				{
					line: '哥哥？你，怎么了？',
					crc32: '47B8FAEE', side: 'right', audioFolder: 'Yasuo@zh_cn@PBE1', head: '${C.path.project.autogen}reso/icons/Yasuo/0.png'
				},
			],
		},
		{
			event: '[击杀:英雄:永恩]',
			eventRaw: 'Kill3DYone',
			arrLine: [
				{
					line: '又是带血的结局，哥哥',
					crc32: 'A41675A8', side: 'right', audioFolder: 'Yasuo@zh_cn@PBE1', head: '${C.path.project.autogen}reso/icons/Yasuo/0.png'
				},
			],
		},
		{
			event: '[移动:初次]',
			eventRaw: 'Move2DFirst',
			arrLine: [
				{
					line: '我哥哥回来了。看来赴死也并非易如反掌了',
					crc32: '0C7890EA', side: 'right', audioFolder: 'Yasuo@zh_cn@PBE1', head: '${C.path.project.autogen}reso/icons/Yasuo/0.png'
				},
				{
					line: '清风如窃，诉说着一个带着面具的双持剑客',
					crc32: '0D1F7984', side: 'right', audioFolder: 'Yasuo@zh_cn@PBE1', head: '${C.path.project.autogen}reso/icons/Yasuo/0.png'
				},
			],
		},
		{
			event: '[移动:长途]',
			eventRaw: 'Move2DLong',
			arrLine: [
				{
					line: '我本以为亚扎卡纳不过是，孩童的故事而已，真是大错特错',
					crc32: '030EFDFD', side: 'right', audioFolder: 'Yasuo@zh_cn@PBE1', head: '${C.path.project.autogen}reso/icons/Yasuo/0.png'
				},
			],
		},
		{
			event: '[初遇:皮肤:灵魂莲华 亚索]',
			eventRaw: 'FirstEncounter3DYasuoSkin35',
			arrLine: [
				{
					line: '你好，亚索。你还是没搞清楚，落叶该去何处吗？',
					crc32: '7167BDB5', side: 'right', audioFolder: 'Ahri@zh_cn@PBE1', head: '${C.path.project.autogen}reso/icons/Ahri/27.png'
				},
			],
		},
		{
			event: '[攻击:皮肤:灵魂莲华 亚索]',
			eventRaw: 'Attack3DYasuoSkin35',
			arrLine: [
				{
					line: '哈撒给',
					crc32: '885C5454', side: 'right', audioFolder: 'Ahri@zh_cn@PBE1', head: '${C.path.project.autogen}reso/icons/Ahri/27.png'
				},
			],
		},
		{
			event: '[击杀:皮肤:灵魂莲华 亚索]',
			eventRaw: 'Kill3DYasuoSkin35',
			arrLine: [
				{
					line: '死亡如风',
					crc32: '873DE756', side: 'right', audioFolder: 'Ahri@zh_cn@PBE1', head: '${C.path.project.autogen}reso/icons/Ahri/27.png'
				},
			],
		},
		{
			event: '[初遇:皮肤:灵魂莲华 永恩]',
			eventRaw: 'FirstEncounter3DYoneSkin01',
			arrLine: [
				{
					line: '永恩，别担心。我觉得你和你弟弟一样潇洒',
					crc32: '74DBA756', side: 'right', audioFolder: 'Ahri@zh_cn@PBE1', head: '${C.path.project.autogen}reso/icons/Ahri/27.png'
				},
			],
		},

		{
			event: '[攻击:皮肤:灵魂莲华 永恩]',
			eventRaw: 'Attack3DYoneSkin01',
			arrLine: [
				{
					line: '你是哥哥，还是弟弟来着？',
					crc32: '34E0F745', side: 'right', audioFolder: 'Ahri@zh_cn@PBE1', head: '${C.path.project.autogen}reso/icons/Ahri/27.png'
				},
			],
		},
		{
			event: '[击杀:皮肤:灵魂莲华 永恩]',
			eventRaw: 'Kill3DYoneSkin01',
			arrLine: [
				{
					line: '我接受你的投降，永恩',
					crc32: 'CC62CEB1', side: 'right', audioFolder: 'Ahri@zh_cn@PBE1', head: '${C.path.project.autogen}reso/icons/Ahri/27.png'
				},
			],
		},
	]
};