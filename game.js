function getComputerChoice() {
    randomNumber = Math.random();
    randomNumber = randomNumber * 3;
    randomNumber = Math.floor(randomNumber);
    if (randomNumber==0) {
        return "ROCK"
    }else if (randomNumber==1) {
        return "PAPER"
    }else{
        return "SCISSORS";
    }

}
//console.log(getComputerChoice())

function singleRound(playerSelection, computerSelection) {
    computerSelection = computerSelection.toLowerCase();
    playerSelection = playerSelection.toLowerCase();

    if(computerSelection=="scissors" && playerSelection=="rock") {
        return "You win! Rock beats Scissors";
    }else if (computerSelection=="scissors" && playerSelection=="paper") {
        return "You lose! Scissors beats Paper";
    }else if (computerSelection=="paper"&& playerSelection=="rock"){
        return "You lose! Paper beats Rock";
    }else if(computerSelection=="paper" && playerSelection=="scissors") {
        return "You win! Scissors beats Paper";
    }else if(computerSelection=="rock" && playerSelection=="paper"){
        return "You win! Paper beats Rock";
    }else if(computerSelection=="rock" && playerSelection=="scissors"){
        return "You lose! Rock beats Scissors";
    }else {
        return "Tie";
    }
}
//console.log(singleRound(prompt("playerselection"), getComputerChoice()))

function game() {
    let playerScore = 0;
    let computerScore = 0;

    //initializing loops for five games!!
    while(playerScore < 5 && computerScore < 5) {
      
        roundResult = singleRound(prompt("Chose Either Rock,Paper or Scissors"), getComputerChoice());
        //console.log(roundResult)
        if(roundResult === "You win! Paper beats Rock"||roundResult=== "You win! Scissors beats Paper"||roundResult==="You win! Rock beats Scissors") {
            playerScore ++;
        } 
        else if(roundResult === "You lose! Rock beats Scissors"||roundResult==="You lose! Paper beats Rock"||roundResult==="You lose! Scissors beats Paper") {
            computerScore ++;
        }
    }

    if(playerScore > computerScore) {
        return ('You won!');

    } else if(playerScore < computerScore) {
        
        return ('You lose!');
    }

}
console.log(game());
