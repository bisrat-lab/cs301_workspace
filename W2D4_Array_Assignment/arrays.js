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
 * @returns {array} result 
 */
function reverse2String(arr){
    let copy =[];
    let with_;
    for(let i= arr.length - 1 ; i>=0 ;i--){
        copy.push(arr[i]);
    }
    with_ = copy.join("_")

  return with_;
}
module.exports= {isArrayEqual, addends, getMiddle, rotateLeft, rotateRight, reverse2String};

//[-1, -100, 1, 2, 3, -55]), [-100, 1, 2, 3, -55, -1]
//[-1, -100, 1, 2, 3, -55]), [-55, -1, -100, 1, 2, 3,]