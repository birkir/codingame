// parse int
function int(num, i) { return parseInt(num[i], 0); }

// vars
var inputs = readline().split(' '),
	light = { x: int(inputs, 0), y: int(inputs, 1) },
	thor =  { x: int(inputs, 2), y: int(inputs, 3) };

while (true) {

	// get thor's energy
	var energy = parseInt(readline(), 0),
	    action = '';

	// simple compass tests
	if (thor.y > light.y) { thor.y--; action += 'N'; }
	if (thor.y < light.y) { thor.y++; action += 'S'; }
	if (thor.x > light.x) { thor.x--; action += 'W'; }
	if (thor.x < light.x) { thor.x++; action += 'E'; }

	print(action);
}
