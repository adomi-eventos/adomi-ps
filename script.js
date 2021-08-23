/* Exercício 1a 

Crie uma função para verificar se um número é 
par ou impar e aplique-a na lista a seguir para imprimir quais
números são pares e quais são ímpares.

lista = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
*/

/*Para resolver esse exercício usei o for com o contador representado pela vaiavel i começando em 0
enquanto o contador for menor que o tamanho da lista ele realiza um incremento.
Usando o if eu verifico se o resto da divisão do contador po 2 for igual a 0 ele é par senão ele é ímpar.
*/

let lista = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function parOuImpar() {
    for (let i = 0; i <= lista.length; i++) {
        if (i % 2 == 0) {
            console.log("<p> O número " + i + " é par.</p>");
        } else {
            console.log("<p>O número " + i + " é ímpar.</p>");
        }
    }
}
parOuImpar();

/*Para realizar o desafio utilizei para percorrer a lista o forEach criei dentro do forEach uma função anonima onde recebe
um número e com o ternário verifica se o resto de 2 é igual a 0 se for ele imprime que é par senão ele imprime que é ímpar. */

function parOuImparDesafio(numero) {
    lista.forEach(numero => numero % 2 == 0 ? console.log(`O número ${numero} é par.`) : console.log(`O número ${numero} é ímpar.`));
}
parOuImparDesafio();
/* Exercício 2a: 
Escreva um algoritmo que armazene o valor 19 em uma variável A
e o valor 23 em uma variável B. A seguir troque os seus conteúdos fazendo com
que o valor que está em A passe para B e vice-versa. Ao final, escrever os 
valores que ficaram armazenados nas variáveis.
*/

/*
Criei mais uma variavel com o valor de A para poder ser feita a troca corretamente.
*/
function trocarValor(A, B) {
    const temp = 19;
    A = 19;
    B = 23;
    A = B;
    B = temp;

    console.log(A, B);
}
trocarValor();

/*Usei a forma mais moderna de se fazer com javascript. */

function trocarValorDesafio(A, B) {
    A = 19;
    B = 23;
    [A, B] = [B, A];
    console.log(A, B);
}
trocarValorDesafio();
/*Exercício 3a 
Crie uma função que salve os números da série de Fibonacci até chegar em x (parâmetro) interações em um array e imprima esse array.

(A série de Fibonacci é a seguinte: 0, 1, 1, 2, 3, 5, 8, 13, 21, etc... Para calculá-la, o primeiro e segundo
elementos valem 1, daí por diante, o “n-ésimo” elemento vale o (n-1)-ésimo elemento somado ao (n-2)-ésimo elemento (ex: 8 = 5 + 3))
*/
/*Criei uma condição se o valor for menor ou igual a 2 o numero recebe o valor - 1 senão ele entra em um loop onde o contador vale 1
enquanto o contador for menor ao valor a variavel numero recebe ultimo + penultimo, penultimo recebe ultimo e o ultimo recebe o numero, depois utilizo o push para adicionar no array. */
let penultimo = -1;
    let ultimo = 1;
    let numero;
    let listaFibo = [];
function fibo(valor) {
   
    if (valor <= 2)
        numero = valor - 1;
    else {
        count = 1;
        while (count <= valor) {
            numero = ultimo + penultimo;
            penultimo = ultimo;
            ultimo = numero;
            listaFibo.push(numero);
            count++;
            console.log(listaFibo);
        }

    }

}

fibo(8);
/*Exercício 3b-1 (desafio) 
Crie uma função que, recebendo o array gerado na função anterior, retorne a soma dos valores do array.
 */ 
/*
Criei uma variavel somado para depois de fazer o loop onde o tamanho da listaFibo for menor que o contador i a variavel somado recebe a soma de tooos os numeros dentro da lista.
*/
function somaFiboValor(){
    let somado = 0;
    for(let i=0;i<listaFibo.length;i++){
        somado +=listaFibo[i]
       
    }
     console.log("A soma dos valores é " + somado + ".");
}
somaFiboValor();

/* Exercício 3b-2 (desafio) 
Crie uma função que, recebendo o array gerado na função anterior, retorne a soma dos 
valores do array. Utilize um algoritmo diferente do desafio 3b-1. (ex: se no desáfio 3b-1 seu algorítimo usou
um loop, utilize recursão)*/
/*
Utilizei o reduce para realizar a soma do array.
fonte de referencia  https://raullesteves.medium.com/javascript-entendendo-o-reduce-de-uma-vez-por-todas-c4cbaa16e380

*/
function somaFiboValor2(){
    let somado = listaFibo.reduce((somado,valor)=>somado+valor,0);
    console.log("O valor da soma do array é " + somado);
   
}
somaFiboValor2();