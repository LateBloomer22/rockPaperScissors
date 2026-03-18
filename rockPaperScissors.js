let humanScore = 0;
let computerScore = 0;
let tieRounds = 0;
const possibleValues = ["rock", "paper", "scissor"];

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
    let computerChoice = getComputerChoice();
    let roundResult = playRound(humanChoice, computerChoice);
    // if (roundResult == "win"){
    //     humanScore += 1;        
    // } 
    // else if (roundResult == "lose"){
    //     computerScore += 1;
    // } 
    // else if (roundResult == "tie"){
    //     tieRounds += 1;
    // }
    console.log(`You ${roundResult}`);
}

let choices = document.querySelectorAll("button.choice");
choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        myFunc(choice.id);
    })
});