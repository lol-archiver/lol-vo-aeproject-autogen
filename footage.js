var mapFootage = {};

this.F = function Footage(path, parent) {
	var footage = mapFootage[path];

	if(!footage) {
		// eslint-disable-next-line no-useless-catch
		try {
			footage = app.project.importFile(new ImportOptions(new File(path)));
		}
		catch(error) {
			throw error;
		}

		if(parent) {
			footage.parentFolder = parent;
		}

		mapFootage[path] = footage;
	}

	return footage;
};