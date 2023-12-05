import './style.css';
import getHeader from './header';
import getHome from './home';

function page(element) {
  
    // Add Header
    let header = getHeader(homeBtnOnclick); 
    element.appendChild(header);
    
    // Add Container
    let container = document.createElement('div'); 
    container.classList.add('main-page');
    container.appendChild(getHome());

    element.appendChild(container);
    return;
}

function homeBtnOnclick() {
    let content = document.getElementsByClassName('main-page')[0];
    content.removeChild(content.firstChild);
    content.appendChild(getHome());
    return;
}

page(document.getElementById('content'));
