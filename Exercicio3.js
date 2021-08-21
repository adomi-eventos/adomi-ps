// #### Exercício 3a 
// Crie uma função que salve os números da série de Fibonacci até chegar em x (parâmetro) interações em um array e imprima esse array.

// (A série de Fibonacci é a seguinte: 0, 1, 1, 2, 3, 5, 8, 13, 21, etc... Para calculá-la, o primeiro e segundo
// elementos valem 1, daí por diante, o “n-ésimo” elemento vale o (n-1)-ésimo elemento somado ao (n-2)-ésimo elemento (ex: 8 = 5 + 3))



const fib = (x) => {
  //declaro variáveis com valores iniciais da sequência
  let a = 0,
    b = 1,
    f = 1;
  //declaro a array iniciando com 0
  let arr = [a];
  //a sequência de Fibonacci soma os dois últimos números e gera o número seguinte. Então enquanto o número a ser gerado
  //é menor que o parâmetro vamos somando, incrementando e adicionando ao array
  for (let i = 2; f < x; i++) {
    arr.push(f); //adiciona o número gerado ao array
    f = a + b; //soma os número
    a = b; //atribui novos valores. Vai percorrendo o array
    b = f;
  }
  return arr;
}

console.log(`Exercício 3a : ${fib(100)}`);



// #### Exercício 3b-1 (desafio) 
// Crie uma função que, recebendo o array gerado na função anterior, retorne a soma dos valores do array.
let arr = fib(100)
const soma = () =>{
let total = 0;
for (let i = 0; i < arr.length; i++) {
   total += arr[i];
    }
    return total;
}
console.log(`Exercício 3b-1 (desafio) : ${soma(arr)}`);

// #### Exercício 3b-2 (desafio) 
// Crie uma função que, recebendo o array gerado na função anterior, retorne a soma dos 
// valores do array. Utilize um algoritmo diferente do desafio 3b-1. (ex: se no desáfio 3b-1 seu algorítimo usou
// um loop, utilize recursão)

//usando o método reduce, consigo reduzir os elementos do array a apenas um elemento através de soma

let arr2 = fib(100);
let total2 = arr2.reduce(function (soma, i) {
    return soma + i;
})

console.log(`Exercício 3b-2 (desafio) : ${total2}`);
