import React from "react";
import style from './About.module.css'
import Slider from "./Slider/Slider";

const About=()=>{

    return(
        <section className={style.section} id="about">
            
            <h2 className={style.title}>About</h2>
            <hr/>
            <p className={style.text}>The Brooklyn Library is a free workspace, a large number of books and a cozy coffee shop inside </p>
            <Slider/>
        
        </section>
    )
}

export default About;