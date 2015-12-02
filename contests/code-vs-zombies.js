while (1) {

    // Where am I?
    var player = new Player();
    
    // Find humans
    var humans = new Array(Number(readline()))
    .fill(0).map(_ => new Human());

    // Find Zombies
    var zombies = new Array(Number(readline()))
    .fill(0).map(_ => new Zombie());

    // Find distance to each zombie for every human
    humans.forEach(human => {
        human.zombies = zombies.map(zombie => ({
            id: zombie.id,
            dist: distance(zombie, human)
        }))
        .sort((a, b) => a.dist - b.dist);
    });

    // Order humans by shortest distance to zombie
    humans.sort((a, b) => {
        return a.zombies[0].dist - b.zombies[0].dist;
    });

    var i = 0;
    var picked = false;

    while (!picked) {
    
	// No more humans
        if (humans.length === i) break;
    
        // Pick the closest zombie for the human in most danger
        var human = humans[i++];
        var zombie = zombies.find(z => z.id === human.zombies[0].id);

        // Calculate how many moves player vs zombie has to make to get to human
        var playerHumanMoves = calcMoves(distance(player, human) - 2000, 1000);
        var zombieHumanMoves = calcMoves(distance(human, zombie), 400);

        // Make sure we can save the human in time
        if (playerHumanMoves <= zombieHumanMoves) {
            picked = true;
        }
    }

    // TODO: Add combo kill pattern using cos, tan and euclidean dist

    print(zombie);
}

function Player () {
    var [X, Y] = readline().split(' ').map(Number);
    this.X = X;
    this.Y = Y;
}

function Human () {
    var [id, X, Y] = readline().split(' ').map(Number);
    this.id = id;
    this.X = X;
    this.Y = Y;
}

function Zombie () {
    var [id, X, Y, Xn, Yn] = readline().split(' ').map(Number);
    this.id = id;
    this.X = X;
    this.Y = Y;
    this.Xn = Xn;
    this.Yn = Yn;
    this.toString = () => [this.X,this.Y].join(' ');
}

function distance (a, b) {
    return Math.sqrt(Math.pow(a.X - b.X, 2) + Math.pow(a.Y - b.Y, 2));
}

function calcMoves (dist, step) {
    var moves = 0;
    while (dist >= 0) {
        moves++;
        dist -= step;
    }

    return moves;
}
