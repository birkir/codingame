const [score, flips] = readline().split(' ').map(Number);
const fact = (x) => (x === 0) ? 1 : x * fact(x - 1);
const prob = 1/2;
const { pow, floor } = Math;

const result = fact(flips) / (fact(score) * fact(flips-score)) * pow(prob, score) * pow(prob, flips-score);

print(floor(result));
