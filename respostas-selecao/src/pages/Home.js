import React from "react";
import Nav_bar from "../components/Nav_bar";
import Footer from "../components/Footer";
import { Pagina1, Pre, Section } from "./Style.js";

function Home() {
    return (
      <Pagina1>
      <Nav_bar />
      <Section>
        <h1>Processo Seletivo - Adomi</h1>
        <h3> - Esse site contem a resolução dos exercícios pedidos no processo. Cada exercício pode ser acessado <br/>
        pela barra de navegação e contem o enunciado da questão, o código da resolução e um botão que vai rodar<br/>
        a função e lançar uma alerta com a resposta.</h3>
      </Section>
      <Footer />
      </Pagina1>
    );
}
  
export default Home;