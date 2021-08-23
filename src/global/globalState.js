import React, { useState} from "react"
import GlobalStateContext from "./globalStateContext"

function GlobalState(props) {


    const [nightMode,setNightMode] = useState(false)


    const states = {nightMode}
    const setters = {setNightMode}
    const data = {states,setters}
    
  return(
      <GlobalStateContext.Provider value={data}>
            {props.children}
      </GlobalStateContext.Provider>
  )
}

export default GlobalState