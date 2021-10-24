import loadContact from "./contact";
import loadHome from "./home";
import loadMenu from "./menu";

function createHeader(){

    const header = document.createElement('header');
    header.classList.add('header');

    const img = document.createElement('img');
    img.classList.add('header__logo');

    header.appendChild(img);
    header.appendChild(createNav());

    return header;

}
function createNav() {

    const nav = document.createElement('nav');
    nav.classList.add('nav');

    const buttonHome = document.createElement('div');
    buttonHome.classList.add('nav__item');
    buttonHome.textContent = "Home";
    buttonHome.addEventListener('click', loadHome);

    const buttonMenu = document.createElement('div');
    buttonMenu.classList.add('nav__item');
    buttonMenu.textContent = "Menu";
    buttonMenu.addEventListener('click', loadMenu);

    const buttonContact = document.createElement('div');
    buttonContact.classList.add('nav__item');
    buttonContact.textContent = "Contact Us";
    buttonContact.addEventListener('click', loadContact);

    nav.appendChild(buttonHome);
    nav.appendChild(buttonMenu);
    nav.appendChild(buttonContact);

    return nav; 
}
function createMain() {
    const main = document.createElement('main');
    main.classList.add('main');

    return main;
}

function createFooter() {
    const footer = document.createElement('footer');
    footer.classList.add('footer');

    const contactInfo = document.createElement('div');
    contactInfo.classList.add('footer__section');

    const divAdr = document.createElement('div');
    divAdr.textContent = "Avenue Marina 345 NY";
    const divMail = document.createElement('a');
    divMail.setAttribute('src','mailto:support@gamil.com');
    divMail.textContent = "support@gmail.com";
    contactInfo.appendChild(divAdr);
    contactInfo.appendChild(divMail);

    footer.appendChild(contactInfo);

    const trademark = document.createElement('div');
    trademark.classList.add('trademark');
    const img = document.createElement('div');
    img.classList.add('trademark_img')
    const link = document.createElement('a');
    link.setAttribute('href', 'https://github.com/TGorgijoska');
    link.textContent = 'TGorgijoska';
    trademark.appendChild(img);
    trademark.appendChild(link);

    footer.appendChild(trademark);
    
    return footer;
}

function createWebsite() {
    const content = document.getElementById('content');
    content.appendChild(createHeader());
    content.appendChild(createMain());
    content.appendChild(createFooter());
    loadHome();
}

createWebsite();