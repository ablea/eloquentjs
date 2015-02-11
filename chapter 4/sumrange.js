// Your code here.
function range(x,y,step){
  if(step == null){
    step = 1;
  }
  var numList = [];
  if(step > 0){
   while(x <= y){
       numList.push(x);
       x += step;
     }
  }else while(x >= y){
       numList.push(x);
       x += step;
     } 
 return numList;
}

function sum(numList){
  var result=0; 
  for(i=0;i<numList.length;i++){
    result += numList[i];
  }
  return result;
     
}

console.log(sum(range(1, 10)));
 //? 55
console.log(range(5, 2, -1));
// ? [5, 4, 3, 2]