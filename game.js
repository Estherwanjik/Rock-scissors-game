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
    // console.log("Player selected " + playerSelection + " and computer selected " + computerSelection)
    if (computerSelection == "rock" && playerSelection == "scissors") {
        return "You lose!";
    } else if (computerSelection == "rock" && playerSelection == "paper") {
        return "You win!";
    } else if (computerSelection == "paper" && playerSelection == "scissors") {
        return "You win!";
    } else if (computerSelection == "paper" && playerSelection == "rock") {
        return "You lose!";
    } else if (computerSelection == "scissors" && playerSelection =="paper") {
        return "You lose!";
    } else if (computerSelection == "scissors" && playerSelection == "rock") {
        return "You win!";
    } else {
        return "Tie"; 
    }
}

function game() {
    UserWin = 0;
    ComputerWin = 0;
    selection = prompt("choose either, Rock,Paper,Scissors");
    result = singleRound(selection,getComputerChoice());
    console.log(result)
    if (result == "You win!") {
        UserWin += 1;
    } else if (result == "You lose!") {
        ComputerWin += 1;
    }
    selection = prompt("choose either, Rock,Paper,Scissors");
    result = singleRound(selection,getComputerChoice());
    console.log(result)
    if (result == "You win!") {
        UserWin += 1;
    } else if (result == "You lose!") {
        ComputerWin += 1;
    }
    selection = prompt("choose either, Rock,Paper,Scissors");
    result = singleRound(selection,getComputerChoice());
    console.log(result)
    if (result == "You win!") {
        UserWin += 1;
    } else if (result == "You lose!") {
        ComputerWin += 1;
    }
    selection = prompt("choose either, Rock,Paper,Scissors");
    result = singleRound(selection,getComputerChoice());
    console.log(result)
    if (result == "You win!") {
        UserWin += 1;
    } else if (result == "You lose!") {
        ComputerWin += 1;
    }
    selection = prompt("choose either, Rock,Paper,Scissors");
    result = singleRound(selection,getComputerChoice());
    console.log(result)
    if (result == "You win!") {
        UserWin += 1;
    } else if (result == "You lose!") {
        ComputerWin += 1;
    }
    if (UserWin > ComputerWin){
        return "You won more rounds";
    } else if (UserWin < ComputerWin) {
        return "You lost more rounds";
    } else {
        return "Tie"
    }
}   

console.log(game()) 