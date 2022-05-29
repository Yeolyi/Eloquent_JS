function square(x) { return x*x; }
console.log(square(4, true, "hedgehog"));

const missingArgu = (x) => x;
console.log(missingArgu(10));
console.log(missingArgu());

function minus(a, b) {
	if (b === undefined) return -a;
	return a-b;
}

console.log(minus(10));
console.log(minus(10, 5));

function greeting(person = "unknown") {
	console.log(`Hello, ${person}!`);
}

greeting();

