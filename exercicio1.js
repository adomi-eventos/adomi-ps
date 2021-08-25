// Exercício 1a

// O pensamento aqui é crira uma função que verifique todos os itens do array 
// passando por loop. Cada verificação vai ter como intuito ver se o resto da 
// divisão do numero por dois é zero ou não. Caso verdade, imprimir que é par, 
// caso não, imprimir que é impar.

const lista = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

function isPair(lista) {
  lista.forEach(number => {
    if (number % 2 === 0) {
      console.log(`${number} é par`)
    } else {
      console.log(`${number} é impar`)
    }
  });
}

isPair(lista)

// Exercício 1b (desafio)

// let isPair = lista => lista.forEach(number => { (number % 2 === 0) ? (`${number} é par`) : (`${number} é impar`) } ) 

// console.log (isPair(lista))