export default function Book(title, author, pages, haveRead){
    if (!new.target) {
        throw Error("You must use the 'new' operator to call the constructor");
    }

    this.id = crypto.randomUUID()
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.haveRead = typeof haveRead === 'boolean' ? haveRead : haveRead === 'true';

    this.info = () => {
        console.log(`${this.title} by ${this.author}, ${this.pages}, ${this.haveRead}`);
    };
}

Book.prototype.toggleRead = function() {
    this.haveRead = !this.haveRead;
}

