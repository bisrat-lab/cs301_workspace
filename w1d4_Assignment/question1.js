const prompt = require("prompt-sync")();

let num = +prompt("Enter a number: ");
let isPrime =true;

if(num === 1){
    console.log("1 is not prime number or composite number: ")
}else if(num >1){
    for(let i=2; i< num; i++ ){
        if(num % i ==0){
            isPrime = false;
            break;
        }
}
if(isPrime){
    console.log(`${num} is prime number.`)
}else{
    console.log(`${num} is  NOT prime number.`)
}
}