//////////// Exercício 1a
function retornaNumerosPareseImpares(array) {
  // Percorremos o array e vamos adicionando os números pares e ímpares respetivamente dentro de uma constante de array vazias
  let evenNumber = [];
  let oddNumber = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 == 0) {
      evenNumber.push(array[i]);
    } else {
      oddNumber.push(array[i]);
    }
  }
  return {
    evenNumber: evenNumber,
    oddNumber: oddNumber,
  };
}

//////////// Exercício 1b
function retornaNumerosPareseImparesDesafio(array) {
    // Com ES6, você também pode resumir o if/else e usar o operador ternário junto ao map para percorrer o array:
  return array.map((number) => number % 2 == 0 ? { evenNumber: number } : { oddNumber: number });
}

//////////// Exercício 2a
function trocarVariavel(a, b) {
  temp = a;
  a = b;
  b = temp;
  
  return [a, b];
}

//////////// Exercício 2b
function trocarVariavelDesafio(a, b) {
  // Com ES6, você também pode trocar variáveis ​​da seguinte forma:
  return [a, b] = [b, a];
}

//////////// Exercício 3a
function serieFibonacci(number) {
  // Temos a posição 0, a posição 1, e a posição seguinte que queremos gerar seria a posição 2, por isso temos que iniciar o for na posição 2.
  // Sendo o limite o "number" para não gerar um bucle infinito.
  let fib = [0, 1]
   for(let i = 2; i < number; i++){
    fib[i] = fib[i - 1] + fib[i - 2] // Com isto fib[i], estou criando as posições 2, 3, 4..., e também digo que fib[i] é igual à suma do valor que esta na posição anterior (fib[i - 1]) mais o valor que está ubicado a 2 posições da minnha posição atual, ou seja (fib[i - 2]), ou seja, estamos pegando as duas posições anteriores da posição atual.
  }
  return fib;
}

//////////// Exercício 3b
function serieFibonacciSuma(number) {
  let fib = serieFibonacci(number) // Recebo o array gerado na função 3a
  total = 0;
  fib.forEach(function(a){total += a;});
  return total;
}

//////////// Exercício 3c
function serieFibonacciSumaDesafio(number) {
  let fib = serieFibonacci(number) // Recebo o array gerado na função 3a
  let total = fib.reduce((a, b) => a + b, 0);  //Usei esta função como é explicada aqui: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce
  return total;
}
