var pathExp = C.path.cwd + 'expression/';

this.E = function Expression(name) {
	return T.readFile(pathExp + name + '.js', 'UTF8');
};