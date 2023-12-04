//const options = ["rock", "paper", "scissors"];

function getComputerChoice() {
    let rock = "Rock";
    let paper = "Paper";
    let scissors = "Scissors";
    let getRandomValue = Math.random();
    if (getRandomValue <= 0.33) {
        return rock;
    } else if (getRandomValue <= 0.66) {
        return paper;
    } else {
        return scissors;
    }
}

function game() {
    let humanWin = 0;
    let computerWin = 0;
    let gameWinner = "";

    const buttons = document.querySelectorAll('button');
    buttons.forEach((button) => {
        button.addEventListener('click', () => {
            playerSelection = button.className;
            const computerSelection = getComputerChoice();
            battleWinText.textContent = (playRound(playerSelection, computerSelection));
            humanWinText.textContent = "Human total wins: " + humanWin;
            computerWinText.textContent = "Computer total wins: " + computerWin;
            endGame();
        })
    })

    function playRound(playerSelection, computerSelection){
        let tie = "It's a tie";
        let rockBeatScissors = "Human chose wisely!";
        let scissorsBeatPaper = "Human chose wisely!";
        let paperBeatRock = "Human chose wisely!";
        let rockBeatScissorsLoss = "Computer laugh at you!";
        let scissorsBeatPaperLoss = "Computer laugh at you!";
        let paperBeatRockLoss = "Computer laugh at you!";

        if (playerSelection === computerSelection) {
            return tie;
        } else if (playerSelection === "Rock" && computerSelection === "Scissors")  {
            humanWin++;
            return rockBeatScissors;
        } else if (playerSelection === "Scissors" && computerSelection === "Paper") {
            humanWin++;
            return scissorsBeatPaper;
        } else if (playerSelection === "Paper" && computerSelection === "Rock") {
            humanWin++;
            return paperBeatRock;
        } else {
            computerWin++;
            return rockBeatScissorsLoss ||  scissorsBeatPaperLoss   ||  paperBeatRockLoss;
        }
    }

    const container = document.querySelector("#container");
    const resultsDiv = document.createElement("div");
    resultsDiv.style.marginTop = "20px";
    container.appendChild(resultsDiv);

    
    const humanWinText = document.createElement("p");
    humanWinText.style.color = "#15e8af";
    humanWinText.textContent = "Human is the Winner: " + humanWin;
    resultsDiv.appendChild(humanWinText);

    
    const computerWinText = document.createElement("p");
    computerWinText.style.color = "#15e8af";
    computerWinText.textContent = "Computer conquered you: " + computerWin;
    resultsDiv.appendChild(computerWinText);

    
    const battleWinText = document.createElement("p");
    battleWinText.style.color = "black";
    resultsDiv.appendChild(battleWinText);
    
    
    const gameWinText = document.createElement("p");
    gameWinText.style.color = "#15E820";
    gameWinText.textContent = gameWinner;
    resultsDiv.appendChild(gameWinText);

    
    function endGame() {
        if (humanWin == 5) {
            gameWinner = "YOU DEFEATED THE MACHINES!";
            gameWinText.textContent = gameWinner;
            
            
            document.getElementById("1").disabled = true;
            document.getElementById("2").disabled = true;
            document.getElementById("3").disabled = true;
            
            
            const playAgainButton = document.createElement("button");
            playAgainButton.textContent = "Battle Again!";
            resultsDiv.appendChild(playAgainButton);
            
            
            playAgainButton.addEventListener('click', () => {
                location.reload();
                })
        } else if (computerWin == 5) {
            gameWinner = "COMPUTER CONQUERED YOU!";
            gameWinText.textContent = gameWinner;
            
            
            document.getElementById("1").disabled = true;
            document.getElementById("2").disabled = true;
            document.getElementById("3").disabled = true;
            
            
            const playAgainButton = document.createElement("button");
            playAgainButton.textContent = "Battle Again!";
            resultsDiv.appendChild(playAgainButton);
            
            
            playAgainButton.addEventListener('click', () => {
                location.reload();
                })
        }   
    }   

    
    

}

game();