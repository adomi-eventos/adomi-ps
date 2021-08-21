// #### Exercício 1a

// Crie uma função para verificar se um número é
// par ou impar e aplique-a na lista a seguir para imprimir quais
// números são pares e quais são ímpares.

// lista = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]; // Guarda o array em uma variável
//Usando o método map para percorrer o array e executar a função em cada número
let checkEven = list.map((num) => {
  //se o numero for par retorna a string indicando que é par , senão a string indicando que não é par
  if (num % 2 === 0) {
    return (num = `${num} is even`);
  } else {
    return (num = `${num} it's not even`);
  }
});
//exibe o resultado no console
console.log(`Exercício 1 : ${checkEven}`);

// #### Exercício 1b (desafio)

// Você consegue reduzir seu código para 1 linha?

//Usando o Operador Condicional ternário, consigo refatorar o código para uma única linha
let checkEvenReduced = list.map((item) => {
  return item % 2 === 0 ? `${item} is even` : `${item} it's not even`;
});
console.log(`Exercício 1b (desafio) : ${checkEvenReduced}`);
