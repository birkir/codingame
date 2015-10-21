print(readline().split(' ').filter(n=>n.match(/(.)\1+/gi)).length)
