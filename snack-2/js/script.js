/*

Chiedere all’utente di inserire una parola.
Creare una funzione per capire se la parola inserita è palindroma

*/




//  del pulsante "check" 
const checkButton = document.getElementById("check");

// elemento in cui verrà stampato il risultato
const resultElement = document.getElementById("result");

// listener per l'evento click (check)
checkButton.addEventListener("click", function() {
    // Memorizza la parola inserita dall'utente
    const word = document.getElementById("word").value;

    // Verifica se la parola inserita è palindroma 
    if (isWordPalindrome(word)) {
        // Se è palindroma, stampa il seguente messaggio 
        resultElement.innerText = "La parola è palindroma";
    } else {
        // Se non è palindroma, stampa il seguente messaggio
        resultElement.innerText = "La parola non è palindroma";
    }
});

// Funzione per verificare se una parola è palindroma
function isWordPalindrome(word) {
    // Variabile per memorizzare la parola invertita
    let invertedWord = "";

    // Ciclo per creare la parola invertita
    for (let i = word.length - 1; i >= 0; i--) {
        invertedWord += word[i];
    }

    // Verifica se la parola originale è uguale alla parola invertita
    if (word === invertedWord) {
        // Se sono uguali, la parola è palindroma
     
        return true;
    } else {
        // Se non sono uguali, la parola non è palindroma
      
        return false;
    }
}
