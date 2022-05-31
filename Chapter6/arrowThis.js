// If argument to map was written using the function keyword, the code wouldn't work.
function normalize() {
	console.log(this.coords.map(n=>n/this.length));
}

normalize.call({coords: [0, 2, 3], length: 5});

function returnThis() {
	return this;
}

console.log(returnThis());
console.log(this);

let apple = {type: "fruit"};
console.log(returnThis.call(apple));

// https://nykim.work/71
var num = 0;

function showNum() {
	console.log(this.num);
}

var obj = {
	num: 200,
	func: showNum
}

showNum(); // 왜 예시랑 다르게 undefined?, https://www.zerocho.com/category/NodeJS/post/5b67e8607bbbd3001b43fd7b 노드는 또 다른 듯.
obj.func();

