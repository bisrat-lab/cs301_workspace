const prompt = require("prompt-sync")();

let num = +prompt("Enter the number : ")
let sum =0; 

while(num){
    sum = sum + num % 10;
    num = Math.floor(num/10)
}

console.log(sum);