import React from 'react';
import { Navbar } from "../../common";

import './Header.css';
import sadness from "../../../sadness.png";

function Header (){
    return (
        <section className="header">
            <section className="header-top">
                <section className="header-top__logo">
                    {/*<img src={sadness} href="/" className="header-logo"/>*/}
                    <a href="/" className="header-logo">LOGO</a>
                </section>
                <section className="header-top__navbar">
                    <section className="header-top__navigation">
                        <Navbar />
                    </section>
                    <hr className="header-top__separator"/>
                </section>
            </section>
        </section>
    )
}

export default Header;
