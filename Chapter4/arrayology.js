let todoList = []

function remember(task) {
	todoList.push(task);
}
function getTask() {
	return todoList.shift();
}
function rememberUrgently(task) {
	todoList.unshift(task);
}

remember("groceries");
remember("charge phone");
rememberUrgently("call her");

while (todoList.length !== 0) {
	console.log(getTask());
}

// Both indexOf and lastIndexOf take an optional second argument that indicates where to start searching
console.log([1,2,3,2,1].indexOf(2));
console.log([1,2,3,2,1].lastIndexOf(2));
console.log([1,2,3,2,1].indexOf(2,2));
console.log([1,2,3,2,1].lastIndexOf(3,3));
console.log([1,2,3,2,1].indexOf(4));

console.log([0,1,2,3,4,5].slice(2,4));
console.log([0,1,2,3,4,5].slice(2));

let arr1 = [1,2,3,4,5];
let arr2 = arr1;
let arr3 = arr1.slice();
arr1[0] = 100;
console.log(arr1, arr2, arr3);

function remove(arr, index) {
	return arr.slice(0, index).concat(arr.slice(index+1));
	// return arr.slice(0, index) + arr.slice(index+1);
	// 냅다 문자열로 만들어버림
}

console.log(remove([1,2,3], 1));
console.log([1,2,3]+[4,5,6]);

