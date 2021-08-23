import React, {useContext,useEffect,useState} from "react"
import HeaderComponent from "../../components/header"
import FooterComponent from "../../components/footer"
import GlobalStateContext from "../../global/globalStateContext"
import {Page,Title,TextArea,ExerciseButton,BodyContainer,ButtonContainer} from "./style"

const Exercise3 = () =>{
  const [renderAnwser,setRenderAnwser] = useState(false)
  const [renderAnwserb,setRenderAnwserb] = useState(false)
  const [renderAnwserc,setRenderAnwserc] = useState(false)
  const {states} = useContext(GlobalStateContext)
  const handleAnswer = ()=>{
    setRenderAnwser(!renderAnwser)
  }
  const handleAnswerb = ()=>{
    setRenderAnwserb(!renderAnwserb)
  }
  const handleAnswerc = ()=>{
    setRenderAnwserc(!renderAnwserc)
  }

  const runExempleCode=()=>{
    const Fibonacci = [0,1]
    const x = 5
    for(let i=2; i<=x; i++){
      Fibonacci.push(Fibonacci[i-2] + Fibonacci[i-1])
    }
    return window.alert(Fibonacci)
  }
  const runExempleCodeb=()=>{
    const Fibonacci = [0,1]
    const x = 5
    for(let i=2; i<=x; i++){
      Fibonacci.push(Fibonacci[i-2] + Fibonacci[i-1])
    }
    return window.alert(Fibonacci.reduce((a, b) => a + b, 0))
  }
  const Fibonacci = [0,1];
    let i = 2;
  const exercicio3b2 = (x) =>{
    
    if(i>x){
      return window.alert(Fibonacci.reduce((a, b) => a + b, 0))
    }else{
      Fibonacci.push(Fibonacci[i-2] + Fibonacci[i-1]);
      i=i+1;
     return exercicio3b2(x)
    }
}
  const runExempleCodec=()=>{
    exercicio3b2(5)
  }
  useEffect(() => {
    document.title = "Exercício 3";
  }, []);
return(
  <Page nightMode={states.nightMode}>
    <HeaderComponent/>
    <Page nightMode={states.nightMode}>
  <HeaderComponent/>
  <BodyContainer>
  <Title nightMode={states.nightMode}>Crie uma função que salve os números da série de Fibonacci até chegar em x (parâmetro) interações em um array e imprima esse array, usaremos x = 5 como exemplo.</Title>
  {renderAnwser && <TextArea nightMode={states.nightMode}  readOnly >
  const exercicio3a = (x) =&gt;｛
    const Fibonacci = [0,1]
    for(i=2; i&lt;=x; i++)｛
      Fibonacci.push(Fibonacci[i-2] + Fibonacci[i-1])
      ｝
    return Fibonacci
    ｝
      </TextArea>}
      <ButtonContainer>
   <ExerciseButton nightMode={states.nightMode} onClick={()=>handleAnswer()}>{renderAnwser ?"Ocultar Código":"Mostrar código"}</ExerciseButton>
   <ExerciseButton onClick={()=>runExempleCode()} nightMode={states.nightMode}>Rodar Codigo</ExerciseButton>
   </ButtonContainer>
{/* questao2 */}
<Title nightMode={states.nightMode}>Crie uma função que, recebendo o array gerado na função anterior, retorne a soma dos valores do array., usaremos x = 5 como exemplo.</Title>
  {renderAnwserb && <TextArea nightMode={states.nightMode}  readOnly >
  const exercicio3a = (x) =&gt;｛
    const Fibonacci = [0,1]
    for(i=2; i&lt;=x; i++)｛
      Fibonacci.push(Fibonacci[i-2] + Fibonacci[i-1])
      ｝
    return Fibonacci.reduce((a, b) =&gt; a + b, 0)
    ｝
      </TextArea>}
      <ButtonContainer>
   <ExerciseButton nightMode={states.nightMode} onClick={()=>handleAnswerb()}>{renderAnwserb ?"Ocultar Código":"Mostrar código"}</ExerciseButton>
   <ExerciseButton onClick={()=>runExempleCodeb()} nightMode={states.nightMode}>Rodar Codigo</ExerciseButton>
   </ButtonContainer>
{/* questao3 */}


<Title nightMode={states.nightMode}>Crie uma função que, recebendo o array gerado na função anterior, retorne a soma dos valores do array. Utilize um algoritmo diferente do desafio 3b-1, usaremos x = 5 como exemplo.</Title>
  {renderAnwserc && <TextArea nightMode={states.nightMode}  readOnly >
  const Fibonacci = [0,1];
let i = 2;
const exercicio3b2 = (x) =&gt;｛

    if(i&lt;x)｛
      return Fibonacci
      ｝else｛
      Fibonacci.push(Fibonacci[i-2] + Fibonacci[i-1]);
      i=i+1;
     return exercicio3b2(x)
     ｝
     ｝
      </TextArea>}
      <ButtonContainer>
   <ExerciseButton nightMode={states.nightMode} onClick={()=>handleAnswerc()}>{renderAnwserc ?"Ocultar Código":"Mostrar código"}</ExerciseButton>
   <ExerciseButton onClick={()=>runExempleCodec()} nightMode={states.nightMode}>Rodar Codigo</ExerciseButton>
   </ButtonContainer>

   </BodyContainer>
 <FooterComponent/>
</Page>

   <FooterComponent/>
  </Page>
  )
}
export default Exercise3