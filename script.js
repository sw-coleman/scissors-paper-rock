
const choices = [
    "rock",
    "paper",
    "scissors"
];
let computerSelection;
let playerSelectionInput; //To allow for case-insensitive input to be converted to lower case
let playerSelection;
let playerScore = 0;
let computerScore = 0;
let score = playerScore + ' - ' + computerScore;
let roundsPlayed = 0;

// Randomly generate a computer selection of rock, paper or scissors.
function getComputerSelection(){
    computerSelection = choices[Math.floor(Math.random()*choices.length)]; //Use Math.floor and Math.random to randomly select a value from the choices array
    return computerSelection;
}

// Let user select choice of rock, paper or scissors. 
function getPlayerSelection(){
    playerSelectionInput = prompt("Please enter 'scissors', 'paper' or 'rock'.");
    playerSelection = playerSelectionInput.toLowerCase(); //Make input case-insensitive

    if (choices.indexOf(playerSelection) !== -1){ //Validate user input against possible chocies
        return playerSelection;
       } else {
        playerSelectionInput = prompt("Please try again. Enter only 'scissors', 'paper' or 'rock'."); //Error if player does not enter valid selection
        playerSelection = playerSelectionInput.toLowerCase(); //Make input case-insensitive
        return playerSelection;
    }
}

// Compare player selection with computer selection.

// Generate player's result (win or loss) based upon player's selection against computer selection

// Print result to player, store result in variable to keep score

// Loop to play until one side (player vs computer) reaches 3 wins

// End loop and print result of 'best of 5' game