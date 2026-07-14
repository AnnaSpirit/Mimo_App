// Create the random number we want the player to guess.

let randomNumber = Math.floor(Math.random() * 100) + 1;
//2 keep track of the attempts our players have made.
let attempts = 10;

// add an empty function named checkGuess

function checkGuess() {
    attempts--;
    const inputElement = document.getElementById('guess');
    const feedbackElement = document.getElementById('feedback');
    const guess = inputElement.value;
    while (attempts > 0) {
        if (guess == randomNumber) {
            feedbackElement.innerHTML = "Congratulations!";
            feedbackElement.style.color = "green";
            break;
        } else if (guess < randomNumber) {
            feedbackElement.innerHTML = "Too low! Try again. Attempts left: " + attempts;
            feedbackElement.style.color = "red";
            break;
        } else {
            feedbackElement.innerHTML = "Too high! Try again. Attempts left: " + attempts;
            feedbackElement.style.color = "red";
            break;
        }
    }
    if (attempts == 0 && guess != randomNumber) {
        feedbackElement.style.color = "red";
        feedbackElement.innerHTML = "Game over! The correct number was " + randomNumber;
    }
}