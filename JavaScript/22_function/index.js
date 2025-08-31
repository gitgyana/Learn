// function = A section of reusable code.
//            Declare code once, use it whenever you want.
//            Call the function to execute that code.

function happyBirthday(username, age) {
    console.log("Happy birthday to you!");
    console.log("Happy birthday to you!");
    console.log(`Happy birthday dear ${username}!`);
    console.log("Happy birthday to you!");
    console.log(`You are ${age} years old`);
}

happyBirthday("Gyana", 22);
happyBirthday("Adarsh", 25);
happyBirthday("Riya", 23);

function add(x, y) {
    let result = x + y;
    return result;
}

let answer = add(2, 3);
console.log(answer);
console.log(add(34, 35));

function subtract(x, y) {
    return x - y;
}

console.log(subtract(2, 8));

function multiply(x, y) {
    return x * y;
}

console.log(multiply(2, 8));

function divide(x, y) {
    return x / y;
}

console.log(divide(2, 8));

function isEven(number) {
    if(number % 2 === 0) {
        return true;
    }

    return false;
}

console.log(isEven(1));

function isValidEmail(email) {

    return email.includes("@");
}

console.log(isValidEmail("email@gyana.org.in"));
console.log(isValidEmail("ElonMusk.com"));
console.log(isValidEmail("zumba.rumba@hampa.hola"));