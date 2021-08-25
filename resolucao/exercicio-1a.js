/*

- Exercício 1a

Crie uma função para verificar se um número é par ou impar e aplique-a na lista a seguir 
para imprimir quais números são pares e quais são ímpares.

*/

const list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let evenNumber = [];
let oddNumber = [];

const checkOddOrEvenNumber = () => {
  for (let item of list) {
    if (item % 2 === 0) evenNumber.push(item)
    else oddNumber.push(item)
  }
};

checkOddOrEvenNumber();

console.log("Números pares: ", evenNumber);
console.log("Números ímpares: ", oddNumber);

/* Nesse exercício utilizei o "for of" para iterar pelo array de números, e a cada iteração
é feito uma verifição, se o número que dividido por 2 restar 0 (item % 2 === 0), ele será
adicionado ao array referente aos números pares, senão ele será adicionado ao de números
ímpares. */
