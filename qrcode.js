let button = document.querySelector('button');
let qrtext = document.querySelector('input');

button.addEventListener('click', generateQR);

function generateQR() {
    const url = `https://api.qrserver.com/v1/create-qr-code/?size=1000x1000&data=${qrtext.value}`;
    document.querySelector('img').src = url;
}
