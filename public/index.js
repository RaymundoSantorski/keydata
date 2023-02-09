let emptyText = document.querySelector('div.empty');
let infoDiv = document.querySelector('div.info');
let key = document.querySelector('div.key');
let code = document.querySelector('div.code');

document.addEventListener('keydown', (e) => {
    emptyText.classList.add('dispose');
    infoDiv.classList.remove('dispose');
    key.innerHTML = `<p class="infText">${e.key}</p>`;
    code.innerHTML = `<p class="infText">${e.code}</p>`;
});