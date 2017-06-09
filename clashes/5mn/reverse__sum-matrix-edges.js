const nums = [];
for (let i = 0, n = readline(); i < n; i++) {
  readline().split(' ').map(Number).forEach((num, j) => {
    if (i === 0 || i === (n-1) || j === 0 || j === (n-1)) nums.push(num);
  });
}

print(nums.reduce((a, b) => a + b));
