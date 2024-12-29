console.log("This is working")
function getComputerChoice() {
    let random = Math.random();
    let result;
    if(random >= 0 && random <= .33) {
        result = "paper";
    }
    else if(random > .33 && random <= .66) {
        result = "rock";
    }
    else {
        result = "scissors"
    }
    return result;
}
console.log(getComputerChoice())
function getHumanChoice() {
    let choice = prompt("Choose what you would like to play");
    return choice.toLowerCase();
}
// console.log(getHumanChoice());

function playGame() {
let humanScore = 0;
let computerScore = 0;
const humanSelection  = getHumanChoice();
const computerSelection = getComputerChoice();
function playRound(humanChoice, computerChoice) {
    if(humanChoice == "rock") {
        if(computerChoice == "scissors") {
            console.log("You Win! rock beats scissors");
            humanScore +=1;
        }else if(computerChoice == "paper") {
            console.log("You Lose! paper beats rock");
            computerScore +=1;
        }
        else {
            console.log("It's a tie! Rock ties with rock")
        }
    }else if (humanChoice == "paper") {
        if(computerChoice == "scissors") {
            console.log("You Lose! scissors beats paper");
            computerScore +=1;
        }else if(computerChoice == "paper") {
            console.log("It's a tie! paper ties with paper");
        }
        else {
            console.log("You Win! paper beats rock");
            humanScore += 1;
        }
    }else {
        if(computerChoice == "rock") {
            console.log("You Lose! rock beats scissors");
            computerScore += 1;
        } else if(computerChoice == "scissors") {
            console.log("It's a tie! scissors ties with scissors");
        } else {
            console.log("You Win! scissors beats paper");
            humanScore +=1;
        }
    }
}
playRound(humanSelection,computerSelection);
}
for(let i =0;i<5;i++) {
    playGame();
}