// We'll have to take control of loading dependencies.
// Doing that requried being able to execute strings as code.

const x = 1;
function evalAndReturnX(code) {
	eval(code);
	return x;
}

console.log(evalAndReturnX("var x = 2"));
console.log(x);

let plusOne = Function("n", "return n+1;");
console.log(plusOne(4));

