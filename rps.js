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
  function win() {
    return playerSelection + " beats " + computerSelection + ". You win!";
  }

  function lose() {
    return computerSelection + " beats " + playerSelection + ". You lose...";
  }

  function tie() {
    return "You both picked " + playerSelection + ". Draw!";
  }

  if (playerSelection == "rock") {
    if (computerSelection == "rock") {
      return tie();
    } else if (computerSelection == "paper") {
      return lose();
    } else if (computerSelection == "scissors") {
      return win();
    }
  }

  if (playerSelection == "paper") {
    if (computerSelection == "rock") {
      return win();
    }
    if (computerSelection == "paper") {
      return tie();
    }
    if (computerSelection == "scissors") {
      return lose();
    }
  }

  if (playerSelection == "scissors") {
    if (computerSelection == "rock") {
      return lose();
    }
    if (computerSelection == "paper") {
      return win();
    }
    if (computerSelection == "scissors") {
      return tie();
    }
  }
}
let playerPrompt = prompt("Rock, paper, or scissors?")
const playerSelection = playerPrompt.toLowerCase();
const computerSelection = getCompChoice();
console.log(playRound(playerSelection, computerSelection));
