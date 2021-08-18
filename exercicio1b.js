const lista = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function verificaNumero(numeros){
    numeros.filter(numero => numero % 2 == 0 ? console.log(`Número par: ${numero}`) : console.log(`Número ímpar: ${numero}`));
}
verificaNumero(lista);