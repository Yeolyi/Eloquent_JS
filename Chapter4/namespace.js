var a = 10;
var a = 12;
console.log(a);

// let a = 13;
let b = 13;
// let b = 14;

function a() {
	console.log("a");
}

/*
function b() {
	console.log("b");
}
*/ // identifier b is already taken

function c() {
	console.log("c");
}

function c() {
	console.log("d");
}

// a(); a is not a function
c();

