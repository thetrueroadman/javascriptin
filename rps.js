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

console.log(getCompChoice());
