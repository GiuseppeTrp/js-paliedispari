// L’utente sceglie pari o dispari.
// Inserisce un numero da 1 a 5.
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
// Sommiamo i due numeri
// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
// Se l'utente ha indovinato l'esito (pari o dispari) della somma ha vinto, altrimenti ha perso.

//   Dichiaro le mie variabili per le varie operazioni 
const userChoise = prompt("digita la tua scelta  tra pari o dispari ");

const userNumber = prompt("digita un numero tra 1 e 5");

const computerNumber = Math.floor(Math.random() * 5 + 1)
