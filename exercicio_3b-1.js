//Crie uma função que, recebendo o array gerado na função anterior, retorne a soma dos valores do array.

function fibonacci(limite){
    let i;
    //Declatando o array que ira conter os numeros da serie de Fibonacci
    let fibo = [];

    //Colocando os valores 0 e 1 nas suas respectivas posições do array
    fibo[0] = 0;
    fibo[1] = 1;

    //Loop que vai somando os dois numeros anteriores da sequencia de fibonacci
    for(i=2; i<=limite; i++){
        fibo[i] = fibo[i-2] + fibo[i-1];
    }
	return fibo
}
//Colocando um limite de 10 para a repetição da função fibinacci e atribuindo ela para varivavel arrayFibo
let arrayFibo = fibonacci(10)

function somaFibonacci(array){
    let numero = 0;
    for(let i=0; i<array.length; i++){
        numero += array[i]
    }
    console.log(`A soma dos elementos do array da sequencia de Fibonacci é: ${numero}`)
};
somaFibonacci(arrayFibo)