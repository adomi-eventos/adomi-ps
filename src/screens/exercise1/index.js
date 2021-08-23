import React, {useContext,useState,useEffect} from "react"
import HeaderComponent from "../../components/header"
import FooterComponent from "../../components/footer"
import GlobalStateContext from "../../global/globalStateContext"
import {Page,Title,TextArea,ExerciseButton,BodyContainer,ButtonContainer} from "./style"

const Exercise1 = () =>{
  const {states} = useContext(GlobalStateContext)
  const [renderAnwser,setRenderAnwser] = useState(false)

  useEffect(() => {
    document.title = "Exercício 1";
  }, []);

  const handleAnswer = ()=>{
    setRenderAnwser(!renderAnwser)
  }
  const runExempleCode=()=>{
    const answer = []
    const exercicio1a = (array) => array.forEach(number => answer.push(number%2 ===0 ?`${number} é par`:`${number} é impar`))

 exercicio1a([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])
 window.alert(answer)
  }
  
return(
  <Page nightMode={states.nightMode}>
  <HeaderComponent/>
  <BodyContainer>
  <Title nightMode={states.nightMode}>Crie uma função para verificar se um número é par ou impar e aplique-a na lista a seguir para imprimir quais números são pares e quais são ímpares.</Title>
  {renderAnwser && <TextArea nightMode={states.nightMode}  readOnly >
      lista = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] &#13;&#10;
      const exercicio1a = (array) =&gt; array.forEach(number =&gt; console.log(number%2 ===0 ?`$｛number｝ é par`:`$｛number｝ é impar`))     
      </TextArea>}
      <ButtonContainer>
   <ExerciseButton nightMode={states.nightMode} onClick={()=>handleAnswer()}>{renderAnwser ?"Ocultar Código":"Mostrar código"}</ExerciseButton>
   <ExerciseButton onClick={()=>runExempleCode()} nightMode={states.nightMode}>Rodar Codigo</ExerciseButton>
   </ButtonContainer>
   </BodyContainer>
 <FooterComponent/>
</Page>
  )
}
export default Exercise1