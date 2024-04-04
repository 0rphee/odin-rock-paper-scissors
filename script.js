const resultsDiv = document.querySelector("#results");
const scoreDiv = document.querySelector("#score");
let globalRoundCount = 0;
let playerScore = 0;
let computerScore = 0;
let winner;


function getRndInteger(min, max) {
    // max is not inclusive
    // (min, max] or min <= val < max
    return Math.floor(Math.random() * (max - min)) + min;
}

function getComputerChoice() {
    switch (getRndInteger(0, 3)) {
        case 0:
            return "Rock";
        case 1:
            return "Paper";
        case 2:
            return "Scissors";
    }
}

function playRound(playerSelection, computerSelection) {
    const pSelect = playerSelection.toLowerCase();
    const cSelect = computerSelection.toLowerCase();
    const playerWins = "Player wins!";
    const computerWins = "Computer wins!";
    const draw = "Draw!";

    console.log(`P: ${pSelect} - C: ${cSelect}`)
    if (pSelect === cSelect) {
        return draw;
    } else if ((pSelect === "rock" && cSelect === "scissors")
        || (pSelect === "paper" && cSelect === "rock")
        || (pSelect === "scissors" && cSelect === "paper")
    ) {
        return playerWins;
    } else {
        return computerWins;
    }

}


function playGame(playerInput) {
    if (winner && winner.length >= 0) {
        alert("The game has finished!")
        return
    }
    globalRoundCount++;

    const computerChoice = getComputerChoice();
    const playerChoice = playerInput.trim();

    const result = playRound(playerChoice, computerChoice);
    switch (result[0]) {
        case "P":
            playerScore++;
            break;
        case "C":
            computerScore++;
            break;
        case "D":
            break;
    }

    const newRoundDiv = document.createElement("div");
    newRoundDiv.textContent = `Round #${globalRoundCount}`;
    newRoundDiv.style.cssText = "border: 3px black solid; border-radius: 13px; padding: 1em;"
    resultsDiv.appendChild(newRoundDiv);

    const newValuesDiv = document.createElement("div");
    newValuesDiv.textContent = `Player: ${playerChoice} - Computer: ${computerChoice}`;
    newRoundDiv.appendChild(newValuesDiv);

    const newResDiv = document.createElement("div");
    newResDiv.textContent = result;
    newRoundDiv.appendChild(newResDiv);

    scoreDiv.textContent = `Score: P=${playerScore} - C=${computerScore}`;
    if (playerScore !== computerScore) {
        if (playerScore === 5) {
            winner = "Player"
            const newWinnerDiv = document.createElement("div");
            newWinnerDiv.textContent = "Winner is: " + winner + "!";
            newWinnerDiv.style.cssText = "border: 3px black solid; border-radius: 13px; padding: 1em; background-color: red";
            resultsDiv.append(newWinnerDiv);
        } else if (computerScore === 5) {
            winner = "Computer"
            const newWinnerDiv = document.createElement("div");
            newWinnerDiv.textContent = "Winner is: " + winner + "!";
            newWinnerDiv.style.cssText = "border: 3px black solid; border-radius: 13px; padding: 1em; background-color: red";
            resultsDiv.append(newWinnerDiv);
        }
    }
}

const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors");

rock.addEventListener("click", () => {
    playGame(rock.textContent);
});
paper.addEventListener("click", () => {
    playGame(paper.textContent);
});
scissors.addEventListener("click", () => {
    playGame(scissors.textContent);
});
