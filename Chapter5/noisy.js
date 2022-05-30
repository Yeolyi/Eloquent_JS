function noisy(f) {
	return (...args) => {
		// 공백 필요 없음
		console.log("calling with", args);
		let result = f(...args);
		console.log("called with", args, ", returned", result);
		return result;
	}; // 세미콜론
}
noisy(Math.min)(1, 3, 2, 6, 4);	

