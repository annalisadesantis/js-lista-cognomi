// Creare un array contenente dei cognomi in ordine casuale.
// Chiedere all'utente il suo cognome e inserirlo nella lista dei cognomi.
// Stampare la lista dei cognomi in ordine alfabetico e comunicare all'utente la posizione in cui si trova il suo cognome (dopo averlo riordinato).

// Creare un array contenente dei cognomi in ordine casuale.

var cognomi = ["Rossi", "Bianchi", "Ferrari", "Russo", "Esposito", "Martini", "Galli", "Leone", "Carli", "Sanna", "Adda"]

// Chiedere all'utente il suo cognome e inserirlo nella lista dei cognomi.
var cognome_utente

do {
    cognome_utente = prompt("Inserisci il tuo cognome");
    if (!isNaN(cognome_utente)) {
        alert("Hai inserito un numero");
    }
    if (cognome_utente == cognome_utente.toLowerCase()) {
        alert("Inserisci l'iniziale del tuo cognome in maiuscolo");
    }
} while (!isNaN(cognome_utente) || cognome_utente == cognome_utente.toLowerCase());



// Inserisco il cognome dell'utente nell'array

cognomi.push(cognome_utente);

// Ordine alfabetico dei cognomi

cognomi.sort();

// Stampo i cognomi i ordine alfabetico

console.log(cognomi);



// Soluzione 2 - Chiedere all'utente il suo cognome e inserirlo nella lista dei cognomi.

// var cognome_utente = [prompt("Inserisci il tuo cognome")];
//
// Array.prototype.push.apply(cognomi, cognome_utente);
//
// // Stampare la lista dei cognomi in ordine alfabetico
//
// cognomi.sort();
//
// console.log(cognomi);


// Comunicare all'utente la posizione in cui si trova il suo cognome


var posizione = cognomi.indexOf(cognome_utente) + 1;
console.log("Il tuo cognome si trova nella posizione numero " + posizione);


// Soluzione 2 Comunicare all'utente la posizione in cui si trova il suo cognome


// var posizione
//
// for (var i = 0; i < cognomi.length; i++) {
//     posizione = cognomi.indexOf(cognome_utente) + 1;
// }
//
// console.log("Il tuo cognome si trova nella posizione numero " + posizione);
