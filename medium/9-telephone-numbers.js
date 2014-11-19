/**
 * Javascript version times out in test-5 for 10000 iterations
 * - check out the dart version for fast calculation
 */

// vars
var count = parseInt(readline(), 0),
    phones = [],
    solution = 0,
    i, j;

for (i = 0; i < count; i++) {

	// push phone to array
	phones.push(readline());

	var min = phones[i].length;

	for (j = 0; j < i; j++) {
		min = Math.min(min, compare(phones[i], phones[j]))
	}

	solution += min;
}

function compare(a, b) {
	var count = 0,
	    len = a.length < b.length ? a.length : b.length;

	while (count < len && a[count] === b[count]) count++;

	return a.length - count;
}

print(solution);
