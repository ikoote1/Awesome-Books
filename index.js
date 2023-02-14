// book class
class Book {
    constructor(title, author) {
        this.title = title;
        this.author = author;
    }
}

// UI class
class UI {
    static displayBooks() {
        
        const books = Store.getBook();

        books.forEach((book) => UI.addBookToList(book));
    }

    static addBookToList(book) {
        const list = document.querySelector('.table-body');

        const tableRow = document.createElement('tr');

        tableRow.innerHTML = `
           <td>${book.title}</td>
           <td>${book.author}</td>
           <td><a href="#" class="remove-btn">Remove</a></td>
        `

        list.appendChild(tableRow);
    }

    static empty(){
    document.querySelector('.title').value = '';
    document.querySelector('.author').value = '';
    }

    static deleteBook(e){
        if(e.classList.contains('remove-btn')){
            e.parentElement.parentElement.remove();
        }
    }
}

class Store {
    static getBook() {
        let books;
        if (localStorage.getItem('books') === null) {
            books = [];
        } else {
            books = JSON.parse(localStorage.getItem('books'));
        }
    }
    
    static addBook(book) {
        const books = Store.getBook();

        books.push(book);

        localStorage.setItem('books', JSON.stringify(books));
    }
    
    static removeBook(title) {
        const books = Store.getBook();

        books.forEach((book, index) => {
            if (book.title === title) {
                books.splice(index, 1);
            }
        });

        localStorage.setItem('books', JSON.stringify(books));
    }
}

// event:Display books
document.addEventListener('DOMContentLoaded', UI.displayBooks);

document.querySelector('.add-book-form').addEventListener('submit',(e)=>{
    e.preventDefault();
    const title = document.querySelector('.title').value;
    const author = document.querySelector('.author').value;

    const book = new Book (title,author);

    // add book to UI
    UI.addBookToList(book);

    // add book to the local storade
    Store.addBook(book);

    // empty fields
    UI.empty();
});

//Remove books
document.querySelector('.table-body').addEventListener('click', (e) => {
    UI.deleteBook(e.target);
});
