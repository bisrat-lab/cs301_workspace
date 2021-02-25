const prompt = require("prompt-sync")();

let status = prompt("Enter the status of the borrower: ")
let number_book = +prompt("Enter number of book overdue: ")
let LDW = 0; 
if(status == 'student'){
    if(number_book==0){
         LDW = 6;
    }else if(number_book < 3){
        LDW = 4;
    }else if(number_book >=3){
        LDW = 2;
    }
    
}else if(status=='faculty'){
    if(number_book==0){
        LDW = 12;
   }else if(number_book < 3){
       LDW = 10;
   }else if(number_book >=3){
       LDW = 8;
   }
   
}else if(status=='other'){
    if(number_book==0){
        LDW = 4;
   }else if(number_book < 3){
       LDW = 3;
   }else if(number_book >=3){
       LDW = 2;
   }
  
}
console.log(`Lone duration in weeks is: ${LDW}`)