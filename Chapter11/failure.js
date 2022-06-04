new Promise((_, reject) => reject(new Error("Fail")))
	.then(value => console.log("Handler 1"))
	.catch(reason => {
		console.log("Caught failure " + reason);
		return "nothing";
	})
	.then(value => console.log("Handler 2", value));

new Promise((_, reject) => reject(new Error("Uncaught Error!!!")))
	.then(value => console.log("Blah"))
	.then(value => console.log("Blah"))
	.then(value => console.log("Blah"))
	.then(value => console.log("Blah"))

