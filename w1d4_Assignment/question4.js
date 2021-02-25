const prompt = require("prompt-sync")();

let num = parseInt(prompt("Enter the N number of trem: "))
let f0 = 0;
let f1 = 1;
let nTerm;

for(let i = 1; i<=num ;i++){
    console.log(f0);
    nTerm = f0 + f1;
    f0 = f1;
    f1 = nTerm;
}
