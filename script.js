// computer play that is randomly generated each time called
function computerPlay() {
    let rock =     "Rock";
    let scissors = "Scissors";
    let paper =    "Paper";
    let getRandomValue = Math.random();
    //console.log(getRandomValue);


    if (getRandomValue <= 0.33) {
        //console.log (rock);
        return rock;
    } else if (getRandomValue <= 0.66) {
        //console.log (scissors)
        return scissors;
    } else {
        //console.log(paper);
        return paper;
    }
}


// the game start

function game() {
    let roundsPlayed = 0;
    let playerWin = 0;
    let computerWin = 0;
    let gameWinner = "";

    // loop through the five rounds, tract the rounds and wins

    while (roundsPlayed <5) {
        roundsPlayed++;
        const computerSelection = computerPlay();
        playerSelection = prompt("Player, please type in your selection (Rock, Paper or Scissor) ")
        console.log(playRound(capitalize(playerSelection), computerSelection));
        //console.log(roundsPlayed);
        console.log("Player win totals " + playerWin);
        console.log("Computer win totals " + computerWin);

        // play the round and determine winner
        

        function playRound(firstLetterCap, computerSelection){
            let tie = "It is a Tie! You selected " + firstLetterCap + " and the computer selected " + computerSelection + ".";
            let paperBeatRock = "You Win! You selected " + firstLetterCap + " and the computer selected " + computerSelection + ".";
            let paperBeatRockLoss = "You Lose! You selected " + firstLetterCap + " and the computer selected " + computerSelection + ".";
            let scissorBeatPaper = "You Win! You selected " + firstLetterCap + " and the computer selected " + computerSelection + ".";
            let scissorBeatPaperLoss = "You Lose! You selected " + firstLetterCap + " and the computer selected " + computerSelection + ".";
            let rockBeatScissors = "You Win! You selected " + firstLetterCap + " and the computer selected " + computerSelection + ".";
            let rockBeatScissorsLoss = "You Lose, You selected " + firstLetterCap + " and the computer selected " + computerSelection + ".";

    
    
    
                if (firstLetterCap === computerSelection){
                    return tie;
                }else if ((firstLetterCap === "Paper") && (computerSelection === "Rock")){
                    playerWin++;
                    return paperBeatRock;
                }else if ((firstLetterCap === "Rock") && (computerSelection === "Paper")){
                    computerWin++;
                    return paperBeatRockLoss;
                }else if ((firstLetterCap === "Scissor") && (computerSelection === "Paper")){
                    playerWin++;
                    return scissorBeatPaper;
                }else if ((firstLetterCap === "Paper") && (computerSelection === "Scissor")){
                    computerWin++;
                    return scissorBeatPaperLoss;
                }else if ((firstLetterCap === "Rock") && (computerSelection === "Scissor")){
                    playerWin++;
                    return rockBeatScissors;
                }else {
                    computerWin++;
                    return rockBeatScissorsLoss;
                }
            }

        }

                if (playerWin > computerWin){
                    gameWinner = "YOU WIN THE GAME!";
                } else if (playerWin === computerWin) {
                    gameWinner = "It's a TIE!";
                } else {
                    gameWinner = "Computer WINS!";
                }

                // write out the winnner to the screen
                console.log("The five game winner is: " + gameWinner);
}


// function to format/capitalize the input
function capitalize (playerSelection) {
    let allLowerCase = playerSelection.toLowerCase();
    let firstLetterCap = allLowerCase.charAt(0).toUpperCase() + allLowerCase.slice(1);
    //console.log(firstLetterCap);
    return firstLetterCap;
}


// function call to start the game
game();


