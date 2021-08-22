function parOuImpar(lista){
  // Verifico a partir do resto da divisão por 2 
  // se é par ou impar
  const impar = lista.filter((numero) => numero % 2)
  const par = lista.filter((numero) => !(numero % 2))

  console.log(`Pares: ${par}`)
  console.log(`Impares: ${impar}`)
}

parOuImpar([1,3,289,12312,21,12,30,12])