const getAdjacencyTable = function (pairs) {
	adjacencyTable = {};
	pairs.forEach((pair) => {
		let key = pair[0];
		let value = pair[1];
		if (!adjacencyTable[key]) adjacencyTable[key] = [];
		adjacencyTable[key].push(value);
	});
	return adjacencyTable;
};

const bfs = function (pairs, source, target) {
	const adjacencyTable = getAdjacencyTable(pairs);
	const queue = [];
	const visited = [];
	queue.push(source);

	while (queue.length > 0) {
		const currentlyVisited = queue.shift();
		if (adjacencyTable[currentlyVisited]) {
			if (adjacencyTable[currentlyVisited].includes(target)) return true;
			visited.push(currentlyVisited);
			adjacencyTable[currentlyVisited].forEach((node) => {
				if (!visited.includes(node) && !queue.includes(node)) {
					queue.push(node);
				}
			});
		}
	}
	return false;
};

module.exports = { bfs };
