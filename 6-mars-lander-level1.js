// we don't the surface for level-1
var count = parseInt(readline(), 0);
for (var i = 0; i < count; i++) { readline(); }

// parse int
function int(num, i) { return parseInt(num[i], 0); }

// vars
var params = {};

// game loop
while (true) {

	// get readings and set 
    var inputs = readline().split(' '),
        angle  = 0,
        thrust = 0,
        surface = 100;

    // set readings to params object
    params.X = int(inputs, 0);
    params.Y = int(inputs, 1);
    params.HS = int(inputs, 2);
    params.VS = int(inputs, 3);
    params.F = int(inputs, 4);
    params.R = int(inputs, 5);
    params.P = int(inputs, 6);

    // set thrust
    thrust = Math.floor(Math.abs(params.VS - 5) / 10);

    // dump angle and thrust ints
    print([angle, thrust].join(' '));
}
