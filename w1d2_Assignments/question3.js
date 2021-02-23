const prompt= require("prompt-sync")();
let total_box = +prompt("Enter the total number of box: ")
let box_stack = + prompt("Enter the stack numner: ")

let stack = Math.ceil(total_box/box_stack);
console.log(`The number of stacks you will have to make is: ${stack}`)

