const button = document.querySelector('.add-book-button');
const submitButton = document.querySelector('.btn-submit');
const modal = document.querySelector('dialog');
const sectionBooks = document.querySelector('.books-section');
const buttonDelete = document.querySelector('btn-delete');

const myLibrary = [];

class Book
{
    constructor(title,author,pages,read)
    {
        this.title = title,
        this.author = author,
        this.pages = pages,
        this.read = read
    }
}

function removeBook(button)
{
    button.addEventListener('click', () => {
        const index = button.getAttribute('index');

        myLibrary.splice(index, 1);

        render();
    })
}

function changeReadStatus(button)
{
    button.addEventListener('click', () => {
        const index = button.getAttribute('index');

        myLibrary[index].read = !myLibrary[index].read;

        render();
    })
}

button.addEventListener('click', () => {
    modal.showModal();
})

const addBookToLibrary = (event) => {
    event.preventDefault();
    

    const title = document.querySelector('form').elements['title'].value;
    const author = document.querySelector('form').elements['author'].value;
    const pages = document.querySelector('form').elements['pages'].value;
    const read = document.querySelector('#read').checked;

    const book = new Book(title,author,pages,read);

    myLibrary.push(book);

    render();

    modal.close();
}

const mountCardBook = (title,author,pages,read, bookIndex) => {
    const article = document.createElement('article');
    const titleP = document.createElement('p');
    const authorP = document.createElement('p');
    const pagesP = document.createElement('p');
    const buttonRead = document.createElement('button');
    const buttonDelete = document.createElement('button');
    const readP = document.createElement('p');

    article.classList.add('book-item');
    titleP.classList.add('title');
    authorP.classList.add('author');
    pagesP.classList.add('pages');
    buttonRead.classList.add('btn-read');
    buttonRead.setAttribute('index', bookIndex);
    buttonDelete.classList.add('btn-delete');
    buttonDelete.setAttribute('index', bookIndex);
    readP.classList.add('completed');

    removeBook(buttonDelete);
    changeReadStatus(buttonRead);

    titleP.innerHTML = title;
    authorP.innerHTML = author;
    buttonRead.innerHTML = read ? 'Read' : 'Not read';
    buttonDelete.innerHTML = 'Delete';
    pagesP.innerHTML = `Pages: ${pages}`;

    readP.innerHTML = read ? 'Read' : 'Not read';

    article.appendChild(titleP);
    article.appendChild(authorP);
    article.appendChild(pagesP);
    article.appendChild(document.createElement('hr'));
    article.appendChild(buttonRead);
    article.appendChild(buttonDelete);
    article.appendChild(document.createElement('hr'));
    article.appendChild(readP);

    sectionBooks.appendChild(article);
}

const render = () => {

    sectionBooks.innerHTML = '';

    myLibrary.map((book,index) => {
        mountCardBook(book.title,book.author,book.pages,book.read, index)
    })
}