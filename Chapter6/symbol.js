let sym = Symbol("name");
console.log(sym == Symbol("name"));

class Rabbit {
	constructor(name) {
		this.name = name;
	}
}

Rabbit.prototype[sym] = 55;

let blackRabbit = new Rabbit('black');
console.log(blackRabbit[sym]);
console.log(blackRabbit.name);

