const ul = document.querySelector("ul")
const input = document.querySelector("#item")
const button = document.querySelector("button")



button.addEventListener("click", (e) => {
    e.preventDefault()
    const curInput = input.value
    input.value = ""
    const li = document.createElement("li")
    const span = document.createElement("span")
    const button2 = document.createElement("button")

    li.appendChild(span)
    li.appendChild(button2)

    span.textContent = curInput
    button2.textContent = "Delete"

    ul.append(li)

    button2.addEventListener("click", () => {
    li.remove()
    })
    input.focus()
})



