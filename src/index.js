import './style.css';
import getHeader from './header';
import getHome from './home';

function page(element) {
    // Add Header
    let header = getHeader(); 
    element.appendChild(header);
    
    // Add Container
    let container = document.createElement('div'); 
    container.classList.add('main-page');

    container.appendChild(getHome());

    element.appendChild(container);
}

page(document.getElementById('content'));
