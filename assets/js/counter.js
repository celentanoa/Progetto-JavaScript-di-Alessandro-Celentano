function createCounter() {
    // Stato iniziale del contatore
    let count = 0;
    let counterDisplay;

    // Funzione per creare l'interfaccia
    function createInterface() {
        // Container principale
        const counterContainer = document.createElement('div');
        counterContainer.id = 'counter-container';
        
        // Titolo
        const title = document.createElement('h1');
        title.textContent = 'Contatore Interattivo';
        counterContainer.appendChild(title);
        
        // Display del counter
        counterDisplay = document.createElement('div');
        counterDisplay.id = 'counter-display';
        counterDisplay.textContent = count;
        counterDisplay.className = 'neutral';
        counterContainer.appendChild(counterDisplay);
        
        // Container per i bottoni
        const buttonsContainer = document.createElement('div');
        buttonsContainer.id = 'buttons-container';
        
        // Bottoni incremento e decremento
        const decrementBtn = document.createElement('button');
        decrementBtn.textContent = '-';
        decrementBtn.className = 'counter-btn';
        decrementBtn.addEventListener('click', () => changeCount(-1));
        buttonsContainer.appendChild(decrementBtn);
        
        const incrementBtn = document.createElement('button');
        incrementBtn.textContent = '+';
        incrementBtn.className = 'counter-btn';
        incrementBtn.addEventListener('click', () => changeCount(1));
        buttonsContainer.appendChild(incrementBtn);
        
        counterContainer.appendChild(buttonsContainer);
        
        // Testo di suggerimento
        const hintText = document.createElement('div');
        hintText.id = 'hint-text';
        hintText.textContent = 'Doppio click sul numero per azzerare • Usa ↑↓ per incrementare/decrementare';
        counterContainer.appendChild(hintText);
        
        // Aggiunta del container principale al body
        document.body.appendChild(counterContainer);
        
        // Event listeners aggiuntivi
        counterDisplay.addEventListener('dblclick', () => {
            count = 0;
            updateDisplay();
        });
        
        document.addEventListener('keydown', (event) => {
            if (event.key === 'ArrowUp') {
                changeCount(1);
            } else if (event.key === 'ArrowDown') {
                changeCount(-1);
            }
        });
    }
    
    // Funzione per cambiare il valore del contatore
    function changeCount(amount) {
        count += amount;
        updateDisplay();
    }
    
    // Funzione che aggiorna il display
    function updateDisplay() {
        counterDisplay.textContent = count;
        
        // Aggiorno la classe in base al valore
        counterDisplay.className = count > 0 ? 'positive' : count < 0 ? 'negative' : 'neutral';
        
        // Aggiungi e rimuovi classe per animazione
        counterDisplay.classList.add('pulse');
        setTimeout(() => counterDisplay.classList.remove('pulse'), 300);
    }
    
    // Inizializza l'interfaccia
    createInterface();
}

// Inizializzazione
document.addEventListener('DOMContentLoaded', createCounter);