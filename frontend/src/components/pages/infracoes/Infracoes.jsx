import React, {Component} from "react"
import {Main} from "../../template/js/Main";
import {EmConstrucao} from "../../template/js/EmConstrucao";

const headerProps = {
    icon : "fa-sticky-note",
    title: '  Infrações',
    subtitle:  'Gerenciar Infrações'
}

export default class Infracoes extends Component{
    render() {
        return(
            <Main {...headerProps}>
                <EmConstrucao/>
            </Main>
        )
    }
}