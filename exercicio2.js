// Exercicio 2

// Primeiro vamos somar a variavel B a variavel A, assim temos que A = 19 + 23
// Entao para obter o valor antigo de A, basta fazer a operacao inversa, no caso
// vamos subtrair B de A, B = A - B = (19 + 23) - (23) = 19
// Note que B agora possui o valor inicial de A, que era 19
// Entao se fazemos A = A - B podemos escrever como A = (19 + 23) - (19)

var A = 19, B = 23;


A = A + B;
B = A - B;
A = A - B;


console.log(A, B)