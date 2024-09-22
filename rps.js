let getComputerChoice = function () {
  let randomInteger = Math.floor(Math.random() * 100 + 1);
  let computerInput;
  if (randomInteger < 34) {
    computerInput = "rock";
  } else if (randomInteger < 67) {
    computerInput = "paper";
  } else {
    computerInput = "scissors";
  }
  console.log(`Computer choice was ${computerInput}`);
  return computerInput;
};

let getHumanChoice = function () {
  let humanInput = prompt("Rock, paper, or scissors?").toLowerCase();
  if (
    humanInput === "rock" ||
    humanInput === "paper" ||
    humanInput === "scissors"
  ) {
    console.log(`Human choice was ${humanInput}`);
    return humanInput;
  } else {
    getHumanChoice();
  }
};

let humanScore = 0;
let computerScore = 0;

let playRound = function (humanChoice, computerChoice) {
  if (humanChoice === computerChoice) {
    console.log("draw");
  } else if (
    (humanChoice === "rock" && computerChoice == "scissors") ||
    (humanChoice === "paper" && computerChoice === "scissors") ||
    (humanChoice === "scissors" && computerChoice === "paper")
  ) {
    humanScore++;
    console.log(`You won! ${humanChoice} beats ${computerChoice}!`);
  } else {
    console.log(`You lost! ${computerChoice} beats ${humanChoice}!`);
    computerScore++;
  }
};

let playGame = function () {
  let roundCounter = 0;
  while (roundCounter < 5) {
    let humanChoice = getHumanChoice();
    let computerChoice = getComputerChoice();
    playRound(humanChoice, computerChoice);
    roundCounter++;
    console.log(`Rounds played: ${roundCounter}`);
    console.log(
      `Human Score: ${humanScore} vs. Computer Score: ${computerScore}`
    );
  }

  if (humanScore > computerScore) {
    console.log("winner is: HUMAN!");
  } else if (humanScore === computerScore) {
    console.log("DRAW!");
  } else {
    console.log("winner is: COMPUTER!");
  }
};

playGame();
