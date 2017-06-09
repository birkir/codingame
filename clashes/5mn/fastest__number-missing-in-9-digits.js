for (let i = 0, n = readline(); i < n; i++) {
  print(45 - readline().split('').map(Number).reduce((a,b)=>a+b));
}
