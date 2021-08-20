import React, {useCallback, useState} from 'react';
import {Container, Form, Resultado} from './style';


export default function Exec(){
    
    const [valorFib, setValorFib] = useState(null);
    const [execDes, setExecDes] = useState(false);
    const [somaDes, setSomaDes] = useState(false);
    const [desafio, setDesafio] = useState(false);
    const [listFib, setListFib] = useState([]);
    const [valorSoma, setValorSoma] = useState(0);

    const handleSubmit = useCallback((e)=>{
        e.preventDefault();
        console.log(valorFib);
        if(valorFib!==null && valorFib!==0){

            setSomaDes(false);
            setDesafio(false);
            setListFib(null);

            var seq = [];
            var back = 0;
            var atual = 1;
            var next = 0;

            for(let i = 0; i<valorFib; i++){
                seq.push(next);
                back = atual + next;
                atual = next;
                next = back;
            }
            
            setExecDes(true);
            setValorFib(null);
            setListFib(seq);    
        }
    }, [valorFib])
    
    const handleSomar = () => {
        var soma = 0;
            
        for(let i = 0; i < listFib.length; i++){
            soma += listFib[i];
        }
        setValorSoma(soma);
        setSomaDes(true);
        console.log(soma);
    }

    const handleSomarDesafio = () => {
        var soma = listFib.reduce(function(soma, i) {
            return soma + i;
        });
        console.log('teste:'+soma);
        setValorSoma(soma);
        setDesafio(true);
    }

    return (
        <Container>
            <h2>Exercício 3</h2>
            <p>Crie uma função que salve os números da série de Fibonacci 
                até chegar em x (parâmetro) interações em um array e imprima esse array.
            </p>

            <Form  onSubmit={handleSubmit}>
                <input 
                    type="number" 
                    placeholder="Termo" 
                    value={valorFib}
                    onChange={(e)=>setValorFib(e.target.value)}
                />
                <button>Iniciar</button>
            </Form>

            

            {execDes  && 
                <Resultado className="soma">
                    <p>Sequência: {listFib.join('-')}</p>
                    <h2 className="desafio">Desafio 1</h2>
                    <p>Crie uma função que, recebendo o array gerado na função anterior, 
                        retorne a soma dos valores do array.
                     </p>
                    <button onClick={handleSomar} >Somar</button>
                </Resultado>
            }

            {somaDes && 
                 <Resultado>
                    <p>Resultado da soma é: {valorSoma}</p>
                    <h2 className="desafio">Desafio 2</h2>
                    <p>Crie uma função que, recebendo o array gerado na função anterior, retorne a soma dos valores do array. 
                        Utilize um algoritmo diferente do desafio 3b-1. 
                        (ex: se no desáfio 3b-1 seu algorítimo usou um loop, utilize recursão)
                    </p>
                    <button onClick={handleSomarDesafio} >Somar</button>
                 </Resultado>
            }

            {desafio && 
                 <Resultado className="soma">
                    <p>Resultado da soma do desafio 2 é: {valorSoma}</p>
                 </Resultado>
            }
           
        </Container>
    );
}