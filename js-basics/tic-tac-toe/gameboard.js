/*
I need a GameBoard -> what does it do?

GameBoard stores state, updates the state, based on Player moves

Checks the Win conditions; win if 3 Os or 3 Xs along any dxn
else Tie

A way to distinguish between cells
If using 1D array is easier, then connecting the right cells
meaning: idx = 0 : idx = 3 : idx = 6 is a win if filled by either Xs or Os

I see a pattern of +3 here

what about idx = 0 : idx = 1 : idx = 2 => just follows a row

So basically a % function
3 % 3 === 0 then that column 0
remainder 1 is column 1
remainder 2 is column 2

and same for rows then
remainder 0 is start of a new row

so the solution is 0->1->2 be it horizontally, vertically, or diagnoally
*/
/*
Now a Player Object, usually 2 players
Can create a playMove function in the prototype to be accessed
by both players

a way to target the gameboard cell that is not filled
a flag of some sort
*/ 
/*
The actual Game Execution

Start the game at an empty gameboard
each iteration until someone wins gameOver === True

*/ 
const prompt = require('prompt-sync')();
// IIFE Pattern
const gameBoard = (() => {

    const board = [];
    const ROWS = 3;
    const COLS = 3;
    const total = 9;
    
    for (let i = 0; i < total; i++){
        board[i] = '';
    }
    

    // an object is returned in a module iife pattern
    return {
        // this object consists of some methods that get access
        // to the private variables defined in the function

        getBoardState(){
            return board.slice()
        },
        setCell(index, marker){
            if (board[index] === '' && (index >= 0 && index <= 8)){
                board[index] = marker;
                return true
            }
            return false
        },
        reset(){
            for (let i = 0; i < total; i++){
                board[i] = '';
            }
        }
    }
})();

// Factory Function
const createPlayer = (name, marker) => {
    return {name, marker};
}


//IIFE Pattern
const playGame = (playerOneName = "Player 1", playerTwoName = "Player 2") => {
    const players = [createPlayer(playerOneName, "X"), createPlayer(playerTwoName, "O")]
    let activePlayer = players[0]
    let gameOver = false
    let winner = null
    const winCons = [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [2,4,6],
        [0,4,8]
    ]
    function checkWin(){
        const curBoard = gameBoard.getBoardState()
        for (const winCombo of winCons){
            if (curBoard[winCombo[0]] !== '' && 
                curBoard[winCombo[0]] === curBoard[winCombo[1]] && 
                curBoard[winCombo[1]] === curBoard[winCombo[2]]){
                return true
            }
        }
        return false
    }
    function switchPlayer(){
        if (activePlayer === players[0]){
            activePlayer = players[1]
        }
        else{
            activePlayer = players[0]
        }
    }
    function checkTie(){
        const curBoard = gameBoard.getBoardState()
        for (let i = 0; i < curBoard.length; i++){
                if (curBoard[i] != '') continue;
                else{
                    return false
                }
        }
        return true
    }
    function renderBoard(){
        const curBoard = gameBoard.getBoardState()
        for (let row = 0; row < 3; row++){
            const rowCells = curBoard.slice(row * 3, row * 3 + 3)
            const displayCells = rowCells.map(cell => cell === '' ? ' ' : cell)
            console.log(displayCells.join(' | '))
            if (row < 2) console.log('---------')
        }
    }
    return {
        start(){
            while (!this.isGameOver()){
                renderBoard()
                const current = this.getActivePlayer()
                console.log(`TURN: ${current.name} (${current.marker})`)

                const input = prompt('Pick a cell (0-8): ')
                const index = Number(input)

                const moved = this.makeMove(index)
                if (!moved){
                    console.log('Invalid move, try again.')
                }
            }

            renderBoard()
            const winner = this.getWinner()
            if (winner){
                console.log(`THE WINNER IS: ${winner.name} (${winner.marker})`)
            } else {
                console.log("IT'S A TIE!")
            }
        },
        makeMove(index){
            if (gameOver) return false
            if (!gameBoard.setCell(index, activePlayer.marker)){
                return false
            }
            if (checkWin()){
                winner = activePlayer
                gameOver = true
            }
            else if (checkTie()){
                gameOver = true
            }
            else{
                switchPlayer()
            }
            return true
        },
        reset(){
            activePlayer = players[0]
            gameOver = false
            winner = null
            gameBoard.reset()
        },
        getActivePlayer(){
            return activePlayer;
        },
        isGameOver(){
            return gameOver;
        },
        getWinner(){
            return winner;
        }

    }
}


playGame("Dev", "Aryan").start()