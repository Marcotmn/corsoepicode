/* ESERCIZIO 1
 Scrivi un algoritmo per trovare il più grande tra due numeri interi.
*/

/* let x = 10;
let y = 14;

if (x > y) {
  console.log("x è maggiore");
} else {
  console.log("y è maggiore");
} */

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 2
  Scrivi un algoritmo che mostri "not equal" in console se un numero intero fornito è diverso da 5.
*/

/*let x = 6;

if (x !== 5) {
  console.log('il numero intero fornito è diverso da 5')
} else {
  console.log('il numero intero fornito è uguale a 5')
}*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 3
  Scrivi un algoritmo che mostri "divisibile per 5" in console se un numero fornito è perfettamente divisibile per 5 (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 4
  Scrivi un algoritmo per verificare che, dati due numeri interi, il valore di uno di essi sia 8 oppure se la loro addizione/sottrazione sia uguale a 8.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 5
  Stai lavorando su un sito di e-commerce. Stai salvando il saldo totale del carrello dell'utente in una variabile "totalShoppingCart".
  C'è una promozione in corso: se il totale del carrello supera 50, l'utente ha diritto alla spedizione gratuita (altrimenti la spedizione ha un costo fisso pari a 10).
  Crea un algoritmo che determini l'ammontare totale che deve essere addebitato all'utente per il checkout.
*/

/* let totalShoppingCart = 30;
let costoSpedizione = 10; */

/* if (totalShoppingCart > 50) {
  console.log("hai diritto alla spedizione gratuita");
}
if (totalShoppingCart < 50) {
  costoTotale = totalShoppingCart + costoSpedizione;
  console.log(
    "La tua spesa ha un costo compreso di spedizione di: " + costoTotale
  );
}*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 6
  Stai lavorando su un sito di e-commerce. Oggi è il Black Friday e viene applicato il 20% su ogni prodotto.
  Modifica la risposta precedente includendo questa nuova promozione nell'algoritmo, determinando come prima se le spedizioni sono gratuite oppure no e e calcolando il totale.
*/

/* let valoreSconto = (totalShoppingCart / 100) * 20;

if (totalShoppingCart - valoreSconto < 50) {
  console.log(
    "il costo totale compreso di spedizione è di " +
      (totalShoppingCart - valoreSconto + 10)
  );
} */

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 7
  Crea tre variabili, e assegna un valore numerico a ciascuna di esse.
  Utilizzando un blocco condizionale, crea un algoritmo per ordinarle secondo il loro valore, dal più alto al più basso.
  Alla fine mostra il risultato in console.
*/

let numero1 = 7;
let numero2 = 14;
let numero3 = 18;

if (numero1 > numero2 && numero1 > numero3) {
}
if (numero2 > numero3) {
  console.log(numero1, numero2, numero3);
} else {
  console.log(numero1, numero3, numero2);
}
if (numero2 > numero1 && numero2 > numero3) {
  if (numero3 > numero1) {
    console.log(numero2, numero3, numero1);
  } else {
    console.log(numero2, numero1, numero3);
  }
}
if (numero3 > numero1 && numero3 > numero2) {
  if (numero2 > numero1) {
    console.log(numero3, numero2, numero1);
  } else {
    console.log(numero3, numero1, numero2);
  }
}

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 8
  Crea un algoritmo per verificare che un valore fornito sia un numero oppure no (suggerimento: cerca su un motore di ricerca "typeof").
*/

let numero = 5;

console.log(typeof numero);

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 9
  Crea un algoritmo per controllare se un numero fornito sia pari o dispari (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/

let num1 = 10;
if (num1 % 2 == 0) {
  console.log("il numero è pari");
} else {
  console.log("il numero è dispari");
}

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 10
  Modifica la logica del seguente algoritmo in modo che mostri in console il messaggio corretto in ogni circostanza.*/

let val = 7;
if (val < 10) {
  console.log("Meno di 10");
} else if (val < 5) {
  console.log("Meno di 5");
} else {
  console.log("Uguale a 10 o maggiore");
}

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 11
  Fornito il seguente oggetto, scrivi del codice per aggiungere una proprietà "city", il cui valore sarà "Toronto".
*/

const me = {
  name: "John",
  lastName: "Doe",
  skills: ["javascript", "html", "css"],
};

me.city = "toronto";

console.log(me);

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 12
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere la proprietà "lastName".
*/

delete me.name;

console.log(me);

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 13
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere l'ultimo elemento della proprietà "skills".
*/

let ultimoElemento = me.skills.pop();

console.log(me);

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 14
  Scrivi del codice per creare un array inizialmente vuoto. Riempilo successivamente con i numeri da 1 a 10.
*/

let mioArray = [];
for (let i = 1; i <= 10; i++) {
  mioArray.push(i);
}
console.log(mioArray);

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 15
  Scrivi del codice per sostituire l'ultimo elemento dell'array, ovvero il valore 10, con il valore 100.
*/

mioArray[mioArray.length - 1] = 100;
console.log(mioArray);

/* SCRIVI QUI LA TUA RISPOSTA */
