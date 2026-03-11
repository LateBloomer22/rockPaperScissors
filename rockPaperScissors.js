const possibleValues = ["rock", "paper", "scissor"];

function getComputerChoice(){
    let randomIndex = Math.floor(Math.random()*possibleValues.length);
    return possibleValues[randomIndex];
}

function getHumanChoice(){
    let input = prompt("What would you like to choose ? rock, paper or scissor ?")
    return input.toLowerCase(); // Lowercasing all possible input variations
}

function playRound(humanChoice, computerChoice ){
    let result = "Human wins";
    if (humanChoice == computerChoice) 
    {
        result = "It's a tie";
    } 
    else if (humanChoice == "rock") 
    {
        if (computerChoice == "paper"){result = "Computer wins"};
    }

    else if (humanChoice == "paper")
    {
        if (computerChoice == "scissor") {result = "Computer wins"};
    }

    else if (humanChoice == "scissor") 
    {
        if (computerChoice == "rock") {result = "Computer wins"};
    }
    console.log(`You chose ${humanChoice} & computer chose ${computerChoice} hence ${result}`);
}

playRound(getHumanChoice(),getComputerChoice());