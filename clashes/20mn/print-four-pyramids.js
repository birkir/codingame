var N = parseInt(readline(), 10);

for (let i = 0; i < N; i++) {
  var width = ((i + 1) * 2) - 1;
  var spacing = N+N-i-1;
  print(' '.repeat(spacing) + '*'.repeat(width));
}

for (let i = 0; i < N; i++) {
  var width = ((i + 1) * 2) - 1;
  var spacing = N-i-1;
  var hollow = ((spacing+1)*2)-1;
  var row = ' '.repeat(spacing);
  row += '*'.repeat(width);
  row += ' '.repeat(hollow);
  row += '*'.repeat(width);
  print(row);
}
