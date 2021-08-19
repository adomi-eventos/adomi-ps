// Desde já, agradeço a oportunidade de participar do processo seletivo da Adomi!
// Atualmente tenho 18 anos e curso Engenharia da Computação(Cursando o primeiro período), espero que os códigos estejam dentro do nível esperado! Aguardo o feedback :)


/*
    Exercício 1
    Com a lista recebida, utilizei um forEach() no array da lista.
    Para cada elemento do array, verifiquei se a sua divisão por 2 tem resto igual a zero, encontrando assim, os elementos pares
    Caso não seja divisivel por zero, o elemento é ímpar.
    Para o desafio, apenas substitui o if e else por operadores ternários e utilizei de template literals, para que assim o código se tornasse mais enxuto.
*/

console.log("Exercicio 1a");

const lista = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const evensOrOdds = lista.forEach((element) => {
    if (element % 2 == 0) {
        console.log(`${element} -> evens`)
    } else {
        console.log(`${element} -> odds`)
    }
})

console.log("---------------------");
console.log("Exercício 1 desafio");
lista.forEach((element) => { element % 2 == 0 ? console.log(`${element}: evens`) : console.log(`${element}: odds`) })

/*  
    Exercício 2
    Armazenei os valores pedidos nas variaveis A e B.
    Utilizei uma váriavel para armazenar o valor de B (Poderia ser de A, só iria alterar a ordem das trocas).
    A partir daí apenas atribui os valores de modo que estes invertessem suas posiçoes iniciais.
    Para realizar o desafio, realizei a soma dos valores entre A e B e armazenei na váriavel B, mantendo o valor de A
    Em seguida defini o valor trocado do A, que seria a soma dos dois menos o valor atual de A (Resultaria em 23, antigo valor de B)
    Para finalizar defini que o valor de B seria o valor atual dele mesmo (No momento seria a soma entre A e B) menos o valor de A já trocado (Resultaria em 19, antigo valor de A)
    **Também utilizei template literals assim como no exercicio anterior**
*/
console.log("---------------------");

console.log("Exercicio 2a");
var A = 19
var B = 23
var C = B
console.log(`Before -> A:${A}, B:${B}`)

console.log("---------------------");

B = A
A = C
console.log(`After -> A:${A}, B:${B}`)


console.log("---------------------");

console.log("Exercicio 2a desafio")
//Redefini os valores de A e B
A = 19
B = 23

B = B + A
A = B - A
B = B - A

console.log(`Valores invertidos A:${A}, B:${B}`)

console.log("---------------------");

/* 
    Exercicio 3
    Seguindo a lógica passada no arquivo disponibilizado, criei a função que recebe a quantidade de iterações que a sequencia terá (x).
    Defini um  array contendo 0 e 1 respectivamente, estes sempre irão dar início à sequencia de fibonacci.
    Utilizei um for para limitar a iteração, a condição é realizar a iteração até que i (Tamanho do array) seja menor que o valor passado por parâmetro
    Os valores seguintes foram definidos utilizando a lógica passada dentro do enunciado, onde o “n-ésimo” elemento vale o (n-1)-ésimo elemento somado ao (n-2)-ésimo elemento
*/

console.log("Exercicio 3a");

const fibonacci = (x) => {
    var fibonacciArray = [0, 1];
    for (var i = fibonacciArray.length; i < x; i++) {
        fibonacciArray[i] = fibonacciArray[i - 2] + fibonacciArray[i - 1];
    }
    return fibonacciArray
}
console.log(fibonacci(10))

console.log("---------------------");

/* 
Exercicio 3b-1
Optei por utilizar o reduce() para somar os termos do array
Armazenei o array dentro da constante fiboToSum
Utilizei essa variavel junto ao reduce para chegar no resultado final
*/
console.log("Exercicio 3b-1");

const fiboToSum = fibonacci(10)
const reducedArray = fiboToSum.reduce((sum, x) => {
    return sum + x
})
console.log(reducedArray);

console.log("---------------------");

/* 
Exercicio 3b-2
Criei uma função chamada anotherArray, que será responsável por fazer a soma e retornar o valor
Declarei a variavel result para que eu pudesse utiliza-la logo em seguida no código
Utilizei um for onde ocerrerá uma iteração de 0 até o tamanho do meu array fiboToSum (Mesmo array do exercicio anterior)
Utilizei o operador addition assignment para realizar a soma dos valores dentro do array.
*/

console.log("Exercicio 3b-2");
const anotherArray = () => {
    var result = 0
    for (var i = 0; i < fiboToSum.length; i++) {
        result += fiboToSum[i]
    }
    return result
}
console.log(anotherArray())