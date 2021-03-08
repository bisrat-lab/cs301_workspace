"use strict"; 
/**
 * 
 * @param {number} x is number 
 * @param {number} y is number
 * @returns {number} is number
 */
function doSwap(x,y){
    let temp;

    temp = x;
    x = y;
    y = temp;
    console.log(x,y);
}
doSwap(5,7);