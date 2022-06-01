let a = { value: 10 };
let b = Object.freeze(a);

b.value = 20;
console.log(a.value);
console.log(b.value);

a.value = 20;
console.log(a.value);
console.log(b.value);

