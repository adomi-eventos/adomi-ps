// Função para identificar números pares ou ímpares


let lista =  [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let numerosPares = [];
 let numerosImpares = [];
function parOuImpar(arr){
 
     for(let i = 0; i < arr.length ; i++){
        if(arr[i] %2 === 0){
          numerosPares.push(arr[i])}
          else{
            numerosImpares.push(arr[i]);
          }
           
    }
  return {
      numerosImpares ,numerosPares
  }
   
}
console.log(parOuImpar(lista))

// Função para identificar números pares ou ímpares resumida

function resParImpar(arr){
// Nesta funçao optei pelo método map para passar por cada item do meu array e verificar se é par ou ímpar, criando assim um novo array, e usei também o ternário para simplificar meu if/else. Métodos incluídos no JS ES6
    return arr.map((e)=> e %2 === 0 ? {numeroPar : e } : {numeroImpar : e} )
}
console.log(resParImpar(lista))


// Exercício 2a 
// Nessa expressão decidi usar uma outra variável para obter um valor temporário e ser possível fazer a troca
let a = 19;
let b = 23;
let c = 0;
console.log(`variáveis antes da troca a:${a} e b:${b}`)

 c = a;
 a = b;
 b = c;
console.log(`variáveis após a troca a:${a} e b:${b}`)
 

//Exercício 2b 
// Como foi sugerido no desafio trocar os valores de duas variáveis sem usar uma terceira variável
console.log(` Invertendo os valores entre duas variáveis antes da inversão a = 23 e b = 19, após a inversão consequentemente ${[a,b] = ['a:'+ b,'b:'+ a]}`)

//Exercicio 3a

function fibonaci(){
    let fib = []; // inicializando array vazio para preenchê-lo com os dados depois

    fib[0] = 0;
    fib[1] = 1;
    //no laço for coloquei i valendo 2 para que consiga dar inicio a funçao de Fibonaci
    for(let i = 2; i<= 10; i++){
        fib[i] = fib[i - 2] + fib[i - 1];
    }
    return fib
}
console.log(`sequência de Fibonaci, ${fibonaci()}`)

//Exercício 3b somando o array da funçao anterior, decidi usar o método reduce implementado no ES6

let somaArr = fibonaci().reduce((total, listaArr) => total + listaArr)
console.log(`Soma da função fibonaci utilizando método reduce é: ${somaArr}`)

//Exercício 3b 
let total = 0;
let somaArr2 = fibonaci()
for(let i = 0; i < somaArr2.length; i++){
    total += somaArr2[i]
}

console.log(`Soma da função fibonaci utilizando métodofor é: ${total}`)