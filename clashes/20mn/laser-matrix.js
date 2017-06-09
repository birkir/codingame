[w,h]=readline().split` `.map(Number)
m=new Array(h).fill(0).map(x=>readline().split``)
for(y=0;y<h;y++)if(m[y][0]=='L')Y=y
g=[1,0]
X=0
s=()=>{
  d=m[Y][X]
  e=(d=='/')
  f=(d=='\\');
  [aY,aX]=g
  if(aX>0&&e)g=[-1,0]
  if(aX>0&&f)g=[1,0]
  if(aX<0&&e)g=[1,0]
  if(aX<0&&f)g=[-1,0]
  if(aY>0&&e)g=[0,-1]
  if(aY>0&&f)g=[0,1]
  if(aY<0&&e)g=[0,1]
  if(aY<0&&f)g=[0,-1]
  X+=g[0]
  Y+=g[1]
  return (X<0||X>(w-1)||Y<0||Y>(h-1))?0:1
}
while(s());
print(X+' '+Y)
