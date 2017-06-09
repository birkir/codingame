var inputs = readline().split(' ');
var S1 = inputs[0];
var S2 = inputs[1];
S1.split('').forEach(l => {
  const at = S2.indexOf(l);
  S2 = S2.substr(0, at) + S2.substr(at+1);
});

print(1-S2.length);
