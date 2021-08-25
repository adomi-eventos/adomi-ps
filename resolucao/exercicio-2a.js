/*

- Exercício 2a:

Escreva um algoritmo que armazene o valor 19 em uma variável A e o valor 23 em 
uma variável B. A seguir troque os seus conteúdos fazendo com que o valor que 
está em A passe para B e vice-versa. Ao final, escrever os valores que ficaram 
armazenados nas variáveis.

*/

let a = 19;
let b = 23;

console.log(`Variável a = ${a} \nVariável b = ${b}`);

let x = a;
a = b;
b = x;

console.log(` \nNovo valor de a = ${a} \nNovo valor de b = ${b}`);

/* Nesse exercício, para inverter os valores entre 2 variáveis (a, b), foi criado uma terceira (x)
para que ela recebesse o valor de "a" e assim pudesse ser feita as inversão das variáveis (a = b, b = a) */
