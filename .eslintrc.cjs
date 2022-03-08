const rcExtend2022 = {
	files: ['./src-extend-2022/**'],
	excludedFiles: ['./src-extend-2022/dist.js'],
	env: { es2022: true, node: false },
	parserOptions: { sourceType: 'script', },
	rules: {
		indent: [2, 'tab', { ignoreComments: true, SwitchCase: 1 }],
		linebreakStyle: [2],
		quotes: [2, 'single', { allowTemplateLiterals: true }],
		semi: [2],
		noUnusedVars: [2, { vars: 'all', args: 'none' }],
		noVar: [2],
		noConsole: [2],
	},
	globals: {
		$: 'readonly',
		app: 'readonly',

		Project: 'readonly',
		Item: 'readonly',
		FolderItem: 'readonly',
		CompItem: 'readonly',


		PATH_CONFIG: 'readonly',
		PATH_INFO: 'readonly',

		ReadFile: 'readonly',
		GetExpression: 'readonly',
		GetFootage: 'readonly',
		Each: 'readonly',
		EnsureDir: 'readonly',
		EnsureComp: 'readonly',
		RGB: 'readonly',
		RGBH: 'readonly',
		EvalString: 'readonly',
		EnumLine: 'readonly',
		GetBoxSize: 'readonly',
		GetBoxSizeMark: 'readonly',

		C: 'readonly',
		I: 'readonly',
		D: 'readonly',
		L: 'readonly',

		DirLine: 'readonly',
		DirVoice: 'readonly',
		DirFootage: 'readonly',
		DirComp: 'readonly',
		CompMain: 'readonly',

		AddOpener: 'readonly',
		AddTitle: 'readonly',
		CalcDuration: 'readonly',
		AddLine: 'readonly',
		AddLineScroll: 'readonly',
		AddBGM: 'readonly',
		AddEnding: 'readonly',


		SplashesOpener: 'readonly',





		TextDocument: 'readonly',
		ImportOptions: 'readonly',

		File: 'readonly',

		KeyframeInterpolationType: 'readonly',
		KeyframeEase: 'readonly',
		TrackMatteType: 'readonly',




		AddProperty: 'readonly',
		AddShape: 'readonly',
		AddText: 'readonly',
		Ease1: 'readonly',
		Ease2: 'readonly',
		SetEase: 'readonly',
	},
};


const rcExtend = {
	files: ['./src-extend/**'],
	env: { es2022: false, node: false },
	parserOptions: { sourceType: 'script', ecmaVersion: 3 },
	rules: {
		noVar: [0],
	},
	globals: {
		pathConfig: 'readonly',
		pathInfo: 'readonly',

		app: 'readonly',

		Project: 'readonly',
		CompItem: 'readonly',
		FolderItem: 'readonly',

		TextDocument: 'readonly',
		ImportOptions: 'readonly',

		File: 'readonly',

		KeyframeInterpolationType: 'readonly',
		KeyframeEase: 'readonly',
		TrackMatteType: 'readonly',


		I: 'readonly',
		D: 'readonly',
		P: 'readonly',
		F: 'readonly',
		C: 'readonly',
		E: 'readonly',
		L: 'readonly',
		T: 'readonly',
		LL: 'readonly',

		AddProperty: 'readonly',
		AddShape: 'readonly',
		AddText: 'readonly',
		Ease1: 'readonly',
		Ease2: 'readonly',
		SetEase: 'readonly',
	},
};


const rcExpression = {
	files: ['./src-expression/**'],
	env: { es2022: false, node: false, es6: true },
	parserOptions: { sourceType: 'script', },
	globals: {
		time: 'readonly',

		thisLayer: 'readonly',
		thisComp: 'readonly',
	},
};


const rcNode = {
	root: true,
	ignorePatterns: ['src-extend-2022/dist.js'],
	env: { es2022: true, node: true },
	extends: ['eslint:recommended'],
	parserOptions: { sourceType: 'module' },
	rules: {
		indent: [2, 'tab', { ignoreComments: true, SwitchCase: 1 }],
		linebreakStyle: [2],
		quotes: [2, 'single', { allowTemplateLiterals: true }],
		semi: [2],
		noUnusedVars: [2, { vars: 'all', args: 'none' }],
		noVar: [2],
		noConsole: [2],
	},
	overrides: [rcExtend2022, rcExtend, rcExpression]
};


const parseKey = (raw, target) => { const key = raw.split(/(?=[A-Z])/).join('-').toLowerCase(); if(key != raw) { target[key] = target[raw]; delete target[raw]; } };
Object.keys(rcNode.rules).forEach((key) => parseKey(key, rcNode.rules));
Object.keys(rcExtend.rules).forEach((key) => parseKey(key, rcExtend.rules));
Object.keys(rcExtend2022.rules).forEach((key) => parseKey(key, rcExtend2022.rules));


module.exports = rcNode;