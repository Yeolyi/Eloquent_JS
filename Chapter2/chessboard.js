let size = 24;
for (let i=1; i<=size; i++) {
	let str = "";
	for (let j=1; j<=size; j++) {
		if ((i+j)%2) {
			str += "#";
		} else {
			str += " ";
		}
	}
	console.log(str);
}

