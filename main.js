/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction createContact() {\r\n    const contact = document.createElement('div');\r\n    contact.classList.add('contact-page');\r\n    const title = document.createElement('h2');\r\n    title.textContent = \"Where to find us\";\r\n    title.classList.add('contact__title');\r\n\r\n    const contactInfo = document.createElement('div');\r\n    contactInfo.classList.add('contact__section');\r\n\r\n    const divAdr = document.createElement('div');\r\n    divAdr.textContent = \"Come : Avenue Marina 345 NY\";\r\n    const divMail = document.createElement('div');\r\n    divMail.textContent = \"Mail us : support@gmail.com\";\r\n    const divNum = document.createElement('div');\r\n    divNum.textContent = \"Call us : +0900 7843-222-1121\";\r\n    contactInfo.appendChild(divAdr);\r\n    contactInfo.appendChild(divMail);\r\n    contactInfo.appendChild(divNum);\r\n\r\n    contact.appendChild(contactInfo);\r\n    return contact;\r\n}\r\n\r\nfunction loadContact(){\r\n    const main = document.querySelector('main');\r\n    main.innerHTML = '';\r\n    main.appendChild(createContact());\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadContact);\n\n//# sourceURL=webpack://restaurant-page/./src/contact.js?");

/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction createHero() {\r\n    const hero = document.createElement('div');\r\n    hero.classList.add('hero');\r\n    const title = document.createElement('h1');\r\n    title.textContent = \"Food For Your Soul\";\r\n    hero.appendChild(title);\r\n\r\n    return hero;\r\n}\r\nfunction createDishes() {\r\n    const dishes = document.createElement('div');\r\n    dishes.classList.add('dishes');\r\n    const h2 = document.createElement('h2');\r\n    h2.textContent = \"Popular dishes\";\r\n    h2.classList.add('dishes__title');\r\n    dishes.appendChild(h2);\r\n\r\n    const cards = document.createElement('div');\r\n    cards.classList.add('dishes__cards');\r\n    cards.appendChild(createDish('Oakey Smokey Pizza'));\r\n    cards.appendChild(createDish('Vegan Burger'));\r\n\r\n    dishes.appendChild(cards);\r\n\r\n    return dishes;\r\n}\r\n\r\nfunction createDish(name) {\r\n    const card = document.createElement('div');\r\n    card.classList.add('card');\r\n    const h3 = document.createElement('h3');\r\n    h3.classList.add('card__name');\r\n    h3.textContent = name;\r\n    card.appendChild(h3);\r\n    return card;\r\n    \r\n}\r\nfunction loadHome(){\r\n    const main = document.querySelector('main');\r\n    main.innerHTML = '';\r\n    main.appendChild(createHero());\r\n    main.appendChild(createDishes());\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadHome);\n\n//# sourceURL=webpack://restaurant-page/./src/home.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _contact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./contact */ \"./src/contact.js\");\n/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home */ \"./src/home.js\");\n/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menu */ \"./src/menu.js\");\n\r\n\r\n\r\n\r\nfunction createHeader(){\r\n\r\n    const header = document.createElement('header');\r\n    header.classList.add('header');\r\n\r\n    const img = document.createElement('img');\r\n    img.classList.add('header__logo');\r\n\r\n    header.appendChild(img);\r\n    header.appendChild(createNav());\r\n\r\n    return header;\r\n\r\n}\r\nfunction createNav() {\r\n\r\n    const nav = document.createElement('nav');\r\n    nav.classList.add('nav');\r\n\r\n    const buttonHome = document.createElement('div');\r\n    buttonHome.classList.add('nav__item');\r\n    buttonHome.textContent = \"Home\";\r\n    buttonHome.addEventListener('click', _home__WEBPACK_IMPORTED_MODULE_1__[\"default\"]);\r\n\r\n    const buttonMenu = document.createElement('div');\r\n    buttonMenu.classList.add('nav__item');\r\n    buttonMenu.textContent = \"Menu\";\r\n    buttonMenu.addEventListener('click', _menu__WEBPACK_IMPORTED_MODULE_2__[\"default\"]);\r\n\r\n    const buttonContact = document.createElement('div');\r\n    buttonContact.classList.add('nav__item');\r\n    buttonContact.textContent = \"Contact Us\";\r\n    buttonContact.addEventListener('click', _contact__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\r\n\r\n    nav.appendChild(buttonHome);\r\n    nav.appendChild(buttonMenu);\r\n    nav.appendChild(buttonContact);\r\n\r\n    return nav; \r\n}\r\nfunction createMain() {\r\n    const main = document.createElement('main');\r\n    main.classList.add('main');\r\n\r\n    return main;\r\n}\r\n\r\nfunction createFooter() {\r\n    const footer = document.createElement('footer');\r\n    footer.classList.add('footer');\r\n\r\n    const contactInfo = document.createElement('div');\r\n    contactInfo.classList.add('footer__section');\r\n\r\n    const divAdr = document.createElement('div');\r\n    divAdr.textContent = \"Avenue Marina 345 NY\";\r\n    const divMail = document.createElement('a');\r\n    divMail.setAttribute('src','mailto:support@gamil.com');\r\n    divMail.textContent = \"support@gmail.com\";\r\n    contactInfo.appendChild(divAdr);\r\n    contactInfo.appendChild(divMail);\r\n\r\n    footer.appendChild(contactInfo);\r\n\r\n    const trademark = document.createElement('div');\r\n    trademark.classList.add('trademark');\r\n    const img = document.createElement('div');\r\n    img.classList.add('trademark_img')\r\n    const link = document.createElement('a');\r\n    link.setAttribute('href', 'https://github.com/TGorgijoska');\r\n    link.textContent = 'TGorgijoska';\r\n    trademark.appendChild(img);\r\n    trademark.appendChild(link);\r\n\r\n    footer.appendChild(trademark);\r\n    \r\n    return footer;\r\n}\r\n\r\nfunction createWebsite() {\r\n    const content = document.getElementById('content');\r\n    content.appendChild(createHeader());\r\n    content.appendChild(createMain());\r\n    content.appendChild(createFooter());\r\n    (0,_home__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\r\n}\r\n\r\ncreateWebsite();\n\n//# sourceURL=webpack://restaurant-page/./src/index.js?");

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction createMenu(){\r\n    const menu = document.createElement('div');\r\n    menu.classList.add('menu');\r\n\r\n    const title = document.createElement('h3');\r\n    title.textContent = 'Our Menu';\r\n\r\n    const items = document.createElement('div');\r\n    items.classList.add('menu__items');\r\n    items.appendChild(createFoodItem('Oakey Smokey Pizza', '21', 'smoked mozzarela, basil'));\r\n    items.appendChild(createFoodItem('White Ricotta Pizza', '25', 'smoked mozzarela, basil'));\r\n    items.appendChild(createFoodItem('Original Margherita Pizza', '28', 'smoked mozzarela, basil'));\r\n    items.appendChild(createFoodItem('Classic Havana Burger', '32', 'smoked mozzarela, basil'));\r\n    items.appendChild(createFoodItem('Single BBQ Burger', '22', 'smoked mozzarela, basil'));\r\n    items.appendChild(createFoodItem('Vegan Burger', '30', 'smoked mozzarela, basil'));\r\n\r\n    menu.appendChild(title);\r\n    menu.appendChild(items);\r\n\r\n    return menu;\r\n\r\n}\r\nfunction createFoodItem(name, p, d) {\r\n    const item = document.createElement('div');\r\n    item.classList.add('menu__item');\r\n\r\n    const title = document.createElement('h5');\r\n    title.textContent = name;\r\n    const descr = document.createElement('p');\r\n    descr.textContent = d;\r\n    const price = document.createElement('p');\r\n    price.textContent = p +\" $\";\r\n\r\n    item.appendChild(title);\r\n    item.appendChild(descr);\r\n    item.appendChild(price);\r\n\r\n    return item;\r\n}\r\n\r\nfunction loadMenu(){\r\n    const main = document.querySelector('main');\r\n    main.innerHTML = '';\r\n    main.appendChild(createMenu());\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadMenu);\n\n//# sourceURL=webpack://restaurant-page/./src/menu.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;