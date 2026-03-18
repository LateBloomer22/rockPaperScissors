let humanScore = 0;
let computerScore = 0;
let tieRounds = 0;
const possibleValues = ["rock", "paper", "scissor"];
let outputText = document.querySelector(".result");
let outputScore = document.querySelector(".score");
let winner = document.querySelector(".winner");
let timer = 2;

function getComputerChoice(){
    let randomIndex = Math.floor(Math.random()*possibleValues.length);
    return possibleValues[randomIndex];
}

function playRound(humanChoice, computerChoice){
    if (humanChoice == computerChoice) {
        result = "tie";
    } 
    else if (humanChoice != computerChoice){
        if ((humanChoice == "rock" && computerChoice == "paper") || 
            (humanChoice == "paper" && computerChoice == "scissor") ||
            (humanChoice == "scissor" && computerChoice == "rock")) {result = "lose"}
        else result = "win";
    }
    return result;
}

function myFunc(humanChoice){
    if (humanScore <= 4 && computerScore <= 4){    
        let computerChoice = getComputerChoice();
        let roundResult = playRound(humanChoice, computerChoice);
        if (roundResult == "win"){
            humanScore += 1;        
        } 
        else if (roundResult == "lose"){
            computerScore += 1;
        } 
        else if (roundResult == "tie"){
            tieRounds += 1;
        }
        
        outputText.textContent =`You ${roundResult} this round`;
        outputScore.textContent = `Score after this round is: 
        Player = ${humanScore} / Computer = ${computerScore} / 
        Tie-round = ${tieRounds}`;
    }
    // Winner announce if anyone reaches a score of 5
    else if (humanScore == 5 || computerScore == 5) {
        if (humanScore > computerScore) {
            winner.textContent = `You have won this game. The game will automatically reset after ${timer} seconds`;
        } else if (humanScore < computerScore){
            winner.textContent = `You lost this game. The game will automatically reset after ${timer} seconds`;
        }        
        setTimeout(resetFunc, 2000)

    }
}

function resetFunc(){
    humanScore = 0;
    computerScore = 0;
    tieRounds = 0;
    outputText.textContent = "";
    outputScore.textContent = "";
    winner.textContent = "";
    alert("The game has been reset");
}

let choices = document.querySelectorAll("button.choice");
choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        myFunc(choice.id);
    })
});

let resetGame = document.querySelector(".reset");
resetGame.addEventListener("click", () => {resetFunc()});