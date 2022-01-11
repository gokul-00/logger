const format = (type, str, sec) => {
	return `[${type.toUpperCase()} - ${sec}] ${str}`;
};

module.exports = format;
