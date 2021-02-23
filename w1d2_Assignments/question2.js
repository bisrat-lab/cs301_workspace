const prompt= require("prompt-sync")();
let km = +prompt("Enter the distance in kilometers: ")
let mi = km * 0.62137;

console.log(`${km} km is ${mi} miles`);
