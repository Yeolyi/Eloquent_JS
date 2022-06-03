console.log(new Date());

// JavaScript uses a convention where month numbers start at zero, yet day numbers start at one.
console.log(new Date(2022, 00, 13));

let unixTimeStart = new Date(1970, 0, 1, 0, 0, 0, 123);
console.log(unixTimeStart); // ????
console.log(unixTimeStart.getTime());

console.log(new Date(0));
console.log(new Date(0).getTime());

function getDate(string) {
	let exec = /(\d{4})-(\d{1,2})-(\d{1,2})/.exec(string);
	console.log(exec);
	let [_, y, m, d] = exec;
	return new Date(y, m-1, d);
}

console.log(getDate("2022-01-01"));

