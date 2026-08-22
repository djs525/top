const container = document.querySelector("#container");

const content = document.createElement("div");
content.classList.add("content");
content.textContent = "This is the glorious text-content!";

container.appendChild(content);

const pContainer = document.createElement("p");
pContainer.textContent = "Hey I'm red";
pContainer.style.color = "red";

const h3 = document.createElement("h3");
h3.textContent = "I'm blue h3!";
h3.style.color = "blue";

const div = document.createElement("div");
const h1 = document.createElement('h1');
h1.textContent = "I'm in a div";
const pDiv = document.createElement("p")
pDiv.textContent = "ME TOO!"

div.appendChild(h1)
div.appendChild(pDiv)

container.appendChild(pContainer)
container.appendChild(h3)
container.appendChild(div)

