/*
L'utente clicca su un bottone che genererà una griglia di gioco quadrata.
Ogni cella ha un numero progressivo, da 1 a 100.
Ci saranno quindi 10 caselle per ognuna delle 10 righe.
Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro ed emetto un messaggio in console con il numero della cella cliccata.
*/

//* Functions
const cellsGenerator = () => {
    for (let i = 1; i <= 100; i++) cell += '<div class="cell"></div>';
    return console.log(cell);
}
const printCells = () => grid.innerHTML = cell;


//* DOM's elemens
const grid = document.getElementById('grid');
const playButton = document.getElementById('play-button');
const h2 = document.querySelector('h2');

//* Generating a div with class cell
let cell = '';


//* Play button event
playButton.addEventListener('click', function(){
    const removeCTA = h2.classList.add('d-none');
    cellsGenerator();
    printCells();
})