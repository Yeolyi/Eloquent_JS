// It just puts ints interface into the global scope
// and expects its dependencies, if any, to do the same.
// For a long time this was the main approach used in web programming.
const weekDay = function() {
	const names = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
	return {
		name(number) { return names[number]; },
		number(name) { return names.indexOf(name); }
	};
}();

console.log(weekDay.name(0));

