class InputError extends Error {}
class InvalidDirection extends Error {}

function promptDirection(question) {
	let result = prompt(question).toLowerCase();
	if (result == "left") return "L";
	if (result == "right") return "R";
	if (result == "front") throw new InvalidDirection("Invalid direction: " + result);
	throw new InputError("Invalid input: " + result);
}

for (;;) {
	try {
		let dir = promptDirection("Where?");
		console.log("You chose", dir);
		break;
	} catch (e) {
		if (e instanceof InputError) 
			console.log(e);
		else
			console.log(e);
	}
}

