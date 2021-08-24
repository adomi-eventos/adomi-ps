// EXERCICIO 1a
// Crie uma função para verificar se um número é par ou impar e aplique-a na lista a seguir para 
//imprimir quais números são pares e quais são ímpares.

// lista = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// lista = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const parImpar = (array) => {

//   let par = array.filter(n => n%2 === 0)
//   let impar = array.filter(n => n%2 === 1)

//   console.log('Estes são os números Pares: ', par)
//   console.log('Estes são os números Impares: ', impar)
// }

// parImpar(lista)

// EXERCICIO 1b (desafio)
// Você consegue reduzir seu código para 1 linha?

// EXERCICIO 2a:
// Escreva um algoritmo que armazene o valor 19 em uma variável A e o valor 23 em uma variável B. 
// A seguir troque os seus conteúdos fazendo com que o valor que está em A passe para B e vice-versa. 
// Ao final, escrever os valores que ficaram armazenados nas variáveis.

// let A = 19
// let B = 23
// let I = A

// I = A
// A = B
// B = I

// console.log('Variável A = ', A)
// console.log('Variável B = ', B)


// EXERCICIO 2b (desafio)
// Repita o exercício anterior, mas seu algorítimo deve utilizar apenas atribuições entre a duas variáveis, sem 
// declarar uma terceira.

// let A = 19
// let B = 23

// A = A+B

// B = A-B

// A = A-B 

// console.log('Variável A = ', A) 
// console.log('Variável B = ',B)

// EXERCICIO 3a
// Crie uma função que salve os números da série de Fibonacci até chegar em x (parâmetro) interações em um array 
// e imprima esse array.
   
// (A série de Fibonacci é a seguinte: 0, 1, 1, 2, 3, 5, 8, 13, 21, etc... Para calculá-la, o primeiro e segundo 
// elementos valem 1, daí por diante, o “n-ésimo” elemento vale o (n-1)-ésimo elemento somado ao (n-2)-ésimo 
// elemento (ex: 8 = 5 + 3))

// const fib = (number) => {

//     const array = [0, 1];
  
//     for (let index = 2; index < number; index++) {
//       array.push(array[index - 2] + array[index - 1]);
//     }
  
//     return array;
//   }
  
//   alert(fib(9));

// EXERCICIO 3b-1 (desafio)
// Crie uma função que, recebendo o array gerado na função anterior, retorne a soma dos valores do array.

// let valorFib = fib(9);

// const soma = (array) => {
  
//   const total = array.reduce((total, currentElement) => total + currentElement,0);

//   return total;
// }

// alert(soma(valorFib));

// EXERCICIO 3b-2 (desafio)
// Crie uma função que, recebendo o array gerado na função anterior, retorne a soma dos valores do array. 
// Utilize um algoritmo diferente do desafio 3b-1. (ex: se no desáfio 3b-1 seu algorítimo usou um loop, utilize 
// recursão)