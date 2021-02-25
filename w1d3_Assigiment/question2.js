const prompt = require("prompt-sync")();

let stuName = prompt("Enter Student Name: ");
let credit = +prompt("Enter completed credits: ")

if(credit >0 && credit <30){
    console.log(`Student ${stuName} is Freshman`)
}
if(credit>=30 && credit < 60){
    console.log(`Student ${stuName} is Sophomore`)
}
if(credit>=60 && credit <90 ){
    console.log(`Student ${stuName} is Junior`)
}if(credit >=90) {
    console.log(`Student ${stuName} is Senior`)
}
