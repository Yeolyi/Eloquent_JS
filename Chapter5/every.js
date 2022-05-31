function every1(arr, predicate) {
	for (let x of arr)
		if (!predicate(x))
			return false;
	return true;
}

console.log(every1([2,4,6,8,10], x=>x%2==0));
console.log(every1([2,4,6,9,10], x=>x%2==0));

function every2(arr, predicate) {
	let invert = x => !predicate(x)
	let result = arr.some(invert);
	return result==false;
}

console.log(every2([2,4,6,8,10], x=>x%2==0));
console.log(every2([2,4,6,9,10], x=>x%2==0));

