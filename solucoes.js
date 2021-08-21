//1


let lista = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

function eParOuImpar (arr){
    for (let i = 0; i<arr.length; i++){
        if (arr[i]%2==0){
            console.log(arr[i]+" é par\n ")
        }
        else {
            console.log(arr[i]+" é ímpar\n ")
        }
    }
}
console.log("exercicio 1a\n")
eParOuImpar(lista)


    


//2

console.log("exercicio 2 \n")

let a = 23
let b = 19
console.log("var A = " + a + " e var B = " + b + "\n")

  a = (a+b)    
  b = (a-b)   
  a = (a-b)
  console.log("var A = " + a + " e var B = " + b + "\n")


//3

  function fibonacci(num){
    let soma = 1
    let anterior = 0
    let proximo = 1
    let string = "0 "
    console.log("a sequencia de Fibonacci é:  ")
    for (let i = 0; i < num; i++){
     string += soma + " "
     soma = anterior + proximo
     anterior = proximo
     proximo = soma
  }
    console.log(string)
  }
  console.log("Exercício 3\n")
 fibonacci(7) 
