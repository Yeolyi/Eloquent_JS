function loop(val, test, update, body) {
	while (test(val)) {
		body(val);
		val = update(val);
	}
}

loop(1, x=>x<10, x=>x+1, x=>console.log(x));

