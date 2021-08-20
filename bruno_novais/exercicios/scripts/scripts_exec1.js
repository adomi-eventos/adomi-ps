// Exercício 1a
// Crie uma função para verificar se um número é par ou impar e 
// aplique-a na lista a seguir para imprimir quais números são pares e quais são ímpares.

lista = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]; // Lista com os valores a serem verificados
var list = lista.map((item)=>{ 
    // o método map() percorrerá todos os itens/elementos da lista
    // e dentro do map() o if verificará o resultado do calculo (resto da divisão) para cada item da lista
    // se o resultado do calculo for 0 o valor será par, caso contrário será ímpar
    //por fim a nova lista será exibida no console
    if(item % 2 === 0) {
        console.log(item+": O número é par");
    }else{
        console.log(item+": O número é ímpar");
    }
});


// Exercício 1b (desafio)
// Você consegue reduzir seu código para 1 linha?
console.log('// Desafio //');
var list2 = lista.map(item=>{console.log(item%2===0 ? item+": O número é par": item+": O número é ímpar")});

