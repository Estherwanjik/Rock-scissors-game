function getComputerChoice() {
    randomNumber=Math.random();
    randomNumber=randomNumber*3;
    randomNumber=Math.floor(randomNumber);
    if (randomNumber==0){
        return "Rock"
    } else if (randomNumber==1) {
        return "Paper"
    } else {
        return "Scissors";
    }
}


function singleRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();
    if (computerSelection == "rock" && playerSelection == "scissors") {
        return "You lose! Rock beats Scissors";
    } else if (computerSelection == "rock" && playerSelection == "paper") {
        return "You win! Paper beats Rock";
    } else if (computerSelection == "paper" && playerSelection == "scissors") {
        return "You win! Scissors beats Paper";
    } else if (computerSelection == "paper" && playerSelection == "rock") {
        return "You lose! Paper beats Rock";
    } else if (computerSelection == "scissors" && playerSelection =="paper") {
        return "You lose! Scissors beats Paper";
    } else if (computerSelection == "scissors" && playerSelection == "rock") {
        return "You win! Rock beats Scissors";
    } else {
        return "Tie"; 
    }
}

function game() {
    countResult = 0
    selection = prompt("choose either, Rock,Paper,Scissors");
    result = singleRound(selection,getComputerChoice());
    console.log(result)
    if (result == "You win!") {
        return countResult = 1
    }
    selection = prompt("choose either, Rock,Paper,Scissors");
    result = singleRound(selection,getComputerChoice());
    console.log(result)
}

game() 