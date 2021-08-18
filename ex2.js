console.log("DESAFIO 2")
let A = 50;
let B = 70;
let X
console.log("Inicio: A =", A, "e B =", B)
// DESAFIO 2 - Comentarios:Troquei os valores da variaeis, adicionando os valores em x e posteriormente subtraindo os valores 
X = A + B
A = X - A
B = X - B
console.log("Tracando valores: A =", A, "e B =", B)

// DESAFIO 2.1 - Comentarios: Troquei os valores da variaeis, usando o operador XOR que funciona guardando a referencia do valor.
console.log("DESAFIO 2.1")

A = 50;
B = 70;
console.log("Inicio: A =", A, "e B =", B)
A ^= B;
B ^= A;
A ^= B;
console.log("Tracando valores com duas variaveis e o operador XOR: A =", A, "e B =", B)

