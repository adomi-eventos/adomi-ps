const lista = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const listaFiltrada = lista.forEach((x) => {
    if (x % 2 === 0) {
        console.log(`${x} é um número par`)
    } else {
        console.log(`${x} é um número ímpar`)
    }
});

// para testar todos os exercícios passados aqui, você deve clonar o repositorio na sua máquina (git clone + url), abrir o terminal dentro da pasta de cada exercício e executar com node (escreva "node + nome do arquivo.js"). Tente trocar os valores do array passado!//

// aqui usei a função de arrays "for each" que varre item por item do array lista. Para cada item (x) varrido, irá checar: se o item dividido por 2 tem resto zero, então ele é par e irá imprimir a mensagem de que é par. Se não, ele é ímpar e irá imprimir a mensagem dizendo que é ímpar. //