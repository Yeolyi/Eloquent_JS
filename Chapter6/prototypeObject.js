function Person() {}
Person.prototype.eyes = 2;

let a = new Person();
let b = new Person();
a.eyes = 3;
console.log(a.eyes);
console.log(b.eyes);

a.__proto__.eyes = 3;
console.log(a.__proto__);
console.log(b.__proto__);

