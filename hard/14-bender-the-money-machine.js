// parse int
function int(num, i) { return parseInt(i ? num[i] : num, 0); }

// Visit class
function Visit(door, money) {

	// class vars
	var room = rooms[door],
	    near = {a:0, b:0};

	// no sir, cant do
	if (room.max > money) return 0;

	// set room maximum
	room.max = money;

	// Visit near rooms
	for (var l in near) {
		if (room[l] !== null) {
			near[l] = Visit(room[l], money + room.money);
		}
	}

	return room.money + Math.max(near.a, near.b);
}

// Room class
function Room(money, a, b) {
	this.money = money;
	this.a = a;
	this.b = b;
	this.max = 0;
}

// vars
var count = int(readline()),
    rooms = [];

// loop through rooms
for (var i = 0; i < count; i++) {

	// get money and nearest rooms
	var fields = readline().split(' '),
	    money = int(fields, 1),
	    a = (fields[2] === 'E') ? null : int(fields, 2),
	    b = (fields[3] === 'E') ? null : int(fields, 3);

	rooms.push(new Room(money, a, b));
}


print(Visit(0, 0));