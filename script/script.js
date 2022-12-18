/*
L'utente clicca su un bottone che genererà una griglia di gioco quadrata.
Ogni cella ha un numero progressivo, da 1 a 100.
Ci saranno quindi 10 caselle per ognuna delle 10 righe.
Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro ed emetto un messaggio in console con il numero della cella cliccata.
*/

//* FUNCTIONS
const cellGenerator = (number) => {
    const cell = document.createElement('div');
    cell.append(number);
    cell.classList.add('cell');
    return cell;
}

//* DOM'S ELEMENTS
const gridElement = document.getElementById('grid');
const playButtonElement = document.getElementById('play-button');
const h2Element = document.querySelector('h2');


//* PLAY BUTTON EVENT
playButtonElement.addEventListener('click', function(){

    playButtonElement.disabled = true; // needed to not generate new grids by clicking on button again

    const removeCTA = h2Element.classList.add('d-none'); // remove Call To Action
    
    for (let i=1; i <= 100; i++){

        const cell = cellGenerator(i); // create the cells

        cell.addEventListener('click', function(){ // coloring cells by click
            cell.classList.add('clicked');
            const message = `hai cliccato la casella n° ${i}`
            console.log(message);
        })

        gridElement.appendChild(cell); // rendering cells on page
    }
})