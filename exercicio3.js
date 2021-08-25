// Exercício 3a

// Aqui estamos criando três variaveis e lidando com o input na função para fazer 
// determinadas interações. Pesquisando boas maneiras de resolver esse problema
// percebi que existem alguns problemas com a complexidade do algoritmo, e o do
// loop me parece ser o melhor nesse questio. 

const fibonacci = []

const fibonacciInput = (number) => {
  let a = 1
  let b = 0 
  let temp
// Nesse loop estamos pegando o input e diminuindo ele de 1 em 1 adicionando a
// variavel 'b' em nosso array principal que se enconta no escopo global 

  while (number >= 0){
    temp = a
    a = a + b
    b = temp
    number--
    fibonacci.push(b)
  }
}
fibonacciInput(9)

console.log(fibonacci)

// Exercício 3b-1 (desafio)

// O metodo reduce é utilizado aqui para encontrat a soma do array de numeros.
// Ele exexuta a função para cada elemento do array e dar como resultado uma unica saida

const sum1 = fibonacci.reduce((sum1, current) => sum1 + current, 0)

console.log(`Exercicio 3b-1 desafio = ${sum1}`)

// Exercício 3b-2 (desafio)

// Nessa parte temos o loop fazendo o papel da iteração de cada elemento do array,
// somando o seu valor de cada elemento a variavel 'sum2'

let sum2 = 0

for (let i = 0; i < fibonacci.length; i++) {
  sum2 += fibonacci[i]
}

console.log(`Exercício 3b-2 desafio = ${sum2}`) 