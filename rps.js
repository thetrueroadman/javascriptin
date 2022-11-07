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

function playRound(playerSelection, computerSelection) {
  // 0 means tie, 1 means win, 2 means lose.
  if (playerSelection == "rock") {
    if (computerSelection == "rock") {
      return 0;
    } else if (computerSelection == "paper") {
      computerScore += 1;
      return 2;
    } else if (computerSelection == "scissors") {
      playerScore += 1;
      return 1;
    }
  }

  if (playerSelection == "paper") {
    if (computerSelection == "rock") {
      playerScore += 1;
      return 1;
    }
    if (computerSelection == "paper") {
      return 0;
    }
    if (computerSelection == "scissors") {
      computerScore += 1;
      return 2;
    }
  }

  if (playerSelection == "scissors") {
    if (computerSelection == "rock") {
      computerScore += 1;
      return 2;
    }
    if (computerSelection == "paper") {
      playerScore += 1;
      return 1;
    }
    if (computerSelection == "scissors") {
      return 0;
    }
  }
}

//Makes sure the first letter of the output is capitalized.
function capitalize(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

function isGameOver() {
  return playerScore === 5 || computerScore === 5;
}

function outputSelect(buttonClick) {
  let computerSelection = getCompChoice();
  let ul = document.getElementById("output");
  let li = document.createElement("li");
  if (isGameOver() == true) {
    li.appendChild(document.createTextNode("The game is over. Refresh to play again!"));
    ul.prepend(li);
  } else {
  let x = playRound(buttonClick, computerSelection);
  switch (x) {
    case 0:
      li.appendChild(document.createTextNode(`You both selected ${buttonClick}. Tie.`));
      ul.prepend(li);
      break;
    case 1:
      let outputWin = capitalize(`${buttonClick} beats ${computerSelection}. You win!`);
      li.appendChild(document.createTextNode(outputWin));
      ul.prepend(li);
      break;
    case 2:
      let outputLose = capitalize(`${computerSelection} beats ${buttonClick}. You lose.`);
      li.appendChild(document.createTextNode(outputLose));
      ul.prepend(li);
      break;
    }
  }
}

let rock = document.getElementById("rock");

rock.addEventListener("click", e => {
  outputSelect("rock");
  document.getElementById("playerScore").innerHTML = `Player Score: ${playerScore}`;
  document.getElementById("compScore").innerHTML = `Computer Score: ${computerScore}`;
});

let paper = document.getElementById("paper");

paper.addEventListener("click", e => {
  outputSelect("paper");
  document.getElementById("playerScore").innerHTML = `Player Score: ${playerScore}`;
  document.getElementById("compScore").innerHTML = `Computer Score: ${computerScore}`;
});

let scissors = document.getElementById("scissors");

scissors.addEventListener("click", e => {
  outputSelect("scissors");
  document.getElementById("playerScore").innerHTML = `Player Score: ${playerScore}`;
  document.getElementById("compScore").innerHTML = `Computer Score: ${computerScore}`;
});
