import "dart:io" show stdin;
import 'dart:math' as math;

void main() {

    // vars
	var n = readInt(),
	    phones = readPhones(n),
	    solution = 0;

    // loop through phones
	for (var i = 0; i < n; ++i) {

        // set minimum length for storing
		var min = phones[i].length;

        // loop through the rest
		for (var j = 0; j < i; ++j) {

            // compare two phones
            min = math.min(min, compare(phones[i], phones[j]));
		}

		solution += min;
	}

	print(solution);
}

int compare(String a, String b) {

	var count = 0,
	    len = math.min(a.length, b.length);

	while (count < len && a[count] == b[count]) {
		count++;
	}

	return (a.length - count);
}

String readString() =>
    stdin.readLineSync();

int readInt() =>
    int.parse(readString());

List<String> readPhones(int n) =>
    new List<String>.generate(n, (_) => readString());
