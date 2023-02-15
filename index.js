/* eslint-disable max-classes-per-file */
/* eslint-disable no-use-before-define */
/* eslint-disable max-len */

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
    const books = Store.getBooks();

    books.forEach((book) => UI.addBookToList(book));
  }

  static addBookToList(book) {
    const list = document.querySelector('.table-body');

    const tableRow = document.createElement('tr');

    tableRow.innerHTML = `
           <td>${book.title}</td>
           <td class= "td-by">  By ${book.author}</td>
           <td><a href="#" class="remove-btn">Remove</a></td>
        `;

    list.appendChild(tableRow);
  }

  static empty() {
    document.querySelector('.title').value = '';
    document.querySelector('.author').value = '';
  }

  static deleteBook(e) {
    if (e.classList.contains('remove-btn')) {
      e.parentElement.parentElement.remove();
    }
  }
}

class Store {
  static getBooks() {
    let books;
    if (localStorage.getItem('books') === null) {
      books = [];
    } else {
      books = JSON.parse(localStorage.getItem('books'));
    }
    localStorage.getItem('books');
    return books;
  }

  static addBook(book) {
    const books = Store.getBooks();

    books.push(book);

    localStorage.setItem('books', JSON.stringify(books));
  }

  static removeBook(title) {
    const books = Store.getBooks();

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

document.querySelector('.add-book-form').addEventListener('submit', (e) => {
  e.preventDefault();
  const title = document.querySelector('.title').value;
  const author = document.querySelector('.author').value;

  const book = new Book(title, author);

  // add book to UI
  UI.addBookToList(book);

  // add book to the local storage
  Store.addBook(book);

  // empty fields
  UI.empty();
});

// Remove books
document.querySelector('.table-body').addEventListener('click', (e) => {
  // remove book from UI
  UI.deleteBook(e.target);

  // Remove book from the local storage
  Store.removeBook(e.target.parentElement.previousElementSibling.previousElementSibling.textContent);
});
