const inverted = '#' + readline()
.substr(1)
.match(/[a-f0-9]/gi)
.map(n => (255 - parseInt(n, 16)).toString(16))
.map(n => n.length === 1 ? '0'+n : n)
.join('')
.toUpperCase();

print(inverted);
