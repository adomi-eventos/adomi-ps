let a = 0
let b = 1
let c = 0

const somaSequencia = sequenciaFibonacci => {
    let somaSequenciaFibonacci = 0
    for (let i in sequenciaFibonacci) {
        somaSequenciaFibonacci = somaSequenciaFibonacci + sequenciaFibonacci[i]
    }
    console.log(somaSequenciaFibonacci)
}


function fibonacci(x) {
    let sequenciaFibonacci = [a, b]
    let n = 3

    while (n <= x) {

        c = a + b
        a = b
        b = c

        sequenciaFibonacci.push(c)

        n++
    }
    console.log(sequenciaFibonacci)
    somaSequencia(sequenciaFibonacci)

}

fibonacci()//Insira um número

// Instruções para teste:
//     Com o node instalado utilize os comandos CTRL + ALT + N
//     Para testar mais valores, insira no array 'lista' ou crie um novo e passa como parametro na chamada da função (linha 13)
//     Caso prefira, pode testar no navegador. Para isso basta ir no arquivo index.html e descomentar o exercicio a ser testado e abrir o modo inspecionar (F12) do navegador na aba console.

//     Para testar no console faça:  
//     Chame a funçao fibonacci() passando e substitua x pela quantidade se vezes que vai seguir a sequencia: fibonacci(x)
//     Recarregue a página para resetar a sequencia