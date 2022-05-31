require("./data/scripts.js");

console.log(SCRIPTS.filter(s => s.direction === "ttb").map(s => s.name));
console.log([1, 2, 3, 4, 5].reduce((a, b)=>a+b));

function charCnt(script) {
	return script.ranges.reduce((count, [from, to]) => {
			return count + (to - from);
	}, 0);
}

console.log(SCRIPTS.reduce((a, b) => {
	return charCnt(a) < charCnt(b) ? b : a;
}));

console.log(typeof []);
// TypeError: Reduce of empty array with no initial value
// console.log([].reduce((a, b) => a+b));

function characterScript(code) {
	for (let script of SCRIPTS) {
		if (script.ranges.some(([from, to]) => {
			return code >= from && code < to;
		})) {
			return script;
		}
	}
	return null;
}

console.log(characterScript(121));

function countBy(items, groupName) {
	let counts = [];
	for (let item of items) {
		let name = groupName(item);
		let known = counts.findIndex(c => c.name == name);
		if (known!==-1)
			counts[known].count++;
		else 
			counts.push({name, count: 1});
	}
	return counts;
}

function textScripts(text) {
	let scripts = countBy(text, char => {
		let script = characterScript(char.codePointAt(0));
		return script ? script.name : "none";
	})

	let total = scripts.reduce((n, {count}) => n + count, 0);

	if (total == 0) return "No scripts found";

	return scripts.map(({name, count}) => {
		return `${Math.round(count * 100 / total)}% ${name}`;
	}).join(",");
}

console.log(textScripts(""));
console.log(textScripts("Hello 안녕하세요!"));

function dominantDirection(str) {
	let scripts = countBy(str, char => {
		let script = characterScript(char.codePointAt(0));
		return script ? script.direction : "None";
	});
	return scripts.reduce((val, next) => val.count > next.count ? val : next).name;
}

console.log(dominantDirection("Hello, 가나다라마바"));

