// vars
var n = parseInt(readline(), 0),
    nodes = {},
    deepest = 0;

for (var i = 0; i < n; i++) {

    // loop vars
    var line = readline().split(' '),
        a = line[0],
        b = line[1];

    // create nodes if they dont exists
    if ( ! (b in nodes)) nodes[b] = new Node(b, a);
    if ( ! (a in nodes)) nodes[a] = new Node(a);

    // append node to children
    nodes[a].nodes.push(nodes[b]);
}

// loop again as stack is in order
for (var node in nodes) {

    if (nodes[node].parent === null) {
        
        // trace root nodes depth
        nodes[node].depth(1);
    }
}

// print deepest node
print(deepest);

// Node class
function Node (id, parent) {

    // params
    this.id = id;
    this.parent = parent || null;
    this.nodes = [];

    // trace depth
    this.depth = function (depth) {

        deepest = Math.max(depth, deepest);

        this.nodes.forEach(function (node) {
            
            // recursive ...
            node.depth(depth + 1);
        });
    }
}