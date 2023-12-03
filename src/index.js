function page(element) {
    // Add Header
    let header = document.createElement('div'); 
    header.style = 'background-color: black; height: 10vh;'
    element.appendChild(header);
    
    // Add Container
    let container = document.createElement('div'); 
    container.style = 'background-color: white; height: 85vh;'
    element.appendChild(container);

    // Add Footer 
    let footer = document.createElement('div'); 
    footer.style = 'background-color: black; height: 5vh;'
    element.appendChild(footer);
}

const body = document.querySelector('body');
body.style = 'margin: 0';
page(document.getElementById('content'));