// throw new Error("Error");

function first() {
	second();
}

function second() {
	third();
}

function third() {
	throw new Error("Hello");
}

first();

