function printAll(...str) {
	// of 대신 in으로  하면 키값을 주는 듯?
	// for (let temp in str) console.log(str[temp]);
	for (let temp of str) {
		console.log(temp);
	}
}

printAll("A", "B", "C", "D");

let obj = { A: "a", B: "b", C: "c" };
for (let i in obj) console.log(i);
// for (let i of obj) console.log(i); obj is not iterable

function test(a, ...b) {
	console.log(a);
	console.log(b);
}

test(1, 2);
test(1, 2, 3);
test(1);
test(1, [2, 3], 4);
test(1, ...[2, 3], 4); // spreadout

