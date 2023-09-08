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
        hidegamecontainer();
        revealbottomcontainer();
        finalResults.textContent = 'You lost the game to the computer!';
        finalResults.style.color = 'red';
        optionButton.forEach(button => {
            button.removeEventListener('click', singleRound);
        });
    }else if (playerScore == 5) {
        hidegamecontainer();
        revealbottomcontainer();
        finalResults.textContent = 'You won the game!';
        finalResults.style.color = 'green';
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

async function startGame() {
    hidegamecontainer();
    hidebottomcontainer();
    writer(0, "Title 1", "Rock Paper Scissors", 100);
    await sleep(1700);
    writer(0, "Title 2", "First to  score 5 points wins!", 100);
    await sleep(3000);
    hidestartcontainer();
    revealgamecontainer();
    playerPoints.textContent = playerScore;
    computerPoints.textContent = computerScore;
}

startGame()

async function writer(position, id, text, speed) {
    while (position < text.length) {
        document.getElementById(id).innerHTML += text.charAt(position);
        position++;
        await sleep(speed);
        console.log(position);
        //setTimeout(writer, speed, position, id, text, speed);
    }
}


function sleep(speed){
    return new Promise((res)=>{
        setTimeout(()=>{
            res();} , speed);});
}
function hidestartcontainer() {
    const startcontainer = document.querySelector('.startcontainer');
    startcontainer.style.opacity = 0;
    startcontainer.style.transform = 'scale(0)'
    startcontainer.style.display = 'block';
   
}  


function hidegamecontainer() {
    const gamecontainer = document.querySelector('.gamecontainer');
     //gamecontainer.style.opacity = 0;
    //gamecontainer.style.transform = 'scale(0)'; 
    gamecontainer.style.display = 'none';
    //bottomcontainer.style.display = 'block';
}
function hidebottomcontainer() {
    const bottomcontainer = document.querySelector('.bottomcontainer');
    // bottomcontainer.style.opacity = 0;
     //bottomcontainer.style.transform = 'scale(0)';
    bottomcontainer.style.display = 'none';

}
function revealgamecontainer() {
    const gamecontainer = document.querySelector('.gamecontainer');
     //gamecontainer.style.opacity = 0;
    //gamecontainer.style.transform = 'scale(0)'; 
    gamecontainer.style.display = 'block';
   
}
function revealbottomcontainer() {
    const bottomcontainer = document.querySelector('.bottomcontainer');
    // bottomcontainer.style.opacity = 0;
     //bottomcontainer.style.transform = 'scale(0)';
    bottomcontainer.style.display = 'block';
}
