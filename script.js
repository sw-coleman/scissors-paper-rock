//Declare global variables
let playerScore = 0;
let computerScore = 0;
let drawScore = 0;
let roundsPlayed = 0;
const choices = [
    "rock",
    "paper",
    "scissors"
];
// Randomly generate a computer selection of rock, paper or scissors.
function getComputerSelection(){
    let computerChoice = choices[Math.floor(Math.random()*choices.length)]; //Use Math.floor and Math.random to randomly select a value from the choices array
    return computerChoice;
}
//Assign selections for the event listener. Need to find way to condense all three options into one function if possible.
function assignScissors() {
    playerSelection = 'scissors';
    playRound(playerSelection);
}
function assignPaper() {
    playerSelection = 'paper';
    playRound(playerSelection);
}
function assignRock() {
    playerSelection = 'rock';
    playRound(playerSelection);
}

//Event listeners for buttons, to assign player selection upon click of button.
const scissorsBtn = document.querySelector(".scissors");
scissorsBtn.addEventListener("click", assignScissors);

const paperBtn = document.querySelector(".paper");
paperBtn.addEventListener("click", assignPaper);

const rockBtn = document.querySelector(".rock")
rockBtn.addEventListener("click", assignRock);
//Functions to disable buttons after game.
function removeScissorsBtn(){
    scissorsBtn.removeEventListener("click", assignScissors);
}
function removePaperBtn(){
    paperBtn.removeEventListener("click", assignPaper);
}
function removeRockBtn(){
    rockBtn.removeEventListener("click", assignRock);
}

//Compare player selection with computer selection to determine win, loss or draw. 
function getWinner(playerSelection, computerSelection) {
    //Check for draw
    if (playerSelection === computerSelection) {
        const resultDisplay = document.querySelector('.result');
        resultDisplay.textContent = `It's a draw.`
        drawScore += 1;
        return drawScore;
    //Check for player win
    } else if (playerSelection === 'rock' && computerSelection === 'scissors' ||
            playerSelection === 'paper' && computerSelection === 'rock' ||
            playerSelection === 'scissors' && computerSelection === 'paper'){
            const resultDisplay = document.querySelector('.result');
            resultDisplay.textContent = `You win the round.`
            playerScore += 1;
            return playerScore;
    //Check for computer win
    } else if (playerSelection === 'rock' && computerSelection === 'paper' ||
            playerSelection === 'paper' && computerSelection === 'scissors' ||
            playerSelection ==='scissors' && computerSelection === 'rock') {
            const resultDisplay = document.querySelector('.result');
            resultDisplay.textContent = `You lose the round.`
            computerScore += 1;
            return computerScore;
    }
}
//Log the current score for player wins, computer wins and draws.
function displayScore(){
    const scoreTrack = document.querySelector('.score-track');
    scoreTrack.textContent = 
        `Player: ${playerScore}\n
        Computer: ${computerScore}\n
        Draws: ${drawScore}\n
        Rounds Played: ${roundsPlayed}`;
}

//Display the player selection against the computer selection.
function displaySelection(playerSelection, computerSelection){
    const selections = document.querySelector('.selections');
    selections.textContent = `Player: ${playerSelection} Computer: ${computerSelection}`;
}

//function to create first to five format.
function firstToFive(){
    if (playerScore == 5){
        const gameResult = document.querySelector('.game-result');
        gameResult.textContent = `You win! Final score: ${playerScore} - ${computerScore}.`
        restartGame();
    } else if (computerScore == 5){
        const gameResult = document.querySelector('.game-result');
        gameResult.textContent = `You lose! Final score: ${computerScore} - ${playerScore}.`
        restartGame();
    }
}

//Function to track total rounds played
function gameRounds(){
    roundsPlayed++;
}

//Function to play round. Calls on the functions to allow player/computer to select, compare the results and display/update the score after each round played .
function playRound(playerSelection){
    computerSelection = getComputerSelection();
    getWinner(playerSelection, computerSelection);
    displaySelection(playerSelection, computerSelection);
    gameRounds();
    displayScore();
    firstToFive();
}

//Function to make button appear to restart game once best of 5.
function restartGame(){
    const restartBtn = document.createElement('button');
    document.body.append(restartBtn);
    restartBtn.textContent = 'Play again';
    restartBtn.addEventListener('click', function(){
        window.location.reload()});
    playerScore = 0;
    computerScore = 0;
    drawScore = 0;
    roundsPlayed = 0;
    removeScissorsBtn();
    removePaperBtn();
    removeRockBtn();
}

 //Loop to play until one side (player vs computer) reaches 5 wins, and display final results 
 //function game(){
 //  while (playerScore < 5 || computerScore < 5) {
 //      playRound();
 //      if (playerScore === 5 || computerScore === 5) 
 //       break;
 //   } console.log('--- Game Over! Final Score Below ---');
 //   if(playerScore > computerScore){
 //       console.log("You win!");
 //   } else if (computerScore > playerScore) {;
 //       console.log("You lose!");
 //   }
 //   displayScore();
 //}
 //game();