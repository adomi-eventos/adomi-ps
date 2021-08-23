
/*
#### Exercício 1b (desafio) 

Você consegue reduzir seu código para 1 linha?
*/


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
  /*  
 
#### Exercício 2b (desafio)

*/

 let A = [19]
 let B = [23]

 A = [...B] 
 B = [A - 4]
 console.log(A)
 console.log(B)


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
         
          const teste = document.getElementById("teste")
        
          for(let i = 0; i < novoFibonacci.length; i++){
              resposta3.innerHTML += `<li>${novoFibonacci[i]}</li>`

              //Desafio 3b-1
              const soma = novoFibonacci.reduce((total, proximo) => total + proximo)
              const teste2 = document.getElementById('teste2')
              teste2.innerHTML = `<p>Esta é a resposta 3b1 ${soma}<p>`
            

             //Desafio 3b-2

             let ancoragem = 0

             for(let i = 0; i < novoFibonacci.length; i++){
                 ancoragem += novoFibonacci[i]
                 let imprime = ancoragem
                 
                 const teste = document.getElementById('teste')
                 teste.innerHTML = `<p>Esta é a resposta 3b2 ${imprime}<p>`                 
             }  
          }        
    }



    const verExplicacao3 = () => {

        if(explicacao3.innerHTML.length === 0){

            const explicacao3 = document.getElementById("explicacao3")
            const botaoExplicacao3 = document.getElementById("botaoExplicacao3")

            botaoExplicacao3.innerHTML = "Fechar Explicação 3"
            explicacao3.innerHTML = `<p> Foi criado uma variavel para armazenar os valores da sequencia que seria impresso em tela e uma variavel
            para acessorar no início da operação. Quando criado a função operação foi utilizado um laço de repetição
            for, seguido de uma condição if, para forçar a operação a acrescentar inicialmente um valor 0 e um valor 1 
            a variavel fibonacci e a variavel ancora para que assim que a operação pudesse seguir logicamente.</p>`

        }else{

            explicacao3.innerHTML = ""
            botaoExplicacao3.innerHTML = "Ver Explicação 3"
        }
    }

    
/*
#### Exercício 3b-1 (desafio) 


#### Exercício 3b-2 (desafio) 

*/


   
    
    
    

   






    


 
    