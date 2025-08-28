// variable = A container that stoores a value.
//            Behaves as if it were the value it contains.

let fullName = "Gyana Priyadarshi";
let age = 25;
let isStudent = true;

document.getElementById("p1").textContent = `Your name is ${fullName}`;
document.getElementById("p2").textContent = `You are ${age} your old`;
document.getElementById("p3").textContent = `Are you enrolled in school?: ${isStudent}`;


// 1. declaration   let x;
// 2. assignment    x = 100;

/*
let age = 25;
let price = 10.99;
let gpa = 2.1;

console.log(typeof(gpa));
console.log(`You are ${age} years old`);
console.log(`The price is $${price}`);
console.log(`Your GPA is: ${gpa}`);
*/

/*
let firstName = "Gyana";
let favouriteFood = "Pizza"
let email = "gyana123@pizza.com"

console.log(typeof(firstName));
console.log(`Your name is ${firstName}`);
console.log(`You like ${favouriteFood}`);
console.log(`Your email is ${email}`);
*/

/*
let online = false;
let forSale = true;
let isStudent = true;

console.log(typeof(online));
console.log(`Bro is online: ${online}`);
console.log(`Is this car for sale?: ${forSale}`);
console.log(`Enrolled: ${isStudent}`);
*/