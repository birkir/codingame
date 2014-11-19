// vars
var alphabet = {},
    width = parseInt(readline(), 0),
    height = parseInt(readline(), 0),
    word = readline(),
    result = [];

// loop through letter height
for (var i = 0; i < height; i++) {

	// read each row
    var row = readline();

    // map to 25 character alphabet plus question mark
    for (var x = 0; x <= 26; x++) {

    	// get character
        var char = (x === 26) ? '?' : String.fromCharCode(97 + x);

        // initialize alphabet character array
        if (i == 0) alphabet[char] = [];

        // add character row to letter in alphabet
        alphabet[char][i] = row.substr(x * width, width);
    }

    result.push('');
}

// split word to lowercase characters
word.toLowerCase().split('').forEach(function (letter) {

	// get letter from ascii alphabet
    (alphabet[letter] || alphabet['?']).forEach(function (row, i) {
        result[i] += row;
    });
})

print(result.join('\n'));
