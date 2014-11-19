// parse coordinate
function radian(str) { return parseFloat(str.replace(',', '.'), 0) * Math.PI / 180; }

// parse int
function int() { return parseInt(readline(), 0); }

// vars
var list = [],
	lon = radian(readline()),
	lat = radian(readline()),
	count = int();

// loop through defibrillators 
for (var i = 0; i < count; i++) {

	// split csv to parts
	var parts = readline().split(';'),
	    item = {};

	// set item data
	item.name = parts[1];
	item.lon  = radian(parts[4]);
	item.lat  = radian(parts[5]);

	// calculate distance
	var x = (item.lon - lon) * Math.cos((lat + item.lat) / 2),
	    y = (item.lat - lat);

	// set distance to object
	item.dist = Math.abs(Math.sqrt(Math.pow(x, 2) + Math.pow(y, 2)) * 6371);

	// push item to array
	list.push(item);
}

// sort list by distance
list.sort(function (a, b) { return (a.dist > b.dist); })

// print closest defibrillator
print(list[0].name);
