let fib = [];
const fibonacci = (x) => {
  fib[0] = 0;
  fib[1] = 1;

  for (i = 2; i <= x; i++) {
    fib[i] = fib[i - 1] + fib[i - 2];
    fib.push(i);
  }
  fib.pop();
  console.log(`Sequência com x = ${x}: `);
  console.log(fib.join(" - "));
};

fibonacci(4);

const fibonacciSum = fib.reduce((x, y) => x + y);
console.log(`O valor da soma é ${fibonacciSum}`);
