import '../css/Nav.css'
import React from "react";
import {NavItem} from "./NavItem";

export const Nav = props =>
    <aside className='menu-area'>
        <h2 >Menu</h2>
        <nav className="menu">
            <NavItem/>
        </nav>

    </aside>


