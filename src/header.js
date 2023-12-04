import './style.css';

export default function getHeader() {
    // Create the header div
    let element = document.createElement('div');
    element.classList.add('header');

    // Create the title 
    let title = document.createElement('p');
    title.innerHTML = 'The Logg';
    title.classList.add('title-text');
    element.appendChild(title);

    // Create the nav bar 
    let navBar = document.createElement('div');

    // Create the buttons
    let homeBtn = document.createElement('button');
    let menuBtn = document.createElement('button');
    let aboutBtn = document.createElement('button');

    homeBtn.classList.add('nav-btn');
    homeBtn.innerHTML = 'Home';
    navBar.appendChild(homeBtn);

    menuBtn.classList.add('nav-btn');
    menuBtn.innerHTML = 'Menu';
    navBar.appendChild(menuBtn);

    aboutBtn.classList.add('nav-btn');
    aboutBtn.innerHTML = 'About';
    navBar.appendChild(aboutBtn);

    element.appendChild(navBar);

    return element;
}