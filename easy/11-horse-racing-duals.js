// vars
var count = parseInt(readline()),
    horses = [];

// loop through horses
for (var i = 0; i < count; i++) {

	// add to list of horses
	horses.push(parseInt(readline(), 0));
}

// sort them ascending
horses.sort(function (a, b) { return a > b; });

// get first two horses and set min
var old = horses[1],
    min = old - horses[0];

// loop through horses again
for (i = 2; i < count; i++) {
	// get distance
	var dis = horses[i] - old;
	if (dis < min) {
		min = dis;
	}
	old = horses[i];
}

print(min);
