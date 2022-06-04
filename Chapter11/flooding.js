const crowTech = require("./source/crow-tech.js");
const everywhere = crowTech.everywhere;
const bigOak = crowTech.bigOak;

const requestType = require("./requestType.js").requestType;

everywhere(nest => { nest.state.gossip = [] });

function sendGossip(nest, message, exceptFor = null) {
	nest.state.gossip.push(message);
	for (let neighbor of nest.neighbors) {
		if (neighbor == exceptFor) continue;
		request(nest, neighbor, "gossip", message);
	}
}

requestType("gossip", (nest, message, source) => {
	if (nest.state.gossip.includes(message)) return;
	console.log(`${nest.name} received gossip '${message}' from ${source}`);
	sendGossip(nest, message, source);
});

bigOak.send("Woods", "gossip", "HELLLLOOOOOOOOOOO", () => console.log("gossip delivered"));

