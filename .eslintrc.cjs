const rcExtend = {
	files: ['./src-extend/**'],
	env: {
		es2021: false,
		node: false,
	},
	parser: 'espree',
	parserOptions: {
		sourceType: 'script',
		ecmaVersion: 3,
	},
	rules: {
		noVar: [0],
	},
	globals: {
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
	env: {
		es6: true,
		es2021: false,
		node: false,
	},
	parser: 'espree',
	parserOptions: {
		sourceType: 'script',
	},
	globals: {
		time: 'readonly',

		thisLayer: 'readonly',
		thisComp: 'readonly',
	},
};

const rcNode = {
	root: true,
	env: {
		es2021: true,
		node: true,
	},
	extends: [
		'eslint:recommended',
	],
	parser: '@babel/eslint-parser',
	parserOptions: {
		sourceType: 'module',
		requireConfigFile: false,
	},
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


for(const key in rcNode.rules) {
	const keyCamel = key.split(/(?=[A-Z])/).join('-').toLowerCase();
	if(keyCamel != key) {
		rcNode.rules[keyCamel] = rcNode.rules[key];
		delete rcNode.rules[key];
	}
}

for(const key in rcExtend.rules) {
	const keyCamel = key.split(/(?=[A-Z])/).join('-').toLowerCase();
	if(keyCamel != key) {
		rcExtend.rules[keyCamel] = rcExtend.rules[key];
		delete rcExtend.rules[key];
	}
}


module.exports = rcNode;