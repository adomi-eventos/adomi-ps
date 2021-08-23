import React from "react";
import {Rodape, Contato} from "./index_style"

function Footer() {
    return (
      <Rodape>
        <Contato>
            <b>Criado por Zak A.P</b>
            <div>
            <a href="https://github.com/ZakAP" target="_blank"><img src="https://miro.medium.com/max/719/0*9f5uMrKMjLbzEf7q.png" alt="Github logo e link" width="150" height="75" /></a>
            <a href="https://www.linkedin.com/in/zak-almeida-phillips-5a789366/" target="_blank"><img src="https://marcas-logos.net/wp-content/uploads/2020/01/LinkedIn-s%C3%ADmbolo.jpg" alt="Linkedin logo e link" width="150" height="75"/></a>
            </div>
        </Contato>
      </Rodape>
    );
}
  
export default Footer;