let getComputerChoice = function () {
  let randomInteger = Math.floor(Math.random() * 3);
  let computerInput;
  console.log(randomInteger);
  if (randomInteger === 0) {
    computerInput = "rock";
  } else if (randomInteger === 1) {
    computerInput = "paper";
  } else {
    computerInput = "scissors";
  }
  console.log(`Computer choice was ${computerInput}`);
  return computerInput;
};

let humanScore = 0;
let computerScore = 0;

const gameResults = document.querySelector("#gameResults");
const humanScorePara = document.createElement("p");
gameResults.appendChild(humanScorePara);

let playRound = function (humanChoice, computerChoice) {
  humanChoice = humanChoice.toLowerCase();
  computerChoice = computerChoice.toLowerCase();
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
  scoreArray = [humanScore, computerScore];
  humanScorePara.textContent = `Human Score: ${humanScore} \n Computer Score: ${computerScore}`;
  return scoreArray;
};

let trackWinner = function (scoreArray) {
  let roundCounter = 0;
  for (i = 0; i < scoreArray.length; i++) {
    roundCounter += scoreArray[i];
  }
  if (roundCounter === 5) {
    let winner = calcWinner(scoreArray);
    scoreArray = [0, 0];
    humanScore = 0;
    computerScore = 0;
    humanScorePara.textContent = `The winner is: ${winner}`;
  }
};

let calcWinner = function (scoreArray) {
  let humanScore = scoreArray[0];
  let computerScore = scoreArray[1];
  let winner = "";
  if (humanScore > computerScore) {
    winner = "HUMAN";
  } else if (humanScore === computerScore) {
    winner = "DRAW";
  } else {
    winner = "COMPUTER";
  }
  return winner;
};

const buttons = document.querySelectorAll("button");

buttons.forEach((btn) => {
  btn.addEventListener("click", () => {
    let humanChoice = btn.textContent;
    console.log(humanChoice);

    let computerChoice = getComputerChoice();
    let scores = playRound(humanChoice, computerChoice);
    trackWinner(scores);
  });
});

//playGame();

//Add an event listener to the buttons that call your playRound function with the correct playerSelection
//every time a button is clicked. (you can keep the console.logs for this step)
