//Exercício 1a
/* Para esse exercício, utilizei o laço for dentro da função para percorrer toda a array e verificar se o resto da divisão de cada item da array é igual a 0
Se sim, isso significa que o número é par, senão, é impar. Cada um desses resultados armazenei em uma variável, par ou impar. 
Chamei a função verificarLista e imprimi no console o resultado */
console.log("EXERCÍCIO 1")
var lista = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(`Lista completa: ${lista}`)
var par = [];
var impar = [];

function verificarLista() {
    for (let i = 0; i < lista.length; i++) {
        if (lista[i] % 2 === 0) {
            par.push(lista[i]);
        } else {
            impar.push(lista[i]);
        }
    }
}
verificarLista();
console.log(`Todos os Pares: ${par}`);
console.log(`Todos os Ímpares: ${impar}\n\n`)



/* Exercício 1b  (Desafio) 
Utilizei o método map junto com operador ternário para percorrer a array e retornar uma nova array de mesmo tamanho separando pares de impares */
console.log("Desafio 1b:");
console.log(lista.map((item) => item % 2 === 0 ? `${item}: é Par` : `${item}: é Ímpar`));
console.log(`___________________________________________________________________`);