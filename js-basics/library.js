const fs = require('fs')


let myLibrary = []
if (fs.existsSync('myLib.json')){
        const data = fs.readFileSync('myLib.json', 'utf-8')
        if (data) myLibrary = JSON.parse(data)
    }

export function Book({title, author, pages, haveRead = false}){
    if (!new.target) {
        throw Error("You must use the 'new' operator to call the constructor");
    }

    this.id = crypto.randomUUID()
    this.title = title
    this.author = author
    this.pages = pages
    this.haveRead = haveRead

}

function addBooktoLibrary(bookInfo){
    const newBook = new Book(bookInfo)
    myLibrary.push(newBook)
    
}

addBooktoLibrary({
    title: "Bhagavad Gita",
    author: "Lord Krishna",
    haveRead: true,
})

addBooktoLibrary({
    title: "The Lean Startup",
    author: "Eric Ries",
})

addBooktoLibrary({
    title: "Can't Hurt Me",
    author: "David Goggins",
})

addBooktoLibrary({
    title: "Deep Work",
    author: "Cal Newport",
})

function loopLibrary(){
    for (let i in myLibrary){
        console.table(myLibrary[i])
    }
}

loopLibrary()

fs.writeFileSync('myLib.json', JSON.stringify(myLibrary, null, 2));