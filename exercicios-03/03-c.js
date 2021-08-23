let numerosFibo = [0, 1];

function fibonacci(x) {
    let i = numerosFibo.length;

    while (i < x) {
        numerosFibo[i] = numerosFibo[i - 2] + numerosFibo[i - 1];

        i++;
    }
    console.log(numerosFibo);
}

fibonacci(10);

function somaFibonacciReduce(array) {
    let soma = array.reduce(function(soma, i) {
        return soma + i;
    })
 
    console.log(soma);
 }
 
 somaFibonacciReduce(numerosFibo);

 // para testar todos os exercícios passados aqui, você deve clonar o repositorio na sua máquina (git clone + url), abrir o terminal dentro da pasta de cada exercício e executar com node (escreva "node + nome do arquivo.js"). Tente trocar os valor final do fibonacci -> fibonacci(20), fibonacci(30)! A soma também será alterada.//

 // nesse exercicio, também teremos que somar os valores da array passada só que com outro método. Nesse caso utilizei outro método de arrays chamado reduce, onde a função dele é reduzir um array em outro seguindo o parâmetro passado. Sendo assim, criei uma função com o reduce, que recebe como parâmetros um acumulador (soma), que vai guardar os valores acumulados e o índice de cada array (i). Sendo assim, para cada i (índice) do array, ele vai somar com o valor já guardado no acumulador (soma).