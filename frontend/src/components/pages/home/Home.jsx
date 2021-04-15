import React from "react"
import {Main} from "../../template/js/Main";

const Home = ()=>{
    return(
        <Main icon="fa-home" title = "Início" subtitle="Super controle de mesada.">
            <div className="display-4" >Bem Vindo!</div>
            <hr/>
            <p className="mb-0">Sistema para controle de Mesada</p>
        </Main>)
}

export default (Home)
