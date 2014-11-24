
// parse int
function int(num) { return parseInt(num, 0); }

// vars
var seed = int(readline()),
    count = int(readline()) - 1,
    sequence = [seed];

// loop through iteration
for (var i = 0; i < count; i++) {

	var inner = [],
	    k = j = 1;

    // generate sequence at given length
	while (j <= sequence.length) {
		if (sequence[j] !== sequence[j - 1]) {
			inner.push(k);
			inner.push(sequence[j - 1]);
			k = 1;
		} else {
		    k++;
		}
		j++;
	}

	sequence = inner;
}

print(sequence.join(' '));
