import React from 'react';

import Header from "./common/header";
import './common/header/Header.css';
import './common/header/Header.css';
import {Navbar} from "./common";

function About(){
    return(
        <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
        }}>
            <Header/>
        </div>
    );
}

export default About;