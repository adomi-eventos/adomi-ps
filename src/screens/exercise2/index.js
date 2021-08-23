import React, {useContext,useEffect,useState} from "react"
import HeaderComponent from "../../components/header"
import FooterComponent from "../../components/footer"
import GlobalStateContext from "../../global/globalStateContext"
import {Page,Title,TextArea,ExerciseButton,BodyContainer,ButtonContainer} from "./style"
const Exercise2 = () =>{
  const [renderAnwser,setRenderAnwser] = useState(false)
  const [renderAnwserB,setRenderAnwserB] = useState(false)
  const {states} = useContext(GlobalStateContext)
  const handleAnswer = ()=>{
    setRenderAnwser(!renderAnwser)
  }
  const handleAnswerB = ()=>{
    setRenderAnwserB(!renderAnwserB)
  }

  const runExempleCode=()=>{
    let A = 19
    let B = 23
    let C

    C = A
    A = B
    B = C
    window.alert(`A=${A},B=${B}`)
  }
  const runExempleCodeB=()=>{
    let A = 19;
    let B = 23;
    
    [A, B] = [B, A]
    window.alert(`A=${A},B=${B}`)
  }

  useEffect(() => {
    document.title = "Exercício 2";
  }, []);
return(
  <Page nightMode={states.nightMode}>
    <HeaderComponent/>
    <Page nightMode={states.nightMode}>
  <HeaderComponent/>
  <BodyContainer>
  <Title nightMode={states.nightMode}>Escreva um algoritmo que armazene o valor 19 em uma variável A e o valor 23 em uma variável B. A seguir troque os seus conteúdos fazendo com que o valor que está em A passe para B e vice-versa. Ao final, escrever os valores que ficaram armazenados nas variáveis.</Title>
  {renderAnwser && <TextArea nightMode={states.nightMode}  readOnly >
  const exercicio2a = () =&gt;｛
    let A = 19
    let B = 23
    let C

    C = A
    A = B
    B = C
    console.log(A, B)
    ｝
      </TextArea>}
      <ButtonContainer>
   <ExerciseButton nightMode={states.nightMode} onClick={()=>handleAnswer()}>{renderAnwser ?"Ocultar Código":"Mostrar código"}</ExerciseButton>
   <ExerciseButton onClick={()=>runExempleCode()} nightMode={states.nightMode}>Rodar Codigo</ExerciseButton>
   </ButtonContainer>

      <Title nightMode={states.nightMode}>Repita o exercício anterior, mas seu algorítimo deve utilizar apenas atribuições entre a duas variáveis, sem declarar uma terceira.</Title>
  {renderAnwserB && <TextArea nightMode={states.nightMode}  readOnly >
  let a = 19;
  let b = 23;

[a, b] = [b, a]

      </TextArea>}
      <ButtonContainer>
   <ExerciseButton nightMode={states.nightMode} onClick={()=>handleAnswerB()}>{renderAnwserB ?"Ocultar Código":"Mostrar código"}</ExerciseButton>
   <ExerciseButton onClick={()=>runExempleCodeB()} nightMode={states.nightMode}>Rodar Codigo</ExerciseButton>
   </ButtonContainer>
   </BodyContainer>
 <FooterComponent/>
</Page>

   <FooterComponent/>
  </Page>
  )
}
export default Exercise2