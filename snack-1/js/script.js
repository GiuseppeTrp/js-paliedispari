// L’utente sceglie pari o dispari.
// Inserisce un numero da 1 a 5.
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
// Sommiamo i due numeri
// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
// Se l'utente ha indovinato l'esito (pari o dispari) della somma ha vinto, altrimenti ha perso.

// Dichiarazione delle variabili per memorizzare la scelta dell'utente (pari o dispari), 
// il numero scelto dall'utente e il numero casuale generato dal computer


// Funzione principale che gestisce il gioco
function repeat() {
    // Chiede all'utente di scegliere tra "pari" e "dispari"
    const userChoice = prompt("Inserisci 'pari' o 'dispari':");
    
    // Chiede all'utente di inserire un numero compreso tra 1 e 5 e lo converte in un numero intero
    const userNumber = parseInt(prompt("INSERISCI UN NUMERO DA 1 A 5: (se inserisci decimali verrà considerata solo la cifra prima delle virgola!) "));
    
    // Genera un numero casuale compreso tra 1 e 5 per la scelta del computer
    const computerNumber = Math.floor(Math.random() * 5 + 1);
    
    // Ottiene il risultato del gioco confrontando la scelta dell'utente con il risultato calcolato
    const resultValue = result(userNumber, computerNumber);
   
    // Verifica contemporaneamente se l'input dell'utente è valido
    if ((userChoice !== 'pari' && userChoice !== 'dispari') || isNaN(userNumber) || userNumber < 1 || userNumber > 5 ) {
        if (userChoice !== 'pari' && userChoice !== 'dispari') {
            alert('Inserisci solo "pari" o "dispari" senza spazi.');
        } else {
            alert('Inserisci un numero valido da 1 a 5.');
        }
        return; // Esce dalla funzione se l'input non è valido
    }

    // Visualizza il risultato del gioco in base alla scelta dell'utente
    if (userChoice === resultValue) {
        document.getElementById("result2").innerHTML = "<h2 class=text-success bg-white rounded>Hai vinto!</h2> La somma è " + userChoice + "!";
    } else {
        document.getElementById("result2").innerHTML = "<h2 class=text-danger bg-white rounded>Hai perso!</h2> La somma non è " + userChoice + "!";
    }
    
    // Visualizza la somma dei numeri scelti dall'utente e dal computer
    document.getElementById("result").innerHTML = "Somma: " + (userNumber + computerNumber);
    
    // Visualizza il numero scelto dal computer
    document.getElementById("computer-choice").innerHTML = "Scelta del computer: " + computerNumber;
}

// Funzione per determinare se la somma dei due numeri è pari o dispari
function result(userNumber, computerNumber) {
    const sum = userNumber + computerNumber;
    if (sum % 2 == 0) {
        return "pari";
    } else {
        return "dispari";
    }
}

// Aggiunge un listener al click del pulsante "Inizia" per avviare il gioco
document.getElementById("start").addEventListener("click", repeat);