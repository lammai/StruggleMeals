import React from 'react';
import { Link } from 'react-router-dom';

import './Navbar.css';
import About from "../../About";

function Navbar () {
    return (
        <section className={"navbar"}>
            <a href="/" className={"navbar-item"} >Meal Planner</a>
            <a href="/about-us" className={"navbar-item"}  >About</a>
        </section>
    )
}

export default Navbar;