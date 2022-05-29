let day1 = {
	squirrel: false,
	events: ["work", "touched tree"]
};

console.log(day1.squirrel);
console.log(day1.wolf);
day1.wolf = false;
console.log(day1.wolf);

day1.wolf = undefined;
console.log("wolf" in day1);
delete day1.wolf;
console.log("wolf" in day1);

console.log(Object.keys(day1)); // 객체 내 메소드가 아님에 주의

console.log(day1);
Object.assign(day1, {cat: true});
console.log(day1);

