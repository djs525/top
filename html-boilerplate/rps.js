console.log("Hello, World!")

// VARIABLES
const options = ['rock', 'paper', 'scissors'];
let humanScore = 0;
let computerScore = 0;
let gameOver = false
let message = "";
let count = 1

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

const pElement = document.createElement('p')
const pScore = document.createElement('p')
const newGameButton = document.createElement('button')
div.appendChild(pElement)
div.appendChild(pScore)
div.appendChild(newGameButton)
newGameButton.textContent = "New Game"
newGameButton.style.display = "none";



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


function updateDisplay(){
    pElement.textContent = message;
    pScore.textContent = `YOU: ${humanScore} — COMPUTER: ${computerScore}`;
}

function scoreTracking(winner){
    if (winner === 'human') {
        humanScore = humanScore + 1;
    } else if (winner === 'computer') {
        computerScore = computerScore + 1;
    } 
}

function describeRound(humanChoice, computerChoice){
    if (winningRules[humanChoice] === computerChoice){
        return `${humanChoice.charAt(0).toUpperCase() + humanChoice.slice(1)} > ${computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1)}`
    } else if (humanChoice === computerChoice){
        return `TIE!`
    } else{
        return `${computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1)} > ${humanChoice.charAt(0).toUpperCase() + humanChoice.slice(1)}`
    }
}


function playRound(humanChoice, computerChoice) {
    if (gameOver) return;
    const winner = compare(humanChoice, computerChoice)
    scoreTracking(winner)
    
    message = `Round ${count}: ${describeRound(humanChoice, computerChoice)}`;
    count += 1;
    
    if (humanScore >= 5) {
        message = "GAME OVER! YOU WON!"
        gameOver = true
        newGameButton.style.display = ""
    } else if (computerScore >= 5) {
        message = "GAME OVER! YOU LOST!"
        gameOver = true
        newGameButton.style.display = ""
    }
    updateDisplay()

}

function resetGame(){
    humanScore = 0
    count = 1
    computerScore = 0
    gameOver = false
    message = ""
    newGameButton.style.display = "none"
    updateDisplay()
}

newGameButton.addEventListener("click", resetGame)
updateDisplay()
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