const box = {
	locked: true,
	unlock() { this.locked = false; },
	lock() { this.locked = true; },
	_content: [],
	get content() {
		if (this.locked) throw new Error("Locked!");
		return this._content;
	}
};

function withBoxUnlocked(f) {
	box.unlock();
	// catch가 없으면 에러는 다음으로 전파되는 듯
	try {
		f();
	} finally {
		box.lock();
	}
}

function wrong() {
	throw new Error();
}
box.locked = false;

try {
	withBoxUnlocked(wrong);
} catch(e) {
}

console.log(box.locked);
	

