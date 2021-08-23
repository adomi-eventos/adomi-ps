const lista = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const listaFiltradaReduzida = lista.forEach(x => x % 2 === 0 ? console.log(`${x} é par`) : console.log(`${x} é ímpar`));

// para testar todos os exercícios passados aqui, você deve clonar o repositorio na sua máquina (git clone + url), abrir o terminal dentro da pasta de cada exercício e executar com node (escreva "node + nome do arquivo.js"). Tente trocar os valores do array passado!//

// aqui usei o mesmo método forEach de varrer item por item da array, mas ao inves de usar o tradicional If, Else, usei o ternário para reduzir o tamanho do array //