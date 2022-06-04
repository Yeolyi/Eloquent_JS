const defineRequestType = require("./source/crow-tech.js").defineRequestType;

(() => {
function requestType(name, handler) {
	defineRequestType(name, (nest, content, source, callback) => {
		try {
			Promise.resolve(handler(nest, content, source))
				.then(response => callback(null, response), failure => callback(failure));
		} catch(e) {
			callback(e);
		}
	});
}
exports.requestType = requestType;
module.exports = exports;
})()

