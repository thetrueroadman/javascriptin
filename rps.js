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

function playRound(playerSelection, computerSelection) {
  if (playerSelection == "rock") {
    if (computerSelection == "rock") {
      return "tie";
    } else if (computerSelection == "paper") {
      return "lose";
    } else if (computerSelection == "scissors") {
      return "win";
    }
  }

  if (playerSelection == "paper") {
    if (computerSelection == "rock") {
      return "win";
    }
    if (computerSelection == "paper") {
      return "tie";
    }
    if (computerSelection == "scissors") {
      return "lose";
    }
  }

  if (playerSelection == "scissors") {
    if (computerSelection == "rock") {
      return "lose";
    }
    if (computerSelection == "paper") {
      return "win";
    }
    if (computerSelection == "scissors") {
      return "tie";
    }
  }
}
const playerSelection = "rock";
const computerSelection = getCompChoice();
console.log(playRound(playerSelection, computerSelection));
