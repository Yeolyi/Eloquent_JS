let obj = [{value: 1}, {value: 2}, {value: 3}]
let mapped = obj.map(x => { 
		x.value = 100;
		return x
})
console.log(obj);
console.log(mapped);

obj[0].value = 200;

console.log(obj);
console.log(mapped);

let obj2 = obj[1];
obj2.value = 300;
console.log(obj);

