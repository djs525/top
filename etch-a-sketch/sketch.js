const NUM = 16
let num;
const button = document.querySelector('#generateButton')
button.textContent = "Generate New Grid"
button.addEventListener("click", () => {
    num = parseInt(prompt("Enter a new number to create an NxN grid."))
    num = Math.min(num, 100)
    generateGrid(num)
})
const container = document.querySelector('.container')

function generateGrid(num){
    container.innerHTML = "";
    for (let i = 0; i < (num*num); i ++){
        const square = document.createElement('div')
        square.className = "cell"
        Object.assign(square.style, {aspectRatio:"1", width:`calc(100%/${num})`, backgroundColor:'skyblue', boxSizing: "border-box", border:"2px solid blue"})
        container.appendChild(square)
    }
    const cells = document.querySelectorAll(".cell")

    cells.forEach((cell) => {
        cell.addEventListener("mouseenter", () => {
            cell.style.backgroundColor = "#1b75be"
        })
        // cell.addEventListener("mouseleave", () => {
        //     cell.style.backgroundColor = "skyblue"
        // })
    })
}

generateGrid(NUM)



