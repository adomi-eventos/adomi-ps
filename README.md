# Processo Seletivo - Adomi

## Exercício 1

### Exercício 1a 

Crie uma função para verificar se um número é 
par ou impar e aplique-a na lista a seguir para imprimir quais
números são pares e quais são ímpares.

lista = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

#### Resposta
Para resolver esta questão utilizei o map passando uma condicional(if/else) para retornar um novo array com os numeros e suas respectivas descrições (pares e impares).



### Exercício 1b (desafio) 

Você consegue reduzir seu código para 1 linha?

#### Resposta
Para resolver esta questão utilizei o map passando uma condicional especial (Operador Ternário) para retornar um novo array com os numeros e suas respectivas descrições (pares e impares)

### Execução do exercicio

Para visualizar a solução, basta executar o arquivo exercicio1.js no terminal para o resultado ser exibido no console
____________________________________
## Exercício 2


### Exercício 2a: 
Escreva um algoritmo que armazene o valor 19 em uma variável A
e o valor 23 em uma variável B. A seguir troque os seus conteúdos fazendo com
que o valor que está em A passe para B e vice-versa. Ao final, escrever os 
valores que ficaram armazenados nas variáveis.

#### Resposta
Para resolver esta questão criei 3 variaveis (let A=19, let B=23, let C=0) e  uma função que recebe as 3 variaveis como parametro.<br>
A logica utilizada na função  foi: 
- c=a;
- a=b;
- b=c;


### Exercício 2b (desafio)
Repita o exercício anterior, mas seu algorítimo 
deve utilizar apenas atribuições entre a duas variáveis, sem declarar
uma terceira.

#### Resposta
Para resolver esta questão utilizei somente as  variaveis (let A=19, let B=23) criadas anteriormente e  uma função que recebe as 2 variaveis como parametro.<br>
A logica utilizada na função foi colocar as variaveis dentro de um array e recebendo elas mesma na ordem invertida como no modelo abaixo: <br>
[a,b]=[b,a]

### Execução do exercicio

Para visualizar a solução, basta executar o arquivo exercicio2.js no terminal para o resultado ser exibido no console
____________________________________
## Exercício 3

### Exercício 3a 
Crie uma função que salve os números da série de Fibonacci até chegar em x (parâmetro) interações em um array e imprima esse array.

(A série de Fibonacci é a seguinte: 0, 1, 1, 2, 3, 5, 8, 13, 21, etc... Para calculá-la, o primeiro e segundo
elementos valem 1, daí por diante, o “n-ésimo” elemento vale o (n-1)-ésimo elemento somado ao (n-2)-ésimo elemento (ex: 8 = 5 + 3))

#### Resposta
Para resolver esta questão criei uma função que recebe um numero como parametro(termo). Este numero encontra-se na variavel N (deixei n=8 como default)<br>;
No escopo  da função criei 3 variaveis:
  - termo0 = 0 // atua como  primeiro termo e após a execução no laço for assume o valor de termo1
  - let termo1 = 1;// atua como segundo termo e apos o laço for assume o valor da soma de termo0+termo1
  - let soma = 0: // criada para armazenar a soma e inserir no array
Criei 4 condicionais para cada uma retornar uma resposta de acordo com o numero de termos (n):
- Uma para tratar se o n não for  numero ou for <1
- Uma  caso o n seja igual a 1 a função retornará um array com o termo0
- Uma caso o n seja igual a 2 a função retornará um array com o termo0 e termo1
- Uma caso não se enquadre nas anteriores. Neste caso é onde ocorre o laço for que foi criado para somar o termo0 + o termo1 enquanto contador x for menor ou igual ao termo(n). Após a execução do laço, retorna o array com os  termos  termo0 e termo1 acrescido dos termos criados no laços.


### Exercício 3b-1 (desafio) 
Crie uma função que, recebendo o array gerado na função anterior, retorne a soma dos valores do array.

#### Resposta
Para resolver essa questão utilizei criei uma função que tem o  método reduce no escopo. <br>
Criei algumas condicionais para tratar a execução do método reduce. Após execução retorna a soma do array.

### Exercício 3b-2 (desafio) 
Crie uma função que, recebendo o array gerado na função anterior, retorne a soma dos 
valores do array. Utilize um algoritmo diferente do desafio 3b-1. (ex: se no desáfio 3b-1 seu algorítimo usou
um loop, utilize recursão)

#### Resposta
Para resolver esta questão criei uma função que recebe o array e o numero de termos gerado na  função fibonacci<br>
No escopo da função criei 3 condicionais:
- uma caso o n seja < 1 ou não seja number, retornando uma mensagem
- uma caso o n seja igual a 1 retornando o próprio item do array
- uma caso não se enquadre retornando a  soma do ultimo item do array + o ultimo item do array da funçao reinvocada( return arr[t-1] + recursiva(arr,t-1)).

### Execução do exercicio

Para visualizar a solução, basta executar o arquivo exercicio3.js no terminal para o resultado ser exibido no console.
#### O numero 8 está declarado por default. Caso haja necessidade de mudança, basta dirigir-se a linha 35 e alterar o valor de n
____________________________________






