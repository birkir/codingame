const n = parseInt(readline(), 10);
const memo = [1, 1];
const a = (n) => {
  const result = memo[n - 1];
  if (typeof result !== 'number') {
    result = a(a(n - 1)) + a(n - a(n - 1));
    memo[n - 1] = result;
  }
  return result;
}

a(n);

print(n === 1 ? 1 : memo.join(' '));
