var max = readline().match(/(0)\1+/g).map(c => c.length).sort((a,b) => b-a).shift();

print(max);
