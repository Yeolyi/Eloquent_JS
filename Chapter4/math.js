function randomPointOnCircle(radius) {
	// 0..<1
	let angle = Math.random() * radius * Math.PI;
	return { x: radius*Math.cos(angle), y: radius*Math.sin(angle) };
}
console.log(randomPointOnCircle(2));

console.log(Math.floor(Math.random() * 10));

