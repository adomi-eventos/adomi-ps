import React, {useState} from 'react';
import {Container, AreaExec} from './style';

export default function ExecTwo(){

    const [resultadoA, setResultadoA] = useState(0);
    const [resultadoB, setResultadoB] = useState(0);
    const [exec, setExec] = useState(false);
    const [execDes, setExecDes] = useState(false);

    const inverter = () => {
        var a = 19;
        var b = 23
        const aux = a;
        a=b;
        b=aux;
        setResultadoA(a);
        setResultadoB(b);
        console.log("19 => "+a);
        console.log("23 => "+b);
        setExec(true);
    }

    const inverterDesafio = () => {
        var a = 19;
        var b = 23;
        [a, b] = [b, a];
        console.log("19 => "+a);
        console.log("23 => "+b);
        setResultadoA(a);
        setResultadoB(b);
        setExecDes(true);
    }



    return (
        <Container>

            <h2>Exercício 2</h2>
            <p>Escreva um algoritmo que armazene o valor 19 em uma variável A e o valor 23 em uma variável B. 
                A seguir troque os seus conteúdos fazendo com que o valor que está em A passe para B e vice-versa. 
                Ao final, escrever os valores que ficaram armazenados nas variáveis.
            </p>
            <AreaExec>
                <p>Valor da variável A = 19</p>
                <p>Valor da variável B = 23</p>
                <button onClick={inverter}>Inverter</button>
                {exec && 
                   <>
                   <p>Valor da variável A = {resultadoA}</p>
                   <p>Valor da variável B = {resultadoB}</p>
                   </>
                }
            </AreaExec>

            <h2 className="desafio">Desafio do exercício 2</h2>
            <p>Repita o exercício anterior, 
                mas seu algorítimo deve utilizar apenas atribuições entre a duas variáveis, 
                sem declarar uma terceira.
            </p>
            <AreaExec>
                <p>Valor da variável A = 19</p>
                <p>Valor da variável B = 23</p>
                <button onClick={inverterDesafio}>Inverter Desafio</button>
                {execDes && 
                   <>
                   <p>Valor da variável A = {resultadoA}</p>
                   <p>Valor da variável B = {resultadoB}</p>
                   </>
                }
            </AreaExec>
            
        </Container>
    );
}