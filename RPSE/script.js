
document.addEventListener('DOMContentLoaded', () => {
    const heading = document.querySelector('h1');
    heading.textContent = 'Open the console!';
});

function getComputerChoice(){
  return Math.random();
}

console.log(getComputerChoice());

if (getComputerChoice() <= 0.33) {
  console.log("Rock");
} else if (getComputerChoice() > 0.33 && getComputerChoice() <= 0.66) {
  console.log("Paper");
} else if (getComputerChoice() > 0.66) {
  console.log("Scissors");
}

function getComputerChoice(){
  return Math.random();
}

const computerChoice = getComputerChoice();
const userInput = prompt("Enter your choice (Rock, Paper, or Scissors): ");

if (computerChoice <= 0.33) {
  console.log("Computer chose Rock");
} else if (computerChoice > 0.33 && computerChoice <= 0.66) {
  console.log("Computer chose Paper");
} else {
  console.log("Computer chose Scissors");
}

console.log(`You chose: ${userInput}`);

// Compare user input with computer choice
if (userInput.toLowerCase() === "rock") {
  if (computerChoice <= 0.33) {
    console.log("It's a tie!");
  } else if (computerChoice > 0.33 && computerChoice <= 0.66) {
    console.log("Paper covers Rock, you lose!");
  } else {
    console.log("Rock crushes Scissors, you win!");
  }
} else if (userInput.toLowerCase() === "paper") {
  if (computerChoice <= 0.33) {
    console.log("Paper covers Rock, you win!");
  } else if (computerChoice > 0.33 && computerChoice <= 0.66) {
    console.log("It's a tie!");
  } else {
    console.log("Scissors cuts Paper, you lose!");
  }
} else if (userInput.toLowerCase() === "scissors") {
  if (computerChoice <= 0.33) {
    console.log("Rock crushes Scissors, you lose!");
  } else if (computerChoice > 0.33 && computerChoice <= 0.66) {
    console.log("Scissors cuts Paper, you win!");
  } else {
    console.log("It's a tie!");
  }
}