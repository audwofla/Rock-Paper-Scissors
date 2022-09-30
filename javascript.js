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
  console.log(choice)
  return choice

}
let playerSelection = prompt();
let computerSelection = getComputerChoice();

//plays a round of rock paper scissors
//takes two parameters and returns a string that declares the winner
//"You lose! Paper beats Rock!"
//make playerSelection parameter case-insensitive (rock, ROCK, or RocK are all valid results)
function gameRound(playerSelection, computerSelection) {
  playerSelection = playerSelection.toUpperCase();
  if (playerSelection == "ROCK") {
    if (computerSelection == "Rock") {
      console.log("It's a tie")
    }else if (computerSelection == "Paper") {
      console.log("You lose! Paper beats rock!")
    }else if (computerSelection == "Scissors") {
      console.log("You win! Rock beats scissors!")
    }
  }else if (playerSelection == "PAPER") {
    if (computerSelection == "paper") {
      console.log("It's a tie")
    }else if (computerSelection == "Scissors") {
      console.log("You lose! Scissors beats pape!r")
    }else if (computerSelection == "Scissors") {
      console.log("You win! Paper beats rock!")
    }
  }else if (playerSelection == "SCISSORS") {
    if (computerSelection == "scissors") {
      console.log("It's a tie")
    }else if (computerSelection == "Rock") {
      console.log("You lose! Rock beats scissor!")
    }else if (computerSelection == "Paper") {
      console.log("You win! Scissors beats paper!")
    }
  }      


}

function game() {
  for (let i = 0; i < 5; i++) {

  }
//use console.log() to display winner

}