// Function to get computer choice
function getComputerChoice() {
    // Generating random number from 1 to 3
    let a = Math.floor(Math.random() * 3) + 1;
    let compchoice;
    if (a === 1) {
        compchoice = "Rock";
    } else if (a === 2) {
        compchoice = "Paper";
    } else {
        compchoice = "Scissors";
    }
    return compchoice;
}

// Function to get human choice
function getHumanChoice() {
    let hmnchoice = prompt("Rock, Paper or Scissors?").toLowerCase().trim();
    if (hmnchoice === "rock" || hmnchoice === "paper" || hmnchoice === "scissors") {
        return hmnchoice.charAt(0).toUpperCase() + hmnchoice.slice(1);
    } else {
        alert("Invalid Choice! Please enter Rock, Paper or Scissors.");
        return getHumanChoice(); // Recursive call for valid input
    }
}

// Function to play the game
function playGame() {
    let humanScore = 0;
    let computerScore = 0;

    function playRound(humanChoice, computerChoice) {
        console.log(`You chose: ${humanChoice}`);
        console.log(`Computer chose: ${computerChoice}`);

        if (humanChoice === computerChoice) {
            return "It's a tie!";
        }

        if (
            (humanChoice === "Rock" && computerChoice === "Scissors") ||
            (humanChoice === "Scissors" && computerChoice === "Paper") ||
            (humanChoice === "Paper" && computerChoice === "Rock")
        ) {
            humanScore++;
            return "You win this round!";
        } else {
            computerScore++;
            return "Computer wins this round!";
        }
    }

    // Play 5 rounds
    for (let i = 1; i <= 5; i++) {
        console.log(`Round ${i}`);
        const humanChoice = getHumanChoice();
        const computerChoice = getComputerChoice();
        console.log(playRound(humanChoice, computerChoice));
        console.log(`Current Score -> You: ${humanScore}, Computer: ${computerScore}`);
        console.log("-----------------------------------");
    }

    // Display the final result
    console.log("Game Over!");
    if (humanScore > computerScore) {
        console.log(`You won the game! Final Score -> You: ${humanScore}, Computer: ${computerScore}`);
    } else if (computerScore > humanScore) {
        console.log(`Computer won the game! Final Score -> You: ${humanScore}, Computer: ${computerScore}`);
    } else {
        console.log(`It's a tie! Final Score -> You: ${humanScore}, Computer: ${computerScore}`);
    }
}

// Start the game
playGame();
