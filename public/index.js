let emptyText = document.querySelector('div.empty');
let infoDiv = document.querySelector('div.info');
let key = document.querySelector('div.key');

document.addEventListener('keydown', (e) => {
    emptyText.classList.add('dispose');
    infoDiv.classList.remove('dispose');
    key.innerHTML = `<p class="keyText">${e.key}</p>`;
});