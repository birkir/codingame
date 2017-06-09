const S = readline();
const x = S.match(/\d*[a-z]+/gi);
const b = x.map(d => {
  const n = Number(d.match(/\d*/));
  return d.substr((n + '').length).repeat(n);
});

print(b.join(''));
