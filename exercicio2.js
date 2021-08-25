// Exercício 2a

// Primeiro estamos passando o valor da variavel 'A' para a temporaria. Logo em 
// seguida substituimos o valor de 'A' pelo de 'B' e colocamos o antigo valor de
// 'A' quem estava na variavel temporaria na variavel 'B'.

let A = 19;
let B = 23;
let temp;

temp = A
A = B
B = temp

console.log(A, B)

// Exercício 2b (desafio)

// Com essa resolução estamos fazendo uma desestruturação de array. 
// A sintaxe de atribuição de desestruturação é uma expressão JavaScript que torna
// possível descompactar valores de arrays, ou propriedades de objetos, em variáveis
// distintas.

let A = 19;
let B = 23;

[A, B] = [B, A]

console.log(A, B)