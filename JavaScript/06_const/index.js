// const = a variable that can't be changed


const PI = 3.14159
let radius;
let circumference;

// PI = 34.35;
// Uncaught TypeError: Assignment to constant variable.
//     at index.js:7:4

document.getElementById("mySubmit").onclick = function() {
    radius = document.getElementById("myText").value;
    radius = Number(radius)
    circumference = 2 * PI * radius;
    document.getElementById("myH3").textContent = circumference + "cm";
}