//Exerício 1:
//Defini lista a ser testada.
const lista = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];


//Criei um loop para me mostrar os itens da lista.
for(var i = 0; i <= lista.length; i++){
    console.log(lista[i]);

    //Criei uma condição para cada caso usando o módulo.
    if(lista[i] % 2 === 0){
        //Imprimi os resultados de acordo com cada caso.
        console.log('Par')
    }
    else{
        console.log('Impar')
    }
}

//Desafio 1:

//for(let i = 0; i <= lista.length; i++){lista[i] % 2 === 0 ? console.log('Par'):console.log('Impar')}

//Criei um loop para me mostrar os itens da lista.
for(let i = 0; i <= lista.length; i++){
    console.log(lista[i]);
    //Utilizei ternário para diminuir a condicional e imprimir os resultados de acordo com cada caso.
     lista[i] % 2 === 0 ? console.log('Par'):console.log('Impar')
  
}

/*Considerações finais: Para utilizar terá que fazer alterações diretamente no array, seja pelo código ou metodos de array, a impressão é feita de forma automática.*/

//Exercicio 2:
//Defni as variáveis e seus valores e acrescentei uma variável auxiliar.
let A = 19;
let B = 23;
let C = 0;
//Criei uma função para executar a troca de valores.
function trocaTroca(){
    //Atribui o valor de uma das variáveis a variável auxiliar.
    C = A
    //Fiz a troca usando o valor guardado na variável auxiliar.
    A = B
    B = C
    console.log(A, B);
}
//Chamei a fução para executar a troca e imprimir os valores.
trocaTroca();

/*Considerações finais: Para utilizar terá que fazer alterações diretamente nas variaveis, seja pelo código ou por atribuição, após novas atribuiçoes a função deverá ser chamada novamente.*/

//Desafio 2:
//Defni as variáveis e seus valores.
let A1 = 19;
let B1 = 23;
//Criei uma função para executar a troca de valores.
function trocaTrocaNovo(){
    //Somei ambos os valores.
    A1 = A1 + B1;
    //Subtrai os valores de cada variavel da variavel somada.
    B1 = A1 - B1;
    A1 = A1 - B1;
    console.log(A1, B1);
}
//Chamei a fução para executar a troca e imprimir os valores.
trocaTrocaNovo();

/*Considerações finais: Para utilizar terá que fazer alterações diretamente nas variaveis, seja pelo código ou por atribuição, após novas atribuiçoes a função deverá ser chamada novamente.*/

//Exercicio 3:
//Criei um array vazio para guardar as informações.
let fibonacci = [];
//Criei a função "fibo" para adcionarmos o item ao array.
function fibo(x){
    //Defini quais seriam as variáveis utilizadas para construir o fibonacci.
    let param = x;
    let pNum = 0;
    let uNum = 1;
    let final;
    //Criei uma condicional para cada caso.
    if(param == 1){
        fibonacci.push(pNum, uNum);
    }
    else{
        if(param==2){
            fibonacci.push(pNum, uNum);
            final = uNum + pNum;
            fibonacci.push(final);
        }
       else{
            //Criei um loop para poder fazer a soma e inserir cada numero novo no array.
            for(let i = 0; i<param; i++){
            final = uNum + pNum;
            fibonacci.push(pNum)
            pNum = uNum;
            uNum = final;
            }
            fibonacci.push(final);
        }
    }   
    console.log(fibonacci)
};

//Desafio 3.1:
//Defini uma variável para guardar o valor da soma.
let soma = 0;
//Criei a função para realizar a soma.
function somaTudo(){
    //Criei um loop para que cada numero dentro do array fosse somado.
    for(let i = 0; i < fibonacci.length; i++ ){
    soma += fibonacci[i];
    }
    console.log(soma);
};

//Desafio 3.2:
//Utilizei o método de array reduce para poder somar os numeros de forma menos verbosa.
function somaDiferente(){
    let somaDiferente = fibonacci.reduce((total,num)=>{ return total+num}, 0)
    console.log(somaDiferente)
};

/*Considerações finais: Para utilizar deverá chamar a função "fibo()" com o valor desejado de operações como parâmetro, a impressão é feita de forma automática. As funções de soma devem ser chamadas para que sejam impressos os resultados.*/