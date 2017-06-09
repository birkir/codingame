print(readline().split('').map(char => char.match(/[A-Z]/) ? char.toLowerCase() : char.toUpperCase()).join(''))
