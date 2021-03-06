/* eslint-disable require-jsdoc */
/* eslint-disable strict */
 //let num =["not", "a", "kayak", "eagle", "racecar"]  // 2,3,5


    function rotateNRight(arr,value){
       
       let aaa= arr.splice(value);
       let bbb = arr.splice(0,value);
  return aaa.concat(bbb);

    }


 console.log(rotateNRight([-10, 2, 3, 4, 20], 4));
 //[2, 3, -55, -1, -100, 1, 2]

//[0, 100, 3, 6, -555], 6, 120),        [6, 100]

//  let m1 = [
//     [0, 1, 2],
//     [9, 8, 7],
// ]
// let m2 =[
//     [6, 5, 4],
//     [3, 4, 5],
// ];

// for(let i=0; i<3; i++){
//     for(let j=0; j<3; j++){
//         console.log(m1[i][j] + m2[i][j])
//     }
// }



// function rotateNRight(arr,value){
//     let copy =[];
//     let copy2 = [];
    
// for(let i=0; i<arr.length;i++){
//     copy.push(arr[i]);
// }
// copy2.push(copy.slice(0,value));
// copy2.unshift(copy.slice(value));



// return copy2;

// }
