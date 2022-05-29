// square1(); // cannot access square1 before initialization
square2();

const square1 = function() {
	console.log("square1");
};

// They are conceptually moved to the top of their scope and can be used by all the code in that scope.
function square2() {
	console.log("square2");
}

