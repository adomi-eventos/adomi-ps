
//EX1
const lista = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

function verifyNumbers(){
    for(let i = 0; i < lista.length; i++){
        if (lista[i] %2  === 0){
            console.log(`O numero ${lista[i]} é par`)
        }else{
            console.log(`O numero ${lista[i]} é impar`)
        }
    }
}


verifyNumbers(lista)
console.log("==============")

const oddOrEven = lista.map((number) => { return ((number % 2) === 0) ? console.log(`O valor ${number} é par`) : console.log(`O valor ${number} é impar`)})
console.log("==============")
//EX2

function changeValuesVar(){
    let A = 19
    let B = 23
    console.log(` Valores iniciais - A: ${A} e B: ${B}`)
    let C = A
    A = B
    B = C
    console.log(`Valores alterados - A: ${A} e B: ${B}`)
}

changeValuesVar()
console.log("==============")

function changeValuesMath(){
    let A = 19
    let B = 23
    console.log(` Valores iniciais - A: ${A} e B: ${B}`)
    A = A + B
    B = A - B
    A = A - B
    console.log(`Valores alterados - A: ${A} e B: ${B}`)
}
changeValuesMath()
console.log("==============")

//EX3

const fibonacci = [0,1]

function fibonacciCalc(num){
    for(let i = 0; i < num; i++){
        fibonacci.push(fibonacci[i]+fibonacci[i+1])
    }
    return fibonacci
}

console.log(fibonacciCalc(7))
console.log("==============")

let summatory = 0

function arraySum (array){
    for(let i = 0; i < array.length; i++){
        summatory += array[i]
    }
    return summatory
}

console.log(arraySum(fibonacci))
console.log("==============")

let newSummatory = 0

function newSum (array){
    newSummatory = array.reduce((newSum, arrayElement) => newSum + arrayElement)
    return newSummatory
}

console.log(newSum(fibonacci))
console.log("==============")

let sum = 0
let auxiliar = 0
function recursion(array){
    if(array.length !== 0 && auxiliar < array.length){
                
        sum += array[auxiliar]+recursion(array.slice(1))
        auxiliar ++
    }else{
        sum + 0
    }
    return sum
}

console.log(recursion(fibonacci))
console.log("==============")