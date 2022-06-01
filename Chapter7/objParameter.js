function test(obj) {
	obj = { changed: true };
}

let obj1 = { changed: false };
test(obj1);
console.log(obj1);

