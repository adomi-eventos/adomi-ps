let lista = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const parOuImpar = (list) => {
    list.forEach(element => {
        if (element % 2 === 0) 
            console.log('Par')
        else
            console.log('Impar')
    })
}


parOuImpar(lista)

// Instruções para teste:
//     Com o node instalado utilize os comandos CTRL + ALT + N
//     Para testar mais valores, insira no array 'lista' ou crie um novo e passa como parametro na chamada da função (linha 13)
//     Caso prefira, pode testar no navegador. Para isso basta ir no arquivo index.html e descomentar o exercicio a ser testado e abrir o modo inspecionar (F12) do navegador na aba console.

//     Para testar outros valores diretamente no console faça: lista = [x], e os números desejados dentro dos colchetes separando por virgula (não deixe vírgula após o último) 
//     Chame a funçao parOuImpar passando a lista como parâmetro: parOuImpar(lista)