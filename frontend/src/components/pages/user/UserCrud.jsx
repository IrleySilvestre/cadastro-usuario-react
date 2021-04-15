import React, {Component} from "react"
import {Main} from "../../template/js/Main";
import {EmConstrucao} from "../../template/js/EmConstrucao";

//Propriedade do cabeçalho
const headerProps = {
    icon:"fa-users",
    title:'  Usuários',
    subtitle: 'Gerenciar usuários'
}


export default class UserCrud extends Component{
    render(){

        return(
            <Main {...headerProps}>
                <EmConstrucao/>
            </Main>
        )
    }
}


