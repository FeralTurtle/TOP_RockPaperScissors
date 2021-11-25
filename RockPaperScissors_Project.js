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

function playRound(playerSelection, computerSelection) {
    let win = false;
    let lose = false;
    roundCounter++;
    console.log(roundCounter);

    playerSelection = this.getAttribute("id");
    computerSelection = computerPlay();
    displayBtn(playerSelection, computerSelection);

    if ((playerSelection == "rock" && computerSelection == "scissors")
    || (playerSelection == "paper" && computerSelection == "rock")
    || (playerSelection == "scissors" && computerSelection == "paper"))  {
        win = true;
    } else if ((computerSelection == "rock" && playerSelection == "scissors")
    || (computerSelection == "paper" && playerSelection == "rock")
    || (computerSelection == "scissors" && playerSelection == "paper")) {
        lose = true;
    }

    if (playerSelection == computerSelection) {
        displayText.textContent = `${cap1st(playerSelection)} and ${computerSelection}! Tie!`;
    } else if (win) {
        winCounter++;
        displayText.textContent = `${cap1st(playerSelection)} beats ${computerSelection}! Win!`;
    } else if (lose) {
        loseCounter++;
        displayText.textContent = `${cap1st(computerSelection)} beats ${playerSelection}! Lose!`;
    }

    document.querySelector("#player-score").textContent = winCounter;
    document.querySelector("#computer-score").textContent = loseCounter;

    if (roundCounter === 5) {
        endGame();
    }
}

function endGame() {
    const ftr = document.querySelector("footer");
    const btn = document.createElement("button");
    btn.textContent = "New game";

    if (winCounter == loseCounter) {
        displayText.textContent = "It's a tie!";
    } else if (winCounter > loseCounter) {
        displayText.textContent = "Player wins!";
    } else if (winCounter < loseCounter) {
        displayText.textContent = "Computer wins!";
    }

    const btns = document.querySelectorAll("button");
    btns.forEach(btns => btns.disabled=true);

    ftr.append(btn);

    btn.addEventListener('click', () => {
        roundCounter = 0;
        winCounter = 0;
        loseCounter = 0;
        document.querySelector("#player-score").textContent = winCounter;
        document.querySelector("#computer-score").textContent = loseCounter;
        const btns = document.querySelectorAll("button");
        btns.forEach(btns => btns.disabled=false);
        clearDisplay();
        displayText.textContent = "Make your choice!";
        btn.remove();
    })
}

function displayBtn(playerSelection, computerSelection) {
    const playerChoice = document.querySelector("#player-choice");
    const computerChoice = document.querySelector("#computer-choice");
    const btn = document.createElement("button");
    const btn2 = document.createElement("button");
    console.log("computerSelection: " + computerSelection);

    clearDisplay();

    switch (playerSelection) {
        case "rock":
            console.log("Player selection is rock.");
            btn.setAttribute("class", "far fa-hand-rock fa-lg");
            playerChoice.append(btn);
            break;
        case "paper":
            console.log("Player selection is paper.");
            btn.setAttribute("class", "far fa-hand-paper fa-lg");
            playerChoice.append(btn);
            break;
        case "scissors":
            console.log("Player selection is scissors.");
            btn.setAttribute("class", "far fa-hand-scissors fa-lg");
            playerChoice.append(btn);
            break;
    }

    switch (computerSelection) {
        case "rock":
            console.log("Computer selection is rock.");
            btn2.setAttribute("class", "far fa-hand-rock fa-lg");
            computerChoice.append(btn2);
            break;
        case "paper":
            console.log("Computer selection is paper.");
            btn2.setAttribute("class", "far fa-hand-paper fa-lg");
            computerChoice.append(btn2);
            break;
        case "scissors":
            console.log("Computer selection is scissors.");
            btn2.setAttribute("class", "far fa-hand-scissors fa-lg");
            computerChoice.append(btn2);
            break;
    }
}

function clearDisplay() {
    const playerChoice = document.querySelector("#player-choice");
    const computerChoice = document.querySelector("#computer-choice");

    while (playerChoice.firstChild) {
        playerChoice.removeChild(playerChoice.firstChild);
    }
    
    while (computerChoice.firstChild) {
        computerChoice.removeChild(computerChoice.firstChild);
    }
}

function cap1st(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

let roundCounter = 0;
let winCounter = 0;
let loseCounter = 0;
let playerSelection;
let computerSelection = computerPlay();
const body = document.body;
const displayText = document.querySelector("p");

const btn = document.querySelectorAll("button");
btn.forEach(btn => btn.addEventListener('click', playRound));
