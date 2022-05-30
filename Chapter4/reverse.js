function reverseArray(arr) {
	let ret = [];
	for (let i=0; i<arr.length; i++) 
		ret.push(arr[arr.length-i-1])
	return ret;
}

function reverseArrayInPlace(arr) {
	// arr = reverseArray(arr); 안됨!!
	let reversed = reverseArray(arr);
	for (let idx=0; idx<arr.length; idx++)
		arr[idx] = reversed[idx];
}

let arr = [1, 2, 3, 4, 5];

// Thinking about side effects and pure functions, which variant do you expect to be useful in more situations?
// Which one runs faster?
console.log(reverseArray(arr));
console.log(reverseArrayInPlace(arr));
console.log(arr);

