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

<!-- let lista = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]; 
var pegaLista = lista.map(num => num % 2 == 0 ? console.log(`o número ${num} é par`) : console.log(`o número ${num} é impar`));
// Usei o map para passar pelo objeto pegando todos os númeors, os némeros são representados pelo parametro 'num'
// usei o resto da divisão para saber se é impar ou par, depous imprimi eles no console -->
____________________________________

#### Exercício 1b (desafio) 

Você consegue reduzir seu código para 1 linha?

<!-- let lista = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]; 
var pegaLista = lista.map(num => num % 2 == 0 ? console.log(`o número ${num} é par`) : console.log(`o número ${num} é impar`));
// Usei o map para passar pelo objeto pegando todos os númeors, os némeros são representados pelo parametro 'num'
// usei o resto da divisão para saber se é impar ou par, depous imprimi eles no console -->
____________________________________

#### Exercício 2a: 
Escreva um algoritmo que armazene o valor 19 em uma variável A
e o valor 23 em uma variável B. A seguir troque os seus conteúdos fazendo com
que o valor que está em A passe para B e vice-versa. Ao final, escrever os 
valores que ficaram armazenados nas variáveis.

<!-- Fiz uma função que usa o if para trocar os valores, se o A for igual ao valor 19 ele é trocado 23
e o inverso para o B -->

<!-- function trocar(){
    var A = 19;
    var B = 23; 
    if(A == 19){
        A = 23;
        console.log(A);
    }
    if(B == 23){
        B = 19;
        console.log(B)
    }
}
trocar(); -->

#### Exercício 2b (desafio)
Repita o exercício anterior, mas seu algorítimo 
deve utilizar apenas atribuições entre a duas variáveis, sem declarar
uma terceira.

<!-- Fiz uma função que usa o if para trocar os valores, se o A for igual ao valor 19 ele é trocado 23
e o inverso para o B -->

<!-- function trocar(){
    var A = 19;
    var B = 23; 
    if(A == 19){
        A = 23;
        console.log(A);
    }
    if(B == 23){
        B = 19;
        console.log(B)
    }
}
trocar(); -->

____________________________________

#### Exercício 3a 
Crie uma função que salve os números da série de Fibonacci até chegar em x (parâmetro) interações em um array e imprima esse array.

(A série de Fibonacci é a seguinte: 0, 1, 1, 2, 3, 5, 8, 13, 21, etc... Para calculá-la, o primeiro e segundo
elementos valem 1, daí por diante, o “n-ésimo” elemento vale o (n-1)-ésimo elemento somado ao (n-2)-ésimo elemento (ex: 8 = 5 + 3))

<!-- let fib = [];
const fibo = (x) => { 
fib[0] = 0;
fib[1] = 1;

for (i = 2; i <= x; i++){
    fib[i] = fib[i - 1] + fib[i - 2];
    fib.push(fib[i])
} 
console.log(fib)
};

fibo(10);

//usei um for para fazer a repetição da minha conta, que é a formula da sequencia de fibonacci
// e armazenei esses numeros em um array (fib) com a função push.    -->

#### Exercício 3b-1 (desafio) 
Crie uma função que, recebendo o array gerado na função anterior, retorne a soma dos valores do array.

<!-- //usei o reduce com os parametros x, y para fazer as somas dos valores. A ideia é que o x contenha os 
//valores já somados e o y o próximo valor a ser somado -->

<!-- const somaFibo = fib.reduce((x, y) => x + y)
console.log(`O valor da soma é de ${somaFibo}`); -->

#### Exercício 3b-2 (desafio) 
Crie uma função que, recebendo o array gerado na função anterior, retorne a soma dos 
valores do array. Utilize um algoritmo diferente do desafio 3b-1. (ex: se no desáfio 3b-1 seu algorítimo usou
um loop, utilize recursão)

<!-- Não consegui -->

