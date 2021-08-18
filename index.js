/* Exercício 1a   */

let lista = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function verificarParOuImpar(arr) {
  console.log("Resposta 1A:");
  arr.map((numero) => {
    if (numero % 2 === 0) {
      console.log(`${numero}: par`);
    } else {
      console.log(`${numero}: impar`);
    }
  });
}

verificarParOuImpar(lista);

// ----------------------------------------------------------------

/* Exercício 1b (desafio)  */
lista.map((numero) => {
  numero % 2 === 0
    ? console.log(`${numero}: par`)
    : console.log(`${numero}: impar`);
});

// -----------------------------------------------------------------

/* Exercício 2a:  */
let numA = 19;
let numB = 23;
let numC = numA;

numA = numB;
numB = numC;

console.log(`Resposta 2A: ${numA} ${numB}`);

// -----------------------------------------------------------------

// Exercício 2b (desafio)
let A = 19;
let B = 23;
[A, B] = [B, A];
console.log(`Resposta 2B(Desafio): ${A} ${B}`);

// ------------------------------------------------------------------

//Exercício 3a
let arr = [0, 1];
let peNultimo = arr[arr.length - 2];
let ultimo = arr[arr.length - 1];

function criarFibonacci() {
  for (let i = 0; i <= 15; i++) {
    peNultimo = arr[arr.length - 2];
    ultimo = arr[arr.length - 1];
    arr.push(ultimo + peNultimo);
  }

  return arr;
}

console.log(`Atividade 3A: ${criarFibonacci(arr).toString()}`);

// ------------------------------------------------------------------

// Exercício 3b-1 (desafio)

let total = arr.reduce((total, numero) => {
  return total + numero;
}, 0);
console.log(`Resposta 3B-1: ${total}`);
