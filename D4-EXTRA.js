// Esercizi aggiuntivi (facoltativi) per D4

/* EXTRA 1
 Scrivi una funzione chiamata "checkArray" che riceve un array di numeri casuali (creati con la funzione "giveMeRandom") e per ogni elemento stampa in console
 se il suo valore è maggiore di 5 o no.
 La funzione deve inoltre ritornare la somma di tutti i valori maggiori di 5.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
console.log("__________________________Esercizio 1:");
const giveMeRandom = function (n = 0) {
  if (Number) {
    const arrayRandom = [];
    for (let i = 0; i < n; i++) {
      arrayRandom[i] = Math.floor(Math.random() * 11);
    }
    return arrayRandom;
  } else "non hai inserito un numero!";
};

const checkArray = function (arr) {
  let somma = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 5) {
      console.log("L'indice", i, "ha rilevato un valore maggiore di 5:", arr[i]);
      somma += arr[i];
    }
  }
  return somma;
};
console.log("la somma dei valori:", checkArray(giveMeRandom(10)));
/* EXTRA 2
 Nel tuo eCommerce disponi di un'array di oggetti chiamato "shoppingCart". Ognuno di questi oggetti ha le seguenti proprietà: "price", "name", "id" e "quantity".
 Crea una funzione chiamata "shoppingCartTotal" che calcola il totale dovuto al negozio (tenendo conto delle quantità di ogni oggetto).
*/

/* SCRIVI QUI LA TUA RISPOSTA */
console.log("__________________________Esercizio 2:");
const shoppingCart = [
  {
    price: 50,
    name: "vaso",
    id: "1",
    quantity: 3,
  },
  {
    price: 100,
    name: "letto",
    id: "2",
    quantity: 1,
  },
  {
    price: 20,
    name: "lampada",
    id: "3",
    quantity: 6,
  },
  {
    price: 10,
    name: "tappeto",
    id: "4",
    quantity: 2,
  },
];

const shoppingCartTotal = function (arrObject) {
  let sommTotal = 0;
  for (let i = 0; i < arrObject.length; i++) {
    let som = arrObject[i].price * arrObject[i].quantity;
    sommTotal += som;
  }
  return sommTotal;
};

console.log("il totale dovuto al negozio è:", shoppingCartTotal(shoppingCart));

/* EXTRA 3
 Nel tuo eCommerce disponi di un'array di oggetti chiamato "shoppingCart". Ognuno di questi oggetti ha le seguenti proprietà: "price", "name", "id" e "quantity".
 Crea una funzione chiamata "addToShoppingCart" che riceve un nuovo oggetto dello stesso tipo, lo aggiunge a "shoppingCart" e ritorna il nuovo numero totale degli elementi.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
console.log("__________________________Esercizio 3:");

console.log("elementi di shopping cart prima della modifica:", shoppingCart.length);

const addToShoppingCart = function (Object) {
  shoppingCart.push({
    price: Object.price,
    name: Object.name,
    id: Object.id,
    quantity: Object.quantity,
  });
};

addToShoppingCart({
  price: 30,
  name: "scarpe",
  id: "5",
  quantity: 3,
});

console.log("elementi di shopping cart dopo la modifica:", shoppingCart.length);
console.log(shoppingCart);

/* EXTRA 4
 Nel tuo eCommerce disponi di un'array di oggetti chiamato "shoppingCart". Ognuno di questi oggetti ha le seguenti proprietà: "price", "name", "id" e "quantity".
 Crea una funzione chiamata "maxShoppingCart" che riceve l'array "shoppingCart" e ritorna l'oggetto più costoso in esso contenuto.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
console.log("__________________________Esercizio 4:");
const maxShoppingCart = function (arrObject) {
  let indexMax = 0;
  for (let i = 0; i < arrObject.length; i++) {
    for (let x = 0; x < arrObject.length; x++) {
      if (arrObject[i].price > arrObject[x].price) {
        indexMax = i;
      }
    }
  }
  console.log("l'indice è:", indexMax);
  return arrObject[indexMax];
};

console.log("l'oggetto col valore maggiore:", maxShoppingCart(shoppingCart));

/* EXTRA 5
 Nel tuo eCommerce disponi di un'array di oggetti chiamato "shoppingCart". Ognuno di questi oggetti ha le seguenti proprietà: "price", "name", "id" e "quantity".
 Crea una funzione chiamata "latestShoppingCart" che riceve l'array "shoppingCart" e ritorna l'ultimo elemento.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* EXTRA 6
 Crea una funzione chiamata "loopUntil" che riceve un numero intero come parametro con valore tra 0 e 9.
 La funzione è composta da un ciclo che stampa un numero casuale tra 0 e 9 finchè il numero casuale non è maggiore di x per tre volte di fila.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* EXTRA 7
Crea una funzione chiamata "average" che riceve un array come parametro e ne ritorna la media aritmetica. La funzione salta automaticamente i valori non numerici nell'array.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* EXTRA 8
 Crea una funzione chiamata "longest" che trova la stringa più lunga all'interno di un array di stringhe fornito come parametro.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* EXTRA 9
 Crea una funzione per creare un filtro anti-spam per la tua casella email. La funzione riceve un parametro stringa chiamato "emailContent", e torna un valore booleano.
 La funzione deve ritornare true se "emailContent" non contiene le parole "SPAM" o "SCAM".
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* EXTRA 10
 Scrivi una funzione che riceve una data come parametro, e calcola il numero di giorni passati da quella data.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* EXTRA 11
 Scrivi una funzione chiamata "matrixGenerator" che riceve come parametri due numeri interi, "x" e "y".
 Il risultato deve essere una matrice di "x" volte "y", e i valori devono rispecchiare gli indici della posizione all'interno della matrice.
 Es.: x = 3, y = 2
 ["00","01","02"
 "10","11","12"]
*/

/* SCRIVI QUI LA TUA RISPOSTA */
