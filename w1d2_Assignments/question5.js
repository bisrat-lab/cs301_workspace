const prompt= require("prompt-sync")();
let age = +prompt("Enter your Age: ")

let max_heart_rate = 220 - age; 
console.log(`Maximum heatr rate is ${max_heart_rate}`)

let slowest  = 0.65* max_heart_rate;
let fastest = 0.85* max_heart_rate;

console.log(`the slowest rate is ${slowest} and the fastest rate is ${fastest}`);