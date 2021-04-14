import 'bootstrap/dist/css/bootstrap.min.css'
import 'font-awesome/css/font-awesome.min.css'
import './App.css'
import React from "react"
import {Logo} from "./components/template/js/Logo";
import {Nav} from "./components/template/js/Nav";
import {Footer} from "./components/template/js/Footer";
import {Main} from "./components/template/js/Main";

function App() {
    return (
        <div className="app">
            <Logo></Logo>
            <Nav></Nav>
            <Main icon="fa-home" title = "Início" subtitle="Super controle de mesada."></Main>
            <Footer></Footer>
        </div>
    )
}

export default App

