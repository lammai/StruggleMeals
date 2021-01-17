import React from 'react';

import Header from "./common/header";
import './common/header/Header.css';


function About(){
    return(
      <div>
          <section className="header-top__navigation">
              <Header />
          </section>
          <h1>About Page</h1>
      </div>
    );
}

export default About;