var node = readline().split(' ').map(Number);
var checked = [[node.x,node.y].join(',')];
var width = Number(readline());
var height = Number(readline());
var map = [];

for (var i = 0; i < height; i++) {
    map.push(readline().split('').map(function (w, n) {
        return new Point(i, n, w);
    }));
}

function Point (x, y, z) {
    this.x = x;
    this.y = y;
    this.z = z;
    this.neighbours = function (map) {
        var points = [];
        if (this.y > 0) points.push(map[this.y - 1][this.x]);
        if (this.y + 1 < map.length) points.push(map[this.y + 1][this.x]);
        if (this.x > 0) points.push(map[this.y][this.x - 1]);
        if (this.x + 1 < map.length) points.push(map[this.y][this.x + 1]);
        return points.filter(p => p.z === this.z);
    };
}

function check (nodes) {
    nodes.forEach(node => {
        var id = [node.x, node.y].join(',');
        if (checked.indexOf(id) === -1) {
            checked.push(id);
            check(node.neighbours());
        }
    });
}

check(map[node.x][node.y].neighbours());

print(checked.length);
