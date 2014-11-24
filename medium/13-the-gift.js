// parse int
function int(num) { return parseInt(readline(), 0); }

// vars
var count = int(),
    price = int(),
    participants = [],
	solution = [];

// add budgets
for (var i = 0; i < count; i++) {
	participants.push(int());
}

// do budgets meet price?
if (participants.reduce(function (a, b) { return a + b; }) >= price) {

	// sort them ascending
	participants.sort(function (a, b) { return a > b; });

	// loop through budgets
	participants.forEach(function (budget, i) {

		// vars
		var contribute = 0,
		    reasonable = Math.floor(price / count);

		// set contribute
		if (budget < reasonable) contribute = budget;
		else if (reasonable > price) contribute = price;
		else contribute = reasonable;

		// add contribute, subtract from price
		solution.push(contribute);
		price -= contribute;
		count--;
	});
}

// not possible
if (solution.length === 0) solution.push('IMPOSSIBLE');

print(solution.join("\n"));
