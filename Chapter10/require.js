const fs = require('fs');

myRequire.cache = Object.create(null);

function myRequire(name) {
	if (!(name in myRequire.cache)) {
		// 비동기 처리하는 로직으로 수정 필요
		fs.readFile(name, 'utf-8', function(err, data) {
			let module = {exports: {}};
			myRequire.cache[name] = module;
			// 왜 세개나 됨?
			let wrapper = Function("require, exports, module", code);
			wrapper(myRequire, module.exports, module);
		});
	}
	return myRequire.cache[name].exports;
}

const val = myRequire("./requireTest.js").val;
console.log(val);

