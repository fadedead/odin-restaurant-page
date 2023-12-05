import './style.css';
import getHeader from './header';
import getHome from './home';
import getMenu from './menu';

function page(element) {
  
    // Add Header
    let header = getHeader(homeBtnOnclick, menuBtnOnclick, contactUsBtnOnclick); 
    element.appendChild(header);
    
    // Add Container
    let container = document.createElement('div'); 
    container.classList.add('main-page');
    container.appendChild(getHome());

    element.appendChild(container);

    // Loading the items now so the canvas are ready
    getMenu();
    return;
}

// event for home button
function homeBtnOnclick() {
    let content = document.getElementsByClassName('main-page')[0];
    if(content.firstChild) content.removeChild(content.firstChild);
    content.appendChild(getHome());
    return;
}

// event for menu button
function menuBtnOnclick() {
    let content = document.getElementsByClassName('main-page')[0];
    if(content.firstChild) content.removeChild(content.firstChild);
   content.appendChild(getMenu());

    return;
}

// event for contact us button
function contactUsBtnOnclick() {
    let content = document.getElementsByClassName('main-page')[0];
    if(content.firstChild) content.removeChild(content.firstChild);
    content.appendChild(getContactUs());
    return;
}

page(document.getElementById('content'));
