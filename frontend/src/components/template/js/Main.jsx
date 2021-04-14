import '../css/Main.css'
import {Header} from "./Header";
import React from "react";

export const Main = props =>
    <React.Fragment>
        <Header {...props}/>
        <main className="content">
            Main - Conteúdo
        </main>

    </React.Fragment>