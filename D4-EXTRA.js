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
  } else return "non hai inserito un numero!";
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
  let valoreRecuperato = shoppingCart[0].price;
  for (let i = 0; i < shoppingCart.length; i++) {
    if (shoppingCart[i].price > valoreRecuperato) {
      valoreRecuperato = shoppingCart[i].price;
      indexMax = i;
    }
  }
  console.log("l'indice è:", indexMax);
  return arrObject[indexMax];
};
const piùcostoso = maxShoppingCart(shoppingCart);
console.log("l'oggetto col valore maggiore:", piùcostoso);

/* EXTRA 5
 Nel tuo eCommerce disponi di un'array di oggetti chiamato "shoppingCart". Ognuno di questi oggetti ha le seguenti proprietà: "price", "name", "id" e "quantity".
 Crea una funzione chiamata "latestShoppingCart" che riceve l'array "shoppingCart" e ritorna l'ultimo elemento.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
console.log("__________________________Esercizio 5:");
const latestShoppingCart = function (arrObject) {
  return arrObject[arrObject.length - 1];
};

const ultimoElemento = latestShoppingCart(shoppingCart);
console.log("L'ultimo elemento dell'array:", ultimoElemento);

/* EXTRA 6
 Crea una funzione chiamata "loopUntil" che riceve un numero intero come parametro con valore tra 0 e 9.
 La funzione è composta da un ciclo che stampa un numero casuale tra 0 e 9 finchè il numero casuale non è maggiore di x per tre volte di fila.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
console.log("__________________________Esercizio 6:");
const loopUntil = function (numIntero) {
  console.log("Il valore inserito è ", numIntero);
  let x = 0;
  let contatoreciclo = 0;
  if (numIntero >= 0 && numIntero <= 9) {
    while (x < 3) {
      contatoreciclo++;
      let numerorandom = Math.floor(Math.random() * 10);
      console.log("Il valore generato randomicamente è:", numerorandom);
      if (numerorandom > numIntero) {
        x++;
      } else x = 0;
    }
    console.log("Sono stati effettuati ", contatoreciclo, " cicli.");
  } else return "Non hai inserito un numero tra 0 e 9";
};

loopUntil(Math.floor(Math.random() * 10));

/* EXTRA 7
Crea una funzione chiamata "average" che riceve un array come parametro e ne ritorna la media aritmetica. La funzione salta automaticamente i valori non numerici nell'array.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
console.log("__________________________Esercizio 7:");
const average = function (arr) {
  let sommNumeri = 0;
  let contNumeri = 0;
  let contnotNumeri = 0;
  for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
    if (typeof element === "number") {
      sommNumeri += element;
      contNumeri++;
    } else contnotNumeri++;
  }
  console.log(
    "Sono stati verificati n:",
    arr.length,
    " elementi. N:",
    contNumeri,
    " sono risultati essere dei numeri mentre n:",
    contnotNumeri,
    " non sono numeri."
  );
  return sommNumeri / contNumeri;
};

arrNumStr = [1, 24, 56, 54, 6, 9, 0, 23, "ciao", "come stai?", 34];

console.log("La media aritmetica dei numeri è:", average(arrNumStr));

/* EXTRA 8
 Crea una funzione chiamata "longest" che trova la stringa più lunga all'interno di un array di stringhe fornito come parametro.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
console.log("__________________________Esercizio 8:");
const longest = function (arrStr) {
  let constante = arrStr[0].length;
  let indiceDaPrelevare = 0;
  for (let i = 0; i < arrStr.length; i++) {
    const element = arrStr[i].length;
    if (element > constante) {
      constante = element;
      indiceDaPrelevare = i;
    }
  }
  console.log("la prima stringa più lunga è nella posizione n:", indiceDaPrelevare, " dell'array. il valore è:", arrStr[indiceDaPrelevare]);
};

arrStringhe = ["tantissime parole da prendere", "ciao", "mi chiamo Luigi", "una parola", "tantissime parole da prendere", "tantissime parole da prendere?"];
longest(arrStringhe);

/* EXTRA 9
 Crea una funzione per creare un filtro anti-spam per la tua casella email. La funzione riceve un parametro stringa chiamato "emailContent", e torna un valore booleano.
 La funzione deve ritornare true se "emailContent" non contiene le parole "SPAM" o "SCAM".
*/

/* SCRIVI QUI LA TUA RISPOSTA */
console.log("__________________________Esercizio 9:");
const antiSpam = function (emailContent) {
  if (typeof emailContent === "string") {
    return emailContent.toUpperCase().includes("SPAM" || "SCAM");
  } else return "Il parametro passato non è una stringa";
};

const email = `Oggetto: Non perdetevi questa offerta! (Spam)
Ciao,
Non perderti questa offerta incredibile! Clicca qui per saperne di più. [Link] (Questo è spam)
Grazie`;

console.log("L' email passata come parametro contiene la parola SPAM o SCAM?", antiSpam(email));

/* EXTRA 10
 Scrivi una funzione che riceve una data come parametro, e calcola il numero di giorni passati da quella data.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
console.log("__________________________Esercizio 10:");

const contaGiorni = function (date) {
  const oggi = new Date();
  if (oggi > date) {
    const differenzaGiorni = oggi - date;
    const milliSecondi = 1000 * 60 * 60 * 24;
    return Math.floor(differenzaGiorni / milliSecondi);
  } else return "Non hai inserito una data valida";
};
const dateDainserire = new Date(2025, 7, 1);
console.log("quanti giorni sono passati dal", dateDainserire, "ad oggi?", contaGiorni(dateDainserire));

/* EXTRA 11
 Scrivi una funzione chiamata "matrixGenerator" che riceve come parametri due numeri interi, "x" e "y".
 Il risultato deve essere una matrice di "x" volte "y", e i valori devono rispecchiare gli indici della posizione all'interno della matrice.
 Es.: x = 3, y = 2
 ["00","01","02"
 "10","11","12"]
*/

/* SCRIVI QUI LA TUA RISPOSTA */
console.log("__________________________Esercizio 11:");
const generaStringa = function () {
  const caratteri = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  const len = Math.floor(Math.random() * 4) + 1; // lunghezza 1-4
  let str = "";
  for (let i = 0; i < len; i++) {
    str += caratteri.charAt(Math.floor(Math.random() * caratteri.length));
  }
  return str;
};

const matrixGenerator = function (x, y) {
  const matrice = [];
  for (let i = 0; i < x; i++) {
    const riga = [];
    for (let i2 = 0; i2 < y; i2++) {
      riga.push(generaStringa());
    }
    matrice.push(riga);
  }
  return matrice;
};

matriceReale = matrixGenerator(5, 3);
console.log("la matrice:", matriceReale);
