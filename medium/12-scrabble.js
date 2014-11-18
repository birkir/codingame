// vars
var count = parseInt(readline(), 0),
    words = [];

// populate words
for (var i = 0; i < count; i++) {
    words.push(readline());
}

// more vars
var letters = readline(),
    alphas = ["eaionrtlsu", "dg", "bcmp", "fhvwy", "k", "jx", "qz"],
    scores = [1,2,3,4,5,8,10],
    points = 0,
    answer = words[0];

// loop through words available
words.forEach(function (word) {

    // split word to characters
    var chars = word.split(''),
        point = 0,
        ltrs = letters;

    // loop through every character
    chars.every(function (char) {

        // get position in letters
        var pos = ltrs.indexOf(char);

        // check if word matches
        if (pos >= 0) ltrs = ltrs.substr(0, pos) + ltrs.substr(pos + 1);
        else return false;

        // calculate points
        alphas.forEach(function (alpha, i) {
            if (alpha.indexOf(char) >= 0) {
                point += scores[i];
            }
        });
        
        return true;
    });

    // just get first matching word
    if (point > points) {
        answer = word;
        points = point;
    }
});

print(answer);
