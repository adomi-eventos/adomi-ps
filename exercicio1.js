
let lista = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

//usei map para percorrer todo o Array retornando um novo Array descrevendo se é par ou impar
const parImpar=lista.map((item)=>{
    //condicional para decidir se é par ou nao
    if(item%2===0) return  item= (`${item} é par`)
    else return item=(`${item} é impar`)
    
})
//imprimindo o array parImpar
console.log(parImpar);


//parte 2
//usei o Ternário para reduzir escopo
const novoArray=lista.map((item)=>item%2===0? item=`${item} é par`: `${item} é impar`)
console.log(novoArray)