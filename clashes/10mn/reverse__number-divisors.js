print(
  [0,0]
  .map(x => Number(readline()))
  .map(n => {
    const small = [];
    const end = Math.floor(Math.sqrt(n));
    for (var i = 1; i <= end; i++) {
      if (n % i == 0) {
        small.push(i);
      }
    }
    return small.pop();
  }).join(' ')
);
