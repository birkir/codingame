// parse int
function int(num, i) { return parseInt(num[i], 0); }

// vars
var inputs = readline().split(' '),
    nbFloors = int(inputs, 0),
    width = int(inputs, 1),
    nbRounds = int(inputs, 2),
    exitFloor = int(inputs, 3),
    exitPos = int(inputs, 4),
    nbTotalClones = int(inputs, 5),
    nbAdditionalElevators = int(inputs, 6),
    nbElevators = int(inputs, 7),
    elevators = [];

// populate elevator positions
for (var i = 0; i < nbElevators; i++) {
    var inputs = readline().split(' ');
    var elevatorFloor = int(inputs, 0);
    var elevatorPos = int(inputs, 1);
    elevators[elevatorFloor] = elevatorPos;;
}


function getCommand() {

    // clone info
    var inputs = readline().split(' '),
        cloneFloor = int(inputs, 0),
        clonePos = int(inputs, 1),
        direction = inputs[2];

    // block elevator path
    if (elevators[cloneFloor] > clonePos && direction === 'LEFT') return true;
    if (elevators[cloneFloor] < clonePos && direction === 'RIGHT') return true;

    // block last floor
    if (cloneFloor === exitFloor) {
        if (clonePos < exitPos && direction === 'LEFT') return true;
        if (clonePos > exitPos && direction === 'RIGHT') return true;
    }

    // block walls
    if ((direction === 'RIGHT' && clonePos >= (width - 1)) || (direction === 'LEFT' && clonePos === 1)) return true;

    return false;
}

// game loop
while (true) {
    print(getCommand() ? 'BLOCK' : 'WAIT');
}
