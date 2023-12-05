import './style.css';
import BookImage from './components/content/book.svg';

export default function getHome() {
    // Create the home container
    const home = document.createElement('div');
    home.classList.add('home');

    // Create the book div
    const book = document.createElement('div');
    book.classList.add('book');

    // Create the book image
    const bookImg = new Image();
    bookImg.src = BookImage;
    bookImg.classList.add('page');

    // Create a container for the text
    const aboutContainer = document.createElement('div');
    aboutContainer.classList.add('about-container');

    // Text for the about page
    const aboutText = document.createElement('p');
    aboutText.innerHTML = `
    Welcome to The Logg, your Minecraft-inspired dining escape! Our menu blends real-world flavors with pixelated delights, crafted by passionate chefs who celebrate the creativity of Minecraft. Step into our themed haven, where pixelated landscapes and cozy ambiance create a unique dining adventure. Whether you're a gaming enthusiast or seeking a unique experience, join us at The Logg, where every bite is a celebration of Minecraft's wonders. Welcome to the intersection of gaming and gourmet!`;
    aboutText.classList.add('about');

    // Append the text to the container
    aboutContainer.appendChild(aboutText);

    // Append the image and text container to the book div
    book.appendChild(bookImg);
    book.appendChild(aboutContainer);

    // Append the book div to the home container
    home.appendChild(book);

    return home;
}
