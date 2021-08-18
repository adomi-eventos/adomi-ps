function fibo(x) {
  let i;
  let fib = [];

  fib[0] = 0;
  fib[1] = 1;
  for (i = 2; i <= x; i++) {
    fib[i] = fib[i - 2] + fib[i - 1];
  }
  return fib;
}
let serie = fibo(8);

function soma(arr) {
  let somado = arr;

  let resultado = somado.reduce((total, num) => total + num);
  console.log(resultado);
}

// Atenção este exercicio precisei consultar a web. A parte da soma realizei sozinho
console.log(soma(serie));
