const parOuImpar  = (lista) =>  console.log(`Pares: ${lista.filter((numero) => !(numero % 2))} \nImpares: ${lista.filter((numero) => numero % 2)}`)

parOuImpar([1,3,289,12312,21,12,30,12])