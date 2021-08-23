
//Exercício 1a     
    
    const lista = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

    const verifica = (valor) => {

        for(let i = 0; i < valor.length; i++){

            if(valor[i] % 2 == 0) {

                const resposta1 = document.getElementById("resposta1")
                resposta1.innerHTML += `<p>O número ${valor[i]} é par!</p>`

            } else{

                const resposta1 = document.getElementById("resposta1")
                resposta1.innerHTML += `<p>O número ${valor[i]} é impar!</p>`               
            }
        }        
    } 

    const verExplicacao1 = () => {

        if(explicacao1.innerHTML.length === 0){

            const explicacao1 = document.getElementById("explicacao1")
            const botaoExplicacao1 = document.getElementById("botaoExplicacao1")

            botaoExplicacao1.innerHTML = "Fechar Explicação 1"
            explicacao1.innerHTML = `<p>Foi utilizado um laço de repetição, onde todo o array seria percorrido, 
             verificando se o valor dividido por 2 teria um resto igual a zero, caracterizando um valor PAR, caso o resto
            não fosse 0, caracteriza um valor ÍMPAR.</p>`

        }else{

            explicacao1.innerHTML = ""
            botaoExplicacao1.innerHTML = "Ver Explicação 1"
        }
    }

    const verResposta1 = () => {

        if(resposta1.innerHTML.length == 0){

            const resposta1 = document.getElementById("resposta1")
            const botaoResposta1 = document.getElementById("botaoResposta1")
            
        botaoResposta1.innerHTML = "Fechar Resposta 1"    
        verifica(lista)
        
        }else{
            
            botaoResposta1.innerHTML = "Ver Resposta 1"
             resposta1.innerHTML = ""
        }    
    }                   
   
    //-----------------------------------------------------------------------------------//
   
      //Exercício 2a

    
    let verResposta2 = () => {

        if(resposta2.innerHTML.length == 0){

            const resposta2 = document.getElementById("resposta2")
            const botaoResposta2 = document.getElementById("botaoResposta2")

           let A = [19]
           let B = [23]

           resposta2.innerHTML += `<p>Esse é o antigo valor de A: ${A}`
           resposta2.innerHTML += `<p>Esse é o antigo Valor de B: ${B}`

           let C = [...A]
           A = B
           B = C

          resposta2.innerHTML += `<p>Esse é o novo valor de A: ${A}`
          resposta2.innerHTML += `<p>Esse é o novo valor de B: ${B}`

          botaoResposta2.innerHTML = "Fechar Resposta 2"   

        }else{

            resposta2.innerHTML = ""
            botaoResposta2.innerHTML = "Ver Resposta 2"
        }
    }

     const verExplicacao2 = () => {

        if(explicacao2.innerHTML.length === 0){

            const explicacao2 = document.getElementById("explicacao2")
            const botaoExplicacao2 = document.getElementById("botaoExplicacao2")

            botaoExplicacao2.innerHTML = "Fechar Explicação 2"
            explicacao2.innerHTML = `<p>Foi criado duas variaveis para acomodar os valores, para que fosse
            possível a inversão foi criado uma terceira variável clonado a variável A, para que fosse possível
            efetuar a inversão sem influenciar o valor original de A, o que tornaria a troca não possível.</p>`

        }else{

            explicacao2.innerHTML = ""
            botaoExplicacao2.innerHTML = "Ver Explicação 2"
        }
    }

    //---------------------------------------------------------------------------------------------------//

      //Exercício 2b (desafio)       

          let verResposta2b = () => {

          if(resposta2b.innerHTML.length == 0){

            const resposta2b = document.getElementById("resposta2b")
            const botaoResposta2b = document.getElementById("botaoResposta2b")

            let A = [19]
            let B = [23]

           resposta2b.innerHTML += `<p>Esse é o antigo valor de A: ${A}`
           resposta2b.innerHTML += `<p>Esse é o antigo Valor de B: ${B}`
           
            A = [...B] 
            B = [A - 4]

           resposta2b.innerHTML += `<p>Esse é o novo valor de A: ${A}`
           resposta2b.innerHTML += `<p>Esse é o novo valor de B: ${B}`

           botaoResposta2b.innerHTML = "Fechar Resposta 2b"   

         }else{

            resposta2b.innerHTML = ""
            botaoResposta2b.innerHTML = "Ver Resposta 2b"
        }
    }

       const verExplicacao2b = () => {

        if(explicacao2b.innerHTML.length === 0){

            const explicacao2b = document.getElementById("explicacao2b")
            const botaoExplicacao2b = document.getElementById("botaoExplicacao2b")

            botaoExplicacao2b.innerHTML = "Fechar Explicação 2b"
            explicacao2b.innerHTML = `<p>Esse desafio consistia em executar a troca dos valores das variáveis utilizando apenas atribuições e sem criar uma nova variável.
            Para efetuar a troca foi foi atribuido ao valor A o valor clone de B, assim não modificando o valor inicial de B, e ao valor de B,
            sabendo agora que o valor de A é ra o antigo valor de B, foi efetuado uma subtração para determinar o novo valor.</p>`

        }else{

            explicacao2b.innerHTML = ""
            botaoExplicacao2b.innerHTML = "Ver Explicação 2b"
        }
    }

    //-----------------------------------------------------------------------------------//

    // Exercício 3a        

    
        let fibonacci = []
        let ancora = [0]

        let operacao = (valor) => {    
     
        for(let i = 0; i < valor; i++){

            if(ancora[i] == 0){
                fibonacci.push(0)
                ancora.push(1)
               
            }else{
                let novoValor = ancora[i] + ancora[i-1]
                ancora.push(novoValor)
                fibonacci.push(ancora[i])                
            }           
        }  
    }

    let verResposta3 = () => {

        const input3 = document.getElementById("input3")
         operacao(input3.value)

        
        if(resposta3.innerHTML.length == 0){     
            
            const resposta3 = document.getElementById("resposta3")
            const botaoResposta3 = document.getElementById("botaoResposta3")

            alert(`ATENÇÃO: As respostas dos desafios 3b1 e 3b2 aparecem simultaneamente com essa resposta!`
)
            botaoResposta3.innerHTML = "Fechar Resposta 3"   

        }else{

            resposta3.innerHTML = ""
            fibonacci = []
            ancora = [0]
            botaoResposta3.innerHTML = "Ver Resposta 3"
            input3.value = ""

        }
         let novoFibonacci = fibonacci.map((valor) => {
               return valor
         })
              
          for(let i = 0; i < novoFibonacci.length; i++){
              resposta3.innerHTML += `<li>${novoFibonacci[i]}</li>`

              //Desafio 3b-1
              const soma = novoFibonacci.reduce((total, proximo) => total + proximo)
              const resposta3b1 = document.getElementById('resposta3b1')
              resposta3b1.innerHTML = `<p>O valor da soma é: ${soma}<p>`

             //Desafio 3b-2

             let ancoragem = 0

             for(let i = 0; i < novoFibonacci.length; i++){
                 ancoragem += novoFibonacci[i]
                 let imprime = ancoragem
                 
                 const resposta3b2 = document.getElementById('resposta3b2')
                 resposta3b2.innerHTML = `<p>O valor da soma é: ${imprime}<p>` 
                                
             }  
          }        
    }

      const verExplicacao3 = () => {

        if(explicacao3.innerHTML.length === 0){

            const explicacao3 = document.getElementById("explicacao3")
            const botaoExplicacao3 = document.getElementById("botaoExplicacao3")

            botaoExplicacao3.innerHTML = "Fechar Explicação 3"
            explicacao3.innerHTML += `<p> Foi criado uma variavel para armazenar os valores da sequencia que seria impresso em tela e uma variavel
            para acessorar no início da operação. Quando criado a função operação foi utilizado um laço de repetição
            for, seguido de uma condição if, para forçar a operação a acrescentar inicialmente um valor 0 e um valor 1 
            a variavel fibonacci e a variavel ancora para que assim que a operação pudesse seguir logicamente. E foi usado o metodo
            map para deixar o array mais simpático para visualização em tela.</p>`

            explicacao3.innerHTML += `<p>EXPLICAÇÃO 3b-1:  Para efetuar a soma dos números do array fibonacci foi utilizado o metodo reduce,
            que transforma os todos os itens em apenas 1 item. Usando esse metodo foi possível somar o valor atual total, com o proximo
            valor.</p>`
            explicacao3.innerHTML += `<p>EXPLICAÇÃO 3b-2:  Para efeturar a soma dos valores do array fibonacci foi utilizado a repetição for,
           que seria efetuada enquanto o a condição i fosse menor que o tamanho do array fibonacci, também foi utilizado uma variavel chamada ancoragem
           para ser a variavel que armazenasse os valores das somas, e por fim foi printado em tela o ultimo valor do array ancoragem, sabendo-se que
           esse seria o maior valor.</p>`

        }else{

            explicacao3.innerHTML = ""
            botaoExplicacao3.innerHTML = "Ver Explicação 3"
        }
    }

    



   
    
    
    

   






    


 
    