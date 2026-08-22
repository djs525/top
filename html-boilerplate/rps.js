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

const div = document.createElement("div")
container.appendChild(div)

options.forEach((option) => {
    const button = document.createElement('button')
    button.textContent = option

    button.addEventListener("click", (e) => {
        const humanChoice = e.target.textContent
        playRound(humanChoice, getComputerChoice())
    })

    div.appendChild(button)
})



// FUNCTIONS
function getComputerChoice() {
    const computerChoice = options[Math.floor(Math.random() * 3)]
    return computerChoice
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

function logResult(message){
    const p = document.createElement('p')
    p.textContent = message
    div.appendChild(p)
}

function playRound(humanChoice, computerChoice) {
    const winner = compare(humanChoice, computerChoice)

    logResult(computerChoice)
    logResult(humanChoice)
    if (winner === 'human') {
        humanScore = humanScore + 1;
        logResult("You win! " + humanChoice + " beats " + computerChoice)
    } else if (winner === 'computer') {
        computerScore = computerScore + 1;
        logResult("You lose! " + computerChoice + " beats " + humanChoice)
    } else {
        logResult("It's a tie!")
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