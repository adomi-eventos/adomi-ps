
let a =19;
let b=23;
let c=0;
//função que altera os valores de a e b utilizando var auxiliar
function com3Variaveis(a,b,c){
c=a;
a=b;
b=c;
console.log(a,b)}

com3Variaveis(a,b,c);



//função para alterar utilizando somente 2 variaveis
function com2Variaveis(a,b){
//passo dentro de um array reatribuindo valores
[a,b]=[b,a]
console.log(a,b)
}

com2Variaveis(a,b);
