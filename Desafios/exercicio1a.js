function parOuImpar(lista) {
  // Verifico a partir do resto da divisão por 2
  // se é par ou impar
  const impar = lista.filter((numero) => numero % 2);
  const par = lista.filter((numero) => !(numero % 2));

  console.log(`Pares: ${par}`);
  console.log(`Impares: ${impar}`);
}

parOuImpar([1, 3, 289, 12312, 21, 12, 30, 12]);
parOuImpar([1231,3212, 284, 923, 211, 612, 310, 122]);
parOuImpar([12, 73, 8289, 712312, 217, 182, 380, 126]);
parOuImpar([13, 34, 2897, 612312, 251, 512, 230, 112]);

