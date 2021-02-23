const prompt= require("prompt-sync")();
let quarts  = +prompt("Enter Quart Value: ")
let liters = quarts * 0.946353;

console.log(`${quarts}qt is ${liters} liters.`);