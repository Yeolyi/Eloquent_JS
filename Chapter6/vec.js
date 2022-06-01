class Vec {
	constructor(x, y) {
		this.x = x;
		this.y = y;
	}
	plus(vec) {
		return new Vec(this.x+vec.x, this.y+vec.y);
	}
	minus(vec) {
		return new Vec(this.x-vec.x, this.y-vec.y);
	}
	get length() {
		return Math.sqrt(this.x*this.x+this.y*this.y);
	}
}

let a = new Vec(1, 1);
console.log(a.length);
let b = new Vec(2, 3);
console.log(a.plus(b).length);
console.log(a.minus(b));

a.length = 3;
console.log(a.length);
