import React from "react";
import Nav_bar from "../components/Nav_bar";
import Footer from "../components/Footer";
import { Pagina3, Pre, Section } from "./Style.js";

function Exercicio_2() {

  const trocar_A_com_B = (a, b) =>{
    let c = a
    a = b
    b = c

    alert(`O valor de A é ${a} e o valor de B é ${b}`)
  }

  const trocar_AB_Sem_C = (a, b) =>{
    [a,b] = [b,a]

    alert(`O valor de A é ${a} e o valor de B é ${b}`)
  }

  return (
    <Pagina3>
      <Nav_bar />
      <Section>
        <h1>Exercício 2</h1>
        <b>2a enunciado:</b>
        <p>Escreva um algoritmo que armazene o valor 19 em uma variável A e o valor 23 em uma variável B.<br/>
          A seguir troque os seus conteúdos fazendo com que o valor que está em A passe para B e vice-versa.<br/> 
          Ao final, escrever os valores que ficaram armazenados nas variáveis.<br/>
        </p>
        <b>2a resposta:</b>
        <Pre>
          <code>
            const trocar_A_com_B = (a, b) =&gt;｛<br/>
              let c = a<br/>
              a = b<br/>
              b = c<br/>
              <br/>
              alert(`O valor de A é $｛a｝ e o valor de B é $｛b｝`)｝
          </code>
        </Pre>
        <button onClick={()=>trocar_A_com_B(19, 23)}>Testar a função trocar_A_com_B(19, 23)</button>

        <b>2b enunciado:</b>
        <p>Repita o exercício anterior, mas seu algorítimo deve utilizar apenas atribuições entre a duas<br/> variáveis, sem declarar uma terceira.</p>
        <b>2b resposta:</b>
        <Pre>
          <code>
            const trocar_AB_Sem_C = (a, b) =&gt;｛<br/>
              [a,b] = [b,a]<br/>
              <br/>
              alert(a, b)<br/>｝
          </code>
        </Pre>
        <button onClick={()=>trocar_AB_Sem_C(19, 23)}>Testar a função trocar_AB_Sem_C(19, 23)</button>

      </Section>
      <Footer />
    </Pagina3>
    );
}
  
export default Exercicio_2;