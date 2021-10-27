//Computer chooses rock, paper, or scissors.
//Generates a random number 0-2 which represents each choice.
function computerPlay() {
    let randomNum = Math.floor(Math.random() * 3);
    let computerResult;

    if (randomNum == 0) {
        computerResult = "rock";
    } else if (randomNum == 1) {
        computerResult = "paper";
    } else if (randomNum == 2) {
        computerResult = "scissors";
    }
    return computerResult;
}

//Play one round of rock, paper, scissors. Returns round outcome.
function playRound(playerSelection, computerSelection) {
    let win = false;
    let lose = false;

    computerSelection = computerPlay();
    //Evaluate through win and lose conditions
    if (playerSelection == "rock" && computerSelection == "scissors") {
        win = true;
    } else if (playerSelection == "paper" && computerSelection == "rock") {
        win = true;
    } else if (playerSelection == "scissors" && computerSelection == "paper") {
        win = true;
    } else if (computerSelection == "rock" && playerSelection == "scissors") {
        lose = true;
    } else if (computerSelection == "paper" && playerSelection == "rock") {
        lose = true;
    } else if (computerSelection == "scissors" && playerSelection == "paper") {
        lose = true;
    }
    //Print outcome. Includes tie condition.
    if (playerSelection == computerSelection) {
        outcome = "tie";
        console.log(`${playerSelection} and ${computerSelection}! Tie!`);
    } else if (win) {
        outcome = "win";
        console.log(`${playerSelection} beats ${computerSelection}! Win!`);
    } else if (lose) {
        outcome = "lose";
        console.log(`${computerSelection} beats ${playerSelection}! Lose!`);
    }
    return outcome;
}

//Plays a game of 5 rounds of rock, paper, scissors. Console logs the game result.
function game() {
    let winCounter = 0;
    let loseCounter = 0;

    for (let i = 0; i < 5; i++) {
        playerSelection = window.prompt("Please choose rock, paper, or scissors.");
        playerSelection = playerSelection.toLowerCase();
        while (playerSelection != "rock" && playerSelection != "paper" && playerSelection != "scissors") {
            playerSelection = window.prompt("Please enter a valid value.");
            playerSelection = playerSelection.toLowerCase();
        }

        playRound(playerSelection, computerSelection);
        if (outcome == "win") {
            winCounter++;
        } else if (outcome == "lose") {
            loseCounter++;
        }
    }

    if (winCounter == loseCounter) {
        console.log("It's a tie!");
    } else if (winCounter > loseCounter) {
        console.log("Player wins!");
    } else if (winCounter < loseCounter) {
        console.log("Computer wins!");
    }
}


let outcome;
let playerSelection;
let computerSelection = computerPlay();

game();
