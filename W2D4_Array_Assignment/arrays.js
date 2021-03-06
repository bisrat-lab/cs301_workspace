"use strict";
/**
 * 
 * @param {array} arr1 first array
 * @param {array} arr2 second array
 * @returns {boolean} true if equal else false
 */
function isArrayEqual(arr1, arr2){
    if(arr1.length != arr2.length)return false

    for(let i=0; i<arr1.length; i++){
        if(arr1[i]!== arr2[i]){
            return false;
        }
    }
    return true;
}

/**
 * 
 * @param {array} arr this is array
 * @returns {number} result of addition of first and last elements of the array 
 */
function addends(arr){
    let first = arr[0];
    let last = arr[arr.length - 1];
    return first + last;
}

/**
 * 
 * @param {array} arr is an array
 * @returns {number} result 
 */
function getMiddle(arr){ 
    let middle; 
    if(arr.length % 2 == 0){
       // middle = arr[Math.floor((arr.length -1)/2)];
       let mid1 = arr[arr.length / 2];
       let mid2  = (arr[arr.length / 2]) - 1; 
       middle = (mid1 + mid2)/2; 
    }else{
        middle= arr[Math.floor(arr.length / 2) ];
    }
    
  return middle;
}

/**
 * 
 * @param {arrar} arr is an array
 * @returns {array} array  
 */
function rotateLeft(arr){
    
    let copy =[];
    for(let i=0; i<arr.length;i++){
        copy.push(arr[i]);
    }
    copy.shift();
    copy.push(arr[0]);
  return copy;
}
//==========other Solution ============
//function rotateLeft(arr){
//     let first = arr[0];
//   for(let i=0; i<arr.length;i++){
//       arr[i] = arr[i+1]
//   }
//   arr[arr.length - 1 ] = first;

//   return arr
//}

/**
 * 
 * @param {array} arr is an array
 * @returns {array} array 
 */
function rotateRight(arr){
    let copy =[];
    for(let i=0; i<arr.length;i++){
        copy.push(arr[i]);
    }
    copy.pop();
    copy.unshift(arr[arr.length - 1]);
    return copy;
}

/**
 * 
 * @param {array} arr is an array 
 * @param {number} n is an index
 * @returns {array} array
 */
function rotateNRight(arr,n){
       let nRotated = arr;
       for(let i=1; i<=n; i++){
           nRotated = rotateRight(arr);
       }
    
return nRotated;

 }

/**
 * 
 * @param {array} arr is an array
 * @returns {array} result 
 */
function reverse2String(arr){
    let copy =[];
    let with_;
    for(let i= arr.length - 1 ; i>=0 ;i--){
        copy.push(arr[i]);
    }
    with_ = copy.join("_");

  return with_;
}

/**
 * @param {array} arr is an array
 * @param {number} value is a value
 * @returns {array} array
 */
function enhancedIncludes(arr, value){
    let arr2 =[];
        arr2.push(arr.includes(value));
        arr2.push(arr.indexOf(value));
        arr2.push(arr.lastIndexOf(value));

        return arr2;    
}

/**
 * 
 * @param {array} arr is an array 
 * @param {number} aaa is a number 
 * @param {number} bbb is a number 
 * @returns {arrar} array
 */
function filterRange(arr, aaa, bbb){
    let newArr = [];
       for(let i=0; i<arr.length; i++){
           if(arr[i] >= aaa && arr[i]<= bbb){
                newArr.unshift(arr[i]);
           }
       }
        return newArr;
}

/**
 * 
 * @param {array} arr is an array 
 * @returns {array} result 
 */
function filterPalindromes(arr){
    let len= arr.length;
        let newArr = [];
       for(let i=0; i<len; i++){
           if(arr[i] == arr[len - 1 -i]){
                newArr.push(arr[i]);
           }
       }
       return newArr;
}

/**
 * 
 * @param {array} arr1 is materx
 * @param {array} arr2 is materx 
 * @returns {array} result
 */
function matrixAddition(arr1 , arr2){
    let sum = [];
    for(let i=0; i<3; i++){
        for(let j=0; j<3; j++){
            sum.push(arr1[i][j] + arr2[i][j]);
        }
        return sum;
    }
}

/**
 * 
 * @param {array} first array
 * @param {array} second array
 * @returns {array} array
 */
function mergeSorted(first, second) {
    let merged = [];
    while (first.length > 0 && second.length > 0) {
        let smaller = first[0] < second[0] ? first : second;
        merged.push(smaller.shift());
    }

    if (first.length > 0) {
        merged.concat(first);
    } else if (second.length > 0) {
        merged.concat(second);
    }
    return merged;
}

console.log(mergeSorted([1,3,4,10,11],[1,3,4]))

module.exports= {isArrayEqual, addends, getMiddle, rotateLeft, rotateRight, rotateNRight, reverse2String, filterRange, enhancedIncludes, filterPalindromes, matrixAddition};

