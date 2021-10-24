function createContact() {
    const contact = document.createElement('div');
    contact.classList.add('contact-page');
    const title = document.createElement('h2');
    title.textContent = "Where to find us";
    title.classList.add('contact__title');

    const contactInfo = document.createElement('div');
    contactInfo.classList.add('contact__section');

    const divAdr = document.createElement('div');
    divAdr.textContent = "Come : Avenue Marina 345 NY";
    const divMail = document.createElement('div');
    divMail.textContent = "Mail us : support@gmail.com";
    const divNum = document.createElement('div');
    divNum.textContent = "Call us : +0900 7843-222-1121";
    contactInfo.appendChild(divAdr);
    contactInfo.appendChild(divMail);
    contactInfo.appendChild(divNum);

    contact.appendChild(contactInfo);
    return contact;
}

function loadContact(){
    const main = document.querySelector('main');
    main.innerHTML = '';
    main.appendChild(createContact());
}

export default loadContact;