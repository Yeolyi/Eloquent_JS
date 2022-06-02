class MultiplicatorUnitFailure extends Error {}

function primitiveMultiply(a, b) {
	let random = Math.random();
	if (random < 0.8)
		throw new MultiplicatorUnitFailure();
	else
		return a*b;
}

while (true) {
	try {
		let value = primitiveMultiply(3, 7);
		console.log(value);
		break;
	} catch(e) {
		if (e instanceof MultiplicatorUnitFailure)
			console.log("Multiply failed");
	}
}

