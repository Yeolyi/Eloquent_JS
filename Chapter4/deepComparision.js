function deepEqual(a, b) {
	if (a === null && b === null) return true;
	if (a === null || b === null) return false;

	if (typeof a === "object" && typeof b === "object") {
		// https://jsdev.kr/t/for-in-vs-for-of/2938
		for (let key in a)
			if (!deepEqual(a[key], b[key]))
				return false;
		return true;
	}
	if (typeof a !== "object" && typeof b !== "object")
		return a === b;
	return false;
}

let a = {val: 1, test: 12, hello: 133, next: {inner: 23}};
let b = {val: 1, test: 13, next: {inner: {inner: 23}}};
console.log(deepEqual(a, b));
console.log(deepEqual(a, a));

