const [width, height] = readline().split(' ').map(Number);
const map = [];
for (var i = 0; i < height; i++) {
  map.push(readline());
}

let count = 0 ;
for (var y = 0; y < height; y++) {
  for (var x = 0; x < width; x++) {
    if (map[y][x] === 'X' && y > 0 && map[y-1][x] === 'X' && x > 0 && map[y][x-1] === 'X' && (y+1) < height && map[y+1][x] === 'X' && (x+1) < width && map[y][x+1] === 'X') {
      count++;
    }
  }
}

print(count);
