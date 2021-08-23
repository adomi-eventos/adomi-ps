import React from "react";
import Nav_bar from "../components/Nav_bar";
import Footer from "../components/Footer";
import { Pagina2, Pre, Section } from "./Style.js";


function Exercicio_1() {

  const ParOuImpar = (array) => {
    let par = []
    let impar = []

    array.forEach((numero) => {
      if(numero % 2 == 0){
        par.push(numero)
      } else {
        impar.push(numero)
      }
    });

    alert(`${par} são par e ${impar} são impar`)
  }

  const ParOuImpar1Linha = (array) => array.forEach(numero => alert(numero % 2 == 0 ? `${numero} é um numero par` : `${numero} é um numero impar`))

  return (
    <Pagina2>
      <Nav_bar />
      <Section>
        <h1>Exercício 1</h1>
        <b>1a enunciado:</b>
        <p>Crie uma função para verificar se um número é par ou impar e aplique-a na lista a seguir<br/> para imprimir quais números são pares e quais são ímpares.
          lista = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
        </p>
        <b>1a resposta:</b>
        <Pre>
          <code>
            const ParOuImpar = (array) =&gt;｛<br/>
              let par = []<br/>
              let impar = []<br/>
              <br/>
              array.forEach((numero) =&gt;｛<br/>
                if(numero % 2 == 0)｛<br/>
                  par.push(numero)<br/>
                  ｝ else ｛<br/>
                  impar.push(numero)<br/>
                  ｝<br/>
                ｝);<br/>
                <br/>
              console.log(`$｛par｝ são par e $｛impar｝ são impar`)｝
          </code>
        </Pre>
        <button onClick={()=>ParOuImpar([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])}>Testar a função ParOuImpar([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])</button>

        <b>1b enunciado:</b>
        <p>Você consegue reduzir seu código para 1 linha?</p>
        <b>1b resposta:</b>
        <Pre>
          <code>
            const ParOuImpar1Linha = (array) =&gt; array.forEach(numero =&gt; console.log(numero % 2 == 0 ? `$｛numero｝ é um numero par` : `$｛numero｝ é um numero impar`))
          </code>
        </Pre>
        <button onClick={()=>ParOuImpar1Linha([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])}>Testar a função ParOuImpar1Linha([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])</button>

      </Section>
      <Footer />
    </Pagina2>
  );
}
  
export default Exercicio_1;