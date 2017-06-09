const str = readline().split('');
const a, alpha = [];

str.forEach(c => {
  if (a = alpha.find(b => (b.letter === c))) {
    a.count++;
  } else {
    alpha.push({ letter: c, count: 1 });
  }
});

alpha
.sort((a, b) => (a.count < b.count) ? 1 : -1)
.map((obj, i) => {
  obj.binary = '0'.repeat(i) + '1';
  return obj;
});

print(str.map(c => alpha.find(a => a.letter === c).binary).join(''));
