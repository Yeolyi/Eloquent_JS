console.log(require("./format-date"));
// The interface of the ordinal package is not an object but a function.
console.log(require("ordinal"));

const {formatDate} = require("./format-date");
console.log(formatDate(new Date(2022, 5, 4), "dddd the Do"));

const {parse} = require("ini");
console.log(parse("x=10\ny=20"));

