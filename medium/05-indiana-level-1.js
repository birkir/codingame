/**
 * Auto-generated code below aims at helping you parse
 * the standard input according to the problem statement.
 **/

// parse int
function int(num, i) { return parseFloat(i ? num[i] : num, 0); }

// vars
var inputs = readline().split(' ');
    width = int(inputs, 0),
    height = int(inputs, 1),
    map = new Map(width, height),
    exit = new Point(int(readline()), height - 1),
    pos = new Point(0, 0);

// game loop
while (true) {

    // read pos and direction
    var inputs = readline().split(' '),
        dir = inputs[2];

    // set position
    pos.x = parseInt(inputs[0]);
    pos.y = parseInt(inputs[1]);

    // calculate next move
    map.move(pos, dir);

    print(pos.print());
}

// Point class
function Point(x, y) {
    
    this.x = x;
    this.y = y;
    
    this.print = function () {
        return [this.x, this.y].join(' ');
    }
}

// Map class
function Map (width, height) {

    // map container
    this.map = [];

    for (var x = 0; x < height; x++) {
        
        // set x-axis array
        this.map[x] = [];
        
        var row = readline().split(' ');
        
        for (var y = 0; y < width; y++) {

            // y-axis
            this.map[x][y] = row[y];
        }
    }

    // calculate next move
    this.move = function (pos, dir) {

        // get type
        var type = int(this.map[pos.y][pos.x]);

        if ([1,3,7,8,9,12,13].indexOf(type) >= 0) pos.y++;
        if (type === 2 && dir === 'LEFT') pos.x++;
        if (type === 2 && dir === 'RIGHT') pos.x--;
        if (type === 4 && dir === 'TOP') pos.x--;
        if (type === 4 && dir === 'RIGHT') pos.y++;
        if (type === 5 && dir === 'TOP') pos.x++;
        if (type === 5 && dir === 'LEFT') pos.y++;
        if (type === 6 && dir === 'LEFT') pos.x++;
        if (type === 6 && dir === 'RIGHT') pos.x--;
        if (type === 10) pos.x--;
        if (type === 11) pos.x++;
    }
}
