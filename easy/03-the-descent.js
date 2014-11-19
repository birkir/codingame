// parse int
function int(num, i) { return parseInt(num[i], 0); }

// vars
var right = false,
    target = -1,
    last = 0;

// let the game begin
while (true) {

	// read position
	var inputs = readline().split(' '),
	    x = int(inputs, 0),
	    y = int(inputs, 1),
	    heights = [];

   	// populate heights
	for (var i = 0; i <= 7; i++) {
		heights.push(parseInt(readline(), 0));
	}

	// when reached the sides
	if ((x === 7 & last === 7 && right) || (x === 0 && last === 0 && ! right))
	{
		// switch direction
		right = ! right;

		// get next target
		target = heights.indexOf(Math.max.apply(null, heights));
	}

	last = x;
	print((target === x) ? 'FIRE' : 'HOLD');
}
