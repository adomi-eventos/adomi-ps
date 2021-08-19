// #### Exercício 1a:

// Crie uma função para verificar se um número é 
// par ou impar e aplique-a na lista a seguir para imprimir quais
// números são pares e quais são ímpares.
// lista = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// #### Exercício 1b (desafio) 

// Você consegue reduzir seu código para 1 linha?

//Neste exercício resolvi utilizar o método de array map, para percorrer por todos os itens do array com
//uma função anonima e com o operador condicional ternário unido ao template string para me mostrar
//no console os números que são pares e os números que são ímpares.

let lista = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log('#### Exercício 1a + desafio - Resposta')
console.log( lista.map((n) => {return n % 2 === 0 ? `${n}: Par` : `${n}: Impar`} ));
console.log('____________________________________________________')

//============================================================================================================

// #### Exercício 2a: 
// Escreva um algoritmo que armazene o valor 19 em uma variável A
// e o valor 23 em uma variável B. A seguir troque os seus conteúdos fazendo com
// que o valor que está em A passe para B e vice-versa. Ao final, escrever os 
// valores que ficaram armazenados nas variáveis.

//Para este exercício utilizei uma variavel auxiliar para armazenar o valor da variavel 'a', para que o mesmo
//não fosse perdido quando eu atribuísse o valor da variavel 'b' para 'a', e assim utilizei a variavel auxiliar para
//atribuir o valor que estava em 'a' para 'b'

let a = 19;
let b = 23;
let c = a

a = b
b = c

console.log('#### Exercício 2a - Resposta')
console.log( `variavel-a: ${a} --- variavel-b: ${b}` )
console.log('____________________________________________________')

//============================================================================================================

// #### Exercício 3a 
// Crie uma função que salve os números da série de Fibonacci até chegar em x interações (parâmetro) em um array e 
//imprima esse array.

// (A série de Fibonacci é a seguinte: 0, 1, 1, 2, 3, 5, 8, 13, 21, etc... Para calculá-la, o primeiro e segundo
// elementos valem 1, daí por diante, o “n-ésimo” elemento vale o (n-1)-ésimo elemento somado ao (n-2)-ésimo elemento 
//(ex: 8 = 5 + 3))

//Primeiro eu crio uma função que receberá como parâmetro o numero de iterações que serão feitas
const fibo = (n) => {

    //Aqui eu crio um array vazio que receberá o resultado das iterações
    let resposta = [];

    //Aqui eu converto o parâmetro passado para um numero inteiro caso o parâmetro possua algum número fracionado
    let int = parseInt(n)

    //Este primeiro if serve para retornar um array vazio caso o número de iterações seja igual a zero
    if(int == 0){
        return resposta;

    //Este if serve para retornar apanas uma iteração    
    } else if(int == 1){
        resposta = [0];
        return resposta;

    //Este if serve para retornar apenas duas iterações
    } else if(int == 2){
        resposta = [0, 1]
        return resposta;
    
    //Este if funcionará para mais de duas iterações
    } else if(int > 2){    
        
        //A primeira coisa que faço, sabendo que os dois primeiros números de fibonacci sempre serão 0 e 1
        //é atribuir estes dois valores no meu array vazio.
        resposta = [0, 1];

        //Agora com um loop eu inicializo meu indice com a variavel i no segundo item do meu array
        for(let i = 2; i<int; i++){
          

            //Aqui é a iteração de fato, primeiro o meu indice é subtraído em 2 para sair do local atual e voltar
            //em duas casas e assumir o valor daquele indice

            //Em seguida acontece a mesma coisa, mas fazendo o indice voltar apenas uma casa e assumindo aquele valor

            //Depois é feita uma soma entre o valor dos dois indices e o resultado dessa soma é jogado dentro do array
            resposta.push(resposta[i-2] + resposta[i-1]);
        }       

        //Após atingir o número de iterações do parâmetro eu mostro a resposta com todas as iterações dentro do array
        return resposta;

    //Este if mostrará uma menssagem de erro caso o parâmetro da função não seja um número.
    } else if(typeof int != Number){
        resposta = 'Insira um número inteiro válido'
        return resposta
    }
}

console.log('#### Exercício 3a - Resposta')
console.log(fibo(8))
console.log('____________________________________________________')

//============================================================================================================

// #### Exercício 3b-1 (desafio) 
// Crie uma função que, recebendo o array gerado na função anterior, retorne a soma dos valores do array.

//Nesta parte do exercício utilizei o método de array reduce para passar por todos os itens do meu array com
//a varável "itemArr" e somar com valor da variavel "total", ao final o resultado ficará armazenado na 
//variavel "somaItens"

const somaItens = fibo(8).reduce((total, itemArr) => total + itemArr)
console.log('#### Exercício 3b-1 - Resposta')
console.log(`O valor total da soma dos itens do array é: ${somaItens}`)
console.log('____________________________________________________')

//============================================================================================================

// #### Exercício 3b-2 (desafio) 
// Crie uma função que, recebendo o array gerado na função anterior, retorne a soma dos 
// valores do array. Utilize um algoritmo diferente do desafio 3b-1. (ex: se no desáfio 3b-1 seu algorítimo usou
// um loop, utilize recursão).

//Aqui a variavel "somandoComFor" funciona de forma parecida com a anterior, utilizei um for para passar pelo array
//que será dado como parâmetro.

//A seguir cada valor do array será passado para a variavel "total" e na próxima iteração os valores serão somados
//até que todos estejam somados dentro da variavel "total".

const somandoComFor = (arr) => {

    let total = 0

    for(let i = 0; i<arr.length; i++){
        
        total += arr[i]
    } 

    return total;
}

console.log('#### Exercício 3b-2 - Resposta')
console.log(`O valor total da soma dos itens do array é: ${somandoComFor(fibo(8))}`)