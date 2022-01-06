const format = require("./format");
const color = require("./color");

const logger = {
	info: (str) => {
		console.log(color.FgCyan, format("info", str));
	},
	warn: (str) => {
		console.log(color.FgYellow, format("warn", str));
	},
	error: (str) => {
		console.log(color.FgRed, format("error", str));
	},
};

const test = () => {
	logger.info("test");
	logger.warn("test");
	logger.error("test");
};
test();
