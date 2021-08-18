const lista = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function verificaNumero(numeros){
    let pares = numeros.filter(pares => pares % 2 == 0);
    let impares = numeros.filter(impares => impares % 2 == 1);
    console.log(`Os números pares são: ${pares}`);
    console.log(`Os números ímpares são: ${impares}`);
}
verificaNumero(lista);

