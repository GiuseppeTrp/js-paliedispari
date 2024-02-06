// L’utente sceglie pari o dispari.
// Inserisce un numero da 1 a 5.
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
// Sommiamo i due numeri
// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
// Se l'utente ha indovinato l'esito (pari o dispari) della somma ha vinto, altrimenti ha perso.

// Dichiarazione delle variabili per memorizzare la scelta dell'utente (pari o dispari), 
// il numero scelto dall'utente e il numero casuale generato dal computer

// Chiede all'utente di scegliere tra "pari" e "dispari"
const userChoice = prompt("digita la tua scelta tra pari o dispari");

// Chiede all'utente di inserire un numero compreso tra 1 e 5 e lo converte in un numero intero
const userNumber = parseInt(prompt("digita un numero tra 1 e 5"));

// Genera un numero casuale compreso tra 1 e 5 per (scelta del computer)
const computerNumber = Math.floor(Math.random() * 5 + 1);

// Calcola la somma dei numeri scelti dall'utente e dal computer
const sum = userNumber + computerNumber;

// Verifica se la somma dei due numeri è pari o dispari
if (sum % 2 === 0) {
    // Se la somma è pari, verifica se la scelta dell'utente è "pari"
    if (userChoice === "pari") {
        // Se la scelta dell'utente è "pari", visualizza il rispettivo messaggio
        document.getElementById("result2").innerHTML =  "<h2 class=text-success  bg-white rounded>Pari! Hai vinto!</h2>";
    } else {
        // Se la scelta dell'utente non è "pari", visualizza il rispettivo messaggio 
        document.getElementById("result2").innerHTML =  "<h2 class=text-danger  bg-white rounded>Pari! Hai perso!</h2>";

    }
    // Imposta il risultato della somma come pari
    result = "pari";
} else {
    // Se la somma non è pari, verifica se la scelta dell'utente è "dispari"
    if (userChoice === "dispari") {
        // Se la scelta dell'utente è "dispari", visualizza il rispettivo messaggio
        document.getElementById("result2").innerHTML =  "<h2 class=text-success  bg-white rounded>Dispari! Hai vinto!</h2>";
    } else {
        // Se la scelta dell'utente non è "dispari", visualizza il rispettivo messaggio
        document.getElementById("result2").innerHTML =  "<h2 class=text-danger  bg-white rounded>Dispari! Hai perso!</h2>";
    }
    // Imposta il risultato della somma come dispari
    result = "dispari";
}

// Visualizza la somma dei due scelti
document.getElementById("result").innerHTML =  "Sum: " + sum;

// Visualizza il numero del computer 
document.getElementById("computer-choice").innerHTML = "computer choice = " + computerNumber;
