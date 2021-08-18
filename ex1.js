const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

//DESAFIO 1 -Função que intera o array de numeros arr com for. A iteração do For tem o tamanho do Arr, começa do 0 e incrementa de 1 em 1. 
//Para verificar se o numero é par ou impar fiz algumas condições, se a condição for atendida ele imprime o valor do indice da vez e se é par ou impar; 

function parOuImpar(array) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] % 2 === 0 & array[i] !== 0) {
            console.log(array[i], "é par")
        }
        else if (array[i] % 2 !== 0) {
            console.log(array[i], "é impar")
        }
        else if (array[i] === 0) {
            console.log(array[i], "Zero não é par nem impar")
        }
    }
}

parOuImpar(arr)

