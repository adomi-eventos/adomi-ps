/* Exercício 1a - Crie uma função para verificar se um número é par ou impar e aplique - a na lista a seguir para imprimir quais números são pares e quais são ímpares. */

console.log("============== Exercício 01a ============== ");
lista = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

function testaParOuImpar(lista) {
  for (let i = 0; i < lista.length; i++) { // enquanto o 'i' for menor que o tamanho da lista vai executar o for
    if (lista[i] % 2 == 0) { // se o resto da divisão da lista[i] por 2 for igual a 0 o número é par, se for diferente o número é ímpar
      console.log(lista[i] + " é par")
    } else {
      console.log(lista[i] + " é ímpar")
    }
  }
}
testaParOuImpar(lista)

console.log("============== Exercício 01b ============== ");


// (Desafio) reduzir o código para uma linha
function parOuImpar(lista) {
  return console.log("Os números pares da lista são os: ", lista.filter(numero => numero % 2 === 0), "e os números ímpares são os: ", lista.filter(numero => numero % 2 !== 0)) // retorna a lista filtrada somente com os números pares e outra somente com os números ímpares
}
parOuImpar(lista)

console.log("============== Exercício 02a ============== ");

/* Exercício 2a - Escreva um algoritmo que armazene o valor 19 em uma variável A e o valor 23 em uma variável B. A seguir troque os seus conteúdos fazendo com que o valor que está em A passe para B e vice-versa. Ao final, escrever os valores que ficaram armazenados nas variáveis. */

let A = 19;
let B = 23;
let C = A; // armazena o valor de A em C
A = B; // atribui o valor de B para A
B = C; // atribui o valor de C para B
console.log("A:", A, "B:", B);



console.log("========= Exercício 02b (Desafio) ========= ");

/* Exercício 2 b(desafio)
Repita o exercício anterior, mas seu algorítimo deve utilizar apenas atribuições entre a duas variáveis, sem declarar uma terceira. */

let desafioA = 19;
let desafioB = 23;
desafioA = desafioA + desafioB; // atribui o valor de A + B para A
desafioB = desafioA - desafioB; // atribui o valor de A - B para B
desafioA = desafioA - desafioB; // atribui o valor de A - B para A
console.log("((Desafio)) A:", desafioA, "B:", desafioB);


console.log("============== Exercício 03a ============== ");

/* Exercício 3a - Crie uma função que salve os números da série de Fibonacci até chegar em x (parâmetro) interações em um array e imprima esse array.

(A série de Fibonacci é a seguinte: 0, 1, 1, 2, 3, 5, 8, 13, 21, etc... Para calculá-la, o primeiro e segundo elementos valem 1, daí por diante, o “n-ésimo” elemento vale o (n-1)-ésimo elemento somado ao (n-2)-ésimo elemento (ex: 8 = 5 + 3)) */

function fibonacci(x) {
  let array = [0, 1]; // inicia o array com os valores 0 e 1
  for (let i = 0; i < x; i++) { // o for vai ser executado enquanto o 'i' for menor que o parâmetro 'x'
    array.push(array[i] + array[i + 1]) // adiciona o valor do array[i] + array[i+1] ao array
  }
  return array
}

console.log(fibonacci(10));

console.log("========= Exercício 03b-1(desafio) ========= ");

/* Exercício 3b-1 (desafio) - Crie uma função que, recebendo o array gerado na função anterior, retorne a soma dos valores do array. */

let arrayFibonacci = fibonacci(10)

function somaArray(arrayFibonacci) {
  let soma = 0; // inicia a variável soma com o valor 0
  for (let i = 0; i < arrayFibonacci.length; i++) { // o for vai ser executado enquanto o 'i' for menor que o tamanho do array
    soma += arrayFibonacci[i] // soma o valor do array[i] ao valor da variável soma
  }
  return soma // retorna a variável soma
}
console.log(somaArray(arrayFibonacci));

console.log("========= Exercício 03b-2(desafio) ========= ");

/* Exercício 3b-2 (desafio) - Crie uma função que, recebendo o array gerado na função anterior, retorne a soma dos valores do array. Utilize um algoritmo diferente do desafio 3b-1. (ex: se no desáfio 3b-1 seu algorítimo usou um loop, utilize recursão) */

function somaArrayRecursivo(arrayFibonacci) {
  if (arrayFibonacci.length == 0) { // se o tamanho do array for igual a 0
    return 0 // retorna 0
  } else { // se não for igual a 0
    return arrayFibonacci[0] + somaArrayRecursivo(arrayFibonacci.slice(1)) // retorna o valor do array[0] + a função recursiva com o array sem o primeiro valor
  }
}

console.log(somaArrayRecursivo(arrayFibonacci));