import React from 'react';
import { Navbar } from "../../common";

import './Header.css';

function Header (){
    return (
        <section className="header">
            <section className="header-top">
                <section className="header-top__logo">
                    {/*<img src={sadness} href="/" className="header-logo"/>*/}
                    {/*<a href="/" className="header-logo">LOGO</a>  /*As for now leaving image out */}
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
