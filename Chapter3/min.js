function min(a, b) {
	return a > b ? b : a;
}

for (let i=0; i<10; i++)
	for (let j=0; j<10; j++)
		if (i != j)
			console.log(`min(${i}, ${j}) = ${min(i, j)}`);

