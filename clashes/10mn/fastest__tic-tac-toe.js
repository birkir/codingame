g=[0,0,0][m='map'](readline);
print(g[m]((a,i)=>g[m](x=>x[i]).join``).concat([0,2][m](w=>g[m]((x,i)=>g[w?w-i:i][i])),g).find(t=>t=='XXX'||t=='OOO')[0]||'Draw')
