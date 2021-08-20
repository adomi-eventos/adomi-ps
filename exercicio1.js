let lista = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

//usei map para percorrer todo o Array
const parImpar=lista.map((item)=>{
    //condicional para decidir se é par ou nao
    if(item%2===0){ return  item= (`${item} é par`)}
    else {return item=(`${item} é impar`)}
    
})
console.log(parImpar);
//usei o Ternário para reduzir escopo
const novo=lista.map((item)=>{ return item%2? item=`${item} é par`: `${item} é impar`})
console.log(novo)