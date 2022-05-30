function phi([n00, n01, n10, n11]) {
	return (n11 * n00 - n10 * n01) /
    Math.sqrt((n10 + n11) * (n00 + n01) *
              (n01 + n11) * (n00 + n10));
}

let {name} = {name: "Faraji", age: 23};
console.log(name);

console.log(phi([1,2,3]));

let {test} = {};
console.log(test);

let {test2} = undefined;
// TypeError: Cannot destructure property 'test2' of 'undefined' as it is undefined.

