//Crie uma função para verificar se um número é par ou impar e aplique-a na lista a seguir para imprimir quais números são pares e quais são ímpares.

//Passando os valores da lista na variavel numeros
const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

numeros.forEach(function(numero){
//Utilizando o metodo forEach para executar a função em cada numero da lista
  if(numero%2==0){
    console.log(`${numero} é um número par`)
  }else{
    console.log(`${numero} é um número ímpar`)
  }
})