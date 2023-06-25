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

function area(l1, l2) {
  return l1 * l2;
}

let areaRett = area(5, 6);
console.log(areaRett);

/* ESERCIZIO 2
 Scrivi una funzione di nome "crazySum", che riceve due numeri interi come parametri.
 La funzione deve ritornare la somma dei due parametri, ma se il valore dei due parametri è il medesimo deve invece tornare
 la loro somma moltiplicata per tre.
*/

function crazySum(l3, l4) {
  if (l3 == l4) {
    return (l3 + l4) * 3;
  } else {
    return l3 + l4;
  }
}

console.log(crazySum(8, 8));

/* ESERCIZIO 3
 Scrivi una funzione di nome "crazyDiff" che calcola la differenza assoluta tra un numero fornito come parametro e 19.
 Deve inoltre tornare la differenza assoluta moltiplicata per tre qualora il numero fornito sia maggiore di 19.
*/

function crazyDiff(x) {
  if (x > 19) {
    return Math.abs((x - 19) * 3);
  } else {
    return Math.abs(x - 19);
  }
}

console.log(crazyDiff(25, 19));

/* ESERCIZIO 4
 Scrivi una funzione di nome "boundary" che accetta un numero intero n come parametro, e ritorna true se n è compreso tra 20 e 100 (incluso) oppure
 se n è uguale a 400.
*/

function boundary(n) {
  if ((20 <= n && n <= 100) || n === 400) {
    return true;
  } else {
    return false;
  }
}

console.log(boundary(50));

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 5
 Scrivi una funzione di nome "epify" che accetta una stringa come parametro.
 La funzione deve aggiungere la parola "EPICODE" all'inizio della stringa fornita, ma se la stringa fornita comincia già con "EPICODE" allora deve
 ritornare la stringa originale senza alterarla.
*/

let str = " è un corso di formazione per developer";

function epify(str) {
  if (str.startsWith("EPICODE")) {
    return str;
  } else {
    return "EPICODE" + str;
  }
}

console.log(epify(str));

/* ESERCIZIO 6
 Scrivi una funzione di nome "check3and7" che accetta un numero positivo come parametro. La funzione deve controllare che il parametro sia un multiplo
 di 3 o di 7. (Suggerimento: usa l'operatore modulo)
*/

function check3and7(y) {
  if (Math.abs(y) % 3 == 0 || Math.abs(y) % 7 == 0) {
    return true;
  } else {
    return false;
  }
}
console.log(check3and7(21));

/* ESERCIZIO 7
 Scrivi una funzione di nome "reverseString", il cui scopo è invertire una stringa fornita come parametro (es. "EPICODE" --> "EDOCIPE")
*/

var string = "EPICODE";

function reverseString(string) {
  return string.split("").reverse().join("");
}
console.log(reverseString(string));

/* ESERCIZIO 8
 Scrivi una funzione di nome "upperFirst", che riceve come parametro una stringa formata da diverse parole.
 La funzione deve rendere maiuscola la prima lettera di ogni parola contenuta nella stringa.
*/

var string2 = "ciao sono marco e frequento epicode";

function upperFirst(string2) {
  return string2.replace(/\b\w/g, function (match) {
    return match.toUpperCase();
  });
}

console.log(upperFirst(string2));

/* ESERCIZIO 9
 Scrivi una funzione di nome "cutString", che riceve come parametro una stringa. La funzione deve creare una nuova stringa senza il primo e l'ultimo carattere
 della stringa originale.
*/

function cutString(str) {
  if (str.lenght <= 2) {
    return "";
  }
  return str.slice(1, -1);
}

console.log(cutString("ciao sono marco e frequento un corso epicode"));

/* ESERCIZIO 10
 Scrivi una funzione di nome "giveMeRandom", che accetta come parametro un numero n e ritorna un'array contenente n numeri casuali inclusi tra 0 e 10.
*/

var mioArray = [];

function giveMeRandom(n) {
  for (let i = 0; i < n; i++) {
    randomNumber = Math.floor(Math.random() * 11);
    mioArray.push(randomNumber);
  }

  return mioArray;
}

console.log(giveMeRandom(5));
