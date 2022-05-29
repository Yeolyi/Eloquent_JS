function countBs(str) {
	return countChar(str, "B");
}

function countChar(str, c) {
	let cnt = 0;
	for (let i=0; i<str.length; i++)
		if (str[i]==c)
			cnt++;
	return cnt;
}

console.log(countBs("aBBcccBBBBdddd"));

