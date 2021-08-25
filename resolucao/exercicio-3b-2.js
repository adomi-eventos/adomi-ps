/*

- Exercício 3b-2 (desafio)

Crie uma função que, recebendo o array gerado na função anterior, retorne a 
soma dos valores do array. Utilize um algoritmo diferente do desafio 3b-1 
(ex: se no desáfio 3b-1 seu algorítimo usou um loop, utilize recursão)

*/

const fibonacci = (value) => {
    let penultimate = 0;
    let last = 1;
    let number = 0;
    let arrFibonacci = [];
   
    if (value === 1) arrFibonacci.push(penultimate);
    else if (value === 2) arrFibonacci.push(penultimate, last);
    else {
       let count = 3;
       arrFibonacci.push(penultimate, last);
   
       while (count <= value) {
         number = last + penultimate;
         penultimate = last;
         last = number;
         arrFibonacci.push(last);
         count++;
       }
    }
   
    return arrFibonacci;
};
 
console.log(fibonacci(7));

// ---------

const fibonacciSum2 = (fib, arrLength) => {
    if (arrLength === 0) return 0
    else return fib[arrLength - 1] + fibonacciSum2(fib, arrLength - 1) // chamada recursiva
};
  
console.log("Soma:", fibonacciSum2(fibonacci(7), 7));
