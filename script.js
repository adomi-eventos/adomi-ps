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