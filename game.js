function getComputerChoice() {
    randomNumber=Math.random();
    randomNumber=randomNumber*3;
    randomNumber=Math.floor(randomNumber);
    if (randomNumber==0){
        return "Rock"
    } else if(randomNumber==1) {
        return "Paper"
    } else{
        return "Scissors";
    }
}

console.log(getComputerChoice())