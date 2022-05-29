let journal = [];

function addEntry(events, squirrel) {
	journal.push({events, squirrel});
}

addEntry(["work", "touched tree"], false);

console.log(journal);

