const prompt = require("prompt-sync")();
let userInput = parseInt(prompt("Enter a number: "))
console.log(checkPrime(userInput)) 


function checkPrime(num){
    let isPrime = true;
    if(num===1){
        isPrime = false
    
    }else if(num > 1){
        for(let i=2; i<num; i++ ){
            if(num % i ==0){
                isPrime = false 
            }
        }
    if(isPrime)
        {
        return true
        }
    else{
        return false
        }
    }
}

