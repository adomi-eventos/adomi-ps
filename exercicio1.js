// Para testar basta editar a variavel lista

var lista = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];


// Exercicio 1

// Para resolver o problema utilizarei a funcao map do array e passarei como argumento 
// uma funcao que checa o resto da divisao por 2 de cada valor e retorna se ele eh par ou impar. 

var resultado = lista.map((valor) => { return (valor % 2) ? "impar" : "par" });

console.log(resultado)