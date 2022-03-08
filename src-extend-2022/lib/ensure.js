// 移除所有内容
Each(app.project, function(item) {
	try {
		if(/^test-/.test(item?.name)) { return; }

		$.writeln(`移除项目: ${item?.name}`);

		item?.remove?.();
	}
	catch(error) {
		$.writeln(error.message || error);
	}
});

this.DirLine = EnsureDir('01-Line', app.project);
this.DirVoice = EnsureDir('02-Voice', app.project);
this.DirFootage = EnsureDir('03-Footage', app.project);
this.DirComp = EnsureDir('04-Comp', app.project);

this.CompMain = EnsureComp('Main', 1, app.project);
