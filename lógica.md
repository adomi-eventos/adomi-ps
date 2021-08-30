### Exercicio 1

Exercicio 1a

```js
const lista = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

function verifyNumbers(){
    // Função para realizar a verificação

    for(let i = 0; i < lista.length; i++){
        //Criando um valor auxiliar (i) para percorrer toda a lista fazendo com que o for seja executado até o tamanho da lista

        if (lista[i] %2  === 0){
            console.log(`O numero ${lista[i]} é par`)
            //Caso o modulo (resto da divisão) do valor na posição [i] do arry for 0 ele é par

        }else{
            console.log(`O numero ${lista[i]} é impar`)
            //Do contrário ele será impar
        }
    }
}
```
Exercicio 1b

```js
const oddOrEven = lista.map ((number) => { return ((number % 2) === 0) ? console.log(`O valor ${number} é par`) : console.log(`O valor ${number} é impar`)})

// Seria possivel realizar a mesma função utilizando um  map e um ternário ternario, onde ao receber um numero caso o resultado seja verdadeiro (no caso do exemplo, se ele for par) 

```
----------------------------

### Exercicio 2

Exercicio 1a
```js
function changeValues(){
    let A = 19
    let B = 23
    console.log(` Valores iniciais - A: ${A} e B: ${B}`)
    let C = A
    A = B
    B = C
    console.log(`Valores alterados - A: ${A} e B: ${B}`)
}
```

Exercicio 1b

```js 
function changeValuesMath(){
    let A = 19
    let B = 23
    console.log(` Valores iniciais - A: ${A} e B: ${B}`)
    A = A + B
    // Soma os valores

    B = A - B
    // Sabendo que o valor anterior foi somado, basta subtrair pelo valor da variavel que quer ser alterada

    A = A - B
    // A ultima subtração tornou o valor de B o valor inicial de A, portanto, basta realizar uma nova subtração removendo a primeira soma.


    console.log(`Valores alterados - A: ${A} e B: ${B}`)
}
```
----------------------------

### Exercicio 3

```js
const fibonacci = [0,1]

function fibonacciCalc(num){
    //A função recebe um numero que será utilizado como a quantidade de vezes que a função será executada

    for(let i = 0; i < num; i++){
        fibonacci.push(fibonacci[i]+fibonacci[i+1])
        //O for será executado e os valores serão inseridos na arry (fibonacci)
    }
    return fibonacci
}
```

``` js
let summatory = 0

function arraySum (array){
    //A função recebe uma array
    for(let i = 0; i < array.length; i++){
        // Ao receber uma array o loop será executado até atingir 
        summatory += array[i]
    }
    return summatory
}

```

```js
function newSum (array){
    // Outro metodo de realizar a soma seria utilizando o reduce, ele utiliza uma forma de callback

    newSummatory = array.reduce((newSum, arrayElement) => newSum + arrayElement)

    return newSummatory
}

```

```js
let sum = 0
let auxiliar = 0

function recursion(array){
    if(array.length !== 0 && auxiliar < array.length){
        //Demorei um pouco para entender essa, utilzando duas variaveis auxiliares podemos verificar o tamanho da array, e caso ela passe pelo if, será realizada a soma e para que vc não chame varias vezes a função basta inclui-la dentro da mesma e utilizar um slice
                
        sum += array[auxiliar]+recursion(array.slice(1))
        auxiliar ++
    }else{
        sum + 0
    }
    return sum
}
```