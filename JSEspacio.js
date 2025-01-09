// script.js

const infoButton = document.getElementById('infoButton');
const infoDialog = document.getElementById('infoDialog');
const closeDialog = document.getElementById('closeDialog');

infoButton.addEventListener('click', () => {
    infoDialog.showModal();
});

closeDialog.addEventListener('click', () => {
    infoDialog.close();
});
