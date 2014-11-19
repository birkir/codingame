// vars
var count = parseInt(readline()),
    temps = (count === 0) ? [] : readline().split(' '),
    closest,
    actual;

// loop through temps
temps.forEach(function (temp) {

	// check if temp is greater
    if ( ! closest || Math.abs(temp) <= closest) {

    	// set actual (because it's delta)
        actual = temp;

        // set closest
        closest = Math.abs(temp);
    }
});

print(actual || 0);
