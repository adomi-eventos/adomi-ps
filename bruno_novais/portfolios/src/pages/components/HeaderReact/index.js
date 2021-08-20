import React, {useState} from 'react';
import {HeaderReact, ButtonsList} from './style';
import {FaReact} from 'react-icons/fa';
import {Link} from 'react-router-dom';

export default function Header(){

    const [execName, setExecName] = useState([
        {exec: 'exec1', name:"Exercício 1", active: true},
        {exec: 'exec2', name:"Exercício 2", active: false},
        {exec: 'exec3', name:"Exercício 3", active:false},
    ]);

    return (
      <HeaderReact>
        <h1>
        <FaReact size={30}/>
        Exercícios: Processo seletivo Adomi
        </h1>
        <p>Bruno Novais da Silva</p>
        <ButtonsList>
            {execName.map((exec)=>(
               <Link to={`${exec.exec}`}  key={exec.exec}>
                 <button 
                   
                    type='button'
                    onClick={()=>{}}
                >
                    {exec.name}
                </button>
               </Link>
        ))}
        </ButtonsList>
      </HeaderReact>
    );
}