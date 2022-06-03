function parseINI(string) {
	let result = {};
	let section = result;
	// Some OS use not just a newline character to separate lines
	// but a carriage return character followed by a newline.
	string.split(/r?\n/).forEach(line => {
		let match;
		if (match = line.match(/^(\w+)=(.*)$/)) 
			section[match[1]] = match[2];
		else if (match = line.match(/^\[(.*)\]$/)) 
			// A new section object is created, and section is set to point at it.
			section = result[match[1]] = {};
		else if (!/^\s*(;.*)?$/.test(line))
			throw new Error("Line" + line + "is not valid,");
	});
	return result;
}

console.log(parseINI(`
searchengine=https://duckduckgo.com/?q=$1
spitefulness=9.7

; comments are preceded by a semicolon...
; each section concerns an individual enemy
[larry]
fullname=Larry Doe
type=kindergarten bully
website=http://www.geocities.com/CapeCanaveral/11451

[davaeorn]
fullname=Davaeorn
type=evil wizard
outputdir=/home/marijn/enemies/davaeorn`));

