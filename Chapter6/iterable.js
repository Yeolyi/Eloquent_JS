let okIterator = "OK"[Symbol.iterator]();
console.log(okIterator.next());
console.log(okIterator.next());
console.log(okIterator.next());
console.log(okIterator.next());

class Matrix {
	constructor(w, h, element = (x, y) => undefined) {
		this.w = w;
		this.h = h;
		this.content = [];

		for (let y=0; y<h; y++)
			for (let x=0; x<w; x++)
				this.content[y*w+x] = element(x, y);
	}

	get(x, y) {
		return this.content[y*this.w+x];
	}

	set(x, y, value) {
		this.content[y*this.w+x] = value;
	}
}

class MatrixIterator {
	constructor(matrix) {
		this.x = 0;
		this.y = 0;
		this.matrix = matrix;
	}

	next() {
		if (this.y == this.matrix.h) return {done: true};

		let value = {x: this.x, y: this.y, value: this.matrix.get(this.x, this.y)};

		this.x++;
		if (this.x == this.matrix.w) {
			this.x = 0;
			this.y++;
		}
		return {value, done: false};
	}
}

Matrix.prototype[Symbol.iterator] = function() {
	return new MatrixIterator(this);
}

let matrix = new Matrix(2, 2, (x, y) => `value ${x}, ${y}`);
for (let {x, y, value} of matrix) 
	console.log(x, y, value);

