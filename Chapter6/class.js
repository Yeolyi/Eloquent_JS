class Rabbit {
	constructor(type) {
		this.type = type;
	}
	speak(line) {
		console.log(`The ${this.type} rabbit says '${line}'`);
	}
}

let killerRabbit = new Rabbit("killer");
killerRabbit.speak("helloooooooo");

let object = new class { getWord() { return "hello"; } };
console.log(object.getWord());

