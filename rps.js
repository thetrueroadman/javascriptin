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

function playRound(playerSelection) {
  let computerSelection = getCompChoice();

  // 0 means tie, 1 means win, 2 means lose.
  if (playerSelection == "rock") {
    if (computerSelection == "rock") {
      return 0
    } else if (computerSelection == "paper") {
      return 2
    } else if (computerSelection == "scissors") {
      return 1
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

let rock = document.getElementById("rock");

rock.addEventListener("click", e => {
  console.log(playRound("rock"));
});

let paper = document.getElementById("paper");

paper.addEventListener("click", e => {
  console.log(playRound("paper"));
});

let scissors = document.getElementById("scissors");

scissors.addEventListener("click", e => {
  console.log(playRound("scissors"));
});
