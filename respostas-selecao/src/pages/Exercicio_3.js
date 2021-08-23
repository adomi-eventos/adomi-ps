import React from "react";
import Nav_bar from "../components/Nav_bar";
import Footer from "../components/Footer";
import { Pagina4, Pre, Section } from "./Style.js";

function Exercicio_3() {
    const criarFibonacci = (parametro) => {
      let fibonacci = [0,1];
      let i;

      for (i = 2; i < parametro; i++) {
        fibonacci[i] = fibonacci[i - 2] + fibonacci[i - 1];
      }

      alert(fibonacci)
    }

    const somaFibonacciLoop = (array) =>{
      let total = 0
      
      array.forEach((numero) => {
        total += numero
      })

      alert(`A soma dos numeros no array ${array} totalizam ${total}`)
    }
    
    const somaFibonacciRecursao = (array) => {
      return (array.length === 0) ? 0 : array[0] + somaFibonacciRecursao(array.slice(1));
    }   

    return (
      <Pagina4>
      <Nav_bar />
      <Section>
        <h1>Exercício 3</h1>
        <b>3a enunciado:</b>
        <p>Crie uma função que salve os números da série de Fibonacci até chegar em x (parâmetro) interações em um array e imprima esse array.<br/>
          (A série de Fibonacci é a seguinte: 0, 1, 1, 2, 3, 5, 8, 13, 21, etc... Para calculá-la, o primeiro e segundo elementos valem 1,<br/>
          daí por diante, o “n-ésimo” elemento vale o (n-1)-ésimo elemento somado ao (n-2)-ésimo elemento (ex: 8 = 5 + 3))<br/>
        </p>
        <b>3a resposta:</b>
        <Pre>
          <code>
            const criarFibonacci = (parametro) =&gt;｛<br/>
              let fibonacci = [0,1];<br/>
              let i;<br/>
              <br/>
              for (i = 2; i &lt; parametro; i++)｛<br/>
              fibonacci[i] = fibonacci[i - 2] + fibonacci[i - 1];<br/>
            ｝<br/>
            alert(fibonacci)｝
          </code>
        </Pre>
        <button onClick={()=>criarFibonacci(10)}>Testar a função criarFibonacci(10)</button>

        <b>3b-1 enunciado:</b>
        <p>Crie uma função que, recebendo o array gerado na função anterior, retorne a soma dos valores do array.</p>
        <b>2b resposta:</b>
        <Pre>
          <code>
            const somaFibonacciLoop = (array) =&gt;｛<br/>
              let total = 0<br/>
              <br/>
              array.forEach((numero) =&gt;｛<br/>
              total += numero<br/>
              ｝)<br/>
              alert(`A soma dos numeros no array $｛array｝totalizam $｛total｝`)｝
          </code>
        </Pre>
        <button onClick={()=>somaFibonacciLoop([0,1,1,2,3,5,8,13,21,34])}>Testar a função somaFibonacciLoop([0,1,1,2,3,5,8,13,21,34])</button>

        <b>3b-2 enunciado:</b>
        <p>Crie uma função que, recebendo o array gerado na função anterior, retorne a soma dos valores do array.<br/> 
          Utilize um algoritmo diferente do desafio 3b-1. (ex: se no desáfio 3b-1 seu algorítimo usou um loop, utilize recursão)<br/>
        </p>
        <b>2b resposta:</b>
        <Pre>
          <code>
            const somaFibonacciRecursao = (array) =&gt; ｛
              return (array.length === 0) ? 0 : array[0] + somaFibonacciRecursao(array.slice(1));｝ 
          </code>
        </Pre>
        <button onClick={()=>alert(`A soma dos numeros no array [0,1,1,2,3,5,8,13,21,34] totalizam ${somaFibonacciRecursao([0,1,1,2,3,5,8,13,21,34])}`)}>Testar a função somaFibonacciLoop([0,1,1,2,3,5,8,13,21,34])</button>

      </Section>
      <Footer />
    </Pagina4  >
    );
}
  
export default Exercicio_3;