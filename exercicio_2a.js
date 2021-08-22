//Escreva um algoritmo que armazene o valor 19 em uma variável A e o valor 23 em uma variável B. A seguir troque os seus conteúdos fazendo com que o valor que está em A passe para B e vice-versa. Ao final, escrever os valores que ficaram armazenados nas variáveis.

let A = 19
let B = 23
//Aqui fiz a utilização de blocos e do tipo LET de declaração pois o mesmo faz uma declaração local
{
   let A = B
   console.log(A)
}
{
    let B = A
    console.log(B)
}


//Outra opção de solução, porém aqui com 3 variaveis 

// >NOTA< Comente o codigo acima e descomente o de baixo para fazer a execução dele

// let A = 19
// let B = 23

// let C = B
// B = A
// A = C

// console.log(A)
// console.log(B)