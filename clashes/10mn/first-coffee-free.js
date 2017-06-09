const s = {};
const N = parseInt(readline(), 10);
for (var i = 0; i < N; i++) {
    var id = parseInt(readline(), 10);
    if (!(id in s)) {
        s[id] = true;
        print('free');
    } else {
        print('not free');
    }
}
