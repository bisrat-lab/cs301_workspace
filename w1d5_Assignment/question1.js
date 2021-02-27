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

console.log(checkPrime(8)) 


