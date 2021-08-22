//Crie uma função que salve os números da série de Fibonacci até chegar em x (parâmetro) interações em um array e imprima esse array.(A série de Fibonacci é a seguinte: 0, 1, 1, 2, 3, 5, 8, 13, 21, etc... Para calculá-la, o primeiro e segundo elementos valem 1, daí por diante, o “n-ésimo” elemento vale o (n-1)-ésimo elemento somado ao (n-2)-ésimo elemento (ex: 8 = 5 + 3))

function fibonacci(limite){
    let i;
    //Declatando o array que ira conter os numeros da serie de Fibonacci
    let fibo = [];

    //Colocando os valores 0 e 1 nas suas respectivas posições do array
    fibo[0] = 0;
    fibo[1] = 1;
    console.log(fibo[0])
    console.log(fibo[1])

    //Loop que vai somando os dois numeros anteriores da sequencia de fibonacci
    for(i=2; i<limite; i++){
        fibo[i] = fibo[i-2] + fibo[i-1];
        console.log(fibo[i])
    }
	return(fibo)
}

fibonacci(10)