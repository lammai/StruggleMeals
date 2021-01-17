import React from 'react';

import Header from "./common/header";
import './common/header/Header.css';
import './common/navbar/Navbar.css';

function About(){
    return(
        <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
        }}>
            <section style={{ position: 'fixed', top: '140px', display: 'flex', flex: 'column', fontWeight: '100',
                fontSize: '35px',fontFamily: 'sansSerif',textTransform: 'uppercase'}}>
                Our Mission

            </section>
            <section style={{ position: 'fixed', top: '245px', display: 'flex', flex: 'column', fontWeight: '100',
                fontSize: '22px',fontFamily: 'sansSerif', }}>
                As certified broke university students, we know how it feels to go through the many struggles, stomachaches,
                dessert hardships when it comes to food budgeting and planning, and that's why we're here to help! That's why
                we went through all the grins and grime of developing a sweet diverse, balanced, and budget orientated meal
                plan so you don't have to! Our artificial intelligence algorithms powered by Skynet will dynamically adapt the
                best meal based on your budget, so no longer are the days of wasting your time scouring the internet and
                potentially unknowingly checking a nasty overrated meal plan.       ~Bone apatite!
            </section>
        </div>
    );
}

export default About;