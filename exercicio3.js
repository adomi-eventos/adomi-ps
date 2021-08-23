// Exercício 3a
// Um laço For para calcular a Série de Fibonacci a partir da posição 2, isso explica i=2, utilizei x = 8 como parâmetro
console.log("EXERCÍCIO 3")
var fibonacci = [0, 1];

function serieFibonacci() {
    for (let i = 2; i <= 8; i++) {
        fibonacci[i] = fibonacci[i - 1] + fibonacci[i - 2]
    }
    return fibonacci;
}
console.log(`Série de Fibonacci: ${serieFibonacci()}\n\n`);

// 3b.1 (Desafio)
//Criei um For que percorre toda a série de Fibonacci calculada anteriormente e soma os índices
console.log("Desafio 3b.1:")
let soma = 0

function somaFibonacci() {

    for (let i = 0; i < fibonacci.length; i++) {
        soma += fibonacci[i];
    }
    console.log(`A soma dos valores da Série é: ${soma} `);
}
somaFibonacci();

// 3b.2 (Desafio)
// Fiz a mesma soma, mas com o método reduce, que pega a array, soma seus indices e retorna o resultado em uma array reduzida
console.log("Desafio 3b.2:")

function somaSerie() {
    let leonardoFibonacci = fibonacci.reduce((t, n) => {
        return t + n
    }, 0);
    console.log(`A soma dos valores da Série é: ${leonardoFibonacci}`);
}
somaSerie()