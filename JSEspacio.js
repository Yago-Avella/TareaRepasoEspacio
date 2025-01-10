const infoButton = document.getElementById('infoButton');
const infoDialog = document.getElementById('infoDialog');
const closeDialog = document.getElementById('closeDialog');

infoButton.addEventListener('click', () => {
    const curiosities = [
        "El sol es tan grande que 1.3 millones de Tierras podrían caber dentro de él.",
        "En la Luna hay más agua de lo que se pensaba originalmente.",
        "Un día en Venus es más largo que un año en Venus.",
        "El espacio no está completamente vacío; contiene unas pocas partículas por metro cúbico.",
        "Las estrellas de neutrones son tan densas que una cucharadita de su material pesaría mil millones de toneladas.",
        "Saturno tiene un sistema de anillos tan grande que podrías verlo con un telescopio pequeño desde la Tierra.",
        "En Marte, el monte Olimpo es tres veces más alto que el Everest.",
        "Júpiter tiene el campo magnético más fuerte de todos los planetas del Sistema Solar.",
        "La galaxia más cercana a la Vía Láctea, Andrómeda, está en camino de colisionar con nuestra galaxia en unos 4.5 mil millones de años.",
        "El universo observable tiene más de 93 mil millones de años luz de diámetro."
    ];

    const randomCuriosity = curiosities[Math.floor(Math.random() * curiosities.length)];
    document.getElementById('curiosoTexto').innerText = randomCuriosity;
    infoDialog.showModal();
});

closeDialog.addEventListener('click', () => {
    infoDialog.close();
});
