function asciiToChuckNorris(chars) {

	// Constants
	var bits = [],
	    last;

	// Encode ascii to bits
	chars.split('').forEach(function (char, i) {
		Array.apply(null, Array(7)).forEach(function (_, j) {
			bits[i * 7 + j] = ((chars.charCodeAt(i) & (1 << (6 - j))) != 0) ? 1 : 0;
		});
	});

	// Map bits norris style
	return bits.map(function (bit) {
	    var ret = '';
		if (last !== bit && bit === 1) ret += ' 0 ';
		if (last !== bit && bit === 0) ret += ' 00 ';
		last = bit;
		return ret+'0';
	}).join('').substr(1);
}

print(asciiToChuckNorris(readline()));
