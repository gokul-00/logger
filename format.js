const format = (type, str) => {
	return `[${type.toUpperCase()} - ${Date.now()}] ${str}`;
};

module.exports = format;
