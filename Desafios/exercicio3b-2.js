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

function loopFibonacci(lista) {
  // Usei loop, para fazer soma. Não consegui resolver com recursão
  let total = 0;
  for (let item of lista ) {
    total += item
  }

  return total
}

console.log(loopFibonacci(fibonacci(0)));
console.log(loopFibonacci(fibonacci(1)));
console.log(loopFibonacci(fibonacci(15)));
console.log(loopFibonacci(fibonacci(18)));
console.log(loopFibonacci(fibonacci(200)));
console.log(loopFibonacci(fibonacci(560)));
console.log(loopFibonacci(fibonacci(1304)));
console.log(loopFibonacci(fibonacci(20010)));
