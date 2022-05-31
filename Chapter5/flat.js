function flat(arr) {
	return arr.reduce((val, next) => {
		return val.concat(...next);
	})
}

console.log(flat(([[1], [1, 2], [3, 5, 8]])));

