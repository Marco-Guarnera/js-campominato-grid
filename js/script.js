// Fase di preparazione

// Recupero gli elementi dal DOM
const gridElement = document.getElementById("grid");
console.log(gridElement);

const buttonElement = document.querySelector("button");
console.log(buttonElement);

// Variabili
const rows = 10;
const cols = 10;
const totalCells = rows * cols;

// Funzioni

// Funzione per creare un nodo
function createNode(element, className) {
    const node = document.createElement(element);
    node.classList.add(className);
    return node;
}

// Fase di gestione eventi e di elaborazione

// Aggiungo un EventListener all'elemento button
buttonElement.addEventListener("click", function () {
    // Per il numero di celle desiderate...
    for (let i = 0; i < totalCells; i++) {
        // Utilizzo la funzione per creare una cella
        const cell = createNode("div", "cell");
        // Aggiungo il numero della cella
        cell.append(i + 1);
        // Aggiungo la cella nel DOM
        gridElement.appendChild(cell);
    }
});

// Fase di raccolta dati
// Fase di produzione