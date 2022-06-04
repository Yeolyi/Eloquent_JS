const crowTech = require("./source/crow-tech.js");
const bigOak = crowTech.bigOak;
const defineRequestType = crowTech.defineRequestType;

// This style of programming is workable, 
// but the indentation level increases with each asynchronous action 
// because you end up in another function.
bigOak.readStorage("food caches", caches => {
	let firstCache = caches[0];
	bigOak.readStorage(firstCache, info => {
			console.log(info);
	});
});

defineRequestType("note", (nest, content, source, done) => {
	console.log(`${nest.name} received note: ${content}`);
	done();
});

bigOak.send("Cow Pasture", "note", "Let's caw loudly at 7PM", () => console.log("Note delivered."));

