# Processo Seletivo - Adomi

Todos os exercícios estão separados em seus respetvios arquivos para uma melhor usuabilidade e teste.
Para testar as soluções, basta executar o console do arquivo desejado.

## Exercício 1

### Exercício 1a

Crie uma função para verificar se um número é par ou impar e aplique-a na lista a seguir para imprimir quais números são pares e quais são ímpares.

lista = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

### Resolução

Utilizei o for para gerar um loop em todo o Array verificando se o produto de cada elemento dividido por 2 é igual a 0, sendo assim meu if/else teve a função de identificar se o produto de um elemento do Array é igual a 0. Ser for igual a 0 ele é par, se não for, ele é ímpar.

### Exercício 1b (desafio)

Você consegue reduzir seu código para 1 linha?

### Resolução:

Usei o prototype map passando uma condicional especial em operador ternário para retornar um novo array com os elementos e suas distinções.

## Exercício 2

### Exercício 2a:

Escreva um algoritmo que armazene o valor 19 em uma variável A e o valor 23 em uma variável B. A seguir troque os seus conteúdos fazendo com que o valor que está em A passe para B e vice-versa. Ao final, escrever os valores que ficaram armazenados nas variáveis.

### Resolução:

Armazenei os 3 valores em 3 variáveis e fiz uma função que recebe essas variáveis como parâmetro.
Depois foi só reatribuir os valores que eu queria em cada variável, sendo que uma delas é igual a 0.

### Exercício 2b (desafio)

Repita o exercício anterior, mas seu algorítimo deve utilizar apenas atribuições entre a duas variáveis, sem declarar uma terceira.

### Resolução

Armazenei os 2 valores descritos no exercício em 2 variáveis e executei dois condicionais ternários alterando o valor de cada variável, caso seja true.

## Exercício 3

### Exercício 3a

Crie uma função que salve os números da série de Fibonacci até chegar em x (parâmetro) interações em um array e imprima esse array.

(A série de Fibonacci é a seguinte: 0, 1, 1, 2, 3, 5, 8, 13, 21, etc... Para calculá-la, o primeiro e segundo elementos valem 1, daí por diante, o “n-ésimo” elemento vale o (n-1)-ésimo elemento somado ao (n-2)-ésimo elemento (ex: 8 = 5 + 3))

### Resolução:

Primeiro criei um Array(fib) vazio que receberá a sequeência.
Depois Criei uma função que recebe um número como parametro(x) que deve ser escolhido pelo usuário e dentro dessa função declarei que os índices [0] e [1] do Array(fib) valem 0 e 1 respectivamente.
Iniciei um loop que o índice for menor ou igual a x(número escolhido pelo usuário) ele vai executar as fórmulas [i - 1] e [i - 2] respectivamente, utilizando o push para inserir os elementos da sequeência dentro do Array(fib).

### Exercício 3b-1 (desafio)

Crie uma função que, recebendo o array gerado na função anterior, retorne a soma dos valores do array.

### Resolução

Utilizei o prototype reduce com 2 parâmetros(x, y) informando no escopo que, para cada elemento do Array ele vai pegar 2 valores(x e y) e somar, retornando a soma de todos os elementos do Array logo em seguida.

### Exercício 3b-2 (desafio)

Crie uma função que, recebendo o array gerado na função anterior, retorne a soma dos valores do array. Utilize um algoritmo diferente do desafio 3b-1. (ex: se no desáfio 3b-1 seu algorítimo usou um loop, utilize recursão)

### Resolução

Criei uma função que recebe o array e os elemmentos gerados na função função anterior, criando 3 condicionais:

Se o n for < 1 ou não for number, retornando uma mensagem de erro;
Se o n for igual a 1, retorna o próprio elemento do array;
Se o algorítmo se não identificar a soma do último item do array mais o último item do array da função reinvocada(return arr[n - 1] + recursiva(fib,n - 1)).

\* Nota: O numero 4 está declarado por padrão no parâmetro. Caso haja necessidade de alterar, é só alterar o valor na linha 15.
