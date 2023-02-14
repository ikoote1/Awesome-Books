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
}

// event:Display books
document.addEventListener('DOMContentLoaded', UI.displayBooks);
