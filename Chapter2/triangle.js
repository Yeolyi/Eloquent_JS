let str = "#"
// for문 안에서 let도 C처럼 가능
for (let i=1; i<=7; i++) {
	console.log(str);
	str += "#";
}
console.log(str.length);

