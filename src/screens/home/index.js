import React, {useContext,useEffect} from "react"
import {Page,Title} from "./style"
import FooterComponent from "../../components/footer"
import HeaderComponent from "../../components/header"
import GlobalStateContext from "../../global/globalStateContext"

const HomePage = () =>{
  const {states} = useContext(GlobalStateContext)

  useEffect(() => {
    document.title = "Home";
  }, []);

return(
  <Page nightMode={states.nightMode}>
    <HeaderComponent/>
    <Title nightMode={states.nightMode}>PROJETO DE SELEÇÃO ADOMI</Title>

   <FooterComponent/>
  </Page>
  )
}
export default HomePage