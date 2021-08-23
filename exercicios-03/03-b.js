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

function somaFibonacci(array) {
    let soma = 0;

    for (i = 0; i < array.length; i++) {
        soma += array[i];
    }

    console.log(soma);
}

somaFibonacci(numerosFibo);

// para testar todos os exercícios passados aqui, você deve clonar o repositorio na sua máquina (git clone + url), abrir o terminal dentro da pasta de cada exercício e executar com node (escreva "node + nome do arquivo.js"). Tente trocar os valor final do fibonacci -> fibonacci(20), fibonacci(30)! A soma também será alterada.//

// para a soma dos números do array, criei a função somaFibonacci, que recebe como parametro uma array (no caso aqui, a array formada anteriormente). Dentro dessa função criei uma variavel soma, que irá guardar o valor acumulado da soma dos índices. Para isso usei o método For, que começa pelo indice = 0 do array, enquanto i for menor que o tamanho do array e atribuindo + 1 sempre que der outro loop. Dentro do for, ele irá pegar o número da respectiva posição do índice e somar com o valor existente na variavel soma.