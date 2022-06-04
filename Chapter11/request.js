class Timeout extends Error {}

// Promises can be resolved (or rejected) only once, this will work. 
// The first time resolve or reject is called determines the outcome of the promise, 
// and further calls caused by the request coming back after another request finished are ignored.
function request(nest, target, type, content) {
	return new Promise((resolve, reject) => {
		let done = false;
		function attempt(n) {
			nest.send(target, type, content, (failed, value) => {
				done = true;
				if (failed) reject(failed);
				else resolve(value);
			});
			setTimeout(() => {
				if (done) return;
				else if (n < 3) attempt(n+1);
				else reject(new Timeout("Timed out"));
			}, 250);
		}
		attempt(1);
	});
}

