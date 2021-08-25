// ------------------------ Exercício 1a ---------------------------------------------

// Crie uma função para verificar se um número é 
// par ou impar e aplique-a na lista a seguir para imprimir quais
// números são pares e quais são ímpares.

console.log("Ex 1A")

const lista1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const parOuImpar = (array) => {

    const par = array.filter((i) => {
        return i % 2 === 0
    })

    const impar = array.filter((i) => {
        return i % 2 !== 0
    })

    return {
        "Pares": par,
        "Ímpares": impar
    }
}

console.log(parOuImpar(lista1))


// ------------------------ Exercício 1b (desafio) ---------------------------------------------

// Você consegue reduzir seu código para 1 linha?

console.log("Ex 1B")

const lista2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function verificaNumero(numeros){
    numeros.filter(numero => numero % 2 === 0 ? console.log(`Número par: ${numero}`) : console.log(`Número ímpar: ${numero}`));
}
verificaNumero(lista2);

// ------------------------ Exercício 2a ---------------------------------------------
// Escreva um algoritmo que armazene o valor 19 em uma variável A e o valor 23 em uma variável B. A seguir troque os seus conteúdos fazendo com que o valor que está em A passe para B e vice-versa. Ao final, escrever os valores que ficaram armazenados nas variáveis.

console.log("Ex 2A")

let A = 19
let B = 23
let C = A
A = B
B = C

console.log("A:", A)
console.log("B:", B)

//  ------------------------ Exercício 2b (desafio) ---------------------------------------------
// Repita o exercício anterior, mas seu algorítimo deve utilizar apenas atribuições entre a duas variáveis, sem declarar uma terceira.

console.log("Ex 2B")

let D = 19;
let E = 23;

console.log (D);
console.log (E);

//Para inverter os valores armazenados sem utilizar uma terceira variável temos que utilizar as operações de soma e subtração.
D = D + E;
E = D - E;
D = D - E;

console.log (D);
console.log (E);

// ------------------------ Exercício 3a ---------------------------------------------
// Crie uma função que salve os números da série de Fibonacci até chegar em x (parâmetro) interações em um array e imprima esse array.

// (A série de Fibonacci é a seguinte: 0, 1, 1, 2, 3, 5, 8, 13, 21, etc... Para calculá-la, o primeiro e segundo elementos valem 1, daí por diante, o “n-ésimo” elemento vale o (n-1)-ésimo elemento somado ao (n-2)-ésimo elemento (ex: 8 = 5 + 3))

console.log("Ex 3A")

const fibonacci = (x) => {
  var fibonacciArray = [0, 1];
  for (var i = fibonacciArray.length; i < x; i++) {
      fibonacciArray[i] = fibonacciArray[i - 2] + fibonacciArray[i - 1];
  }
  return fibonacciArray
}
console.log(fibonacci(10))



// ------------------------ Exercício 3b-1 (desafio) ---------------------------------------------
// Crie uma função que, recebendo o array gerado na função anterior, retorne a soma dos valores do array.

console.log("Ex 3B-1")

function fibonacci2(number){
  let elementoAnterior = 0;
  let elementoAtual = 1;
  let proximoElemento = 1;

  for (let i=0; i < number; i++){
      console.log(proximoElemento)
      elementoAnterior = elementoAtual + proximoElemento;
      elementoAtual = proximoElemento
      proximoElemento = elementoAnterior
  }
}

fibonacci2(11);

// ------------------------ Exercício 3b-2 (desafio) ---------------------------------------------
// Crie uma função que, recebendo o array gerado na função anterior, retorne a soma dos valores do array. Utilize um algoritmo diferente do desafio 3b-1. (ex: se no desáfio 3b-1 seu algorítimo usou um loop, utilize recursão)

console.log("Ex 3B-2")

const somaElementosArray = (array) => {
  let soma = 0
  for (let i = 0; i < array.length; i++){
      soma += array[i];
  }
  return soma
}

console.log("Soma do array:", somaElementosArray(fibonacci(9)))