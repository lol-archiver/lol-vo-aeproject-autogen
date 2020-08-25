module.exports = {
	event: {
		'[初遇:英雄:永恩]':
			{ target: '${C.path.project.autogen}reso/icons/Yone/0.png' },
		'[击杀:英雄:永恩]':
			{ target: '${C.path.project.autogen}reso/icons/Yone/0.png' },
		'[移动:初次]':
			{ target: '${C.path.project.autogen}reso/icons/Yone/0.png' },
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
	]
};

