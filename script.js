class Book {
  constructor(title, author, id) {
    this.title = title;
    this.author = author;
    this.id = id;
  }
}

const BookList = [
  {
    title: "Book One",
    author: "Author One",
    id: Math.random(),
  },
  {
    title: "Book Two",
    author: "Author Two",
    id: Math.random(),
  },
  {
    title: "Book Three",
    author: "Author Three",
    id: Math.random(),
  },
];

const books = BookList;

// Adding Books Rows
// const list = document.querySelector('#book-list-table');
// books.forEach((book) => {
//     list.innerHTML += `
//     <tr id=${book.id}>
//       <td>${book.title}</td>
//       <td>${book.author}</td>
//       <td><button>Delete</a></button></td>
//     </tr>
//   `
// })

const list = document.querySelector("#book-list-table");

const button = document.querySelector('button')

button.onclick = function () {
  books.forEach((book) => {
    list.innerHTML += `
      <tr id=${book.id}>
        <td>${book.title}</td>
        <td>${book.author}</td>
        <td><button>Delete</a></button></td>
      </tr>
    `;
  });
};
