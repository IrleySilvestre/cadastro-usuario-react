import '../css/Logo.css'
import React from "react";
import logo from '../../../assets/img/logo-cofre.png'

export const Logo = props =>
    <aside className="logo">
        <a href="/" className="logo">
            <img src={logo} alt="logo"/>
        </a>
    </aside>


