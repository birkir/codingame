// setup network & people 
const network = new Map();
const people = new Set();

// fill network, their friendship and people list
for (var i = 0, n = readline(); i < n; i++) {
    var [x, y] = readline().split(' ').map(Number);

    if (!network.has(x)) network.set(x, new Set());
    if (!network.has(y)) network.set(y, new Set());

    network.get(x).add(y);
    network.get(y).add(x);

    people.add(x);
    people.add(y);
}

const walk = () => {

    // set of visited nodes
    const visited = new Set();

    // find last node with 1 friend
    const oneFriend = [...network]
    .filter(a => a[1].size === 1)
    .pop()
    .shift();

    // add the single
    visited.add(oneFriend);

    // setup visits for this round
    let visits = [oneFriend];
    let result = 0;

    while (visited.size !== people.size) {
        
        // setup friends list
        const friends = [];

        // loop visits
        for (var a in visits) {
            const visit = visits[a];
            
            // loop friends
            for (var friend of network.get(visit)) {

                // only for non-visited friends
                if (!visited.has(friend)) {

                    // add to friends array
                    friends.push(friend);
                    
                    // make sure to not walk this friend again
                    visited.add(friend);
                }
            }
        }

        // apply visits array
        visits = friends;
        result++;
    }

    if (result % 2 !== 0) {
        result++;
    }
    
    return result / 2;
}

print(walk());
