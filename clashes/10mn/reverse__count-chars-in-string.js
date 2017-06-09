const W = readline();
const n = Number(readline());
for (var i = 0; i < n; i++) {
  const match = readline().match(new RegExp('['+W+']'));
  print(match ? match.length : 0);
}
