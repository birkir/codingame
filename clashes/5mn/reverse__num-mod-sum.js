const M = parseInt(readline(), 10);
const N = parseInt(readline(), 10);
const inputs = readline().split(' ');
let sum = 0;
for (var i = 0; i < N; i++) {
  const E = parseInt(inputs[i], 10);
  sum += (E % M);
}

print(sum);
