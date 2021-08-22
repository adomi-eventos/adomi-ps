/* Para testar o codigo, 
- Faça o clone desse repositorio para a sua maquina.
- Abra seu terminal, va ate a pasta desse repositorio (ou abra o arquivo no VScode e abra o terminal) e digite node script.js.
- ou depois de clonar, abra o arquivo index.html no seu navegador e abra o inspecionar elementos, clicando em f12 no teclado.
*/

/* EXERCICIO 1a
usei o metodo de array forEach para executar uma função em cada item do array. Dessa maneira, qualquer número inserido na array lista, será verificado se é par ou impar. */
console.log("\n");
console.log("<< EXERCICIO 1a >> \n");
lista = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let verificaNumero = (lista) => {
  lista.forEach((num) => {
    if (num % 2 === 0) {
      console.log(`${num}: par`);
    } else console.log(`${num}: impar`);
  });
};
verificaNumero(lista);

/* EXERCICIO 1b - Desafio
para o desafio do exercicio 1, utilizei o operador ternário, que funciona com o mesmo conceito  do if e else, porém é feito em apenas uma linha.*/
console.log("\n << EXERCICIO 1b >> \n");

lista.forEach((i) => {
  i % 2 == 0 ? console.log(`${i}: par`) : console.log(`${i}: impar`);
});

/* EXERCICIO 2a
é necessário criar uma nova variável para armazenar o valor de a. */
console.log("\n << EXERCICIO 2a >> \n");

let a = 19;
let b = 23;

let c = a;
a = b;
b = c;

console.log(`O novo valor da variavel a é: ${a}`);
console.log(`O novo valor da variavel b é: ${b}`);

/* EXERCICIO 2b (Desafio)
para trocar os valores das variaveis sem criar uma nova variavel, utilizei uma expressão de destruturação */
console.log("\n << EXERCICIO 2b - Desafio >> \n");

let a2 = 19;
let b2 = 23;
[a2, b2] = [b2, a2];
console.log(`O novo valor da variavel a2 é: ${a2}`);
console.log(`O novo valor da variavel b2 é: ${b2}`);

/* EXERCICIO 3a
o loop for itera até o número desejado. O 0(zero) é impresso primeiro e em cada iteração, o segundo numero é armazenado na variavel n1 
e a soma dos dois numeros anteriores, armazenado na variavel n2. */

console.log("\n << EXERCICIO 3a >> \n");
let n1 = 0;
let n2 = 1;
let next;

let array = [0, 1];
function fibo(x) {
  for (i = array.length; i < x; i++) {
    array[i] = array[i - 2] + array[i - 1];
  }
  console.log(array);
}
fibo(20);

/* EXERCICIO 3b - 1 (Desafio)
para somar os valores da array do exercicio 3, utilizei a função reduce
ela é invocada a partir do array e é passado pra ela a função de callback que recebe
o totalizador (total) e um objeto (array) que representa cada número do vetor em cada iteração */
console.log("\n << EXERCICIO 3b-1 - Desafio >> \n");

function soma() {
  let total = array.reduce(function (total, array) {
    return total + array;
  });
  console.log(`a soma dos números do array é: ${total}`);
}
soma();

/* EXERCICIO 3B - 2 (DESAFIO)
uma outra forma de realizar a soma dos valores da array, é o loop for,
onde a cada loop ele realiza a soma */
console.log("\n << EXERCICIO 3b-2 - Desafio >> \n");

function soma2() {
  let total2 = 0;
  for (let i = 0; i < array.length; i++) {
    total2 += array[i];
  }
  console.log(`a soma dos números do array é: ${total2}`);
}
soma2();
console.log("\n");
