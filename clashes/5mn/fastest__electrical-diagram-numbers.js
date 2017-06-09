const total = 0;
const n = parseInt(readline(), 10);
for (let i = 0; i < n; i++) {
  const line = readline();
  const test = line.match(/\|\d+\|/g);
  total += (test ? test.length : 0);
}

print(total);
