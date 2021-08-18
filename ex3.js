// DESAFIO 3 

function fibonacci(x) {
    const arrayFibo = [0, 1];
    for (let i = 2; i < x; i++) {
        arrayFibo.push(arrayFibo[i - 2] + arrayFibo[i - 1]); // adicionando o prximo fibonacci com a seoma dos dois numeros anteriores ao i (numero atual)
    }
    return arrayFibo; // retorna o array com os numeros

}
arrayFibo = fibonacci(10); // chamando a função
console.log("Array de fibonaccis:", arrayFibo)

// DESAFIO 3.1 - Resolvi esse desafio com o metodo reduce do javascript,
// entre outras caracteristicas nos permite fazer soma dos items de um array;  

const soma = arrayFibo.reduce(function (soma, i) {
    return soma + i;
});

console.log("A soma de todos os numeros do array com reduce é:", soma);
