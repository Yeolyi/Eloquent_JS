// Newer versions of JavaScript -- specifically ECMAScript 6 -- have added support for binary 
// https://stackoverflow.com/questions/2803145/is-there-0b-or-something-similar-to-represent-a-binary-number-in-javascript
for (let i=1; i<101; i++) {
	let three = i%3 ? 0b0 : 0b1;
	let five = i%5 ? 0b0: 0b10;
	// Swift에서도 개행 이렇게 했었나?
	switch (three|five) {
		case 0b00:
			console.log(i);
			break;
		case 0b01:
			console.log("Fizz");
			break;
		case 0b10:
			console.log("Buzz");
			break;
		case 0b11:
			console.log("FizzBuzz");
			break;
	}
}	

