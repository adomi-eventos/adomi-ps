const parOuImpar = (lista) => console.log(`Pares: ${lista.filter((numero) => !(numero % 2))} \nImpares: ${lista.filter((numero) => numero % 2)}`);

parOuImpar([1, 3, 289, 12312, 21, 12, 30, 12]);
parOuImpar([1231, 3212, 284, 923, 211, 612, 310, 122]);
parOuImpar([12, 73, 8289, 712312, 217, 182, 380, 126]);
parOuImpar([13, 34, 2897, 612312, 251, 512, 230, 112]);
