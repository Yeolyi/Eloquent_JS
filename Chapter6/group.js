class Group {
	constructor() {
		this.content = [];
	}
	add(x) {
		if (this.content.indexOf(x) === -1) 
			this.content.push(x);
	}
	delete(x) {
		const idx = this.content.indexOf(x);
		if (idx !== -1)
			this.content.splice(idx, 1);
	}
	has(x) {
		return this.content.indexOf(x) !== -1;
	}
	static from(iterable) {
		let group = new Group();
		for (let x of iterable) 
			group.add(x);
		return group;
	}
}

let g = new Group();

for (let x of [1,3,2,4,3,5,1,3,7,1])
	g.add(x);

console.log(g.has(1));
console.log(g.has(5));
console.log(g.has(11));
g.delete(5);
console.log(g.has(5));

g = Group.from([1,2,3,4,3,2,1]);
console.log(g.has(4));
console.log(g.has(-1));
g.delete(-1);
g.delete(1);
console.log(g.has(1));

console.log("---------");

class GroupIterator {
	constructor(group) {
		this.idx = 0;
		this.content = group.content;
	}
	next() {
		if (this.content.length <= this.idx)
			return { done: true };
		return { value: this.content[this.idx++], done: false};
	}
}

Group.prototype[Symbol.iterator] = function() {
	return new GroupIterator(this);
}

for (let x of g) 
	console.log(x);


