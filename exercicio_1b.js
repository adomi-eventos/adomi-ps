//Função para verificar se um número é par ou impar e aplique-a na lista a seguir para imprimir quais números são pares e quais são ímpares em uma linha.

// Aqui fiz a utilização os operadores ternários para diminuir o codigo.
const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]; numeros.forEach(function(numero){numero%2==0 ? console.log(`${numero} é um número par`) : console.log(`${numero} é um número ímpar`) })