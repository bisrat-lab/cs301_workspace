/* eslint-disable require-jsdoc */
/* eslint-disable strict */
 let num =["not", "a", "kayak", "eagle", "racecar"]  // 2,3,5

function getMiddle(arr){
    let copy =[];
    for(let i = 0; i<num.length; i++){
        copy.unshift(arr[i]);
     }
  let r = copy.reverse();
     
   

    
  return r;
}

console.log(getMiddle(num))


 //[-55, -1, -100, 1, 2, 3,]