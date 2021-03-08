"use strict"; 

/**
 * 
 * @param {object} obj is an object
 * @returns {number} result 
 */
function countProperties(obj){
let numProb = 0;
for(let key in obj){
    numProb++;
}

return numProb;
}

/**
 * 
 * @param {String} str string 
 * @returns {boolean} result
 */
function checkSpam(str){
    if(str.includes("lottery")||str.includes("prize") ){
        return true;
    }
   return false;
    
}

/**
 * 
 * @param {string} str1 string 
 * @param {String} str2 string
 * @returns {string} result;
 */
function suffix(str1,str2){
    let l1 = str1.length;
    let l2 = str2.length;
    for(let i=0; i< l1;i++){
        if(str1.charAt(l1 - i - 1) !== str2.charAt(l2 - i -1))
        return false;
    }

return true;
}

/**
 * 
 * @param {String} s string
 * @return {string} result 
 */
function titleCase(s){
    let converted = s.charAt(0).toUpperCase() + s.slice(1);
    
    return converted;
}

/**
 * 
 * @param {object} users is an object
 * @returns {number} number 
 */
function getAverageAge(users){
    let sum = 0;
    let count =0;
    for (let key of users) {
    sum = sum + key.age; 
    count++;
    }
    return sum/count;
}

module.exports= {countProperties, checkSpam, suffix, titleCase,getAverageAge};