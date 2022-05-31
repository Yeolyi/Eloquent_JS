function speak(line) {
	console.log(`The ${this.type} rabbit says '${line}'`);
}

speak("Hello");

let whiteRabbit = {type: "white", speak};
whiteRabbit.speak();

speak.call(whiteRabbit, "Bye");

