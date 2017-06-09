const word = readline();
const map = [];
const starts = [];
const result = [];

for (let i = 0; i < 10; i++) {
  map.push(readline());
}

for (let y = 0; y < 10; y++) {
  for (let x = 0; x < 10; x++) {
    if (map[y][x] === word[0]) {
      starts.push([x, y]);
    }
  }
}

starts.filter(point => {
  const [x, y] = point;
  const axes = {
    //   X, Y,  N, X,Y
    T:  [0, -1, 0, 0,0],
    TR: [1, -1, 0, 0,0],
    R:  [1, 0, 0, 0, 0],
    RB: [1, 1, 0, 0, 0],
    B:  [0, 1, 0, 0, 0],
    BL: [-1, 1, 0, 0,0],
    L:  [-1, 0, 0, 0,0],
    LT: [-1, -1, 0,0,0]
  };

  for (let i = 1; i < word.length; i++) {
    for (let a in axes) {
      const xx = x + (i * axes[a][0]);
      const yy = y + (i * axes[a][1]);
      if (map[yy][xx] === word[i]) {
        axes[a][2]++;
        axes[a][3] = xx;
        axes[a][4] = yy;
      }
    }
  }

  for (let a in axes) {
    if (axes[a][2] === (word.length - 1)) {
      result = [[x, y], [axes[a][3], axes[a][4]]];
      return true;
    }
  }

  return false;
});

result.sort((a, b) => (a[0] > b[0]) && (a[1] > b[1]) ? -1 : 1);

print(result.map(x => x.join` `).join`\n`);
