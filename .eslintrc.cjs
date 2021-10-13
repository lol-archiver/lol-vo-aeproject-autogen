const rcExtend = {
	files: ['./src-extend/**'],
	env: { es2021: false, node: false },
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

		I: 'readonly',
		D: 'readonly',
		P: 'readonly',
		F: 'readonly',
		C: 'readonly',
		E: 'readonly',
		L: 'readonly',
		T: 'readonly',
	},
};

const rcExpression = {
	files: ['./src-expression/**'],
	env: { es2021: false, node: false, es6: true },
	parserOptions: { sourceType: 'script', },
	globals: {
		time: 'readonly',

		thisLayer: 'readonly',
		thisComp: 'readonly',
	},
};

const rcNode = {
	root: true,
	env: { es2021: true, node: true, },
	extends: ['eslint:recommended'],
	parserOptions: { sourceType: 'module', ecmaVersion: 13 },
	rules: {
		indent: [2, 'tab', { ignoreComments: true, SwitchCase: 1 }],
		linebreakStyle: [2, 'unix'],
		quotes: [2, 'single', { allowTemplateLiterals: true }],
		semi: [2, 'always'],
		noUnusedVars: [2, { vars: 'all', args: 'none' }],
		noConsole: [2],
		noVar: [2],
		quoteProps: [0],
		requireAtomicUpdates: [0],
		arrowParens: [2],
	},
	overrides: [rcExtend, rcExpression]
};


const parseKey = (raw, target) => { const key = raw.split(/(?=[A-Z])/).join('-').toLowerCase(); if(key != raw) { target[key] = target[raw]; delete target[raw]; } };
Object.keys(rcNode.rules).forEach((key) => parseKey(key, rcNode.rules));
Object.keys(rcExtend.rules).forEach((key) => parseKey(key, rcExtend.rules));


module.exports = rcNode;