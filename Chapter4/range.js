// Set a default parameter value for a JavaScript function
// https://stackoverflow.com/a/894877
function range(lo, hi, step=1) {
	let arr = [];
	for (let i=lo; lo < hi ? i<=hi : hi<=i; i+=step)
		arr.push(i);
	return arr;
}

function sum(arr) {
	let ret=0;
	for (let i of arr)
		ret += i;
	return ret;
}

console.log(sum(range(1,10)));
console.log(range(1, 10, 2));
console.log(range(5, 2, -1));

