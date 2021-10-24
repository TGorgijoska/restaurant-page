function createHero() {
    const hero = document.createElement('div');
    hero.classList.add('hero');
    const title = document.createElement('h1');
    title.textContent = "Food For Your Soul";
    hero.appendChild(title);

    return hero;
}
function createDishes() {
    const dishes = document.createElement('div');
    dishes.classList.add('dishes');
    const h2 = document.createElement('h2');
    h2.textContent = "Popular dishes";
    h2.classList.add('dishes__title');
    dishes.appendChild(h2);

    const cards = document.createElement('div');
    cards.classList.add('dishes__cards');
    cards.appendChild(createDish('Oakey Smokey Pizza'));
    cards.appendChild(createDish('Vegan Burger'));

    dishes.appendChild(cards);

    return dishes;
}

function createDish(name) {
    const card = document.createElement('div');
    card.classList.add('card');
    const h3 = document.createElement('h3');
    h3.classList.add('card__name');
    h3.textContent = name;
    card.appendChild(h3);
    return card;
    
}
function loadHome(){
    const main = document.querySelector('main');
    main.innerHTML = '';
    main.appendChild(createHero());
    main.appendChild(createDishes());
}

export default loadHome;