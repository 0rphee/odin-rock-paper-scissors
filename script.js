
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

function playGame() {
    let playerScore = 0;
    let computerScore = 0;

    for (let i = 1; i < 6; i++) {
        const computerChoice = getComputerChoice();
        const playerChoice = prompt().trim();
        console.log("================\nRound #" + i + "\n");
        console.log(`Player:   ${playerChoice}\nComputer: ${computerChoice}`);

        const result = playRound(playerChoice, computerChoice);
        console.log(result);

        switch (result[0]){
            case "P":
                playerScore++;
            case "C":
                computerScore++;
            case "D":
                break;
        }
        console.log(`The current score is:\nP: ${playerScore} - C:${computerScore}`);
        console.log("================");

    }

    if (playerScore > computerScore){
        console.log("Player wins the match!")
    } else if (playerScore < computerScore){
        console.log("Player wins the match!")
    } else{
        console.log("It's a draw!")
    }
}

// -------- EXECUTION -------- 


playGame();







