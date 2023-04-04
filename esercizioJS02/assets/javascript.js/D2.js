/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Se sei in difficoltà puoi chiedere aiuto a un Teaching Assistant
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per farlo puoi utilizzare il terminale Bash, quello di VSCode o quello del tuo sistema operativo (se utilizzi macOS o Linux)
*/

/* ESERCIZIO 1
 Elenca e descrivi i principali datatype in JavaScript. Prova a spiegarli come se volessi farli comprendere a un bambino.
*/

/* I data type sono i diversi tipi di dato che si possono assegnare ad una variabile nel linguaggio JavaScript sottoforma di valore = var nome = 'andrea' 
I principali tipi di dato sono

Stringa = è un tipo di dato testuale composto da una sequenza di caratteri che viene indicata tra apici come 'Andrea' o 'testo'
Numerico = è un tipo di dato numerico composto da uno o più numeri interi o decimali che non viene indicato tra apici = var numero = 25
Booleano = è un tipo di dato che ammette solo due valori "true" e "false"
*/


/* ESERCIZIO 2
 Crea una variable chiamata "name" e assegna ad essa il tuo nome, sotto forma di stringa.
*/

var mionome = 'Marco';
document.getElementById('secondoesercizio').innerHTML = mionome;

/* ESERCIZIO 3
 Scrivi il codice necessario ad effettuare un addizione (una somma) dei numeri 12 e 20.
*/

var numero1 = 12;
var numero2 = 20;
document.getElementById('terzoesercizio').innerHTML = numero1 + numero2;

/* ESERCIZIO 4
 Crea una variable di nome "x" e assegna ad essa il numero 12.
*/

var x = 12;
document.getElementById('quartoesercizio').innerHTML = x;

/* ESERCIZIO 5
  Riassegna un nuovo valore alla variabile "name" già esistente: il tuo cognome.
  Dimostra l'impossibilità di riassegnare un valore ad una variabile dichiarata con il costrutto const.
*/

var mionome = 'Marco';
document.getElementById('quintoesercizio').innerHTML = mionome;
var mionome = 'Tumminia';
document.getElementById('quintoesercizio').innerHTML = mionome;

/* Poichè il valore della variabile const è univocamente assegnata nel momento della definizione non è possibile assegnargli diversi valori dal primo definito */

/* const numero1 = 15
document.getElementById('sestoesercizio').innerHTML = numero1;

numero1 = 4
document.getElementById('sestoesercizio').innerHTML = numero1;*/



/* ESERCIZIO 6
 Esegui una sottrazione tra i numeri 4 e la variable "x" appena dichiarata (che contiene il numero 12).
*/

var x = 12;
var numero2 = 4;

document.getElementById('settimoesercizio').innerHTML = numero2 - x;

/* ESERCIZIO 7
 Crea due variabili: "name1" e "name2". Assegna a name1 la stringa "john", e assegna a name2 la stringa "John" (con la J maiuscola!).
 Verifica che name1 sia diversa da name2 (suggerimento: è la stessa cosa di verificare che la loro uguaglianza sia falsa).
 EXTRA: verifica che la loro uguaglianza diventi true se entrambe vengono trasformate in lowercase (senza cambiare il valore di name2!).
*/

var name1 = 'john';
var name2 = 'John';

if (name1 == name2) {
  document.getElementById('ottavoes').innerHTML = "true";
}
else {
  document.getElementById('ottavoes').innerHTML = "false";
}


