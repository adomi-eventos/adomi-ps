const numerosPares = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].filter((numero) => numero % 2 === 0);
const numerosImpares = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].filter((numero) => numero % 2 !== 0);
console.log("Números pares:", numerosPares, "Números ímpares:", numerosImpares);