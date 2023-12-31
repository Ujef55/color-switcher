const colorButton = document.querySelector('#colorBtn');
const refreshButton = document.querySelector('#refreshBtn');
const rgb = document.querySelector('#rgbValue');
const body = document.querySelector('body');

colorButton.addEventListener('click', function() {
    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);
    body.style.background = `rgb(${r},${g},${b})`;
    body.style.color = 'white';
    rgb.textContent = `rgb(${r},${g},${b})`;
})

refreshButton.addEventListener('click', function() {
    body.style.background = 'white';
    body.style.color = 'black';
    rgb.textContent= '';
})