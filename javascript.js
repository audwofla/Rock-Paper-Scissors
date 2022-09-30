//randomly return rock paper or scissors
function getComputerChoice() {
  let choice = Math.random();
  if (choice >= 0 && choice < .33) {
    choice = "Rock";
  }else if (choice >= .33 && choice < .67) {
    choice = "Paper";
  }else if (choice > .67) {
    choice = "Scissors";
  }
  return choice;
}
let playerSelection = "";
let computerSelection = "";
let winner = "";

//plays a round of rock paper scissors
//takes two parameters and returns a string that declares the winner
//"You lose! Paper beats Rock!"
//make playerSelection parameter case-insensitive (rock, ROCK, or RocK are all valid results)
function gameRound(playerSelection, computerSelection) {
  computerSelection = getComputerChoice();
  console.log("You: " + playerSelection)
  console.log("Computer: " + computerSelection)
  playerSelection = playerSelection.toUpperCase();
  if (playerSelection == "ROCK") {
    if (computerSelection == "Rock") {
      console.log("It's a tie")
      winner = "Tie";
    }else if (computerSelection == "Paper") {
      console.log("You lose! Paper beats rock!")
      winner = "Lose";
    }else if (computerSelection == "Scissors") {
      console.log("You win! Rock beats scissors!")
      winner = "Win";
    }
  }else if (playerSelection == "PAPER") {
    if (computerSelection == "Paper") {
      console.log("It's a tie")
      winner = "Tie";
    }else if (computerSelection == "Scissors") {
      console.log("You lose! Scissors beats paper!")
      winner = "Lose";
    }else if (computerSelection == "Rock") {
      console.log("You win! Paper beats rock!")
      winner = "Win";
    }
  }else if (playerSelection == "SCISSORS") {
    if (computerSelection == "Scissors") {
      console.log("It's a tie")
      winner = "Tie";
    }else if (computerSelection == "Rock") {
      console.log("You lose! Rock beats scissor!")
      winner = "Lose";
    }else if (computerSelection == "Paper") {
      console.log("You win! Scissors beats paper!")
      winner = "Win";
    }
  return winner;
  }      
}

function game() {
  let win = 0;
  let loss = 0;
  for (let i = 1; i < 6; i++) {
    let playerSelection = prompt();
    let computerSelection = getComputerChoice();
    gameRound(playerSelection, computerSelection);
    if (winner == "Win") {
      win++;
    }else if (winner == "Lose") {
      loss++;
    }else if (winner == "Tie") {
      --i;
    }
    console.log("Round:", i);
    console.log("Win:", win, "Loss:", loss);
    if (win == 3) {
      console.log("You win the best of three!");
    }else if (loss == 3) {
      console.log("You lose the best of three!");
    }
  }



  
//use console.log() to display winner

}