/*

- Exercício 3a

Crie uma função que salve os números da série de Fibonacci até chegar em x (parâmetro) 
interações em um array e imprima esse array.

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

console.log(fibonacci(5)); 


/* Nesse exercício, a função "fibonacci" irá retornar um array com tamanho definido
que será passado como parâmetro. Foi atribuído o valor de 0 para variável 'penultimate' 
e o valor de 1 para a variável 'last', também declarei a variável 'number' que irá 
receber a soma dos 2 valores imediatamente anteriores do array, que será salvo na variável 
'arrFibonacci'. 
Caso os valores de 1 ou 2 seja passado como parâmetro para a função, a variável arrFibonacci
receberá [0], caso seja o valor de 1 passado, e [0, 1] caso seja 2, que são os primeiros 
valores da sequência fibonacci.
Utilizei um loop(while), para que, enquanto o contador (cont) for '<=' que o parâmetro 
passado, será feita a soma dos 2 valores anteriores e o resultado adicionado na variável
arrFibonacci. */