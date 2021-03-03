const prompt = require("prompt-sync")();

let hfc = function(n1,n2){
    let hcf =0 ;
    for(let i=1; i<=n1 && i<=n2; i++){
        if(n1%i==0 && n2%i ==0){
            hfc = i;
        }
    }
    return hfc
    // console.log(`HFC: ${hfc}`)
    
}


function lcm(x,y){
    return (x*y) / hfc(x,y)
    // console.log(`LCM: ${(x*y) / hfc(x,y)} `)
}

//console.log(lcm(6,8)); 


function main(num1,num2){
    

   hfc(num1,num2)
   lcm(num1,num2) 
}

let num1 = +prompt("Enter the first Number: ")
let num2 = +prompt("Enter the second Number: ")
main(num1,num2);




