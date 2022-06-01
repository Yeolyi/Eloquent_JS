const roads = [
	"Alice's House-Bob's House",
	"Alice's House-Cabin",
	"Alice's House-Post Office",
	"Bob's House-Town Hall",
	"Daria's House-Ernie's House", 
	"Daria's House-Town Hall",
	"Ernie's House-Grete's House", 
	"Grete's House-Farm",
	"Grete's House-Shop",
	"Marketplace-Farm",
	"Marketplace-Post Office",
	"Marketplace-Shop",
	"Marketplace-Town Hall",
	"Shop-Town Hall"
];

function buildGraph(edges) {
	let graph = Object.create(null);
	function addEdge(from, to) {
		if (graph[from] == null)
			graph[from] = [to];
		else
			graph[from].push(to);
	}
	for (let [from, to] of edges.map(r => r.split("-"))) {
		addEdge(from, to);
		addEdge(to, from);
	}
	return graph;
}

let roadGraph = buildGraph(roads);
console.log(roadGraph);

class VillageState {
	constructor(place, parcels) {
		this.place = place;
		this.parcels = parcels;
	}

	move(destination) {
		if (!roadGraph[this.place].includes(destination))
			return this;
		else {
			let parcels = this.parcels.map(p=> {
					if (p.place != this.place) return p;
					return {place: destination, address: p.address}; // 그냥 객체의 프로퍼티를 바꾸면 안되나?
			}).filter(p => p.place != p.address);
			return new VillageState(destination, parcels); // 여기서도 새로운 객체를 만드네?
			// When the objects in my system are fixes, stable things, I can consider operations on them in isolation.
			// 기존의 객체를 바꾸지 않는 것이 목적,,,!
			// 객체 값에 변화가 필요 없는 경우 복사하지 않고 공유해도 무방하다.
		}
	}
}

function runRobot(state, robot, memory=[]) {
	let turn = 0;
	while (state.parcels.length) {
		turn++;
		let action = robot(state, memory);
		state = state.move(action.direction);
		memory = action.memory;
		//console.log(`Moved to ${action.direction}`);
	}
	// console.log(`Done in ${turn} turns`);
	return turn;
}

// Random
function randomPick(arr) {
	let choice = Math.floor(Math.random() * arr.length);
	return arr[choice];
}

function randomRobot(state) {
	return { direction: randomPick(roadGraph[state.place]) }
}

VillageState.random = function(parcelCount = 5) {
	let parcels = [];
	for (let i=0; i<parcelCount; i++) {
		let address = randomPick(Object.keys(roadGraph));
		let place;
		do {
			place = randomPick(Object.keys(roadGraph));
		} while (place == address);
		parcels.push({place, address});
	}
	return new VillageState("Post Office", parcels);
}

// runRobot(VillageState.random(), randomRobot);

const mailRoute = [
	"Alice's House", "Cabin", "Alice's House", "Bob's House",
  "Town Hall", "Daria's House", "Ernie's House",
  "Grete's House", "Shop", "Grete's House", "Farm",
  "Marketplace", "Post Office"
]

function routeRobot(state, memory) {
	if (memory.length == 0)
		memory = mailRoute;
	return { direction: memory[0], memory: memory.slice(1) };
}

// runRobot(VillageState.random(), routeRobot, []);

// 우선순위 큐 없는 다익스트라?
function findRoute(graph, from, to) {
	let work = [{at: from, route: []}];
	for (let i=0; i<work.length; i++) {
		let {at, route} = work[i];
		for (let place of graph[at]) {
			if (place === to) 
				return route.concat(place);
			if (!work.some(w => w.at == place))
				work.push({at: place, route: route.concat(place)});
		}
	}
}

function getOrientedRobot({place, parcels}, route) {
	if (route.length == 0) {
		let parcel = parcels[0];
		if (parcel.place != place)
			route = findRoute(roadGraph, place, parcel.place);
		else
			route = findRoute(roadGraph, place, parcel.address);
	}
	return { direction: route[0], memory: route.slice(1) };
}

// runRobot(VillageState.random(), getOrientedRobot, []);

function compareRobots(robot1, robot2) {
	let robot1Result = 0;
	let robot2Result = 0;
	for (let i=0; i<100; i++) {
		const state = VillageState.random();
		robot1Result += runRobot(state, robot1);
		robot2Result += runRobot(state, robot2);
	}
	console.log(`Robot1: ${robot1Result/100}`);
	console.log(`Robot2: ${robot2Result/100}`);
}

compareRobots(randomRobot, routeRobot);
compareRobots(routeRobot, getOrientedRobot);

function betterOrientedRobot({place, parcels}, route) {
	if (route.length ===  0) {
		let minRoute = Array(1000);
		for (let parcel of parcels) {
			if (parcel.place != place) {
				route = findRoute(roadGraph, place, parcel.place);
				minRoute = minRoute.length < route.length ? minRoute : route;
			} else {
				route = findRoute(roadGraph, place, parcel.address);
				minRoute = minRoute.length < route.length ? minRoute : route;
			}
		}
		route = minRoute;
	}	
	return {direction: route[0], memory: route.slice(1)};
}

compareRobots(getOrientedRobot, betterOrientedRobot);


