import React, {Component} from "react"
import {Main} from "../../template/js/Main";
import {EmConstrucao} from "../../template/js/EmConstrucao";

const headerProps = {
    icon:"fa-id-card",
    title: "  Multas",
    subtitle: "Gerenciar Multas"
}

export default class Multas extends Component{
    render(){
        return(
            <Main {...headerProps}>
                <EmConstrucao/>
            </Main>
        )
    }
}