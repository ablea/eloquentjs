var min = function(n,n1){
  if (n > n1)
    return n1;
  else if (n < n1)
    return n;
}

console.log(min(0, 10));
// ? 0
console.log(min(0, -10));
// ? -10