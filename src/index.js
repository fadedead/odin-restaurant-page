import './style.css';

function page(element) {
    // Add Header
    let header = document.createElement('div'); 
    header.style = 'background-color: black; height: 10vh;'
    element.appendChild(header);
    
    // Add Container
    let container = document.createElement('div'); 
    container.classList.add('main-page');
    

    element.appendChild(container);
}

const body = document.querySelector('body');
body.style = 'margin: 0';
page(document.getElementById('content'));
