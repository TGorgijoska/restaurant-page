function createMenu(){
    const menu = document.createElement('div');
    menu.classList.add('menu');

    const title = document.createElement('h3');
    title.textContent = 'Our Menu';

    const items = document.createElement('div');
    items.classList.add('menu__items');
    items.appendChild(createFoodItem('Oakey Smokey Pizza', '21', 'smoked mozzarela, basil'));
    items.appendChild(createFoodItem('White Ricotta Pizza', '25', 'smoked mozzarela, basil'));
    items.appendChild(createFoodItem('Original Margherita Pizza', '28', 'smoked mozzarela, basil'));
    items.appendChild(createFoodItem('Classic Havana Burger', '32', 'smoked mozzarela, basil'));
    items.appendChild(createFoodItem('Single BBQ Burger', '22', 'smoked mozzarela, basil'));
    items.appendChild(createFoodItem('Vegan Burger', '30', 'smoked mozzarela, basil'));

    menu.appendChild(title);
    menu.appendChild(items);

    return menu;

}
function createFoodItem(name, p, d) {
    const item = document.createElement('div');
    item.classList.add('menu__item');

    const title = document.createElement('h5');
    title.textContent = name;
    const descr = document.createElement('p');
    descr.textContent = d;
    const price = document.createElement('p');
    price.textContent = p +" $";

    item.appendChild(title);
    item.appendChild(descr);
    item.appendChild(price);

    return item;
}

function loadMenu(){
    const main = document.querySelector('main');
    main.innerHTML = '';
    main.appendChild(createMenu());
}

export default loadMenu;