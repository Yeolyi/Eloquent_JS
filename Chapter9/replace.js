console.log("papa".replace("p", "m"));

console.log("Borobudur".replace(/[ou]/, "a"));
console.log("Borobudur".replace(/[ou]/g, "a"));

console.log(
	"Liskov,Barbars\nMcCarty,John\nWadler,Philip"
		.replace(/(\w+),(\w+)/g, "$2 $1")
);

let s = "the cia and fbi";
console.log(s.replace(/\b(fbi|cia)\b/g, str => str.toUpperCase()));

let stock = "1 lemon, 2 cabbages, and 101 eggs";
function minusOne(match, amount, unit) {
	amount = Number(amount) - 1;
	if (amount == 1)
		unit = unit.slice(0, unit.length-1);
	else if (amount == 0)
		amount = "no";
	return amount + " " + unit;
}
console.log(stock.replace(/(\d+) (\w+)/g, minusOne));

function stripComments(code) {
	return code.replace(/\/\/.*|\/\*[^]*\*\//g, "");
}

console.log(stripComments("1 + /* 2 */3"));
console.log(stripComments("x = 10; // ten"));
console.log(stripComments("1 /* a */ + /* b */ 1"));


