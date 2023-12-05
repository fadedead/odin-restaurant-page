import './style.css';

export default function getHeader(homeBtnOnclick) {
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
    let contactBtn = document.createElement('button');

    homeBtn.classList.add('nav-btn');
    homeBtn.innerHTML = 'Home';
    navBar.appendChild(homeBtn);
    homeBtn.addEventListener('click', homeBtnOnclick);

    menuBtn.classList.add('nav-btn');
    menuBtn.innerHTML = 'Menu';
    navBar.appendChild(menuBtn);

    contactBtn.classList.add('nav-btn');
    contactBtn.innerHTML = 'Contact Us';
    navBar.appendChild(contactBtn);

    element.appendChild(navBar);

    return element;
}