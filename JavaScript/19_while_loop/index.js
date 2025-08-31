// while loop = repeat some code WHILE some condition is true

let username;

while(username === "" || username === null || username === undefined) {
    username = window.prompt("Enter your name: ");
}

console.log(`Hello ${username}`);

username = undefined;

do {
    username = window.prompt("Enter your name: ");
} while(username === "" || username === null)

console.log(`Hello ${username}`);

let loggedIn = false;
let userId;
let password;

while(!loggedIn) {
    userId = window.prompt("Enter your userID: ");
    password = window.prompt("Enter your password: ");

    if(userId === "myUserID" && password === "myPassword") {
        loggedIn = true;
        console.log("You are logged in!");
    }
    else {
        console.log("Invalid credentials! Please try again");
    }
}

loggedIn = false;

do {
    userId = window.prompt("Enter your userID: ");
    password = window.prompt("Enter your password: ");

    if(userId === "myUserID" && password === "myPassword") {
        loggedIn = true;
        console.log("You are logged in!");
    }
    else {
        console.log("Invalid credentials! Please try again");
    }
} while(!loggedIn)