//Declare global variables
let playerScore = 0;
let computerScore = 0;
let drawScore = 0;
let roundsPlayed = 0;
let computerSelection = '';
let playerSelection = '';
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
// Let user select choice of rock, paper or scissors. 
function getPlayerSelection(){
    let playerChoice = prompt("Please enter 'scissors', 'paper' or 'rock'.");
    playerChoice = playerChoice.toLowerCase(); //Make input case-insensitive

    if (choices.indexOf(playerChoice) !== -1){ //Validate user input against possible chocies
        return playerChoice;
       } else {
        playerChoice = prompt("Please try again. Enter only 'scissors', 'paper' or 'rock'."); //Error if player does not enter valid selection
        playerChoice = playerChoice.toLowerCase(); //Make input case-insensitive
        return playerChoice;
    }
}
//Compare player selection with computer selection to determine win, loss or draw. 
function getWinner(playerSelection, computerSelection) {
    //Check for draw
    if (playerSelection === computerSelection) {
        console.log("It's a draw.")
        drawScore += 1;
        return drawScore;
    //Check for player win
    } else if (playerSelection === 'rock' && computerSelection === 'scissors' ||
            playerSelection === 'paper' && computerSelection === 'rock' ||
            playerSelection === 'scissors' && computerSelection === 'paper'){
            console.log("You win.")
            playerScore += 1;
            return playerScore;
    //Check for computer win
    } else if (playerSelection === 'rock' && computerSelection === 'paper' ||
            playerSelection === 'paper' && computerSelection === 'scissors' ||
            playerSelection ==='scissors' && computerSelection === 'rock') {
            console.log("You win.")
            computerScore += 1;
            return computerScore;
    }
}
//Log the current score for player wins, computer wins and draws.
function displayScore(){
    console.log(`Player: ${playerScore}`);
    console.log(`Computer: ${computerScore}`);
    console.log(`Draws: ${drawScore}`);
    console.log(`--- Rounds played: ${roundsPlayed} ---`);
}
//Display the player selection against the computer selection.
function displaySelection(playerSelection, computerSelection){
    console.log(`Player: ${playerSelection}`);
    console.log(`Computer: ${computerSelection}`);
}
//Function to track total rounds played
function gameRounds(){
    roundsPlayed++;
}

//Function to play round. Calls on the functions to allow player/computer to select, compare the results and display/update the score after each round played .
function playRound(){
    playerSelection = getPlayerSelection();
    computerSelection = getComputerSelection();
    getWinner(playerSelection, computerSelection);
    displaySelection(playerSelection, computerSelection);
    gameRounds();
    displayScore();
}
// Loop to play until one side (player vs computer) reaches 5 wins, and display final results 
function game(){
    while (playerScore < 5 || computerScore < 5) {
        playRound();
        if (playerScore === 5 || computerScore === 5) 
        break;
    } console.log('--- Game Over! Final Score Below ---');
    if(playerScore > computerScore){
        console.log("You win!");
    } else if (computerScore > playerScore) {;
        console.log("You lose!");
    }
    displayScore();
}

game();