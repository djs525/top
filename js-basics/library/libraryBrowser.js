import Book from './book.js'

const library = document.querySelector('.library')
library.style.display = 'flex';
library.style.gap = '16px';
library.style.flexWrap = 'wrap';
const body = document.querySelector('body')


let myLibrary = JSON.parse(localStorage.getItem('myLibrary'));
// If localStorage is empty, fetch the initial books from your JSON file
if (!myLibrary || myLibrary.length === 0) {
    const response = await fetch('myLib.json');
    myLibrary = await response.json();
    localStorage.setItem('myLibrary', JSON.stringify(myLibrary));
}

myLibrary = myLibrary.map(item => {
    const book = new Book(item.title, item.author, item.pages, item.haveRead);
    if (item.id) book.id = item.id; // Keep existing ID if it already has one
    return book;
});


function createCard(book){
    const card = document.createElement('div')
    card.classList.add('book-card')
    card.dataset.id = book.id;
    card.innerHTML = `
        <h3>${book.title}</h3>
        <div>
            <h4>${book.author}</h4>
            <p>${book.pages}</p>
            <p class="read-status">${book.haveRead ? 'Read' : 'Not Read'}</p>
        </div>
        <button class="toggle-read-btn">Toggle Read</button>
        <button class="delete-btn">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <polyline points="3 6 5 6 21 6"></polyline>
                <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
            </svg>
        </button>
        <hr>
    `

    // Add click event for toggle read status
    const toggleBtn = card.querySelector('.toggle-read-btn');
    const readStatusText = card.querySelector('.read-status');
    toggleBtn.addEventListener('click', () => {
        book.toggleRead();
        readStatusText.textContent = book.haveRead ? 'Read' : 'Not Read';
        localStorage.setItem('myLibrary', JSON.stringify(myLibrary));
    });

    // Add click event for delete
    const deleteBtn = card.querySelector('.delete-btn');
    deleteBtn.addEventListener('click', () => {
        const bookId = card.dataset.id;
        // 1. Remove from DOM
        card.remove();
        // 2. Remove from myLibrary array
        myLibrary = myLibrary.filter(b => b.id !== bookId);
        // 3. Update localStorage
        localStorage.setItem('myLibrary', JSON.stringify(myLibrary));
    });

    library.appendChild(card)
}

myLibrary.forEach(book => createCard(book))


const newButton = document.createElement('button')
newButton.textContent = "New Book";
body.appendChild(newButton)
const modal = document.querySelector('.modal')

newButton.addEventListener('click', () => {
    modal.style.display = 'flex'; //show
})

const form = document.getElementById('book-form');
form.addEventListener('submit', (e) => {
    e.preventDefault();  // stops page reload
    const formData = new FormData(form);
    const bookInfo = Object.fromEntries(formData);
    // now bookInfo = { title: "...", author: "...", pages: "...", haveRead: "..." }
    const newBook = new Book(
        bookInfo.title,
        bookInfo.author,
        bookInfo.pages,
        bookInfo.haveRead === "true"
    )

    createCard(newBook)
    myLibrary.push(newBook)

    modal.style.display = 'none' //Hide
    form.reset()
    localStorage.setItem('myLibrary', JSON.stringify(myLibrary));
});