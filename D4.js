/* ESERCIZIO 1
 Scrivi una funzione di nome "area", che riceve due parametri (l1, l2) e calcola l'area del rettangolo associato.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
console.log("__________________________Esercizio 1:");
const area = function (l1, l2) {
  return l1 * l2;
};

console.log("Prova area:", area(10, 15));

/* ESERCIZIO 2
 Scrivi una funzione di nome "crazySum", che riceve due numeri interi come parametri.
 La funzione deve ritornare la somma dei due parametri, ma se il valore dei due parametri è il medesimo deve invece tornare
 la loro somma moltiplicata per tre.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
console.log("__________________________Esercizio 2:");
const crazySum = function (num1 = 0, num2 = 0) {
  if (num1 === num2) {
    return (num1 + num2) * 3;
  } else return num1 + num2;
};

console.log("Prova La funzione deve ritornare la somma dei due parametri: ", crazySum(10, 5));

/* ESERCIZIO 3
 Scrivi una funzione di nome "crazyDiff" che calcola la differenza assoluta tra un numero fornito come parametro e 19.
 Deve inoltre tornare la differenza assoluta moltiplicata per tre qualora il numero fornito sia maggiore di 19.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
console.log("__________________________Esercizio 3:");
const crazyDiff = function (num1 = 0) {
  if (num1 <= 19) {
    return Math.abs(num1 - 19);
  } else return Math.abs((num1 - 19) * 3);
};

console.log("prova:", crazyDiff(5));

/* ESERCIZIO 4
 Scrivi una funzione di nome "boundary" che accetta un numero intero n come parametro, e ritorna true se n è compreso tra 20 e 100 (incluso) oppure
 se n è uguale a 400.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
console.log("__________________________Esercizio 4:");
const boundary = function (n = 0) {
  if ((n >= 20 && n <= 100) || n === 400) {
    return true;
  } else return false;
};

console.log("prova:", boundary(400));
/* ESERCIZIO 5
 Scrivi una funzione di nome "epify" che accetta una stringa come parametro.
 La funzione deve aggiungere la parola "EPICODE" all'inizio della stringa fornita, ma se la stringa fornita comincia già con "EPICODE" allora deve
 ritornare la stringa originale senza alterarla.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
console.log("__________________________Esercizio 5:");
const epify = function (str = "Non hai inserito una stringa.") {
  if (typeof str === typeof "Prova di stringa") {
    if (str.toUpperCase().indexOf("EPICODE") !== 0) {
      return "EPICODE " + str;
    } else return str;
  } else return "Non hai inserito una stringa.";
};

console.log("prova:", epify("oggi epicode non siamo epicode pronti epicode"));
/* ESERCIZIO 6
 Scrivi una funzione di nome "check3and7" che accetta un numero positivo come parametro. La funzione deve controllare che il parametro sia un multiplo
 di 3 o di 7. (Suggerimento: usa l'operatore modulo)
*/

/* SCRIVI QUI LA TUA RISPOSTA */
console.log("__________________________Esercizio 6:");
const check3and7 = function (numPositive) {
  if (numPositive % 3 === 0 || numPositive % 7 === 0) {
    console.log("Il numero inserito è un multiplo di 3 o di 7");
  } else console.log("Il numero inserito non è un multiplo di 3 o di 7");
};
check3and7(Math.abs(67));
/* ESERCIZIO 7
 Scrivi una funzione di nome "reverseString", il cui scopo è invertire una stringa fornita come parametro (es. "EPICODE" --> "EDOCIPE")
*/

/* SCRIVI QUI LA TUA RISPOSTA */
console.log("__________________________Esercizio 7:");
const reverseString = function (str = "inserisci una stringa") {
  if (typeof str === typeof "Prova di stringa") {
    // return str.split("").reverse().join("");
    const strClone = str.split("");
    let strReturn = "";
    for (let i = strClone.length - 1; i >= 0; i--) {
      strReturn += strClone[i];
    }
    return strReturn;
  } else return "Non hai inserito una stringa.";
};

console.log("prova:", reverseString("potrebbe essere anche una frase più lunga"));

/* ESERCIZIO 8
 Scrivi una funzione di nome "upperFirst", che riceve come parametro una stringa formata da diverse parole.
 La funzione deve rendere maiuscola la prima lettera di ogni parola contenuta nella stringa.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
console.log("__________________________Esercizio 8:");
const upperFirst = function (str = "inserisci una stringa") {
  if (typeof str === typeof "Prova di stringa") {
    const strClone = str.split(" ");
    console.log(strClone);
    for (let i = 0; i < strClone.length; i++) {
      strClone[i] = strClone[i].charAt(0).toUpperCase() + strClone[i].slice(1);
    }
    console.log(strClone);
    return strClone.join(" ");
  } else return "Non hai inserito una stringa.";
};

console.log("prova:", upperFirst("potrebbe essere anche una frase più lunga"));

/* ESERCIZIO 9
 Scrivi una funzione di nome "cutString", che riceve come parametro una stringa. La funzione deve creare una nuova stringa senza il primo e l'ultimo carattere
 della stringa originale.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
console.log("__________________________Esercizio 9:");
const cutString = function (str = "inserisci una stringa") {
  if (typeof str === typeof "Prova di stringa") {
    return str.substring(1, str.length - 1);
  } else return "Non hai inserito una stringa.";
};
console.log("prova:", cutString("Prova di una stringa da modificare"));
/* ESERCIZIO 10
 Scrivi una funzione di nome "giveMeRandom", che accetta come parametro un numero n e ritorna un'array contenente n numeri casuali inclusi tra 0 e 10.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
console.log("__________________________Esercizio 10:");
const giveMeRandom = function (n = 0) {
  if (typeof n === typeof 10) {
    const arrayRandom = [];
    for (let i = 0; i < n; i++) {
      arrayRandom[i] = Math.floor(Math.random() * 11);
    }
    return arrayRandom;
  } else "non hai inserito un numero!";
};

console.log("prova: ", giveMeRandom(10));
