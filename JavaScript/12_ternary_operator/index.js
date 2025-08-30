// ternary operator = a shortcut to if() and else() statements
//                    helps to assign a variable based on a condition
//                    condition ? codeIfTrue : codeIfFalse;

let purchaseAmount = 125;
let discount = purchaseAmount >= 100 ? 10 : 0;
console.log(`You total is Rs.${purchaseAmount - purchaseAmount * (discount / 100)}`);

// let isStudent = true;
// let message = isStudent ? "You are a student" : "You are not a student";
// console.log(message);

// let time = 16;
// let greeting = time < 12 ? "Good morning" : "Good afternoon";
// console.log(greeting);

// let age = 21;
// let message = age > 18 ? "You are an adult" : "You are a minor";
// console.log(message);