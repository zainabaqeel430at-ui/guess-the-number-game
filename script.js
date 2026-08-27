let secretNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 0;

function checkGuess() {
    const input = document.getElementById("guessInput");
    const message = document.getElementById("message");
    const guess = Number(input.value);

    if (guess < 1 || guess > 100) {
        message.textContent = "Please enter a number between 1 and 100.";
        return;
    }

    attempts++;
    document.getElementById("attempts").textContent = attempts;

    if (guess === secretNumber) {
        message.textContent = "🎉 Correct! You won!";
    } else if (guess < secretNumber) {
        message.textContent = "📈 Try a higher number!";
    } else {
        message.textContent = "📉 Try a lower number!";
    }
}

function resetGame() {
    secretNumber = Math.floor(Math.random() * 100) + 1;
    attempts = 0;

    document.getElementById("attempts").textContent = "0";
    document.getElementById("message").textContent = "";
    document.getElementById("guessInput").value = "";
}
