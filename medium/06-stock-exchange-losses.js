// vars
var count = parseInt(readline()),
    values = readline().split(' ').map(parseFloat),
    solution = 0,
    max = values[0] || 0;

// loop through values
values.forEach(function (value, i) {

	// skip first
    if (i === 0) return;

    // calcuate diff
    var diff = value - max;

    // update solution and set max
    if (diff < solution) solution = diff;
    if (value > max) max = value;
});

print(solution);
