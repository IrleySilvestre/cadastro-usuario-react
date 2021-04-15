import 'bootstrap/dist/css/bootstrap.min.css'
import 'font-awesome/css/font-awesome.min.css'
import './App.css'
import React from "react"
import {HashRouter} from "react-router-dom";

import {Logo} from "./components/template/js/Logo";
import {Nav} from "./components/template/js/Nav";
import {Footer} from "./components/template/js/Footer";
import {Routes} from "./Routes";


const App = (props) => {
    return (
        <HashRouter>
        <div className="app">
            <Logo></Logo>
            <Nav></Nav>
            <Routes/>
            <Footer></Footer>
        </div>
        </HashRouter>
    )
}


// function App() {
//     return (
//         <HashRouter>
//             <div className="app">
//                 <Logo></Logo>
//                 <Nav></Nav>
//                 <Routes/>
//                 <Footer></Footer>
//             </div>
//         </HashRouter>
//     )
// }

export default App

