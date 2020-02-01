"use strict";
let appId = 'abc';
const button = document.querySelector('button');
function clickHandler(message) {
    console.log('Clicked! ' + message);
}
if (button) {
    button.addEventListener('click', clickHandler.bind(null, "You're welcome!"));
}
const map = new Map();
//# sourceMappingURL=app.js.map