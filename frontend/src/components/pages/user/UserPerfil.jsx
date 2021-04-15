import React, {Component} from "react"
import {Main} from "../../template/js/Main";
import {EmConstrucao} from "../../template/js/EmConstrucao";

const headerProps = {
    icon:"fa-address-card-o",
    title: "  Perfil de Usuário",
    subtitle: "Gerenciar Perfil"
}

export default class UserPerfil extends Component{
    render(){
        return(
            <Main {...headerProps}>
                <EmConstrucao/>
            </Main>
        )
    }
}