let emptyText = document.querySelector('div.empty');
let infoDiv = document.querySelector('div.info');

document.addEventListener('keydown', (e) => {
    emptyText.classList.add('dispose');
    infoDiv.classList.remove('dispose');
});