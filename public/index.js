let emptyText = document.querySelector('div.empty');
let infoDiv = document.querySelector('div.info');
let key = document.querySelector('.infText.key');
let code = document.querySelector('.infText.code');
let keyCode = document.querySelector('.infText.keyCode');
let shiftKey = document.querySelector('.infText.shiftKey');
let ctrlKey = document.querySelector('.infText.ctrlKey');

document.addEventListener('keydown', (e) => {
    emptyText.classList.add('dispose');
    infoDiv.classList.remove('dispose');
    key.innerHTML = e.key;
    code.innerHTML = e.code;
    keyCode.innerHTML = e.keyCode;
    shiftKey.innerHTML = e.shiftKey;
    ctrlKey.innerHTML = e.ctrlKey;
});