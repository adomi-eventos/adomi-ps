// Para testar para um fibonacci(N), basta editar a variavel N

var N = 5;

// Exercicio 1a

// Uma forma simples de resolver eh utilizando a recursao f(n) = f(n - 1) + f(n - 2) 
// ate chegar aos casos base, f(0) = 0 e f(1) = 1. Porem este metodo possui uma complexidade
// de O(2 ^ (n - 1)), ja que cada chamada na recursao invoca outras duas. O que pode ser altamente
// custoso em tempo de execucao e memoria. Entao, utilizarei programacao dinamica para resolver
// o problema. Vou montar a nossa PD da seguinte forma:

//         |- 0, caso i = 0
// PD[i] = |- 1, caso i = 1
//         |- PD[i - 1] + PD[i - 2], caso i > 1

// Dessa maneira, nosso algoritmo roda em tempo O(N) e usa memoria O(N), onde N o tamanho da sequencia.


function fib(x) {
    var PD = [0, 1];

    if (x === 0 || x === 1) return PD;

    for (var i = 2; i < x; i++) {
        PD[i] = PD[i - 1] + PD[i - 2];
    }

    return PD;
}

console.log(fib(N));

// Exercicio 2b-1

function soma(arr) {
    var soma = 0;

    for (val of arr) soma += val;

    return soma;
}

console.log(soma(fib(N)))

// Exercicio 2b-2

// Uma solucao interessante para o problema eh utlizando o algoritmo de divisao e conquista,
// onde dividimos cada problema em subproblemas menores. Neste caso vamos supor que nosso problema
// seja calcular a soma do intervalo (i, j), entao vamos dividir o intervalo ao meio e calcular a 
// soma de cada um desses separado. Ou seja, a soma de i ate j eh igual a soma de i ate (i + j)/2 
// mais a soma de (i + j)/2 + 1 ate j. Em termos de recursao:

// soma(i, j) = soma(i, (i + j)/2) + soma((i + j)/2 + 1, j)

// Este algoritmo roda em tempo O(n * log(n)) onde n eh o tamanho do array, ja que em cada chamada
// O tamanho do intervalo eh dividido por 2, entao em log(n) chamadas temos que o tamanho sera 1.

var v = fib(N);

function divide(i, j) {
    if (i === j) return v[i];

    var mid = Math.floor((i + j) / 2);

    return divide(i, mid) + divide(mid + 1, j);
}

console.log(divide(0, N - 1));

