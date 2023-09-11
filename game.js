function getComputerChoice() {
    randomNumber = Math.random();
    randomNumber = randomNumber * 3;
    randomNumber = Math.floor(randomNumber);
    if (randomNumber==0) {
        return "rungu"
    }else if (randomNumber==1) {
        return "shield"
    }else{
        return "spear";
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
        finalResults.textContent = 'You lost the game to the Warrior!';
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
    playerSelection = this.id;
    console.log(playerSelection)
    computerSelection = getComputerChoice()
    console.log(computerSelection)
    playerSelection = playerSelection.toLowerCase();

    if(computerSelection=="spear" && playerSelection=="rungu") {
        playerPoints.textContent = ++playerScore;
        roundResults.textContent = "You Win! Rungu beats Spear";
    }else if (computerSelection=="spear" && playerSelection=="shield") {
        computerPoints.textContent = ++computerScore;
        roundResults.textContent = "You lose! Spear beats Shield";
    }else if (computerSelection=="shield"&& playerSelection=="rungu"){
        computerPoints.textContent = ++computerScore;
        roundResults.textContent = "You lose! Shield beats Rungu";
    }else if(computerSelection=="shield" && playerSelection=="spear") {
        playerPoints.textContent = ++playerScore;
        roundResults.textContent = "You win! Spear beats Shield";
    }else if(computerSelection=="rungu" && playerSelection=="shield"){
        playerPoints.textContent = ++playerScore;
        roundResults.textContent = "You win! Shield beats Rungu";
    }else if(computerSelection=="rungu" && playerSelection=="spear"){
        computerPoints.textContent = ++computerScore;
        roundResults.textContent = "You lose! Rungu beats Spear";
    }else {
        roundResults.textContent = "Tie";
    }
    checkWinner();
}

async function startGame() {
    hidegamecontainer();
    hidebottomcontainer();
    writer(0, "Title 1", "Rungu Shield Spear", 100);
    await sleep(1700);
    writer(0, "Title 2", "First to  score 5 points wins!", 100);
    await sleep(3000);
    writer(0, "Title 3", "Do you have what it takes to fight a Maasai warrior??", 100);
    await sleep(6100)
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
    startcontainer.style.display = 'none';
}  

function hidegamecontainer() {
    const gamecontainer = document.querySelector('.gamecontainer');
    gamecontainer.style.display = 'none';
}

function hidebottomcontainer() {
    const bottomcontainer = document.querySelector('.bottomcontainer');
    bottomcontainer.style.display = 'none';

}
function revealgamecontainer() {
    const gamecontainer = document.querySelector('.gamecontainer');
    gamecontainer.style.display = 'block';
}

function revealbottomcontainer() {
    const bottomcontainer = document.querySelector('.bottomcontainer');
    bottomcontainer.style.display = 'block';
}
