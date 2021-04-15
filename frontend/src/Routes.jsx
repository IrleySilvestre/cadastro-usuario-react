import React from "react"
import {Switch, Route, Redirect} from "react-router";

import Home from "./components/pages/home/Home";
import Infracoes from "./components/pages/infracoes/Infracoes";
import Multas from "./components/pages/multas/Multas";
import UserCrud from "./components/pages/user/UserCrud";
import UserPerfil from "./components/pages/user/UserPerfil";

export const Routes = (props) => {
    return (
        <Switch>
            <Route exact path='/' component={Home}/>
            <Route path='/users' component={UserCrud}/>
            <Route path='/userPerfil' component={UserPerfil}/>
            <Route path='/infracoes' component={Infracoes}/>
            <Route path='/multas' component={Multas}/>
            <Redirect from='*' to='/'/>
        </Switch>
    )
}

