// parse int
function int() { return parseInt(readline(), 0); }

// vars
var mimes = {},
    count = [int(), int()];

// loop through known mimes
for (var i = 0; i < count[0]; i++) {

	// split ext and mime type
	var part = readline().split(' ');

	// add to list
	mimes[part[0].toLowerCase()] = part[1];
}

// loop through mimes to check
for (var i = 0; i < count[1]; i++) {

	// get filename and extension
	var filename = readline(),
	    ext = filename.split('.').slice(-1).pop().toLowerCase() || filename;

	// unknown extensions
	ext = (ext === filename) ? null : ext;

	print(mimes[ext] || 'UNKNOWN')
}
