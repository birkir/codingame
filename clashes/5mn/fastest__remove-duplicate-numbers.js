const list = [];
for (let i = 0, n = +readline(); i < n; i++) {
  const x = +readline();
  if (list.indexOf(x) === -1) {
    list.push(x);
    print(x);
  }
}
