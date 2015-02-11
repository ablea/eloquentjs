// Your code here.
function reverseArray(array){
  var newArray = [];
  for (var i = array.length-1; i >=0; i--)
  {
     newArray.push(array[i]);
  }
  return newArray;
}

function reverseArrayInPlace(array){
  var begin = 0;
  var end = array.length-1;
  while(begin < end)
  {
    var temp = array[begin];
    array[begin] = array[end];
    array[end] = temp;
    begin++;
    end--;
  }
    
  return array;
}

console.log(reverseArray(["A", "B", "C"]));
// ? ["C", "B", "A"];
var arrayValue = [1, 2, 3, 4, 5];
reverseArrayInPlace(arrayValue);
console.log(arrayValue);
// ? [5, 4, 3, 2, 1]