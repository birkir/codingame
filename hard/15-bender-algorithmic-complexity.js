// Point class
function Point (x, y) {
    this.x = parseInt(x, 0);
    this.y = parseInt(y, 0);
    this.diff = (this.y / this.x);
}

// vars
var count = parseInt(readline(), 0),
    points = [],
    diff = {},
    solution;

// populate points
for (var i = 0; i < count; i++) {

    // loop vars
    var inputs = readline().split(' ');

    // append point to array
    points.push(new Point(inputs[0], inputs[1]));
}

// get first, middle and last point
var first = points[1],
    middle = points[Math.round(count / 2)],
    last = points[count - 1];

// calculate their differences
diff.high = Math.round((middle.y - first.y) / (middle.x - first.x));
diff.low  = Math.round((last.y - middle.y) / (last.x - middle.x));

// Guess the algorithm based on high and low diffs
function guessAlgorithm(diff) {

    // ratio, inverted ratio and the absolute value of their differences
    var ratio = diff.low / diff.high || 0,
        alt = diff.high / diff.low || 0,
        abs = Math.abs(diff.high - diff.low);

    if (diff.low === 0 || diff.high === 0) return '1';
    if (ratio > 50) return '2^n';
    if (ratio === 1 && alt === 1) return 'n';
    if (alt > 2) return 'log n';
    if (ratio > 3) return 'n^3';
    if (ratio > 1 && abs > 1000) return 'n^2 log n';
    if (ratio > 1 && abs > 100) return 'n^2';
    if (ratio > 0) return 'n log n';

    return '1';
}

print('O('+guessAlgorithm(diff)+')');