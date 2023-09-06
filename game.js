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

// //console.log(getComputerChoice())

// function singleRound(playerSelection, computerSelection) {
//     computerSelection = computerSelection.toLowerCase();
//     playerSelection = playerSelection.toLowerCase();

//     if(computerSelection=="scissors" && playerSelection=="rock") {
//         return "You win! Rock beats Scissors";
//     }else if (computerSelection=="scissors" && playerSelection=="paper") {
//         return "You lose! Scissors beats Paper";
//     }else if (computerSelection=="paper"&& playerSelection=="rock"){
//         return "You lose! Paper beats Rock";
//     }else if(computerSelection=="paper" && playerSelection=="scissors") {
//         return "You win! Scissors beats Paper";
//     }else if(computerSelection=="rock" && playerSelection=="paper"){
//         return "You win! Paper beats Rock";
//     }else if(computerSelection=="rock" && playerSelection=="scissors"){
//         return "You lose! Rock beats Scissors";
//     }else {
//         return "Tie";
//     }
// }
//console.log(singleRound(prompt("playerselection"), getComputerChoice()))

// function game() {
//     let playerScore = 0;
//     let computerScore = 0;

//     //initializing loops for five games!!
//     while(playerScore < 5 && computerScore < 5) {
      
//         roundResult = singleRound(prompt("Chose Either Rock,Paper or Scissors"), getComputerChoice());
//         //console.log(roundResult)
//         if(roundResult === "You win! Paper beats Rock"||roundResult=== "You win! Scissors beats Paper"||roundResult==="You win! Rock beats Scissors") {
//             playerScore ++;
//         } 
//         else if(roundResult === "You lose! Rock beats Scissors"||roundResult==="You lose! Paper beats Rock"||roundResult==="You lose! Scissors beats Paper") {
//             computerScore ++;
//         }
//     }

//     if(playerScore > computerScore) {
//         return ('You won!');

//     } else if(playerScore < computerScore) {
        
//         return ('You lose!');
//     }

// }
//console.log(game());
const optionButton =document.querySelectorAll('div.optionButton button');
const roundResults = document.querySelector('#roundResults');
const playerPoints = document.querySelector('#playerScore');
const computerPoints = document.querySelector('#computerScore');
const  resetBtn = document.querySelector('#reset');

resetBtn.addEventListener('click', () =>location.reload());

optionButton.forEach(button => button.addEventListener('click', singleRound));


let ComputerChoices = [{choice: 'Rock', value: 0}, {choice: 'Paper', value: 1}, {choice: 'Scissors', value: 2}]
let playerScore = 0;
let computerScore = 0;
let playerChoice;

function computerPlay () {
    //let result = choices[Math.floor(Math.random() * choices.length)];
    let result = ComputerChoices[Math.floor(Math.random() * ComputerChoices.length)];
    return result;
}
//startGame();

// function singleRound (playerSelection, computerSelection) {
//     if(playerSelection == "rock") {
//         if(computerSelection === "scissors") {
//             playerPoints.textContent = ++playerScore
//             roundResults.textContent = "You Win! Rock beats Scissors"
//         } else if(computerSelection === "paper"){
//             computerPoints.textContent = ++computerScore
//             roundResults.textContent = "You Lose! paper beats rock";
//         } else {
//             playerPoints.textContent = ++playerScore
//             computerPoints.textContent = ++computerScore
//             roundResults.textContent = "Tie"
//         }
//     }
//     else if(playerSelection === "paper") {
//     if(computerSelection === "scissors") {
//         computerPoints.textContent = ++computerScore
//         roundResults.textContent = "You Lose! scissors beats paper";
//     }else if(computerSelection === "rock"){
//         playerPoints.textContent = ++playerScore
//         roundResults.textContent = "You Win! paper beats rock"
//     }else{
//         playerPoints.textContent = ++playerScore
//         computerPoints.textContent = ++computerScore
//         roundResults.textContent = "Tie" 
//     }
// }else if(playerSelection === "scissors") {
//     if(computerSelection === "rock") {
//         computerPoints.textContent = ++computerScore
//         roundResults.textContent = "You Lose! scissors beats scissors";
//     }else if(computerSelection === "paper"){
//         playerPoints.textContent = ++playerScore
//         roundResults.textContent = "You Win! scissors beats paper"
//     }else{
//         playerPoints.textContent = ++playerScore
//         computerPoints.textContent = ++computerScore
//         roundResults.textContent = "Tie" 
//     }
// }
//     let roundWinComb = `${playerSelection} - ${computerSelection.value}`;
//     let playerWinComb = ['1-0', '0-2', '2-1'];

//     if(Number(playerSelection) === computerSelection.value) {
//         playerPoints.textContent = ++playerScore
//         computerPoints.textContent = ++computerScore
//         roundResults.textContent = "Tie!"
//     }else if (playerWinComb.includes(roundWinComb)) {
//         playerPoints.textContent = ++playerScore
//         roundResults.textContent = 'You Win!' //${playerSelection} beats ${computerSelection.choice}
//     }else {
//         computerPoints.textContent = ++ computerScore
//         roundResults.textContent = 'You Lose!' //${computerSelection.choice} beats ${playerSelection}
//     }
//  checkWinner();   
// }
//resetGame();

const winnerResults = {
    computer: ['You lost the game to the computer', 'red'],
    player: ['You won the game!', 'green'],
    tie: ['Tie Game', 'blue']
}

function checkWinner() {
    // if(computerScore ==5 && playerScore == 5) {
    //     roundResults.textContent = 'Tie Game';
    //     roundResults.style.color = 'blue';
    //     optionButton.forEach(button => {
    //         button.removeEventListener('click', singleRound);
    //     });}
    if (computerScore == 5) {
        roundResults.textContent = 'You lost the game to the computer!';
        roundResults.style.color = 'red';
        optionButton.forEach(button => {
            button.removeEventListener('click', singleRound);
        });
    }else if (playerScore == 5) {
        roundResults.textContent = 'You won the game!';
        roundResults.style.color = 'green';
        optionButton.forEach(button => {
            button.removeEventListener('click', singleRound);
        });
    }
    // if (computerScore === 5 || playerScore === 5) {
    //     if (computerScore === playerScore){
    //         updateWinner('Tie')
    //     }else {
    //         let win = `${(computerScore > playerScore) ? 'computer' : 'player'}`;
    //         updateWinner(win);
    //     }
    // } 
}

function resetGame() {
    resetBtn.addEventListener('click', () => location.reload());
}


// function startGame() {
// function updateWinner(winner){
//     roundResults.textContent = winnerResults[winner][0];
//     roundResults.Style.color = winnerResults[winner][1];
// }
//     optionButton.forEach(button => {
//         button.addEventListener('click', getplayerChoice)
//         button.removeEventListener('click', getplayerChoice);
//     });
// }


function getplayerChoice(e) {
    let playerSelection= (e.target.id);
    playerChoice = e.target.textContent;
    console.log(playerChoice)
    return playerChoice
    // singleRound(playerSelection, computerPlay());
}

function singleRound(e) {
    let playerChoice= (e.target.id);
    playerSelection = e.target.textContent;
    console.log(playerSelection)
    computerSelection = getComputerChoice()
    console.log(computerSelection)
    computerSelection = computerSelection.toLowerCase();
    playerSelection = playerSelection.toLowerCase();

    if(computerSelection=="scissors" && playerSelection=="rock") {
        playerPoints.textContent = ++playerScore;
        roundResults.textContent = "You Win! Rock beats Scissors";
    }else if (computerSelection=="scissors" && playerSelection=="paper") {
        computerPoints.textContent = ++computerScore;
        roundResults.textContent = "You lose! Scissors beats Paper";
    }else if (computerSelection=="paper"&& playerSelection=="rock"){
        computerPoints.textContent = ++computerScore;
        roundResults.textContent = "You lose! Paper beats Rock";
    }else if(computerSelection=="paper" && playerSelection=="scissors") {
        playerPoints.textContent = ++playerScore;
        roundResults.textContent = "You win! Scissors beats Paper";
    }else if(computerSelection=="rock" && playerSelection=="paper"){
        playerPoints.textContent = ++playerScore;
        roundResults.textContent = "You win! Paper beats Rock";
    }else if(computerSelection=="rock" && playerSelection=="scissors"){
        computerPoints.textContent = ++computerScore;
        roundResults.textContent = "You lose! Rock beats Scissors";
    }else {
        roundResults.textContent = "Tie";
    }
    checkWinner();
}

function startGame() {
    playerPoints.textContent = playerScore;
    computerPoints.textContent = computerScore;
}

startGame()

//console.log( (e).getplayerChoice());