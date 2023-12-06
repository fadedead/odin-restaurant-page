import './style.css';
import PlainMap from './components/content/plain-map.png';

export default function getContactUs() {
    let page = document.createElement('div');
    page.classList.add('contact-us');

    // Container div
    let container = document.createElement('div');
    container.classList.add('location-container');
    
    // Add map to container
    const plainMap = new Image();
    plainMap.src = PlainMap;
    plainMap.classList.add('plain-map');
    container.appendChild(plainMap);


    // Add the location text div
    let location = document.createElement('p');
    location.classList.add('location');
    location.innerHTML = `
        The Logg Headquarters</br></br>
        Coordinates: X: 42 Y: 64 Z: -128</br></br>
        Facing: East</br></br>
        Biome: Mega Taiga</br></br>        
        For support, dial 1-800-LOGG-CRAF.</br>
        For snail mail, send carrier pigeons to the sky block above.</br></br>
    
        May your day be filled with endless diamonds and creeper-free adventures!
    `;
    
    container.appendChild(location);
    page.appendChild(container);

    return page;
}