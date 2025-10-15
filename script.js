// Get the buttons from the HTML by their IDs
const rockButton = document.getElementById("rock");
const paperButton = document.getElementById("paper");
const scissorsButton = document.getElementById("scissors");

// Get the result element from the HTML
const resultDiv = document.getElementById("result");

// This function picks a random move for the computer
function getComputerChoice() {
  // Get a random whole number: 0, 1, or 2
  const randomNumber = Math.floor(Math.random() * 3);

  // If randomNumber is 0, return "Rock"
  if (randomNumber === 0) {
    return "Rock";
  }
  // If randomNumber is 1, return "Paper"
  else if (randomNumber === 1) {
    return "Paper";
  }
  // If randomNumber is 2, return "Scissors"
  else {
    return "Scissors";
  }
}

// This function plays one round of the game
function playRound(playerChoice) {
  // Get the computer's choice
  const computerChoice = getComputerChoice();

  // Remove emoji from player's choice for comparison
  let playerMove = "";
  if (playerChoice === "Rock 🪨") {
    playerMove = "Rock";
  } else if (playerChoice === "Paper 📄") {
    playerMove = "Paper";
  } else if (playerChoice === "Scissors ✂️") {
    playerMove = "Scissors";
  }

  // Decide who wins
  let result = "";
  if (playerMove === computerChoice) {
    result = "It's a tie!";
  } else if (
    (playerMove === "Rock" && computerChoice === "Scissors") ||
    (playerMove === "Paper" && computerChoice === "Rock") ||
    (playerMove === "Scissors" && computerChoice === "Paper")
  ) {
    result = "You win!";
  } else {
    result = "Computer wins!";
  }

  // Show both choices and the result
  resultDiv.textContent = `You chose: ${playerChoice}. Computer chose: ${computerChoice}. ${result}`;
}

// Add event listener for rock button
rockButton.addEventListener("click", function() {
  playRound("Rock 🪨");
});

// Add event listener for paper button
paperButton.addEventListener("click", function() {
  playRound("Paper 📄");
});

// Add event listener for scissors button
scissorsButton.addEventListener("click", function() {
  playRound("Scissors ✂️");
});