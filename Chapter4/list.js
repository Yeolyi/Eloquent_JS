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
	return [list.value, ...listToArray(list.rest)];
}
// https://stackoverflow.com/questions/14723848/push-multiple-elements-to-array
console.log([2, 3, 4].push(3));
console.log([2, 3, 4].concat(3));

let list = arrayToList([1,3,2,1,3,3,2,1]);
// https://stackoverflow.com/questions/10729276/how-can-i-get-the-full-object-in-node-jss-console-log-rather-than-object
console.dir(list, {depth: null});
console.dir(listToArray(list), {depth: null});

function prepend(element, list) {
	return {value: element, rest: list};
}

console.dir(prepend(123, list));

function nth(list, idx) {
	if (!list) return undefined;
	if (idx === 0) return list.value;
	return nth(list.rest, idx-1);
}

console.log(undefined<1);
console.log(null>1);

for (let i=0; i<10; i++)
	console.log(nth(list, i));

