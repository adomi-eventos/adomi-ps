 // Exercício 2a:
        // Escreva um algoritmo que armazene o valor 19 em uma variável A e o valor 23 em uma variável B. A 
        // seguir troque os seus conteúdos fazendo com que o valor que está em A passe para B e vice-versa. 
        // o final, escrever os valores que ficaram armazenados nas variáveis.
        function inverte(){
            // primeiro a função criará 3 variáveis: a=19, b=23, aux=a
            var a = 19;
            var b = 23;
            var aux = a;

            //logo em seguia será feita a troca dos valores (a <= b, b <= x)
            a=b;
            b=aux;

            // por fim sera gerado um alert exibindo as variáveis e seus novos valores
            alert("Antes: variável A = 19 e variável B = 23\n"+
            "Invertido\n"+
            "variável A = "+a+"\n"+
            "variável B = "+b+"\n\n");
        }

        // Exercício 2b (desafio)
        // Repita o exercício anterior, 
        // mas seu algorítimo deve utilizar apenas atribuições entre a duas variáveis, 
        // sem declarar uma terceira.
        function inverteDesafio(){
            // primeiro a função criará 2 variáveis: a=19, b=23
            var a = 19;
            var b = 23;

            //logo em seguia será feita a troca dos valores usando desconstrução (ES6)
            [a, b] = [b, a];

            // por fim sera gerado um alert exibindo as variáveis e seus novos valores
            alert("Antes: variável A = 19 e variável B = 23\n"+
            "Invertido\n"+
            "variável A = "+a+"\n"+
            "variável B = "+b+"\n\n");
        }