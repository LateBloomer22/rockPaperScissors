let rounds =  prompt("How many rounds would you like to play?")
let humanScore = 0;
let computerScore = 0;
let tieRounds = 0;
const possibleValues = ["rock", "paper", "scissor"];

function getComputerChoice(){
    let randomIndex = Math.floor(Math.random()*possibleValues.length);
    return possibleValues[randomIndex];
}

function getHumanChoice(){
    let input = prompt("What would you like to choose ? rock, paper or scissor ?")
    return input.toLowerCase(); // Lowercasing all possible input variations
}

function playRound(humanChoice, computerChoice){
    let result = "";
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

for (let i = 1; i <= rounds; i++) {
    let humanChoice = getHumanChoice();
    let computerChoice = getComputerChoice();
    let roundResult = playRound(humanChoice,computerChoice);
    if (roundResult == "win"){
        humanScore += 1;
        alert(`You ${roundResult}!${humanChoice} beats ${computerChoice}. Score after round ${i} is ${humanScore}:${computerScore}. Press OK to proceed`)
    } 
    else if (roundResult == "lose"){
        computerScore += 1;
        alert(`You ${roundResult}!${computerChoice} beats ${humanChoice}. Score after round ${i} is ${humanScore}:${computerScore}. Press OK to proceed`)
    } 
    else if (roundResult == "tie"){
        tieRounds += 1;
        alert(`It's a tie, Score after round ${i} is ${humanScore}:${computerScore}. Press OK to proceed`)
    }
}

alert(`Thank you for playing, you won ${humanScore} rounds, computer won ${computerScore} rounds and there were ${tieRounds} tie rounds`)

