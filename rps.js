function randomNum() {
  return Math.floor(Math.random() * 3);
}

function getCompChoice() {
  switch (randomNum()) {
    case 0:
      return "rock"
      break;
    case 1:
      return "scissors";
      break;
    case 2:
      return "paper";
      break;
  }
}
let playerScore = 0;
let computerScore = 0;
function playRound(playerSelection) {
  let computerSelection = getCompChoice();

  // 0 means tie, 1 means win, 2 means lose.
  if (playerSelection == "rock") {
    if (computerSelection == "rock") {
      return "Tie";
    } else if (computerSelection == "paper") {
      computerScore += 1;
      return "Lose";
    } else if (computerSelection == "scissors") {
      playerScore += 1;
      return "Win";
    }
  }

  if (playerSelection == "paper") {
    if (computerSelection == "rock") {
      playerScore += 1;
      return "Win";
    }
    if (computerSelection == "paper") {
      return "Tie";
    }
    if (computerSelection == "scissors") {
      computerScore += 1;
      return "Lose";
    }
  }

  if (playerSelection == "scissors") {
    if (computerSelection == "rock") {
      computerScore += 1;
      return "Lose";
    }
    if (computerSelection == "paper") {
      playerScore += 1;
      return "Win";
    }
    if (computerSelection == "scissors") {
      return "Tie";
    }
  }
}

let rock = document.getElementById("rock");

rock.addEventListener("click", e => {
  console.log(playRound("rock"));
  console.log("Your score: " + playerScore);
  console.log("Computer's score: " + computerScore);
});

let paper = document.getElementById("paper");

paper.addEventListener("click", e => {
  console.log(playRound("paper"));
});

let scissors = document.getElementById("scissors");

scissors.addEventListener("click", e => {
  console.log(playRound("scissors"));
});
