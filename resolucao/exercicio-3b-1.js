/*

- Exercício 3b-1 (desafio)

Crie uma função que, recebendo o array gerado na função anterior, 
retorne a soma dos valores do array.

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

console.log(fibonacci(6)); 

// ---------

const fibonacciSum = (number) => {
   let sum = 0;
  
   if (number === 0) return 0
   else fibonacci(number).map((item) => (sum += item));
  
   return sum;
};
  
console.log("Soma:", fibonacciSum(6));


/* Nesse exercício, importei a função 'fibonacci' do exercício anterior 
para a soma dos números do array gerado. A função 'fibonacciSum' recebe 1 
parâmetro, esse parâmetro é passado para a função fibonacci, que gera o array
e em seguida uso a função 'map' para iterar somando os valores.*/
