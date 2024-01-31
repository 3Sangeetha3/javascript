///create a game where you start with any random game number. Ask the user to keep guessing the game number until the user enters the correct value.

let gameNum = 50;

let userNum = prompt("Guess the game number: ");

while(userNum != gameNum)
{
    userNum = prompt("Oops!!.. It's a wrong number. Try again: ");
}
console.log("Congratulations guessed a correct number!");