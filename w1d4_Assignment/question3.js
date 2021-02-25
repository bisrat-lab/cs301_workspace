const prompt = require("prompt-sync")();

const PIN = 123; 


let user = +prompt("Enter the pin number: ")
let count = 1;

while(true){
    user = +prompt('Enter you PIN again: ')
    if(user == PIN){
        console.log('“Correct, welcome back')
        break;
    }
    count++;
    if(count>=3){
        console.log('Sorry but you have benn locked out.')
        break};
}



