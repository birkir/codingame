const [width, height] = readline().split(' ').map(Number);
const map = [];
for (var i = 0; i < height; i++) {
  map.push(readline().split(''));
}
map.reverse();

let x = 0, y = 0;

function test() {
  if ((y+1) === width) return false;
  if (map[y][x + 1] == '.') {
    x++;
    for (var n = y-1; n >= 0; n--) {
      if (map[n][x] == '.') {
        y=n;
      }
    }
    return true;
  }
  if (map[y+1][x+1] == '.' && map[y][x+1] == '#') {
    x++;
    y++;
    return true;
  }
  return false;
}

while (test()) {
  printErr([x, y]);
}

if ((x+1) === width) {
  print('SUCCESS');
} else {
  print([x, y].join(' '));
}
