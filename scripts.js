// Exercício 1
    // Em ambas as soluções, criei um map para percorrer o array lista e retornar, através da lógica de que números pares são divisíveis por dois, o tipo de cada número (ou seja, se o número é par ou impar). 
    // Outra forma de solucionar o exercício é criando um array para armazenar somente os números pares e outro array para armazer somente os números ímpares, de modo que seria possível retornar de uma só vez a categoria de números pares e a categoria de números ímpares. 

    const lista = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// a)  
    const ex1a = () => { 
        lista.map(numero => {
            if(numero %2 === 0) {
                console.log("O número "+ numero + " é par")
            } else {
                console.log("O número "+ numero + ' é impar')
            }
        })
    }

// b)
    const ex1b = () => {lista.map(numero => console.log(numero %2 === 0 ? "O número "+ numero + " é par" : "O número "+ numero + ' é impar'))}

// -------------------------------------------------------------------------------------------------------------

// Exercício 2
    // Para a primeira solução, utilizei uma variável auxiliar que me possibilitou armazenar temporariamente um valor enquanto fazia a troca dos valores entre as váriaveis A e B.
    // Já na segunda solução, tive certa dificuldade e, após um tempo procurando, encontrei o método denominado correspondência de matriz em um fórum. Pelo que entendi, trata-se de um processo de desestruturação das váriaveis que possibilita a inversão/troca entre elas na hora da chamada. 

    let a = 19;
    let b = 23;

// a)
    const ex2a = () => {
        console.log("Antes, a váriavel A armazenava "+ a + " e a váriavel B armazenava "+ b)
        
        let c = a;
        a = b
        b = c

      console.log("Na troca, a váriavel A passou a armazenar "+ a + "e a váriavel B passou a armazenar "+ b)
    }

// b) 
    const ex2b = () => {
        [a, b] = [b, a];
        console.log("Na troca, a váriavel A passou a armazenar "+ a + "e a váriavel B passou a armazenar "+ b);
    }

// -------------------------------------------------------------------------------------------------------------

// Exercício 3
    // Partindo da noção de que a lógica fibonacci consiste na somatória sequencial dos dois últimos números para cada resultado, criei uma função que rodará um loop exercendo essa lógica. O número de vezes que o loop rodará é um parâmetro determinado na chamada da função. Exemplo: node -e 'require("./scripts").ex3a(8)'
    // Para fazer a somatória de todos os valores presentes dentro do array gerado pela variável 'fibonacci', utilizei primeiro o método de array reduce e, na segunda tentativa, criei uma função que recebe a váriavel fibonacci como parâmetro e realiza a soma de item por item no array através de um loop.

// a)
    const ex3a = (n) => {
    var fibonacci = []
  
    for(var i = 0; i <= n; i++) {
        if(i === 0 || i === 1){
            fibonacci.push(i)
        } else {
            const value = fibonacci[i-1] + fibonacci[i-2]
            fibonacci.push(value)
        }
    }
  
    console.log(fibonacci)
    ex3b(fibonacci)
    ex3c(fibonacci) 
  };
  
//  b) 
    const ex3b = (array) => {
    const totalB = array.reduce((array, somaFibonacci) => array + somaFibonacci )
    console.log(totalB)
}

// c 
    const ex3c = (array) => {
	var totalC = 0
	array.map(num => {
		totalC = totalC + num
	})
	console.log(totalC)
}

module.exports = {
    ex1a,
    ex1b,
    ex2a,
    ex2b,
    ex3a,
    ex3b,
    ex3c
}