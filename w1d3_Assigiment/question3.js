const prompt = require("prompt-sync")();

let cost = +prompt("Enter the cost of the house: ")

if(cost >0 && cost < 50000){
    console.log(`The down payment is: ${cost*0.05}`)
}else if (cost < 100000){
    let cal= cost-50000;
    console.log(`The down payment is: ${(cal*0.1)+1000}`)
}else if (cost < 200000){
    let cal2= cost-100000;
    console.log(`The down payment is: ${(cal2*0.15)+2000}`)
}else{
    let cal3= cost-200000;
    console.log(`The down payment is: ${(cal3*0.15)+5000}`)
}
 
