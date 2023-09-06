function getComputerChoice() {
    randomNumber = Math.random();
    randomNumber = randomNumber * 3;
    randomNumber = Math.floor(randomNumber);
    if (randomNumber==0) {
        return "rock"
    }else if (randomNumber==1) {
        return "paper"
    }else{
        return "scissors";
    }
}

const optionButton =document.querySelectorAll('div.optionButton button');
const roundResults = document.querySelector('#roundResults');
const playerPoints = document.querySelector('#playerScore');
const computerPoints = document.querySelector('#computerScore');
const  resetBtn = document.querySelector('#reset');

resetBtn.addEventListener('click', () =>location.reload());

optionButton.forEach(button => button.addEventListener('click', singleRound));

let playerScore = 0;
let computerScore = 0;

function checkWinner() {
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
}

function resetGame() {
    resetBtn.addEventListener('click', () => location.reload());
}

function singleRound(e) {
    playerSelection = e.target.textContent;
    console.log(playerSelection)
    computerSelection = getComputerChoice()
    console.log(computerSelection)
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