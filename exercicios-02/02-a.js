let a = 19;
let b = 23;
let c = a;

a = b;
b = a;

console.log(`O novo valor de a é ${a} e de b é ${b}`);

// para testar todos os exercícios passados aqui, você deve clonar o repositorio na sua máquina (git clone + url), abrir o terminal dentro da pasta de cada exercício e executar com node (escreva "node + nome do arquivo.js"). Tente trocar os valores das variáveis passadas!//

// nesse exercicio criei uma nova variavel C e atribui a ela o valor de a para que quando a recebesse o valor de b, b pudesse receber o antigo valor de a. Caso contrário, ele iria continar com seu antigo valor, já que a agora teria o valor de b.