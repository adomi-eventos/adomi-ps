import React,{ useContext} from "react"
import {Header,ExerciseButton} from "./style"
import Swich from '@material-ui/core/Switch'
import {useHistory} from "react-router-dom"
import GlobalStateContext from "../../global/globalStateContext"



const HeaderComponent = () =>{
  const {states, setters} = useContext(GlobalStateContext)
  const history = useHistory()

  const goToExercise =(exercise)=>{
    history.push(`/${exercise}`)
  }
return(
  <Header nightmode={states.nightMode}>
    <div>
   <ExerciseButton nightmode={states.nightMode} disabled={window.location.pathname ==="/"} onClick={()=>{goToExercise("")}}>Home</ExerciseButton>
   <ExerciseButton nightmode={states.nightMode} disabled={window.location.pathname ==="/exercise1"} onClick={()=>{goToExercise("exercise1")}}>Exercício 1</ExerciseButton>
   <ExerciseButton nightmode={states.nightMode} disabled={window.location.pathname ==="/exercise2"} onClick={()=>{goToExercise("exercise2")}}>Exercício 2</ExerciseButton>
   <ExerciseButton nightmode={states.nightMode} disabled={window.location.pathname ==="/exercise3"} onClick={()=>{goToExercise("exercise3")}}>Exercício 3</ExerciseButton>
   </div>
   <div>
   
   <span>🌞</span>
   <Swich checked={states.nightMode} onChange={()=>setters.setNightMode(!states.nightMode)}    color="primary"/>
   <span>🌜</span>
  
   </div>
  </Header>
  )
}
export default HeaderComponent