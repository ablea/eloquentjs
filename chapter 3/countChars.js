var countBs = function(string){
  return countChar(string,"B");
}

var countChar = function(string, char){
   var chars = 0;
  for (var x = 0; x < string.length; x++)
  {
    if (string.charAt(x) ==  char)
      chars += 1;
  }
return chars;
}

console.log(countBs("BBC"));
// ? 2
console.log(countChar("kakkerlak", "k"));
// ? 4