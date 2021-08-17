// As funções isObject e arrayCompare servem para comparar o array esperado com o array que vem dos resultados
const isObject = (obj) => typeof obj === 'object' && obj !== null && !Array.isArray(obj) //Verifica se o valor é tipo objeto, é diferente de nulo e é um array 
const arrayCompare = (arr1, arr2) => { 
  if(!arr1 || !arr2 ){ //Verifica que existe um array 1 ou um array 2
    return false
  }
  if(arr1.length !== arr2.length) { //Verifica que os dois arrays tenham a mesma quantidade de elementos
    return false
  }
  for(let i = 0; i < arr1.length; i++) {
    if (isObject(arr1[i])) { //Se o array 1 é um objeto
      if (!objectCompare(arr1[i], arr2[i])) { //Compara o elemento do array 1 com o elemento do array 2 na mesma posição
        return false
      }
    } else if (arr1[i] !== arr2[i]) { //Se o elemento do array 1 é diferente do array 2, na mesma posição retorna falso
      return false
    }
  }
  return true //Se nenhuma das condições anteriores aplica, são iguais, ou seja, que tem o mesmo elemento, na mesma posição
}

//////////// Teste exercício 1a
function testEx1a() {
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];    /* Muda o array no caso quera aplicar a função com elementos numéricos diferentes */
  const mockEvenNumbers = [2, 4, 6, 8, 10];           /* Este array é o formato de teste esperado. Adiciona ou apaga números pares do array, no caso o anterior seja modificado */
  const mockOddNumbers = [1, 3, 5, 7, 9];             /* Este array é o formato de teste esperado. Adiciona ou apaga números pares do array, no caso o anterior seja modificado */
  const result = retornaNumerosPareseImpares(numbers);

    // Testamos se esta chegando o array 
  if(result.evenNumber && result.oddNumber) {
    console.log('%c Os números pares são: ', 'color: #00FF00', result.evenNumber);
    console.log('%c Os números impares são: ', 'color: #00FF00', result.oddNumber);
  }else {
    console.log('%c Teste 1a deu erro!', 'color: #CD0000')
  }
    // Comparamos o resultado com a saída que tem que ter para cada caso
  if(arrayCompare(result.evenNumber, mockEvenNumbers) && arrayCompare(result.oddNumber, mockOddNumbers)){
    console.log('%c Teste 1a feito com sucesso!', 'color: #00FF00');
  }else{
    console.log('%c Teste 1a deu erro os valores não coincidem com o esperado!', 'color: #CD0000')
  }

}

testEx1a();

//////////// Teste exercício 1b
function testEx1b() {
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];    /* Muda o array no caso quera aplicar a função com elementos numéricos diferentes */
  const mockEvenNumbers = [2, 4, 6, 8, 10];           /* Este array é o formato de teste esperado. Adiciona ou apaga números pares do array, no caso o anterior seja modificado */
  const mockOddNumbers = [1, 3, 5, 7, 9];             /* Este array é o formato de teste esperado. Adiciona ou apaga números pares do array, no caso o anterior seja modificado */
  const result = retornaNumerosPareseImparesDesafio(numbers);
  let evenNumber = [];
  let oddNumber = [];

  // Formatamos os dados do array para que fique parecido com o exercício anterior
  result.map(number => number.evenNumber ? evenNumber.push(number.evenNumber) : oddNumber.push(number.oddNumber));
  // Testamos se esta chegando o array 
  if(evenNumber.length > 0 && oddNumber.length > 0) {
    console.log('%c Os números pares são: ', 'color: #00FF00', evenNumber);
    console.log('%c Os números impares são: ', 'color: #00FF00', oddNumber);
  }else {
    console.log('%c Teste 1b deu erro!', 'color: #CD0000')
  }

  // Comparamos o resultado com a saída que tem que ter para cada caso
  if(arrayCompare(evenNumber, mockEvenNumbers) && arrayCompare(oddNumber, mockOddNumbers)){
    console.log('%c Teste 1b feito com sucesso!', 'color: #00FF00');
  }else{
    console.log('%c Teste 1b deu erro os valores não coincidem com o esperado!', 'color: #CD0000')
  }
}

testEx1b();

//////////// Teste exercício 2a
function testEx2a() {
  const a = 19                    /* Para testar outros números muda a primeira variável */
  const b = 23                    /* Para testar outros números muda a segunda variável */
  const mockResult = [b, a]       /* Formato de teste esperado */
  
  // Comparando resultados da lógica da função com o resultado que estamos esperando
  if(arrayCompare(trocarVariavel(a, b), mockResult)) {
    console.log('%c Variáveis trocadas com sucesso! Teste 2a bem sucedido!', 'color: #00FF00', trocarVariavel(a, b))
  } else {
    console.log('%c Teste 2a deu erro os valores não coincidem com o esperado!', 'color: #CD0000')
  }
}

testEx2a();

//////////// Teste exercício 2b
function testEx2b() {
  const a = 19                  /* Para testar outros números muda a primeira variável */
  const b = 23                  /* Para testar outros números muda a segunda variável */
  const mockResult = [b, a]     /* Formato de teste esperado */

    // Comparando resultados da lógica da função com o resultado que estamos esperando
  if(arrayCompare(trocarVariavel(a, b), mockResult)) {
    console.log('%c Variáveis trocadas com sucesso! Teste 2b bem sucedido!', 'color: #00FF00', trocarVariavel(a, b))
  } else {
    console.log('%c Teste 2b deu erro os valores não coincidem com o esperado!', 'color: #CD0000')
  }
}

testEx2b();

//////////// Teste exercício 3a
function testEx3a(number, mockFibonacci) {
    // Comparando resultados da lógica da função com o resultado que estamos esperando
  if(arrayCompare(serieFibonacci(number), mockFibonacci)) {
    console.log('%c Teste 3a bem sucedido', 'color: #00FF00', serieFibonacci(number))
  } else {
    console.log('%c Teste 3a deu erro os valores não coincidem com o esperado!', 'color: #CD0000', serieFibonacci(number))
  }
}

testEx3a(12, [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89]);  /* Modificando o número, pode modificar o comprimento do array da sequência de Fibonacci. O segundo parámetro é o mockup ou formato do resultado exato que tem que ser esperado. Se modifica a primeira, tem que modificar a segunda */

//////////// Teste exercício 3b
function testEx3b(number, total) {
    // Comparando resultados da lógica da função com o resultado que estamos esperando
  if(serieFibonacciSuma(number) === total) {
    console.log('%c Teste 3b bem sucedido', 'color: #00FF00', serieFibonacciSuma(number))
  } else {
    console.log('%c Teste 3b deu erro os valores não coincidem com o esperado!', 'color: #CD0000', serieFibonacciSuma(number))
  }
}

testEx3b(10, 88)                                  /* O primeiro número vai depender do número que modifica o comprimento no exercício 3a, pois o exercício 3b, depende do array resultante do exercício anterior. O segundo número é a suma da serie de arrays que espera ser recebida da função, este número muda dependendo do comprimento e valores do array do 3a.*/

//////////// Teste exercício 3c
function testEx3c(number, total) {
    // Comparando resultados da lógica da função com o resultado que estamos esperando
  if(serieFibonacciSumaDesafio(number) === total) {
    console.log('%c Teste 3c bem sucedido', 'color: #00FF00', serieFibonacciSumaDesafio(number))
  } else {
    console.log('%c Teste 3c deu erro os valores não coincidem com o esperado!', 'color: #CD0000', serieFibonacciSumaDesafio(number))
  }
}

testEx3c(10, 88);                                 /* O primeiro número vai depender do número que modifica o comprimento no exercício 3a, pois o exercício 3b, depende do array resultante do exercício anterior. O segundo número é a suma da serie de arrays que espera ser recebida da função, este número muda dependendo do comprimento e valores do array do 3a.*/

