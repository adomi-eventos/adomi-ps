//*****Exercício 1a*****

/*
- A função recebe a lista de números como parâmetro
- Realizo um primeiro filtro para armazenar em um array de nome "par" todos os números que divididos por "2" tem resto "0".
- Realizo um segundo filtro para armazenar em um array de nome "impar" todos os números que divididos por "2" tem como resto 
algum número diferente de "0".
- Por fim, retorno dentro de um objeto, os dois arrays com os respectivos números pares e ímpares.
*/

const lista = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

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

console.log("Exercício 1a")
console.log(parOuImpar(lista))


//*****Exercício 1b*****
console.log("Exercício 1b")
console.log(lista.map(item => item%2 === 0 ? `${item}: par ` : `${item}: impar `))

//*****Exercício 2a*****
/*
- Primeiro crio uma terceira variável para guardar o valor da variável A (19);
- Em seguida faço com que A passe a valer o mesmo que B (23);
- Por fim, faço com que B tenha o mesmo valor que C (19), antigo valor de A que estava salvo na terceira variável.
- Feito isso, os valores das duas variáveis foram invertidos.
*/

let A = 19
let B = 23
let C = A
A = B
B = C

console.log("Exercício 2a")
console.log("A:", A)
console.log("B:", B)


//*****Exercício 3a***** 

/*
- Primeiro crio um array com os dois itens iniciais da sequencia de fibonacci;
- Depois armazeno os dois primeiros elementos em duas variáveis;
- Em seguida crio condições para que um "n" valendo até "2" retorne um array com "0", "1" ou "2" elementos;
- Para os valores de "n" maiores do que "2" eu crio um "for";
- Este for vai sempre somar os dois últimos números do array, pegar o resultado e colocar no final; 
- Por fim, o loop vai se repetir por (n-2) vezes porque o array já começa com dois elementos;
*/

const fibonacci = (n) => {
    const arrayFibonacci = [0,1]
    let a = 0
    let b = 1
    if (n === 0) {
        return []
    } else if (n === 1) {
        return [0]
    } else if (n === 2) {
        return [0, 1]
    } else {

        for (let i = 1; i <= (n -2); i++) {
            result = a + b
            a = b
            b = result
            arrayFibonacci.push(result)
        }

        return arrayFibonacci
    }
}

console.log("Exercício 3a")
console.log("Array fibonacci:", fibonacci(9))

//*****Exercício 3b*****

/*
- Primeiro é preciso criar uma variável soma e atribuir o valor inicial de "0";
- Depois faço um "for" para percorrer todos os elementos do array desejado até o final;
- Por fim o valor da variável soma vai se atualizando, acrescentando sempre o próximo elemento do array, até chegar ao último.
*/

const somaElementosArray = (array) => {
    let soma = 0
    for (let i = 0; i < array.length; i++){
        soma += array[i];
    }
    return soma
}

console.log("Exercício 3b")
console.log("Soma do array:", somaElementosArray(fibonacci(9)))