const yourChoice = ["rock", "paper", "scissors"];
const playerDisplay = document.getElementById("playerDisplay");
const computerDisplay = document.getElementById("computerDisplay");
const resultDisplay = document.getElementById("resultDisplay");
const playerScoreDisplay = document.getElementById("playerScoreDisplay");
const computerScoreDisplay = document.getElementById("computerScoreDisplay");
// const newGame = document.getElementById("newGame");

// DECLARE THE VALUE OF THE SCORE TO BE INITIALLY ZERO FOR DYNAMIC
let playerScore = 0;
let computerScore = 0;

function playGame(playerChoice) {
  //  CONVERT THE PLAYER CHOICE TO ARRAY OF LENGTH 3 AND INDEX AND CONVERT IT INTO NUMBERS WITH THE METHOD MATH.RANDOM TO GENERATE RANDOM NUMBER BETWEEN 1-3 AND
  // USE MATH.FLOAT TTO CONVERT IT INTO FLOAT
  const computerChoice = yourChoice[Math.floor(Math.random() * 3)];
  //   console.log(computerChoice);
  let result = "";

  if (playerChoice === computerChoice) {
    result = "Tie";
  } else {
    switch (playerChoice) {
      case "rock":
        result = computerChoice === "scissors" ? "You Win" : "You lose";
        break;
      case "paper":
        result = computerChoice === "rock" ? "You Win" : "You lose";
        break;
      case "scissors":
        result = computerChoice === "paper" ? "You Win" : "You lose";
        break;
    }
  }
  playerDisplay.textContent = `PLAYER: ${playerChoice}`;
  computerDisplay.textContent = `computer: ${computerChoice}`;
  resultDisplay.textContent = result;

  resultDisplay.classList.remove("greenText", "redText");

  switch (result) {
    case "You Win":
      resultDisplay.classList.add("greenText");
      playerScore++;
      playerScoreDisplay.textContent = playerScore;
      break;
    //   YOUR STRING IN CASE MUST AKWAYS MATCH AS IT CASE SENSITIVE AND COULD MAKE YOU STUCK
    case "You lose":
      resultDisplay.classList.add("redText");
      computerScore++;
      computerScoreDisplay.textContent = computerScore;
      break;
    default:
      resultDisplay.classList.remove("greenText", "redText");
  }

    
  // console.log(result)
}
