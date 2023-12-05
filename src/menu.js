import './style.css'
import Food from './components/content/food.png'

export default function getMenu() {
    let menu = document.createElement('div');
    menu.classList.add('menu');

    // Get png kit
    let foodPng = new Image();
    foodPng.src = Food;
    
    // let foodItems = {'Apple': {index : [0, 10], price: 1}, 'Gapple': [0, 11], 'Egg': [0, 12], 'Cake': [1, 13], 'Stew': [4, 7], 'Rabbit Stew': [4, 8], 'Cooked Fish': [5, 10], 'Cookie': [5, 12], 'Cooked Meat': [6, 10], 'Baked Potato': [7, 6], 'Bread': [2, 9], 'Water': [4, 11]};
    let foodItems = {
        'Apple': {index: [0, 10], price: 2},
        'Gapple': {index: [0, 11], price: 10},
        'Egg': {index: [0, 12], price: 2},
        'Cake': {index: [1, 13], price: 6},
        'Stew': {index: [4, 7], price: 6},
        'Rabbit Stew': {index: [4, 8], price: 8},
        'Cooked Fish': {index: [5, 10], price: 6},
        'Cookie': {index: [5, 12], price: 3},
        'Cooked Meat': {index: [6, 10], price: 6},
        'Baked Potato': {index: [7, 6], price: 4},
        'Bread': {index: [2, 9], price: 3},
        'Water': {index: [4, 11], price: 1}
      };


    // Add title
  
    
    // Add the items
    let items = getItems(foodItems, foodPng);
    items.classList.add('menu-items');
    menu.appendChild(items);
    
    return menu;
}

function getItems(items, foodPng) {
    let title = document.createElement('p');
    title.innerHTML = 'Menu';
    title.classList.add('menu-title');
    
    let menu = document.createElement('div');
    menu.appendChild(title);
    // loop and add get canvas and price of each food item
    for(let item in items) {
        let currItem = document.createElement('div');
        let canvas = document.createElement('canvas');
        
        divideAndPickParts(canvas, foodPng, items[item].index );
        currItem.appendChild(canvas);

        let name = document.createElement('p');
        name.innerHTML = `${item}   $${items[item].price}`;
        currItem.classList.add('item');
        currItem.appendChild(name);
        
        menu.appendChild(currItem);
    }
    return menu;
}

// Divide into 16/16 and get the required part of the image 
function divideAndPickParts(canvas, img, index) {
    const context = canvas.getContext('2d');
    const [selectedRow, selectedCol] = [...index];

    const partWidth = img.width / 16;
    const partHeight = img.height / 16;

    canvas.width = partWidth;
    canvas.height = partHeight;

    context.drawImage(
        img,
        selectedCol * partWidth,
        selectedRow * partHeight,
        partWidth,
        partHeight,
        0,
        0,
        partWidth,
        partHeight
    );
}