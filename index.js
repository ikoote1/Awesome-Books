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
        const storedBooks = [
            {
                title: 'imagination',
                author: 'Dieum',
            },
            {
                title: 'imagination 2',
                author: 'Akonkwa',
            },
            {
                title: 'imagination 3',
                author: 'Lwabaguma',
            }
        ];

        const books = storedBooks;

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

// event:Display books
document.addEventListener('DOMContentLoaded', UI.displayBooks);

document.querySelector('.add-book-form').addEventListener('submit',(e)=>{
    e.preventDefault();
    const title = document.querySelector('.title').value;
    const author = document.querySelector('.author').value;

    const book = new Book (title,author);

    UI.addBookToList(book);
    UI.empty();
});

//Remove books
document.querySelector('.table-body').addEventListener('click',(e)=>{
    UI.deleteBook(e.target);
});


















