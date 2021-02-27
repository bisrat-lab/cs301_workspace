const prompt = require("prompt-sync")();
let radius = parseFloat(prompt("Enter the radius of the circle: "))
let height = parseFloat(prompt("Enter the Height: "))
console.log(`Area of circle: ${area(radius)}`)
console.log(`Volume of cylinder : ${volumeOfcylinder(height)}`)


function area(r){
    return Math.PI * Math.pow(r, 2)
}

function volumeOfcylinder(h){
    return area(radius) * h;
}
