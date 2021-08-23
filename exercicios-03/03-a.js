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

// para testar todos os exercícios passados aqui, você deve clonar o repositorio na sua máquina (git clone + url), abrir o terminal dentro da pasta de cada exercício e executar com node (escreva "node + nome do arquivo.js"). Tente trocar os valor final do fibonacci -> fibonacci(20), fibonacci(30)!//

// nesse caso, primeiro declarei um array com os 02 números iniciais da Fibonacci, que é 0 e 1. Depois criei uma função que recebe um parâmetro (x) que será o tamanho do array final. Dentro da função ela recebe uma varável i, equivalente ao tamanho do array inicial e enquanto i (tamanho inicial) for menor que x (tamanho final da array), o proximo numero do array inicial(numerosFibo[i], que inicialmente é 02) será igual a soma dos dois números anteriores a ela (i - 2 = primeiro indice do array) + (i - 1 = segundo indice do array inicial). Sempre acrescentando ao índice + 1, até que atinja o tamanho atribuido a x na função. 