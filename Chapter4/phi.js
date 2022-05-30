require("./data/journal.js");

// phi coeffieient도 알아보기
function phi(table) {
	return (table[3] * table[0] - table[2] * table[1]) /
    Math.sqrt((table[2] + table[3]) *
              (table[0] + table[1]) *
              (table[1] + table[3]) *
              (table[0] + table[2]));
}

// table 인덱스의 lsb는 이벤트 유무, msb는 다람쥐 유무
function tableFor(event, journal) {
	let table = [0,0,0,0];
	for (let entry of JOURNAL) {
		let index = 0;
		if (entry.events.includes(event)) index+=0b01;
		if (entry.squirrel) index+=0b10;
		table[index] += 1;
	}
	return table
}

function journalEvents(journal) {
	let events = [];
	for (let entry of journal) 
		for (let event of entry.events) 
			if (!events.includes(event)) 
				events.push(event);
	return events;
}

for (let event of journalEvents(JOURNAL)) {
	let correlation = phi(tableFor(event, JOURNAL));
	if (correlation > 0.1 || correlation < -0.1) 
		console.log(event + ":", phi(tableFor(event, JOURNAL)));
}

// 이 방법 기억하기
for (let entry of JOURNAL) {
	if (entry.events.includes("peanuts") && !entry.events.includes("brushed teeth"))
		entry.events.push("peanut teeth");
}

console.log(phi(tableFor("peanut teeth", JOURNAL)));

