const n = parseInt(readline(), 10);

for (var i = 0, n = readline(); i < n; i++) {
  var s = '+'.repeat(i);
  for (var j = i; j < n; j++) {
    s += (j+1-i);
  }
  print(s);
}
