var languages = {
	en_us: {
		shadowColor: 'shadowColor',
		direction: 'direction',
		opacity: 'opacity',
		distance: 'distance',
		softness: 'softness',
		shadowOnly: 'shadowOnly',
		iterations: 'iterations',
		blurRadius: 'blurRadius'
	},
	zh_cn: {
		shadowColor: '\u9634\u5f71\u989c\u8272',
		direction: '\u65b9\u5411',
		opacity: '\u4e0d\u900f\u660e\u5ea6',
		distance: '\u8ddd\u79bb',
		softness: '\u67d4\u548c\u5ea6',
		shadowOnly: '\u4ec5\u9634\u5f71',
		iterations: '\u8fed\u4ee3',
		blurRadius: '\u6a21\u7cca\u534a\u5f84'
	}
};

this.LL = languages[app.isoLanguage.toLowerCase()];