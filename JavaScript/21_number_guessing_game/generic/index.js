const hint = document.getElementById("hint");
const guessInput = document.getElementById("guessInput");
const outputMessage = document.getElementById("outputMessage");
const submitBtn = document.getElementById("submitBtn");

const correctGuess = Math.floor(Math.random() * 100 ) + 1
hint.textContent = `[hint: ${correctGuess}]`;

submitBtn.onclick = function() {
    let guess = Number(guessInput.value);

    if(guess === correctGuess) {
        outputMessage.textContent = `You guessed RIGHT!`;
        submitBtn.style.backgroundColor = "green";
    }
    else {
        outputMessage.textContent = `WRONG guess!`;
        submitBtn.style.backgroundColor = "red";
    }
}