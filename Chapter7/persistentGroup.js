class PGroup {
	add(x) {
		let group = new PGroup();
		if (this.content === undefined)
			group.content = [x];
		else if (!this.content.includes(x))
			group.content = this.content.concat(x);
		return group;
	}

	delete(x) {
		if (this.content === undefined) return;
		let group = new PGroup();
		group.content = this.content.filter(item => item!=x);
		return group;
	}

	has(x) {
		if (this.content === undefined) return false;
		return this.content.indexOf(x) !== -1;
	}
}

PGroup.empty = new PGroup();

let group = PGroup.empty;
for (let x of [5,6,7,7,1,3,5])
	group = group.add(x);

console.log(group.content);

console.log(group.has(5));
console.log(group.has(10));

let group2 = group.add(10);
console.log(group.has(10));
console.log(group2.has(10));

let group3 = group.delete(5);
console.log(group.has(5));
console.log(group3.has(5));

