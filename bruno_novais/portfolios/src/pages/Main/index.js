import React from 'react';
import {Container} from './style';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import HeaderReact from '../components/HeaderReact';
import ExecOne from '../ExecOne';
import ExecTwo from '../ExecTwo';
import ExecThree from '../ExecThree';


export default function Main(){

    return (
       <BrowserRouter>
             <Container>
                <HeaderReact/>

                <Switch>
                    <Route path="/exec1" >
                        <ExecOne/>
                    </Route>
                </Switch>   

                <Switch>
                    <Route path="/exec2" >
                        <ExecTwo/>
                    </Route>
                </Switch>   

                <Switch>
                    <Route path="/exec3" >
                        <ExecThree/>
                    </Route>
                </Switch>   

            </Container>
       </BrowserRouter>
    )
}