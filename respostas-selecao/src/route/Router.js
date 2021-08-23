import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "../pages/Home";
import Exercicio_1 from "../pages/Exercicio_1";
import Exercicio_2 from "../pages/Exercicio_2";
import Exercicio_3 from "../pages/Exercicio_3";

function Router() {
    return (
        <BrowserRouter>
        <Switch>
          <Route exact path={"/"}>       
            <Home />       
          </Route>
  
          <Route exact path={"/Exercicio_1"}>
            <Exercicio_1 />
          </Route>
  
          <Route exact path={"/Exercicio_2"}>
            <Exercicio_2 />
          </Route>
  
          <Route exact path={"/Exercicio_3"}>
            <Exercicio_3 />
          </Route>
        </Switch>
      </BrowserRouter>
    );
  }
  
export default Router;