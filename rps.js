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

function playRound() {
  let playerPrompt = prompt("Rock, paper, or scissors?")
  let playerSelection = playerPrompt.toLowerCase();
  let computerSelection = getCompChoice();

  // 0 means tie, 1 means win, 2 means lose.
  if (playerSelection == "rock") {
    if (computerSelection == "rock") {
      return 0;
    } else if (computerSelection == "paper") {
      return 2;
    } else if (computerSelection == "scissors") {
      return 1;
    }
  }

  if (playerSelection == "paper") {
    if (computerSelection == "rock") {
      return 1;
    }
    if (computerSelection == "paper") {
      return 0;
    }
    if (computerSelection == "scissors") {
      return 2;
    }
  }

  if (playerSelection == "scissors") {
    if (computerSelection == "rock") {
      return 2;
    }
    if (computerSelection == "paper") {
      return 1;
    }
    if (computerSelection == "scissors") {
      return 0;
    }
  }
}

function game() {
  let playerScore = 0;
  let computerScore = 0;
  let bestOfFive = 0;
  while (bestOfFive === 0) {

    if (playerScore === 5 || computerScore === 5) {
      bestOfFive += 1;
      break;
    }

    let roundResult = playRound();
    switch (roundResult) {
      case 0:
        console.log("Tie.");
        console.log("Your score: " + playerScore);
        console.log("Computer's score: " + computerScore);
        break;
      case 1:
        console.log("Win");
        playerScore += 1;
        console.log("Your score: " + playerScore);
        console.log("Computer's score: " + computerScore);
        break;
      case 2:
        console.log("Fail");
        computerScore += 1;
        console.log("Your score: " + playerScore);
        console.log("Computer's score: " + computerScore);
        break;
    }
  }
}

game();
