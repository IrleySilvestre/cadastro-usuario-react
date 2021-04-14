import '../css/Nav.css'
import React from "react";
import {NavItem} from "./NavItem";


export const Nav = props =>
    <aside className='menu-area'>
        <h2 className="lead text-muted">Menu</h2>
        <nav className="menu">
            <NavItem/>
        </nav>

    </aside>


