const prompt = require("prompt-sync")();



function main(){
    let width = prompt("Enter the width of the house: ")
    let depth = prompt("Enter the depth of the house: ")
    let height = prompt("Enter the width of the house: ")
    let sweep = prompt("Enter the sweep of the house: ")

    console.log(houseVolume(width,depth,height,sweep));
}

function livingVolume(w,h,d){
    return w * h * d;
}

function triangleArea(a,b,c){
    let s = (a+b+c)/2;
    let area = Math.sqrt(s *(s-a)*(s-b)*(s-c));
    return area;
}

function roofVolume(w,d,s){
   return triangleArea(w,d,s)* w;
}

function houseVolume(w,d,h,s){
    return livingVolume(w,d,h) + roofVolume();
}