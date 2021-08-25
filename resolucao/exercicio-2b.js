/*

- Exercício 2b (desafio)

Repita o exercício anterior, mas seu algorítimo deve utilizar apenas atribuições 
entre a duas variáveis, sem declarar uma terceira.

*/

let a = 19;
let b = 23;

console.log(`Variável a = ${a} \nVariável b = ${b}`);

[a, b] = [b, a];

console.log(` \nNovo valor de a = ${a} \nNovo valor de b = ${b}`);

/* Nesse exercício foi utilizada a atribuição via desestruturação ([a, b] = [b, a]), 
assim invertendo os valores das variáveis. */
