/**
 * Vox Codei
 *
 * @scores 59%
 * @todo Set bomb timing based on available rounds and bombs to predict the future
**/

// parse int
function int(num, i) { return parseInt(num[i], 0); }

// vars
var inputs = readline().split(' '),
    width = int(inputs, 0),
    height = int(inputs, 1),
    map = new Map(width, height);

// game loop
while (true) {

	// params
	var inputs = readline().split(' '),
	    rounds = int(inputs, 0),
	    bombs = int(inputs, 1);

	// print bomb position
	print(map.bomb().print());
}

function Map (width, height) {

	// setters    
	this.width = width;
	this.height = height;

	// map containment
	this.map = [];
	this.stack = [];
    this.axes = ['x', 'y'];

	for (var y = 0; y < this.height; y++) {

		// add row to map
		this.map.push(readline().split(''));
	}

	// get bomb plant position
	this.bomb = function () {
	
		// vars
		var radius = 3,
			total = 0,
			placement = new Point();

		for (var y = 0; y < this.height; y++) {
			for (var x = 0; x < this.width; x++) {

				// can only plant on dots
				if (this.map[y][x] !== '.') continue;

				// vars
				var target = {x: 0, y: 0},
				    point = new Point(x, y);

				// set point blast radius
				point.right = Math.min(x + radius, this.width - 1);
				point.left = Math.max(x - radius, 0);
				point.top = Math.max(y - radius, 0);
				point.bottom = Math.min(y + radius, this.height - 1);

				// find x and y axis bomb radius
				for (var a in this.axes) {

					// which axis?
					var axis = this.axes[a],
					    isX = (axis === 'x');
					    
					for (var i = point[isX ? 'left' : 'top']; i <= point[isX ? 'right' : 'bottom']; i++) {
						var type = isX ? this.map[point.y][i] : this.map[i][point.x];
						if (type === '@') target[axis]++;
						if (type === '#' && i < point[axis]) { point[isX ? 'left' : 'top'] = i + 1; target[axis] = 0; }
						if (type === '#' && i > point[axis]) { point[isX ? 'right' : 'bottom'] = i; break; }
					}
				}

				if ((target.x + target.y) > total) {
					total = target.x + target.y;
					placement = point;
				}
			}
		}

		// work the stack
		for (var s = 0; s < this.stack.length; s++) {

			// vars
			var bomb = this.stack[s],
				visual = ['~','+','X','.'][bomb.stage];

			if (bomb.stage < 4) {

				for (var x = bomb.left; x <= bomb.right; x++)
					this.map[bomb.y][x] = visual;

				for (var y = bomb.top; y <= bomb.bottom; y++)
					this.map[y][bomb.x] = visual;

				// increment bomb stage
				bomb.stage++;
				
				printErr(bomb.x+','+bomb.y);
				printErr('stage: ' + bomb.stage);

				// visualize bomb stage
				this.map[bomb.y][bomb.x] = bomb.stage;
			}
		}

		// push placement to stack
		if (typeof(placement.x) !== 'undefined')
		    this.stack.push(placement);
		
		// set bomb staging
		if (placement.print() !== 'WAIT')
			this.map[placement.y][placement.x] = placement.stage;

		return placement;
	}
}


function Point (x, y) {

	// setters
	this.x = x;
	this.y = y;
	this.stage = 0;

	// print point
	this.print = function () {
		if ( ! this.x && ! this.y) return 'WAIT';
		return [this.x, this.y].join(' ');
	}
}
