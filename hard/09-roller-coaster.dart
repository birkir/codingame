import "dart:io" show stdin;
import "dart:typed_data" show Int32List; // faster loops

void main() {

	// vars
	var line = readLine(),
	    places = line[0],
	    rides = line[1],
	    n = line[2],
	    groups = readGroups(n),
	    solution = solve(places, rides, groups);

	print(solution);
}

// solve equation
int solve (int places, int rides, List<int> groups) {

	// get sum
	var queued = groups.fold(0, (prev, element) => prev + element);

	// enough, or analyze?
	return (queued <= places) ? (rides * queued) : analyze(places, rides, groups);
}

int analyze (int places, int rides, List<int> groups) {

	// vars
	var dirhams = 0,
	    pos = 0,
	    persons = 0;

	while (true) {

		// add persons from group
		persons += groups[pos++];

		if (persons >= places) {
			if (persons > places) persons -= groups[--pos];
			dirhams += persons;
			if (--rides == 0) break; // we have a winner!
			persons = 0;
		}

		// reset group position
		if (pos == groups.length) pos = 0;
	}

	return dirhams;
}

// read groups
List<int> readGroups(int n) {
	var list = new Int32List(n);
	for (var i = 0; i < n; ++i) {
		list[i] = int.parse(stdin.readLineSync());
	}
	return list;
}

// types definition
String    readString() => stdin.readLineSync();
int       readInt()    => int.parse(readString());
List<int> readLine()   => readString().split(' ').map(int.parse).toList();
