const regex = [
	/^ca(r|t)$/,
	/^pr?op$/,
	/^ferr(et|y|ari)$/,
	/.?ious$/,
	/^\s[.|,|:|;]$/, // https://stackoverflow.com/questions/19976018/does-a-dot-have-to-be-escaped-in-a-character-class-square-brackets-of-a-regula
	/^\w{6,}$/,
	/^\b[^eE\s]+\b$/
];

const tests = [
	["car", "cat", "cak"],
	["pop", "prop", "ppop"],
	["ferret", "ferry", "ferrari", "ferr", "ferrat"],
	["ious", "furious", "iousious", "ous"],
	[" .", " ,", "  ", ";"],
	["abcdef", "abcde", "  abcdef", "abc def"],
	["abcd", "abcdE", "abcde", " abcd", "abc de", "abc df"]
];

for (let idx=0; idx<regex.length; idx++) {
	console.log((idx+1) + " ----------");
	const targetTests = tests[idx];
	for (let test of targetTests)
		console.log(test + ":" + regex[idx].test(test));
}
	
