import './style.css';
import getHeader from './header';

function page(element) {
    // Add Header
    let header = getHeader(); 
    element.appendChild(header);
    
    // Add Container
    let container = document.createElement('div'); 
    container.classList.add('main-page');

    element.appendChild(container);
}

page(document.getElementById('content'));
