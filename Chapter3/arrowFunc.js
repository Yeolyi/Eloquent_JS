const power = (base, exponent) => {
	let result = 1;
	for (let cnt=0; cnt<exponent; cnt++)
		result *= base;
	return result;
};

console.log(power(2, 10));

const square1 = (x) => { return x*x };
const square2 = x => x*x;

