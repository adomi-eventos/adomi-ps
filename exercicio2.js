
let a = 19;
let b = 23;
console.log(`A = ${a} e B = ${b}`);
let c = a;
a = b;
b = c;
// Cria uma variável temporária para armazenar o valor de A pra usar depois
console.log(`(Com variável temporária) Invertendo valores.....`);
console.log(`O valor de A agora é: ${a}`);
console.log(`O valor de B agora é: ${b}`);


/*Desafio 2b
Usando correspondência de matriz - Atribuição via desestruturação */
a = 19;
b = 23;
[a, b] = [b, a];

console.log(`(Sem variável temporária) Invertendo valores.....`);
console.log(`Novo valor de A: ${a}`);
console.log(`Novo valor de B: ${b}`);
console.log(`___________________________________________________________________`);