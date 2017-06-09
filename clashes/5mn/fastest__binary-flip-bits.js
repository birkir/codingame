var inputs = readline().split(' ');
var n1 = inputs[0];
var n2 = inputs[1];

var b = n1.split('').map((x, i) => {
  if (x === '1' && n2[i] === '1') return '1';
  return '0';
})

print(b.join(''))
