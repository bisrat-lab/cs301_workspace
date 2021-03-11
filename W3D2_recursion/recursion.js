"use strict";

/**
 * 
 * @param {Number} num base 
 * @param {Number} p expontent 
 * @returns {Number} result
 */
function power(num ,p){
    if(p === 0){
        return 1;
    }else{
         return num * power(num, p-1);
    }
}

/**
 * 
 * @param {Number} num number
 * @returns {Number} result
 */
function countDigits(num){
num = Math.abs(num);
if(num<=9){
    return 1;
}else{
    return 1 + countDigits(Math.floor(num/10));
}
}

/**
 * 
 * @param {Number} n number
 * @returns {Number} result
 */
function countDigits2(n){
    let s = n.toString();
    if(s===""){
        return 0;
    }else{
        return 1 + countDigits2(s.substr(1));
    }
}

/**
 * 
 * @param {String} str is input string 
 * @returns {String} reverse
 */
function reverse(str){
    if(str===""){
        return "";
    }else{
      return reverse(str.substr(1)) + str.charAt(0);
      //return str[str.length -1]+ reverse(str.substr(0,str.length -1));
    }
   
}
module.exports= {power,countDigits, reverse};