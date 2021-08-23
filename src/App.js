import Router from "./router/router"
import React from "react"
import GlobalState from "./global/globalState"

const App = () => {
  return (
    <div>
      <GlobalState>
      <Router/>
      </GlobalState>
    </div>
  );
}

export default App;