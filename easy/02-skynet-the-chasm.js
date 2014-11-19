// read and parse int
function int() { return parseInt(readline(), 0); }

// vars
var road = int(),
    jump = int(),
    land = int();

// let the game begin
while (true) {

	// current speed and position
	var speed = int(),
	    pos = int();

	// wait, accelerate, descelerate or jump
	if (pos === road - 1) print('JUMP');
	else if (speed > jump + 1 || pos >= road + jump) print('SLOW');
	else if (speed < jump + 1) print('SPEED')
	else print('WAIT');
}
