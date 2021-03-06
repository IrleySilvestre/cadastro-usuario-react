import '../css/Header.css'
import React from "react";

export const Header = props =>
    <header className="header d-none d-sm-flex flex-column justify-content-around">
        <h1 className="mt-3">
            <i className={`fa ${props.icon}`}>{props.title}</i>
        </h1>
            <p className="lead text-muted">{props.subtitle}</p>

    </header>
