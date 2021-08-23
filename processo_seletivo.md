## Resolva os exercícios a seguir 

Alguns deles estão marcados como desafio. Se não conseguir faze-los os desafios
não tem problema, você pode entregar a prova sem eles.
Caso seu código inicial já atenda o desafio vamos considerá-lo conclúido.

Você também pode deixar explicações do seu raciocínio nos comentários, 
mesmo que não chegue a uma solução do exercício.

----------------------------

#### Exercício 1a 

Crie uma função para verificar se um número é 
par ou impar e aplique-a na lista a seguir para imprimir quais
números são pares e quais são ímpares.

lista = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

definirParOuImpar(10);
function definirParOuImpar(final) {
     for (let i = 1; i <= final; i++) {
        if (i % 2 === 0)
           console.log (i,'Número par!');
        else 
        console.log(i,'Número ímpar!');
     }
}



#### Exercício 1b (desafio) 

Você consegue reduzir seu código para 1 linha?

____________________________________

#### Exercício 2a: 
Escreva um algoritmo que armazene o valor 19 em uma variável A
e o valor 23 em uma variável B. A seguir troque os seus conteúdos fazendo com
que o valor que está em A passe para B e vice-versa. Ao final, escrever os 
valores que ficaram armazenados nas variáveis.

let A = 19;
let B = 23;

console.log(A);
console.log(B);

//Os valores das variáveis A e B foram atribuídos, e depois para inverter os valores cria-se uma terceira variável.

let C = A;
A = B;
B = C; 

console.log(A);
console.log(B);


#### Exercício 2b (desafio)
Repita o exercício anterior, mas seu algorítimo 
deve utilizar apenas atribuições entre a duas variáveis, sem declarar
uma terceira.

let A = 19;
let B = 23;

console.log (A);
console.log (B);

//Para inverter os valores armazenados sem utilizar a terceira variável temos que utilizar as operações de soma e subtração.
A = A + B;
B = A - B;
A = A - B;

console.log (A);
console.log (B);


____________________________________

#### Exercício 3a 
Crie uma função que salve os números da série de Fibonacci até chegar em x (parâmetro) interações em um array e imprima esse array.

(A série de Fibonacci é a seguinte: 0, 1, 1, 2, 3, 5, 8, 13, 21, etc... Para calculá-la, o primeiro e segundo
elementos valem 1, daí por diante, o “n-ésimo” elemento vale o (n-1)-ésimo elemento somado ao (n-2)-ésimo elemento (ex: 8 = 5 + 3))

function fibonacci(number){
     let elementoAnterior = 0;
     let elementoAtual = 1;
     let proximoElemento = 1;

     for (let i=0; i < number; i++){
         console.log(proximoElemento)
         elementoAnterior = elementoAtual + proximoElemento;
         elementoAtual = proximoElemento
         proximoElemento = elementoAnterior
     }
 }

 fibonacci(11);


#### Exercício 3b-1 (desafio) 
Crie uma função que, recebendo o array gerado na função anterior, retorne a soma dos valores do array.

const fibonacci = [1,2,3,5,8,13,21,34,55,89,144];
const total = fibonacci.reduce((total, currentElement) => total + currentElement)

console.log (total);


#### Exercício 3b-2 (desafio) 
Crie uma função que, recebendo o array gerado na função anterior, retorne a soma dos 
valores do array. Utilize um algoritmo diferente do desafio 3b-1. (ex: se no desáfio 3b-1 seu algorítimo usou
um loop, utilize recursão)


