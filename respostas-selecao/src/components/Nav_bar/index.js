import React from "react";
import {Navegacao, Botao} from "./index_style.js"
import { useHistory } from "react-router-dom";

function Nav_bar() {
  const history = useHistory();

  const goBack = () => {
    history.goBack();
  };

  const goHome = () => {
    history.push("/");
  };

  const goExercicio_1 = () => {
    history.push("/Exercicio_1");
  };

  const goExercicio_2 = () => {
    history.push("/Exercicio_2");
  };

  const goExercicio_3 = () => {
    history.push("/Exercicio_3");
  };

    return (
      <Navegacao>
        <Botao onClick={goHome}>Início</Botao>
        <Botao onClick={goExercicio_1}>Exercício 1</Botao>
        <Botao onClick={goExercicio_2}>Exercício 2</Botao>
        <Botao onClick={goExercicio_3}>Exercício 3</Botao>
      </Navegacao>
    );
}
  
export default Nav_bar;