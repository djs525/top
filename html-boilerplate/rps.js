console.log("Hello, World!")

// VARIABLES
const options = ['rock', 'paper', 'scissors'];
let humanScore = 0;
let computerScore = 0;

const winningRules = {
    rock: 'scissors',
    scissors: 'paper',
    paper: 'rock',
}

const container = document.querySelector('body')

options.forEach((option) => {
    const button = document.createElement('button')
    button.textContent = option

    button.addEventListener("click", () => {
        playRound(compare)
    })

    container.appendChild(button)
})


// FUNCTIONS
function getComputerChoice() {
    const computerChoice = options[Math.floor(Math.random() * 3)]
    return computerChoice
}

function getHumanChoice() {
    const humanChoice = 
    return humanChoice.toLowerCase()
}

function compare(humanChoice, computerChoice) {

    if (winningRules[humanChoice] === computerChoice) {
        return 'human'
    } else if (humanChoice === computerChoice) {
        return 'tie'
    } else {
        return 'computer'
    }
}

function playRound(checkWinner) {
    const humanChoice = getHumanChoice()
    const computerChoice = getComputerChoice()
    const winner = checkWinner(humanChoice, computerChoice)

    console.log(computerChoice)
    console.log(humanChoice)
    if (winner === 'human') {
        humanScore = humanScore + 1;
        console.log("You win! " + humanChoice + " beats " + computerChoice)
    } else if (winner === 'computer') {
        computerScore = computerScore + 1;
        console.log("You lose! " + computerChoice + " beats " + humanChoice)
    } else {
        console.log("It's a tie!")
    }

}

// function playGame(){
//     for (let i=1; i <= 5; i++){
//         playRound(compare)
//     }
//     if (humanScore > computerScore){
//         console.log("YOU'RE THE CHAMPION!")
//     } else if (computerScore > humanScore){
//         console.log("BETTER LUCK NEXT TIME!")
//     } else{
//         console.log("TIEBREAKER!!")
//     }
// }
// playGame()