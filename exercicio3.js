

//função para calcular a serie de Fibonacci
function fibonacci(termo) {
  // array para armazenar os numeros
  let arr = [];
  //termos para iniciar o arr
  let termo0 = 0;
  let termo1 = 1;
  let soma = 0;
  //caso o numero seja o primeiro indice entra nessa regra
  if(termo <= 0 || typeof(termo)!= 'number') {
    //tratando o erro caso o usuario digite algum valor menor que 1
  return "numero invalido!! Digite um n° int maior que 0"; 
  } else if (termo == 1) {
    //insirendo somente o primeiro termo no array
    arr.push(termo0);
  } else if (termo == 2) {
    //insirendo os  2 primeiros termos no array
    arr.push(termo0, termo1);
    return arr;
  } else {
    //insirendo os primeiros termos no array
    arr.push(termo0, termo1);
    for (let x = 3; x <= termo; x++) {
      soma = termo1 + termo0;
      termo0 = termo1;
      termo1 = soma;
      arr.push(termo1);
    }
    return arr;
  }
}
//insira um numero aqui
let n=8; //aqui
//armazenando o retorno da  função na variavel 
let arrFibonacci = fibonacci(n);

//imprimindo o resultado
console.log(arrFibonacci);


//função para somar utilizando o Reduce
 function reduce(){
        if(arrFibonacci.length >0){
        let novo = arrFibonacci.reduce((a, b) => a + b);
        console.log(novo)
    }else  console.log("Não foi possivel somar, digite um numero")
}

reduce();

//recebe como parametro o array e o tamanho do array
function recursiva(arr,t){
//validação do array
if(t<1||typeof(t)!='number') console.log("Não foi possivel somar, digite um numero")
//caso haja somente um elemento, a soma será ele mesmo
else if (t==1) 
return arr[t-1]
//caso haja mais de 1 numero 
//será somado o ultimo item do array + o ultimo item do array da funçao reinvocada
else{
  return arr[t-1] + recursiva(arr,t-1)
}}

let exibindoFuncRecursiva=recursiva(arrFibonacci,arrFibonacci.length);
console.log(exibindoFuncRecursiva);