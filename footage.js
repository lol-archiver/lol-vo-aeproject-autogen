var mapFootage = {};

this.F = function Footage(path, parent) {
	var footage = mapFootage[path];

	if(!footage) {
		footage = app.project.importFile(new ImportOptions(new File(path)));

		if(parent) {
			footage.parentFolder = parent;
		}

		mapFootage[path] = footage;
	}

	return footage;
};