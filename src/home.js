import './style.css';
import Book from './components/content/book.svg';

export default function getHome() {
    // Create the home container
    let home = document.createElement('div');
    home.classList.add('home');

    // Create the book image
    let book = new Image();
    book.src = Book;
    book.classList.add('page');

    // Append the book image to the home container
    home.appendChild(book);

    // Create other elements (caption, timings, location)
    let caption = document.createElement('div');
    let timings = document.createElement('div');
    let location = document.createElement('div');

    return home;
}
