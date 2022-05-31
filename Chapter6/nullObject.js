let a = {};
console.log("toString" in a);
// Object.keys returns only as object's own keys, not those in the prototype.
console.log(Object.keys(a));

let b = Object.create(null);
console.log("toString" in b);

