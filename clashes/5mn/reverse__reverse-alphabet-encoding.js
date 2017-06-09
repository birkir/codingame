const word = readline();
const diff = ['z', 'a'].map(n => n.charCodeAt(0)).reduce((a, b) => a - b);
print(word.split('').map(x => String.fromCharCode(97 + (diff - (c.charCodeAt(0) - 97)))).join(''))
