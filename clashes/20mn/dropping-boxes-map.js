s='forEach',z='map',g='join'
r=readline,[w,h]=r().split` `
m=new Array(+h).fill(0)[z](x=>r().split``);
for(n=0;++n<9;)m[s]((a,y)=>a[s]((c,x)=>{f=y+1,(c=='#'&&f<h&&m[f][x]=='.')?(m[f][x]='#',m[y][x]='.'):0}))
print(m[z](x=>x[g]``)[g]('\n'));
