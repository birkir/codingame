const N = parseInt(readline(), 10);

for (var i = 0; i < N; i++) {
  const num = parseInt(readline(), 10).toString(2).split('');
  num[0] = '0';
  print(parseInt(num.join(''), 2));
}
