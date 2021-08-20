import React, {useState} from 'react';
import {Container} from './style';


export default function Exec(){

    const [list, setlist] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

    return (
        <Container>
            <h2>Exercício 1</h2>
            <p>Crie uma função para verificar se um número é par ou impar e 
                aplique-a na lista a seguir para imprimir quais números são pares e quais são ímpares.
                lista = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
            </p>

            <table>
               <thead>
                <tr>
                    <td>Valor</td>
                    <td>Par ou ímpar?</td>
                </tr>
               </thead>

                <tbody>
                    {list.map((item, index)=>{
                        if(item%2===0){
                            return (
                                <tr  key={index}>
                                    <td>{item}</td>
                                    <td>Par</td>
                                </tr>
                            );
                        }else{
                            return (
                                <tr key={index}>
                                    <td>{item}</td>
                                    <td>Ímpar</td>
                                </tr>
                            );
                        }
                    })}
                </tbody>
            </table>

            {/* <ul>
                {list.map((item, index)=>{
                    if(item % 2 === 0){
                        return (
                            <li key={index} ><span>{item}</span> = <span>par</span></li>
                        );
                    }else{
                        return (
                            <li key={index} ><span>{item}</span> = <span>ímpar</span></li>
                        );
                    }
                })}
            </ul> */}
        </Container>
    );
}