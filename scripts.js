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

// Exercício 2


module.exports = {
    ex1a,
    ex1b,
    ex2a,
    ex2b
}