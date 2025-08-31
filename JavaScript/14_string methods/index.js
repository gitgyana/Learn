// string methods = allow you to manipulate and work with text (strings)

let userName = "Gyana";

console.log(userName.charAt(1));
console.log(userName.indexOf("a"));
console.log(userName.lastIndexOf("a"));
console.log(userName.length);
console.log(userName.trim());
console.log(userName.toUpperCase());
console.log(userName.toLowerCase());
console.log(userName.repeat(3));
console.log(userName.startsWith("G"));
console.log(userName.startsWith("a"));

if(userName.startsWith(" ")) {
    console.log("You name cannot starts with ' '");
}
else {
    console.log(userName);
}

console.log(userName.endsWith("G"));
console.log(userName.endsWith("a"));

if(userName.endsWith(" ")) {
    console.log("You name cannot end with ' '");
}
else {
    console.log(userName);
}

console.log(userName.includes("a"));
console.log(userName.includes("ana"));
console.log(userName.includes("aga"));

let phoneNumber = "123-456-7890"

console.log(phoneNumber.replaceAll("-", ""));
console.log(phoneNumber.padStart(15, "0"));
console.log(phoneNumber.padEnd(15, "0"));
