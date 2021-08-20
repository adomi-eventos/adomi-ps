// Exercício 3a
// Crie uma função que salve os números da série de Fibonacci até chegar em x (parâmetro) 
// interações em um array e imprima esse array.
function seriefibonacci(){
    // primeiro a função criará a variável numFib(que terá o valor digitado no prompt)
    var numFib = prompt('Digite um valor:');

    if(numFib !== null){
        // em seguida o if verificará se numFib não está vazio
        
        //criação das variáveis
        var seq = []; // a variável seq sera a lista com os valores da sequencia
        var back = 0;
        var atual = 1;
        var next = 0;

        for(let i = 0; i<numFib; i++){

            // o for criará um loop até alcançar o valor de numFib
            seq.push(next); // seq irá criar a lista com os valores de nexr
            back = atual + next; // valor anterior receberá o valor atual + o próximo valor (ex: 0 + 1)
            atual = next; // atual receberá o valor  atual de next
            next = back; // next receberá o valor atual de back

            //ex
            //seq[0]
            // back = 1
            // atual = 0
            // next = 1

            // seq[0, 1]
            // back = 1
            // atual = 1
            // next = 1
            
            // seq[0,1,1]
            // back = 2
            // atual = 1
            // next = 2

            // seq[0,1,1,2]
            // back = 3
            // atual = 2
            // next = 3


        }


        var res = confirm(`Sequência de Fibonacci (${numFib}): ${seq} - Somar Valores?`);
        // a variável res receberá a resposta do confirm(true ou false)
        // dentro do confirm também será exibido a lista dos números da sequência fibonacci

        // Exercício 3b-1 (desafio)
        // Crie uma função que, recebendo o array gerado na função anterior, 
        // retorne a soma dos valores do array.

        if(res==true){
            // se res for confirmado(true) 

            var soma = 0;
            
             // o for criará um loop até alcançar o total de números de seq
             //dentro do for soma receberá o seu próprio valor somado com o índice atual de seq
            for(let i = 0; i < seq.length; i++){
                soma += seq[i];
            }

            console.log(soma);
            document.getElementById("demo").innerHTML="(for) A soma dos valores é: "+soma;
            //o resultado de soma será exibido na div.demo

            //Exercício 3b-2 (desafio)
            // Crie uma função que, recebendo o array gerado na função anterior, 
            //retorne a soma dos valores do array. Utilize um algoritmo 
            // diferente do desafio 3b-1. (ex: se no desáfio 3b-1 seu algorítimo usou um loop, utilize recursão)

            // utilizando js para criar o button que ira executar a função soma
            var btn = document.createElement('BUTTON');
            var lbl = document.createTextNode("Somar Desafio 2");        
            btn.appendChild(lbl);   
            btn.onclick = function()
            {
                var soma = seq.reduce(function(soma, i) { // o reduce vai executar a soma para cada elemento de seq
                    return soma + i;
                });
                console.log('teste:'+soma);
                document.getElementById("demo2").innerHTML="(reduce) A soma dos valores do desafio 2 é: "+soma;
            }
            document.body.appendChild(btn);    
        }
        return seq;
    }
}

var novo = seriefibonacci();
console.log("novo: "+novo);