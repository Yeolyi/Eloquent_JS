// The ability to treat functions as values
// combined with the fact that local binding are re-created every time a function is called, 
// brings up an interesting question.
// What happens to local bindings when the function call that created them is no longer active?

function multiplierMaker(n) {
	return (x) => n*x;
}

let twoMultiplier = multiplierMaker(2);
console.log(twoMultiplier(3));
console.log(twoMultiplier(4));

let threeMultiplier = multiplierMaker(3);
console.log(threeMultiplier(3));
console.log(threeMultiplier(4));

// This feature -being able to reference a specific instance of a local binding in an enclosing scope- is called closure
// In a computer system, any time a new context is created based on some model, it is said that the model has been instantiated.(Wikipedia)

