// ____________________________________

// #### Exercício 2a: 
// Escreva um algoritmo que armazene o valor 19 em uma variável A
// e o valor 23 em uma variável B. A seguir troque os seus conteúdos fazendo com
// que o valor que está em A passe para B e vice-versa. Ao final, escrever os 
// valores que ficaram armazenados nas variáveis.

// Aqui guardo os valores nas variaveis sugeridas e declaro mais uma auxiliar. 
let A = 19;
let B = 23;
let C = 0;

//Atribuo o valor de A na variável auxiliar para não perdê-lo , em seguida faço as trocas
const exchange = (A, B, C) => {
    
    C = A;
    A = B;
    B = C;
    console.log(`Exercício 2a : A = ${A} e B = ${B}` )
    
}
exchange(A, B, C)


// #### Exercício 2b (desafio)
// Repita o exercício anterior, mas seu algorítimo 
// deve utilizar apenas atribuições entre a duas variáveis, sem declarar
// uma terceira.

// ____________________________________

//Colocando 2 variáveis em um array e, em seguida, aplicando desestruturação nesse array nas mesmas variáveis, é possível trocar seus 
//valores sem a necessidade de uma variável intermediária:

A = 19;
B = 23;


[A, B] = [B, A];
console.log(`Exercício 2b (desafio) : A = ${A} e B = ${B}`);