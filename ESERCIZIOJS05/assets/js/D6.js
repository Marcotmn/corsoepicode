/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Se sei in difficoltà puoi chiedere aiuto a un Teaching Assistant
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per farlo puoi utilizzare il terminale Bash, quello di VSCode o quello del tuo sistema operativo (se utilizzi macOS o Linux)
*/

/* ESERCIZIO 1
 Scrivi una funzione di nome "area", che riceve due parametri (l1, l2) e calcola l'area del rettangolo associato..
*/

/* var l1=5
var l2=10

function area() {
    let areaRett = l1 * l2;
    return areaRett;
}
document.getElementById("esuno").innerHTML = area();*/

/* ESERCIZIO 2
 Scrivi una funzione di nome "crazySum", che riceve due numeri interi come parametri.
 La funzione deve ritornare la somma dei due parametri, ma se il valore dei due parametri è il medesimo deve invece tornare
 la loro somma moltiplicata per tre.
*/


/* var num1 = 5
var num2 = 10

function crazySum () {
    if (num1 === num2) {
        return (num1 + num2) * 3;
    } else {
        return (num1 + num2);
    }
}
    
document.getElementById("esdue").innerHTML = crazySum(); */

/*


/* ESERCIZIO 3
 Scrivi una funzione di nome "crazyDiff" che calcola la differenza assoluta tra un numero fornito come parametro e 19.
 Deve inoltre tornare la differenza assoluta moltiplicata per tre qualora il numero fornito sia maggiore di 19.
*/


/* var num = 15

function crazyDiff() {
    const diff = Math.abs(num - 19);
    
    if (num > 19) {
        return diff * 3
    } else {
        return diff;
    }
}

document.getElementById("estre").innerHTML = crazyDiff(); */

/* ESERCIZIO 4
 Scrivi una funzione di nome "boundary" che accetta un numero intero n come parametro, e ritorna true se n è compreso tra 20 e 100 (incluso) oppure
 se n è uguale a 400.
*/


/* var n = 50

function boundary () {
   return (n > 20 && n < 100 || n === 400);
}

document.getElementById("esquattro").innerHTML = boundary();*/


/* ESERCIZIO 5
 Scrivi una funzione di nome "epify" che accetta una stringa come parametro.
 La funzione deve aggiungere la parola "EPICODE" all'inizio della stringa fornita, ma se la stringa fornita comincia già con "EPICODE" allora deve
 ritornare la stringa originale senza alterarla.
*/


/* var string = "EPICODE ti insegna JavaScript"

function epify() {
    if (string.startsWith('EPICODE')) {
        return string;
    } else {
        return "EPICODE" + string;
    }

}

document.getElementById("escinque").innerHTML = epify(); */

/* ESERCIZIO 6
 Scrivi una funzione di nome "check3and7" che accetta un numero positivo come parametro. La funzione deve controllare che il parametro sia un multiplo
 di 3 o di 7. (Suggerimento: usa l'operatore modulo)
*/

/*var num1 = 10
var num2 = 3
var num3 = 7


function check3and7() {
    return (num1 % num2 === 0 || num1 % num3 === 0)
}

document.getElementById("esei").innerHTML = check3and7();*/

/* ESERCIZIO 7
 Scrivi una funzione di nome "reverseString", il cui scopo è invertire una stringa fornita come parametro (es. "EPICODE" --> "EDOCIPE")
*/

/*
var string = "EPICODE"

function reverseString() {
    return string.split('').reverse().join('');
}

document.getElementById("esette").innerHTML = reverseString();*/


/* ESERCIZIO 8
 Scrivi una funzione di nome "upperFirst", che riceve come parametro una stringa formata da diverse parole.
 La funzione deve rendere maiuscola la prima lettera di ogni parola contenuta nella stringa.
*/

var string = "domani vado a lavoro"

function upperFirst () {
    return string.split
}

/* ESERCIZIO 9
 Scrivi una funzione di nome "cutString", che riceve come parametro una stringa. La funzione deve creare una nuova stringa senza il primo e l'ultimo carattere
 della stringa originale.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 10
 Scrivi una funzione di nome "giveMeRandom", che accetta come parametro un numero n e ritorna un'array contenente n numeri casuali inclusi tra 0 e 10.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
