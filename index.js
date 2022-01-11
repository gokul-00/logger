const format = require("./format");
const color = require("./color");
const fs = require("fs");
const logFile = fs.createWriteStream("log.txt", {
	flags: "a",
});

const logger = {
	info: (str) => {
		let sec = Date.now();
		console.log(color.FgCyan, format("info", str, sec));
		let err = new Error();
		let stack = err.stack.toString().split(/\r\n|\n/);
		logFile.write(
			`{Type: INFO, Timestamp: ${sec}, Message: ${str}, Trace: ${stack[2].trim()}}\n`
		);
	},
	warn: (str) => {
		let sec = Date.now();
		console.log(color.FgYellow, format("warn", str, sec));
		let err = new Error();
		let stack = err.stack.toString().split(/\r\n|\n/);
		logFile.write(
			`{Type: WARN, Timestamp: ${sec}, Message: ${str}, Trace: ${stack[2].trim()}}\n`
		);
	},
	error: (str) => {
		let sec = Date.now();
		console.log(color.FgRed, format("error", str, sec));
		let err = new Error();
		let stack = err.stack.toString().split(/\r\n|\n/);
		logFile.write(
			`{Type: ERROR, Timestamp: ${sec}, Message: ${str}, Trace: ${stack[2].trim()}}\n`
		);
	},
};

module.exports = logger;
