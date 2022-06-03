let pattern = /y/g;
pattern.lastIndex = 3;
let match = pattern.exec("xyzzy");
console.log(match.index);
// If the match was successful, 
// the call to exec automatically updates the lastIndex property oy point after the match.
// If no match was found, lastIndex is set back to zero.
console.log(pattern.lastIndex);

let global = /abc/g;
console.log(global.exec("xyz abc"));

let stinky = /abc/y;
console.log(stinky.exec("xyz abc"));
console.log(stinky.lastIndex);
stinky.lastIndex = 4;
console.log(stinky.exec("xyz abc"));
console.log(stinky.lastIndex);

let digit = /\d/g;
console.log(digit.exec("here it is: 1"));
console.log(digit.exec("and now: 1"));

console.log("Banana".match(/an/));
console.log("Banana".match(/an/g));
