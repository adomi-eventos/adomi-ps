function fibonacci(stop) {
  let seguinte = 0;
  let atual = 1;
  let fiboArray = [seguinte];
  while (atual <= stop) {
    atual += seguinte;
    seguinte += atual;
    if (seguinte < stop || atual == 1) {
      fiboArray.push(atual, seguinte);
    } else if (atual <= stop) {
      fiboArray.push(atual);
    }
  }

  return fiboArray;
}

function reduceFibonacci(lista){

  return lista.reduce((acc, item) => acc + item, 0)
}

console.log(reduceFibonacci(fibonacci(0)));
console.log(reduceFibonacci(fibonacci(1)));
console.log(reduceFibonacci(fibonacci(15)));
console.log(reduceFibonacci(fibonacci(18)));
console.log(reduceFibonacci(fibonacci(200)));
console.log(reduceFibonacci(fibonacci(560)));
console.log(reduceFibonacci(fibonacci(1304)));
console.log(reduceFibonacci(fibonacci(20010)));