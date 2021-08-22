/* Crie uma função para verificar se um número é 
par ou impar e aplique-a na lista a seguir para imprimir quais
números são pares e quais são ímpares.
 */
const lista = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

function mostrarNumerosPares(valor) {
    if(valor % 2 === 0){
        return(valor)
    }
}

function mostrarNumerosImpares(valorImpar) {
    if(valorImpar % 2 != 0) {
        return(valorImpar)
    }
}

var numerosPares = lista.filter(mostrarNumerosPares)
var numerosImpares = lista.filter(mostrarNumerosImpares)
console.log("Números pares:", numerosPares)
console.log("Números ímpares:", numerosImpares)


