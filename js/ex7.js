const secretNumber = Math.floor(Math.random() * 100) + 1; // Generate random number between 1 and 100
let numAttempts = 0; // Keep track of number of attempts

while (true) {
  const guess = Number(prompt("Guess the number between 1 and 100"));
  
  if (guess === secretNumber) {
    numAttempts++;
    console.log(`Correct! It took you ${numAttempts} attempts to guess the correct number.`);
    break;
  } else if (guess < secretNumber) {
    console.log("Too low, guess again");
  } else {
    console.log("Too high, guess again");
  }
  
  numAttempts++;
}