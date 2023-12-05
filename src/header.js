import './style.css';

export default function getHeader(homeBtnOnclick, menuBtnOnclick, contactUsBtnOnclick) {
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

    // Add the home button
    homeBtn.classList.add('nav-btn');
    homeBtn.innerHTML = 'Home';
    homeBtn.addEventListener('click', homeBtnOnclick);
    navBar.appendChild(homeBtn);

    // Add the menu button
    menuBtn.classList.add('nav-btn');
    menuBtn.innerHTML = 'Menu';
    menuBtn.addEventListener('click', menuBtnOnclick);
    navBar.appendChild(menuBtn);

    // Add the contanct us button
    contactBtn.classList.add('nav-btn');
    contactBtn.innerHTML = 'Contact Us';
    contactBtn.addEventListener('click', contactUsBtnOnclick);
    navBar.appendChild(contactBtn);

    // Add the navbar to the header 
    element.appendChild(navBar);

    return element;
}