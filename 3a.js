let fib = [];
const fibonacci = (x) => {
  fib[0] = 0;
  fib[1] = 1;

  for (i = 2; i <= x; i++) {
    fib[i] = fib[i - 1] + fib[i - 2];
    fib.push(i);
  }
  fib.pop();
  console.log(`Sequência até ${x} => ${fib}`);
  console.log(fib);
};

fibonacci(4);
