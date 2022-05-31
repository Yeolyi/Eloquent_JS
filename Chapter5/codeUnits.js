let emojis = "😀😃";
console.log(emojis.length);

console.log(emojis[0]);
console.log(Number(emojis[0]));

console.log(emojis.charCodeAt(0));
console.log(emojis.charCodeAt(1));
console.log(emojis.codePointAt(0));

let str = "ABC";
console.log(str.charCodeAt(0));
console.log(str[0]);

for (let c of emojis) 
	console.log(c);

