const prompt= require("prompt-sync")();
let start  = +prompt("Enter the beginning odometer reading: ")
let end = +prompt("Enter the ending odometer reading: ")
let gallons_used = +prompt("Enter the number of gallonsof gas used: ")

let miles_driven = end - start;

let mpg = miles_driven/gallons_used;

console.log(`${mpg} Miles per Gallon`)