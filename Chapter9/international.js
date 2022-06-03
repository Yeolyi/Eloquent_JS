console.log(/🌹{3}/.test("🌹🌹🌹"));
console.log(/<.>/.test("<🌹>"));
console.log(/<.>/u.test("<🌹>"));

console.log(/\p{Script=Greek}/u.test("α"));
console.log(/\p{Script=Arabic}/u.test("α"));
console.log(/\p{Alphabetic}/u.test("α"));
console.log(/\p{Alphabetic}/u.test("!"));

