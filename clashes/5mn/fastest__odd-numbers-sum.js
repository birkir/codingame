print(readline().split('').map(Number).filter(n => n % 2 === 0).reduce((a, b) => a + b));
