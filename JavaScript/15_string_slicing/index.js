// string slicing = creating a substring
//                  from a portion of another string

//                  string.slice(start, end)

const fullName = "GyanaPriyadarshi"

let firstName = fullName.slice(0, 5);
console.log(firstName)

let lastName = fullName.slice(5, 16);
console.log(lastName);

console.log(fullName.slice());
console.log(fullName.slice(5));
console.log(fullName.slice(5, ));
console.log(fullName.slice(5, 100000));
console.log(fullName.slice(-1000, 1000));

let firstChar = fullName.slice(0, 1);
console.log(firstChar);

let lastChar = fullName.slice(-1);
console.log(lastChar);

console.log(fullName.slice(-1));
console.log(fullName.slice(0, -1));
console.log(fullName.slice(9, -1));
console.log(fullName.slice(fullName.length * -1));

const fullNameWithSpace = "Gyana Priyadarshi";

firstName = fullNameWithSpace.slice(0, fullNameWithSpace.indexOf(" "));
lastName = fullNameWithSpace.slice(fullNameWithSpace.indexOf(" ") + 1);

console.log(firstName);
console.log(lastName);

const email = "email@gyana.org.in"

let username = email.slice(0, email.indexOf("@"));
console.log(username);

let extension = email.slice(email.lastIndexOf("@") + 1);
console.log(extension);