import React from "react"
import {Route,BrowserRouter,Switch} from "react-router-dom"
import HomePage from "../screens/home"
import Exercise1 from "../screens/exercise1"
import Exercise2 from "../screens/exercise2"
import Exercise3 from "../screens/exercise3"

const Router =()=>{

    return(
        <BrowserRouter>
        <Switch>

           <Route exact path="/">
            <HomePage/>
           </Route>

           <Route exact path="/exercise1">
            <Exercise1/>
           </Route>

           <Route exact path="/exercise2">
            <Exercise2/>
           </Route>

           <Route exact path="/exercise3">
            <Exercise3/>
           </Route>

        </Switch>
        </BrowserRouter>
    )

}
export default Router