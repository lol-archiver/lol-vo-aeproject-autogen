const rc = {
	env: {
		browser: true
	},
	extends: [
		'eslint:recommended',
	],
	parserOptions: {
		sourceType: 'script',
		ecmaVersion: 3
	},
	rules: {
		indent: [2, 'tab', { ignoreComments: true, SwitchCase: 1 }],
		linebreakStyle: [2, 'unix'],
		quotes: [2, 'single'],
		semi: [2, 'always'],
		noUnusedVars: [2, { vars: 'all', args: 'after-used' }],
		noConsole: [2],
		noVar: [0],
		quoteProps: [0],
	},
	globals: {
		app: true,

		Project: true,
		CompItem: true,
		FolderItem: true,

		TextDocument: true,
		ImportOptions: true,

		File: true,

		I: true,
		D: true,
		P: true,
		F: true,
		C: true,
		E: true,
		L: true,
		T: true
	}
};

for(const key in rc.rules) {
	const keyCamel = key.split(/(?=[A-Z])/).join('-').toLowerCase();
	if(keyCamel != key) {
		rc.rules[keyCamel] = rc.rules[key];
		delete rc.rules[key];
	}
}

module.exports = rc;