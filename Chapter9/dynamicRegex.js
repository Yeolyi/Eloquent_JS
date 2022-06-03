let name = "성열";
let text = "안녕 내 이름은 성열";
let reg = new RegExp("\\b(" + name + ")\\b", "giu"); // global, case insensitive

console.log(reg);
console.log(text.replace(reg, "✨$1✨"));
console.log(text.match(reg)); // 왜 안되지????

name = "dea+hl[]rd";
text = "This dea+hl[]rd guy is super annoying";
let escaped = name.replace(/[\\[.+*?(){|^$]/g, "\\$&");
reg = new RegExp("\\b" + escaped + "\\b", "gi");
console.log(escaped);
console.log(text.replace(reg, "_$&_"));

