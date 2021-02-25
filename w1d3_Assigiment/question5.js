const prompt = require("prompt-sync")();

let age = prompt("Enter your child age: ")
let season = prompt("Enter the season: ")
let time = "";

if(age <= 5){
    if(season == 'summer' || season =='fall'){
        time = '8:30';
    }
    if(season == 'winter' || season == 'spring'){
        time = '8:00';
    }
    
}
else if(age <=12){
    if(season == 'summer' ){
        time = '9:30';
    }
    if(season == 'winter' || season == 'spring' || season =='fall'){
        time = '8:30';
    }
}
else{
    if(season == 'summer' ){
        time = '10:30';
    }
    if(season == 'winter' || season == 'spring' || season =='fall'){
        time = '9:30';
    }
}
console.log(`Your child's bedtime is: ${time} PM`);
    
