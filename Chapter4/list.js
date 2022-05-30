function arrayToList(arr) {
	let value = arr.shift();
	if (!value) return null;
	return { value, rest: arrayToList(arr) };
}

function wrongListToArray(list) {
	if (!list) return; // undefined를 반환?
	return list.value + wrongListToArray(list.rest);
}

console.log(wrongListToArray([1,2]));
console.log(undefined + 1);

function listToArray(list) {
	// if (!('value' in list)) return; // Cannot use in to 어쩌구 null
	if (!list) return [];
	return [list.value].push(listToArray(list.rest));
}

let list = arrayToList([1,3,2,1,3,3,2,1]);
console.log(list);
console.log(listToArray(list));

