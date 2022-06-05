function parseExpression(program) {
	program = skipSpace(program);
	let match, expr;
	if (match = /^"([^"]*)"/.exec(program))
		expr = {type: "value", value: match[1]};
	else if (match = /^\d+\b/.exec(program))
		expr = {type: "value", value: Number(match[0])};
	else if (match = /^[^\s(),#"]+/.exec(program))
		expr = {type: "word", name: match[0]};
	else
		throw new SyntaxError("Unexpected syntax: " + program);
	return parseApply(expr, program.slice(match[0].length));
}

function skipSpace(string) {
	let first = string.search(/\S/);
	if (first == -1) return "";
	return string.slice(first);
}

function parseApply(expr, program) {
	program = skipSpace(program);
	if (program[0] != "(")
		return {expr: expr, rest: program};
	program = skipSpace(program.slice(1));
	expr = {type: "apply", operator: expr, args: []};
	while (program[0] != ")") {
		let arg = parseExpression(program);
		expr.args.push(arg.expr);
		program = skipSpace(arg.rest);
		if (program[0] == ",")
			program = skipSpace(program.slice(1));
		else if (program[0] != ")")
			throw new SyntaxError("Expected ',' or ')'");
	}
	return parseApply(expr, program.slice(1));
}

function parse(program) {
	let {expr, rest} = parseExpression(program);
	if (skipSpace(rest).length > 0)
		throw new SyntaxError("Unexpected text after program");
	return expr;
}

// console.log(parse("multiplier(1)(2)"));

const specialForms = Object.create(null);

function evaluate(expr, scope) {
	if (expr.type == "value") {
		return expr.value;
	} else if (expr.type == "word") {
		if (expr.name in scope) 
			return scope[expr.name];
		else 
			throw new ReferenceError(`Undefined binding: ${expr.name}`);
	} else if (expr.type == "apply") {
		// 이렇게도 destructuring
		let {operator, args} = expr;
		if (operator.type == "word" && operator.name in specialForms)
			return specialForms[operator.name](expr.args, scope);
		else {
			let op = evaluate(operator, scope);
			if (typeof op == "function")
				return op(...args.map(arg => evaluate(arg, scope)));
			else
				throw new TypeError("Applying a non-function.");
		}
	}
}

specialForms.if = (args, scope) => {
	if (args.length != 3)
		throw new SyntaxError("Wrong number of args to if");
	else if (evaluate(args[0], scope) !== false)
		return evaluate(args[1], scope);
	else
		return evaluate(args[2], scope);
};

specialForms.while = (args, scope) => {
	if (args.length != 2) 
		throw new SyntaxError("Wrong number of args to while");
	while (evaluate(args[0], scope) !== false) 
		evaluate(args[1], scope);

	return false
};

specialForms.do = (args, scope) => {
	let value = false;
	for (let arg of args)
		value = evaluate(arg, scope);
	return value;
};

specialForms.define = (args, scope) => {
	if (args.length != 2 || args[0].type != "word")
		throw new SyntaxError("Incorrect use of define");
	let value = evaluate(args[1], scope);
	scope[args[0].name] = value;
	return value;
};

const topScope = Object.create(null);
topScope.true = true;
topScope.false = false;

for (let op of ["+", "-", "*", "/", "==", "<", ">"])
	topScope[op] = Function("a, b", `return a ${op} b;`);

topScope.print = value => {
	console.log(value);
	return value;
};

function run(program) {
	return evaluate(parse(program), Object.create(topScope));
}

/*
run(`
do(define(total, 0),
	define(count, 1),
	while(<(count, 101),
		do(define(total, +(total, count)),
			define(count, +(count, 1)))),
	print(total))
`);
*/

specialForms.fun = (args, scope) => {
	if (!args.length) throw new SyntaxError("Functions need a body");
	let body = args[args.length-1];
	let params = args.slice(0, args.length-1).map(expr => {
		if (expr.type != "word") throw new SyntaxError("Parameter names must be words");
		return expr.name;
	})
	return function() {
		if (arguments.length != params.length) throw new TypeError("Wrong number of arguments");
		// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/create
		// The Object.create() method creates a new object, using an existing object as the prototype of the newly created object.
		let localScope = Object.create(scope);
		for (let i=0; i<arguments.length; i++)
			localScope[params[i]] = arguments[i]; // Parameter와 argument의 차이
		return evaluate(body, localScope);
	};
};

const code = `
do(
	define(pow, fun(base, exp, if(==(exp,0),1,*(base,pow(base,-(exp,1)))))),
	print(pow(2,10))
)
`



// Exercise-Arrays
// Modify these definitions...

topScope.array = (...values) => Array(...values); // 그냥 value 건내면 안됨
// (...values) => values;

topScope.length = (array) => { return array.length };

topScope.element = (array, n) => { return array[n] };

run(`
do(define(sum, fun(array,
     do(define(i, 0),
        define(sum, 0),
        while(<(i, length(array)),
          do(define(sum, +(sum, element(array, i))),
             define(i, +(i, 1)))),
        sum))),
   print(sum(array(1, 2, 3))))
`);



// Exercise-Comments
// This is the old skipSpace. Modify it...
function skipSpace(string) {
  let first = string.search(/\S/);
  if (first == -1) return "";
  let temp = string.slice(first);
  if (temp[0] == "#") {
	  first = temp.search(/\n/);
	  return skipSpace(temp.slice(first));
  }
  return temp;
}

console.log(parse("# hello\nx"));
// → {type: "word", name: "x"}

console.log(parse("a # one\n   # two\n()"));
// → {type: "apply",
//    operator: {type: "word", name: "a"},
//    args: []}g



// Excersice-Fixing Scope
specialForms.set = (args, scope) => {
	if (args.length != 2 || args[0].type != "word")
		throw new SyntaxError("Incorrect use of set");
	let name = args[0].name;
	let value = evaluate(args[1], scope);
	if (Object.prototype.hasOwnProperty(name)) {
		scope[name] = value;
	} else {
		let parent = scope;
		do {
			parent = Object.getPrototypeOf(parent);
			if (!parent) throw new ReferenceError(`No binding ${name} in scope`);
		} while (!Object.prototype.hasOwnProperty.call(parent, name));
		parent[name] = value;
	}
	return value;	
};

run(`
do(define(x, 4),
   define(setx, fun(val, set(x, val))),
   setx(50),
   print(x))
`);
// → 50
run(`set(quux, true)`);
// → Some kind of ReferenceError
