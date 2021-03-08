"use strict"; 

let car = {
    make: "Toyota",
    model: "camary"
};

console.log(car);

car.model = "RAV4";

console.log(car);

delete car.make;
delete car.model;

console.log(car);



