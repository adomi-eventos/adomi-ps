/*

- Exercício 1b (desafio)

Reduzir o código para 1 linha

*/

const list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let evenNumber = [];
let oddNumber = [];

const checkOddOrEvenNumber2 = () => {
   list.map(item => item % 2 === 0 ? evenNumber.push(item) : oddNumber.push(item))
};
  
checkOddOrEvenNumber2();

console.log("Números pares: ", evenNumber);
console.log("Números ímpares: ", oddNumber);
  
/* Nesse exercício utilizei a função "map" junto com operador "ternário" para iterar pelo array 
de números, e verificar se o valor dividido por 2 resta 0 (item % 2 === 0), como no exercício
anterior os números serão adicionados em suas respectivas variáveis. */
