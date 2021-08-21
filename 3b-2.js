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

const recursive = (fib, n) => {
  if (n < 1 || typeof n != "number")
    console.log("Por favor, insira um número válido!");
  else if (n == 1) return fib[n - 1];
  else {
    return fib[n - 1] + recursive(fib, n - 1);
  }
};
let Recurs = recursive(fib, fib.length);
console.log(`O valor da soma é ${Recurs}`);
