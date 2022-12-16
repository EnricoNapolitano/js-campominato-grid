/*
L'utente clicca su un bottone che genererà una griglia di gioco quadrata.
Ogni cella ha un numero progressivo, da 1 a 100.
Ci saranno quindi 10 caselle per ognuna delle 10 righe.
Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro ed emetto un messaggio in console con il numero della cella cliccata.
*/

//* DOM's elemens
const grid = document.getElementById('grid');
const playButton = document.getElementById('play-button');

//* Generating a div with class cell
let cell = '';
// Cycle to Render 100 cells 
for (let i = 1; i <= 100; i++) cell += '<div class="cell"></div>';
console.log(cell);
