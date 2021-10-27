import React from "react";
import { NavLink } from "react-router-dom";
import './Nav.css'


const Nav = () =>{
    return (
        <nav>
            <ul>
                <li>
                    <NavLink exact activeClassName="active" to="/">Quizi</NavLink>
                </li>
                <li>
                    <NavLink activeClassName="active" to="/second">second</NavLink>
                </li>
            </ul>
        </nav>
    )
}
export default Nav