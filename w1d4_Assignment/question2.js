const prompt = require("prompt-sync")();

let num = +prompt("Enter a number: ")
let result=1;

for(let i = num; i>=1; i--){ 
    result = result * i;
}
console.log(result)


